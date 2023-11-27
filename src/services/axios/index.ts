import axios from 'axios';
// @ts-ignore
import { API_HOST } from '@env';

import { configureStore } from 'config/store';

import { getEncryptionKey } from 'helpers/index';

import { logoutUser } from 'modules/auth/actions';

const signOut = async () => {
  const encryptionKey = await getEncryptionKey();
  configureStore(encryptionKey).store.dispatch(logoutUser());
};

export const getRequestHeaders = async () => ({
  'Content-Type': 'application/json',
});

const axiosInstance = axios.create({
  baseURL: API_HOST,
});

axiosInstance.interceptors.request.use(
  async config => {
    const requestHeaders = await getRequestHeaders();

    config.headers = requestHeaders;

    return config;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.log('error', error?.response?.status, error);
    if (error?.response?.status >= 400 && error?.response?.status < 500) {
      return signOut();
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
