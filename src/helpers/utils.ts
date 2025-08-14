import {expiresOn, setStorageItem} from './storage';

export const setExpiresOn = (expirationSeconds: number) => {
  const expiration = expirationSeconds * 1000;
  const now = new Date().getTime();
  setStorageItem('expiresOn', new Date(now + expiration).getTime());
};

export const isExpired = () => {
  const now = new Date().getTime();
  return now > (expiresOn() || 0);
};

export const emailRegex =
  /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})+$/;

export const usernameRegex =
  /^(?![.])[a-zA-Z0-9_]*[a-zA-Z]+[a-zA-Z0-9_.]*[a-zA-Z0-9_]$(?![.])/;
