import {API_URL_DEVELOPMENT, API_URL_PRODUCTION} from '@env';

export const API_URL =
  process.env.NODE_ENV === 'development'
    ? API_URL_DEVELOPMENT
    : API_URL_PRODUCTION;
