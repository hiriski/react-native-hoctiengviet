import axios from 'axios';
import {API_URL} from '@env';

import {getUserToken} from '../utils';

axios.defaults.baseURL = API_URL;

const apiInstance = axios.create();

apiInstance.interceptors.request.use(
  async (config) => {
    const userToken = await getUserToken();
    const token = JSON.parse(userToken).token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiInstance;
