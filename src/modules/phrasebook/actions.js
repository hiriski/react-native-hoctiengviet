import PhrasebookService from './service';
import * as Actions from './constants';

/**
 * --------------------
 * Create phrasebook
 * --------------------
 */
const createPhrasebookRequest = () => ({
  type: Actions.CREATE_PHRASEBOOK_REQUEST,
});

const createPhrasebookFailure = () => ({
  type: Actions.CREATE_PHRASEBOOK_REQUEST,
});

const createPhrasebookSuccess = (newPhrasebook) => ({
  type: Actions.CREATE_PHRASEBOOK_REQUEST,
  payload: newPhrasebook,
});

export const createPhrasebook = (data) => {
  return async (dispatch) => {
    dispatch(createPhrasebookRequest());
    try {
      const response = await PhrasebookService.create(data);
      if (response.status === 201) {
        // HTTP_CREATED
        dispatch(createPhrasebookSuccess(response.data.data));
      }
    } catch (e) {
      dispatch(createPhrasebookFailure());
    }
  };
};
