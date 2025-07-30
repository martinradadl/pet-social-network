import {MMKVLoader} from 'react-native-mmkv-storage';

export const storage = new MMKVLoader().initialize();

export const setStorageItem = (key: string, value: string | number) => {
  if (typeof value === 'string') {
    storage.setString(key, value);
  } else {
    storage.setInt(key, value);
  }
};

export const deleteStorageItem = (name: string) => {
  storage.removeItem(name);
};

export const clearStorage = () => {
  deleteStorageItem('user');
  deleteStorageItem('jwt');
  deleteStorageItem('expiresOn');
};

export const user = () => storage.getString('user');
export const jwt = () => storage.getString('jwt');
export const expiresOn = () => storage.getInt('expiresOn');
