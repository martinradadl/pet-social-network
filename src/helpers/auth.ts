import {UserI} from '../data/auth';
import {API_URL} from './env';
import defaultProfilePic from '../assets/default-profile-pic.png';

export const parseProfilePicToUser = (userData: UserI) => {
  return {
    ...userData,
    profilePic: userData.profilePic
      ? `${API_URL}/${userData.profilePic}`
      : defaultProfilePic,
  };
};
