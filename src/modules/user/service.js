import api from '../../api';

class UserService {
  /**
   * Get user list.
   * @returns {Promise<AxiosResponse<T>>}
   */
  getUserList = async () => {
    return await api.get('/user');
  };

  /**
   * Get user by id.
   * @param userId
   * @returns {Promise<AxiosResponse<T>>}
   */
  getUserById = async (userId) => {
    return await api.get('/user/' + userId);
  };
}

export default new UserService();
