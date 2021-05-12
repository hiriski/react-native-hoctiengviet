import * as Actions from './constants';

const initialState = {
  isSending: false,
  isError: false,
  messages: [],
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCHING_MESSAGE_REQUEST:
      return {
        isSending: true,
        isError: false,
        messages: [],
      };
    case Actions.FETCHING_MESSAGE_FAILURE:
      return {
        isSending: false,
        isError: true,
        messages: [],
      };
    case Actions.FETCHING_MESSAGE_SUCCESS:
      return {
        isSending: false,
        isError: false,
        messages: action.payload,
      };
    case Actions.RESET_FETCHING_MESSAGE:
      return {
        isSending: false,
        isError: false,
        messages: [],
      };
    default:
      return state;
  }
}
