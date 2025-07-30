import axios from 'axios';
import {
  changePassword,
  checkPassword,
  forgotPassword,
  login,
  register,
  useAuth,
} from '../data/auth';
import {fakeLoginCredentials, fakeNewUser, fakeUser} from './utils';
import {Toast} from 'toastify-react-native';
import {parseProfilePicToUser} from '../helpers/auth';
import {act, renderHook} from '@testing-library/react-native';
import {useShallow} from 'zustand/react/shallow';
import {setStorageItem} from '../helpers/storage';

jest.mock('axios');
jest.mock('toastify-react-native', () => ({
  Toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));
jest.mock('../helpers/auth');
jest.mock('react-native-mmkv-storage');
jest.mock('../helpers/storage');

describe('useAuth', () => {
  describe('Register', () => {
    afterAll(() => {
      jest.resetAllMocks();
    });

    it('should return error when status is not 200', async () => {
      jest.mocked(axios).post.mockResolvedValueOnce({
        status: 500,
      });
      const navigate = jest.fn();

      await register(fakeNewUser, navigate);

      expect(Toast.error).toHaveBeenCalledWith('Register not successful');
    });

    it('should return statusCode 200 and success message', async () => {
      jest.mocked(axios).post.mockResolvedValueOnce({
        status: 200,
      });
      const navigate = jest.fn();

      await register(fakeNewUser, navigate);

      expect(navigate).toHaveBeenCalled();
    });
  });

  describe('Login', () => {
    afterAll(() => {
      jest.resetAllMocks();
    });

    it('should return error when status is 401', async () => {
      jest.mocked(axios).post.mockResolvedValueOnce({
        status: 401,
        data: {message: 'mocked error message'},
      });

      await login(fakeLoginCredentials);

      expect(Toast.error).toHaveBeenCalledWith('mocked error message');
    });

    it('should return error in any other case', async () => {
      jest.mocked(axios).post.mockResolvedValueOnce({
        status: 500,
      });

      await login(fakeLoginCredentials);

      expect(Toast.error).toHaveBeenCalledWith('Login not successful');
    });

    it('should return logged user when status is 200', async () => {
      jest.mocked(axios).post.mockResolvedValueOnce({
        status: 200,
        data: {user: fakeUser},
      });
      jest.mocked(parseProfilePicToUser).mockReturnValue(fakeUser);
      jest.mocked(setStorageItem).mockImplementation(() => {});

      const {result} = renderHook(() =>
        useAuth(
          useShallow(state => ({
            user: state.user,
          })),
        ),
      );

      await act(async () => {
        await login(fakeLoginCredentials);
      });
      expect(result.current.user).toEqual(fakeUser);
    });
  });

  describe('Forgot Password', () => {
    afterAll(() => {
      jest.resetAllMocks();
    });

    it('should return error', async () => {
      jest.mocked(axios).get.mockImplementation(() => {
        throw new Error('error');
      });

      await forgotPassword('fakeEmail');

      expect(Toast.error).toHaveBeenCalledWith('error');
    });

    it('should return success message', async () => {
      jest.mocked(axios).get.mockResolvedValueOnce({
        data: {message: 'fakeSuccessMessage'},
      });

      await forgotPassword('fakeEmail');

      expect(Toast.success).toHaveBeenCalledWith('fakeSuccessMessage');
    });
  });

  describe('Check Password', () => {
    afterAll(() => {
      jest.resetAllMocks();
    });

    it('should return error message when status is 500', async () => {
      jest.mocked(axios).get.mockResolvedValueOnce({
        status: 500,
      });

      await checkPassword('fakeId', 'fakePassword');

      expect(Toast.error).toHaveBeenCalledWith('Could not check password');
    });

    it('should return true when status is 200', async () => {
      jest.mocked(axios).get.mockResolvedValueOnce({
        status: 200,
        data: true,
      });

      expect(await checkPassword('fakeId', 'fakePassword')).toBe(true);
    });
  });

  describe('Check Password', () => {
    afterAll(() => {
      jest.resetAllMocks();
    });

    it('should return error message when status is 500', async () => {
      jest.mocked(axios).put.mockResolvedValueOnce({
        status: 500,
      });

      await changePassword('fakeUserId', 'fakePassword');

      expect(Toast.error).toHaveBeenCalledWith(
        'Password change not successful',
      );
    });

    it('should return updated user when status is 200', async () => {
      jest.mocked(axios).put.mockResolvedValueOnce({
        status: 200,
        data: fakeUser,
      });

      const {result} = renderHook(() =>
        useAuth(
          useShallow(state => ({
            user: state.user,
          })),
        ),
      );

      await act(async () => {
        await changePassword('fakeUserId', 'fakePassword');
      });

      expect(result.current.user).toEqual(fakeUser);
    });
  });
});
