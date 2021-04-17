import axios from 'axios';
import {batch} from 'react-redux';
import {API_URL} from '@env';
import {USER_TOKEN_KEY} from '../../constants';
import {saveUserToken, removeUserToken} from '../../utils';

/** Actions types  */
export const AUTH_WITH_SOCIAL_ACCOUNT_REQUEST =
  'AUTH_WITH_SOCIAL_ACCOUNT_REQUEST';
export const AUTH_WITH_SOCIAL_ACCOUNT_CANCELLED =
  'AUTH_WITH_SOCIAL_ACCOUNT_CANCELLED';
export const AUTH_WITH_SOCIAL_ACCOUNT_FAILURE =
  'AUTH_WITH_SOCIAL_ACCOUNT_FAILURE';
export const AUTH_WITH_SOCIAL_ACCOUNT_SUCCESS =
  'AUTH_WITH_SOCIAL_ACCOUNT_SUCCESS';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const FETCHING_AUTHENTICATED_USER_REQUEST =
  'FETCHING_AUTHENTICATED_USER_REQUEST';
export const FETCHING_AUTHENTICATED_USER_FAILURE =
  'FETCHING_AUTHENTICATED_USER_FAILURE';
export const FETCHING_AUTHENTICATED_USER_SUCCESS =
  'FETCHING_AUTHENTICATED_USER_SUCCESS';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const SET_USER_DATA = 'SET_USER_DATA';
export const RESET_USER_DATA = 'RESET_USER_DATA';
export const RESET_USER_TOKEN = 'RESET_USER_TOKEN';

export const setUserToken = (token) => ({
  type: SET_USER_TOKEN,
  payload: token,
});

export const setUserData = (user) => ({
  type: SET_USER_DATA,
  payload: user,
});

export const resetUserData = () => ({
  type: RESET_USER_DATA,
});

export const resetUserToken = () => ({
  type: RESET_USER_TOKEN,
});

/**
 * ----------------
 * Login/Register with Social Account
 * ----------------
 */
export const authWithSocialAccountRequest = () => ({
  type: AUTH_WITH_SOCIAL_ACCOUNT_REQUEST,
});

export const authWithSocialAccountCancelled = () => ({
  type: AUTH_WITH_SOCIAL_ACCOUNT_CANCELLED,
});

export const authWithSocialAccountFailure = (errorMessage) => ({
  type: AUTH_WITH_SOCIAL_ACCOUNT_FAILURE,
  payload: errorMessage,
});

export const authWithSocialAccountSuccess = (data) => (dispatch) => {
  dispatch({
    type: AUTH_WITH_SOCIAL_ACCOUNT_SUCCESS,
    payload: data,
  });
};

export const authWithSocialAccount = (data) => {
  return async (dispatch) => {
    let errMessage = 'Login failed';
    dispatch(authWithSocialAccountRequest());
    try {
      const response = await axios.post(
        'http://192.168.119.100:8000/auth/social',
        data,
      );
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
            console.log('has social_account');
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
  type: LOGIN_REQUEST,
});

export const loginFailure = (errorMessage) => ({
  type: LOGIN_FAILURE,
  payload: errorMessage,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
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
  type: REGISTER_REQUEST,
});

export const registerFailure = (errorMessage) => ({
  type: REGISTER_FAILURE,
  payload: errorMessage,
});

export const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
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
  type: FETCHING_AUTHENTICATED_USER_REQUEST,
});

export const fetchingAuthenticatedUserFailure = (errorMessage) => ({
  type: FETCHING_AUTHENTICATED_USER_FAILURE,
  payload: errorMessage,
});

export const fetchingAuthenticatedUserSuccess = () => ({
  type: FETCHING_AUTHENTICATED_USER_SUCCESS,
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
