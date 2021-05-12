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
  getPhrasebooks = async (categoryId) => {
    const response = await api.get(
      categoryId ? '/phrasebook?category_id=' + categoryId : '/phrasebook',
    );
    return response;
  };
}

export default new PhrasebookService();
