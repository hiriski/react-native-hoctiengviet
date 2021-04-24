import axios from 'axios';
import {batch} from 'react-redux';
import AuthService from './service';
import {USER_TOKEN_KEY} from '../../constants';
import {saveUserToken, removeUserToken} from '../../utils';
import * as Actions from './constants';

export const setUserToken = (token) => ({
  type: Actions.SET_USER_TOKEN,
  payload: token,
});

export const setUserData = (user) => ({
  type: Actions.SET_USER_DATA,
  payload: user,
});

export const resetUserData = () => ({
  type: Actions.RESET_USER_DATA,
});

export const resetUserToken = () => ({
  type: Actions.RESET_USER_TOKEN,
});

/**
 * ----------------
 * Login/Register with Social Account
 * ----------------
 */
export const authWithSocialAccountRequest = () => ({
  type: Actions.AUTH_WITH_SOCIAL_ACCOUNT_REQUEST,
});

export const authWithSocialAccountCancelled = () => ({
  type: Actions.AUTH_WITH_SOCIAL_ACCOUNT_CANCELLED,
});

export const authWithSocialAccountFailure = (errorMessage) => ({
  type: Actions.AUTH_WITH_SOCIAL_ACCOUNT_FAILURE,
  payload: errorMessage,
});

export const authWithSocialAccountSuccess = (data) => (dispatch) => {
  dispatch({
    type: Actions.AUTH_WITH_SOCIAL_ACCOUNT_SUCCESS,
    payload: data,
  });
};

export const authWithSocialAccount = (data) => {
  return async (dispatch) => {
    let errMessage = 'Authenticate failed';
    dispatch(authWithSocialAccountRequest());
    try {
      const response = await AuthService.loginWithSocialAccount(data);
      console.log(response);
      if (response.status === 200) {
        // response status from the server always 200.
        saveUserToken(response.data);
        batch(() => {
          dispatch(authWithSocialAccountSuccess(response.data));
          dispatch(setUserToken(data.token));

          const {user} = response.data;

          // response server without social_account for new user.
          if (user.social_account) {
            dispatch(setUserData(user));
            // response server with social_account for user already login/register.
          } else {
            dispatch(
              setUserData({
                ...user,
                social_account: data,
              }),
            );
          }
        });
      }
    } catch (e) {
      if (e.response !== undefined) {
        if (e.response.status === 422) {
          errMessage = 'Username / Password yang anda masukan salah';
          dispatch(authWithSocialAccountFailure(errMessage));
        }
      } else {
        dispatch(authWithSocialAccountFailure(errMessage));
      }
    }
  };
};

/**
 * ------------------------
 * Login action
 * ------------------------
 * */
export const loginRequest = () => ({
  type: Actions.LOGIN_REQUEST,
});

export const loginFailure = (errorMessage) => ({
  type: Actions.LOGIN_FAILURE,
  payload: errorMessage,
});

export const loginSuccess = (data) => ({
  type: Actions.LOGIN_SUCCESS,
  payload: data,
});

export const login = (credentials) => {
  return async (dispatch) => {
    let errMessage = 'Login failed';
    dispatch(loginRequest());
    try {
      const response = await axios.post(API_URL + '/login', credentials);
      if (response.status === 200) {
        LocalStorageService.setItem(
          USER_TOKEN_KEY,
          JSON.stringify(response.data),
        );
        dispatch(loginSuccess(response.data));
      }
    } catch (e) {
      if (e.response !== undefined) {
        if (e.response.status === 422) {
          errMessage = 'Username / Password yang anda masukan salah';
          dispatch(loginFailure(errMessage));
          batch(() => {
            dispatch(
              showAlert({
                message: errMessage,
                severity: 'error',
              }),
            );
          });
        } else {
          dispatch(loginFailure(errMessage));
        }
      } else {
        dispatch(loginFailure(errMessage));
      }
    }
  };
};

/**
 * ------------------------
 * Register action
 * ------------------------
 * */

export const registerRequest = () => ({
  type: Actions.REGISTER_REQUEST,
});

export const registerFailure = (errorMessage) => ({
  type: Actions.REGISTER_FAILURE,
  payload: errorMessage,
});

export const registerSuccess = (data) => ({
  type: Actions.REGISTER_SUCCESS,
  payload: data,
});

export const register = (userData) => {
  return async (dispatch) => {
    let errMessage = 'Register failed';
    dispatch(registerRequest());
    try {
      const response = await axios.post(API_URL + '/register', userData);
      if (response.status === 201) {
        LocalStorageService.setItem(
          USER_TOKEN_KEY,
          JSON.stringify(response.data),
        );
        dispatch(registerSuccess(response.data));
      }
    } catch (e) {
      if (e.response !== undefined) {
        console.log(e.response);
        if (e.response.status === 422) {
          errMessage = 'Pastikan data yang kamu isi benar.';
          batch(() => {
            dispatch(registerFailure(errMessage));
            dispatch(
              showAlert({
                message: errMessage,
                severity: 'error',
              }),
            );
          });
        }
      } else {
        batch(() => {
          dispatch(registerFailure(errMessage));
          dispatch(
            showAlert({
              message: errMessage,
              severity: 'error',
            }),
          );
        });
      }
    }
  };
};

/**
 * Fetching authentcated user
 */
export const fetchingAuthenticatedUserRequest = () => ({
  type: Actions.FETCHING_AUTHENTICATED_USER_REQUEST,
});

export const fetchingAuthenticatedUserFailure = (errorMessage) => ({
  type: Actions.FETCHING_AUTHENTICATED_USER_FAILURE,
  payload: errorMessage,
});

export const fetchingAuthenticatedUserSuccess = () => ({
  type: Actions.FETCHING_AUTHENTICATED_USER_SUCCESS,
});

export const fetchAuthenticatedUser = (token) => {
  return (dispatch) => {
    dispatch(fetchingAuthenticatedUserRequest());
    AuthService.getAuthenticatedUser(token)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          batch(() => {
            dispatch(fetchingAuthenticatedUserSuccess());
            dispatch(setUserData(response.data.user));
          });
        } else {
          dispatch(fetchingAuthenticatedUserFailure('Token is not valid'));
        }
      })
      .catch((e) => {
        dispatch(fetchingAuthenticatedUserFailure('Token is not valid'));
        dispatch(setAlert(AlertTypes.error, 'Token is not valid'));
      });
  };
};

/**
 * ------------------------
 * Log out
 * ------------------------
 */

export const logout = () => (dispatch) => {
  // dispatch()
  removeUserToken();
  batch(() => {
    dispatch(resetUserData());
    dispatch(resetUserToken());
  });
};
