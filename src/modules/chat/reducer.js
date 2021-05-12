import * as Actions from './constants';

const initialState = {
  isSending: false,
  isError: false,
  messages: {}, // object of array.
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCHING_MESSAGE_REQUEST:
      return {
        ...state,
        isSending: true,
        isError: false,
      };
    case Actions.FETCHING_MESSAGE_FAILURE:
      return {
        ...state,
        isSending: false,
        isError: true,
      };
    case Actions.FETCHING_MESSAGE_SUCCESS:
      return {
        isSending: false,
        isError: false,
        messages: {
          ...state.messages,
          ...action.payload,
        },
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
