import axios from 'axios';
import {API_URL} from '../config/api';

import {getUserToken} from '../utils';

axios.defaults.baseURL = API_URL;

const apiInstance = axios.create();

apiInstance.interceptors.request.use(
  async (config) => {
    const token = await getUserToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiInstance;
