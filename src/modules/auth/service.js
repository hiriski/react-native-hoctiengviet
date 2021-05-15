import axios from 'axios';
import {API_URL} from '../../config/api';
import api from '../../api';

class AuthService {
  /**
   *
   * Login with username and password
   * @params {object} credentials
   * @returns {*}
   */
  loginWithEmailAndPassword = async (credentials) => {
    return await axios.post(API_URL + '/auth/login', credentials);
  };

  /**
   * Register for new user
   * @params {object} userData
   * @return {*}
   */
  register = async (userData) => {
    return await axios.post(API_URL + '/auth/register', userData);
  };

  /**
   * Login/Register with social account
   * @params {object} userData
   * @return {*}
   */
  loginWithSocialAccount = async (userData) => {
    return await axios.post(API_URL + '/auth/social', userData);
  };

  /**
   * Fetch authenticated user
   * @returns {*}
   */
  fetchAuthenticatedUser = async () => {
    return await api.get('/auth/get-authenticated-user');
  };

  /**
   * Revoke token from the server
   * @returns {*}
   */
  revokeToken = async () => {
    return await api.post('/auth/revoke-token');
  };
}

export default new AuthService();
