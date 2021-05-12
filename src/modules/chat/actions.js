import * as Actions from './constants';
import ChatService from './service';

/**
 * Fetch message.
 * @param conversationId
 * @returns {function(...[*]=)}
 */
export const fetchMessages = (conversationId) => {
  return async (dispatch) => {
    dispatch(fetchingMessageRequest());
    try {
      const response = await ChatService.getMessage(conversationId);
      if (response.status === 200) {
        const messages = response.data.data;
        dispatch(fetchMessageSuccess(conversationId, messages));
      }
    } catch (e) {
      dispatch(fetchingMessageFailure());
      console.log(e);
    }
  };
};

const fetchingMessageRequest = () => ({
  type: Actions.FETCHING_MESSAGE_REQUEST,
});

const fetchingMessageFailure = () => ({
  type: Actions.FETCHING_MESSAGE_FAILURE,
});

const fetchMessageSuccess = (conversationId, messages) => ({
  type: Actions.FETCHING_MESSAGE_SUCCESS,
  payload: {
    ['conversationId_' + conversationId]: messages,
  },
});

export const resetFetchingMessage = () => ({
  type: Actions.RESET_FETCHING_MESSAGE,
});

/**
 * Send message
 * @param conversationId
 * @param data
 * @returns {function(...[*]=)}
 */
export const sendMessage = (conversationId, data) => {
  return async (dispatch) => {
    try {
      const response = await ChatService.sendMessage(conversationId, data);
      if (response.status === 201) {
        alert('message has been send');
      }
    } catch (e) {
      console.log(e.response);
    }
  };
};

export const mergeMessage = (data) => ({
  type: Actions.MERGE_MESSAGE,
  payload: data,
});
