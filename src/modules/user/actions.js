import * as Actions from './constants';
import UserService from './service';

export const fetchUserList = () => {
  return async (dispatch) => {
    dispatch(fetchingUserListRequest());
    try {
      const response = UserService.getUserList();
      if (response.status === 200) {
        const users = response.data.data;
        dispatch(fetchingUserListSuccess(users));
      }
    } catch (e) {
      dispatch(fetchingUserListFailure());
    }
  };
};

export const fetchingUserListRequest = () => ({
  type: Actions.FETCHING_USER_LIST_FAILURE,
});

export const fetchingUserListFailure = () => ({
  type: Actions.FETCHING_USER_LIST_FAILURE,
});

export const fetchingUserListSuccess = (data) => ({
  type: Actions.FETCHING_USER_LIST_SUCCESS,
  payload: data,
});

export const resetFetchState = () => ({
  type: Actions.RESET_FETCH_STATE,
});
