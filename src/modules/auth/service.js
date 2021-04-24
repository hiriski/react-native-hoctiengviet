import axios from 'axios';
import {API_URL} from '../../config/api';

class AuthService {
  /**
   *
   * Login with username and password
   * @params {object} credentials
   * @returns {*}
   */
  loginWithUserName(credentials) {
    return axios.post(API_URL + '/auth/login', credentials);
  }

  /**
   * Register for new user
   * @params {object} userData
   * @return {*}
   */
  register(userData) {
    return axios.post(API_URL + '/auth/register', userData);
  }

  /**
   * Login/Register with social account
   * @params {object} userData
   * @return {*}
   */
  loginWithSocialAccount(userData) {
    return axios.post(API_URL + '/auth/social', userData);
  }

  /**
   * Revoke token from the server
   * @returns {*}
   */
  revokeToken() {
    return axios.post(API_URL + '/auth/logout');
  }
}

export default new AuthService();
