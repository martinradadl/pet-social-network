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
