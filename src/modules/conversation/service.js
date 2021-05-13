import api from '../../api';

class ChatService {
  /**
   * Send message.
   * @param conversationId
   * @param data
   * @returns {Promise<AxiosResponse<T>>}
   */
  sendMessage = async (conversationId, data) => {
    return await api.post('/chat/send/' + conversationId, data);
  };

  /**
   * Get messages.
   * @param conversationId
   * @returns {Promise<AxiosResponse<T>>}
   */
  getMessage = async (conversationId) => {
    return await api.get('/chat/' + conversationId);
  };
}

export default new ChatService();
