import axios, {AxiosError} from 'axios';
import {isExpired, setExpiresOn} from '../helpers/utils';
import {create} from 'zustand';
import {API_URL} from '../helpers/env';
import {Toast} from 'toastify-react-native';
import {parseProfilePicToUser} from '../helpers/auth';
import {ImageSourcePropType} from 'react-native';
import {clearStorage, jwt, setStorageItem} from '../helpers/storage';

export interface UserI {
  _id: string;
  email: string;
  username: string;
  password: string;
  name: string;
  bio?: string;
  profilePic: string | ImageSourcePropType;
  isPrivate: boolean;
}

export interface RegisterI {
  email: string;
  username: string;
  password: string;
  name: string;
}

export interface LoginI {
  username?: string;
  email?: string;
  password: string;
}

type State = {
  user: UserI | null;
  isExpirationModalOpen: boolean;
};

axios.interceptors.request.use(
  config => {
    if (isExpired()) {
      setIsExpirationModalOpen(true);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const setIsExpirationModalOpen = (isExpirationModalOpen: boolean) => {
  useAuth.setState((state: State) => {
    return {
      ...state,
      isExpirationModalOpen,
    };
  });
};

export const setUser = (user: UserI | null) =>
  useAuth.setState((state: State) => {
    return {
      ...state,
      user,
    };
  });

export const register = async (newUser: RegisterI, navigate: () => void) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, newUser);
    if (response.status === 200) {
      Toast.success(
        'A link has been sent to your email to verify your account',
      );
      navigate();
    } else {
      Toast.error('Register not successful');
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      Toast.error('Something went wrong, please contact support');
    }
  }
};

export const login = async (loggedUser: LoginI) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, loggedUser);
    if (response.status === 401) {
      Toast.error(response.data.message);
    }
    if (response.status === 200) {
      useAuth.setState((state: State) => {
        const user = parseProfilePicToUser(response.data.user);
        setStorageItem('user', JSON.stringify(user));
        setStorageItem('jwt', response.data.token);
        return {
          ...state,
          user,
        };
      });
      setExpiresOn(response.data.expiration);
    } else {
      Toast.error('Login not successful');
    }
  } catch (err: unknown) {
    if (err instanceof Error || err instanceof AxiosError) {
      Toast.error(
        err instanceof AxiosError ? err.response?.data.message : err.message,
      );

      throw err;
    }
  }
};

export const logout = () => {
  clearStorage();
  setUser(null);
};

export const forgotPassword = async (email: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/auth/forgot-password/${email}`,
    );
    Toast.success(response.data.message);
  } catch (err: unknown) {
    if (err instanceof Error || err instanceof AxiosError) {
      Toast.error(
        err instanceof AxiosError ? err.response?.data.message : err.message,
      );
    }
  }
};

export const checkPassword = async (id: string, password: string) => {
  try {
    const response = await axios.get(`${API_URL}/auth/${id}/check-password`, {
      headers: {
        Authorization: `Bearer ${jwt()}`,
        password,
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      Toast.error('Could not check password');
    }
  } catch (err: unknown) {
    if (err instanceof Error || err instanceof AxiosError) {
      Toast.error(
        err instanceof AxiosError ? err.response?.data.message : err.message,
      );
    }
  }
};

export const changePassword = async (userId: string, newPassword: string) => {
  try {
    const response = await axios.put(
      `${API_URL}/auth/${userId}/change-password`,
      {},
      {
        headers: {
          Authorization: `Bearer ${jwt()}`,
          newPassword,
        },
      },
    );
    if (response.status === 200) {
      useAuth.setState((state: State) => {
        return {
          ...state,
          user: response.data,
        };
      });
    } else {
      Toast.error('Password change not successful');
    }
  } catch (err: unknown) {
    if (err instanceof Error || err instanceof AxiosError) {
      Toast.error(
        err instanceof AxiosError ? err.response?.data.message : err.message,
      );
    }
  }
};

export const useAuth = create<State>(() => {
  return {
    user: null,
    isExpirationModalOpen: false,
  };
});
