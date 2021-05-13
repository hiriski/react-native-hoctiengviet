import * as Actions from './constants';

const initialState = {
  isFetching: false,
  isSending: false,
  isError: false,
  messages: {}, // object of array.
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCHING_MESSAGE_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case Actions.FETCHING_MESSAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    case Actions.FETCHING_MESSAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        messages: {
          ...state.messages,
          ...action.payload,
        },
      };
    case Actions.RESET_FETCHING_MESSAGE:
      return {
        ...state,
        isFetching: false,
        isError: false,
      };
    default:
      return state;
  }
}
