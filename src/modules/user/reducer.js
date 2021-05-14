import * as Actions from './constants';

const initialState = {
  isFetching: false,
  isError: false,
  list: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCHING_USER_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case Actions.FETCHING_USER_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    case Actions.FETCHING_USER_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        list: action.payload,
      };
    case Actions.RESET_FETCH_STATE:
      return {
        ...state,
        isFetching: false,
        isError: false,
      };
    default:
      return state;
  }
}
