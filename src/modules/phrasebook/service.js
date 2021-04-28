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
}

export default new PhrasebookService();
