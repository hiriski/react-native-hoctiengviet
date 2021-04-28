import api from '../../api';

class PhrasebookService {
  /**
   *
   * Create phrasebook
   * @params {object} data
   * @returns {*}
   */
  create = async (data) => {
    return await api.post('phrasebook', data);
  };

  /**
   *
   * Get all phrasebook list.
   * @params {object} data
   * @returns {*}
   */
  getPhrasebooks = async () => {
    return await api.get('phrasebook');
  };
}

export default new PhrasebookService();
