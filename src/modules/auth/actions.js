import {batch} from 'react-redux';
import AuthService from './service';
import {USER_TOKEN_KEY} from '../../constants';
import {saveUserToken, removeUserToken} from '../../utils';
import * as Actions from './constants';

/**
 * Commons actions
 */
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
export const loginWithSocialAccountRequest = () => ({
  type: Actions.LOGIN_WITH_SOCIAL_ACCOUNT_REQUEST,
});

// export const loginWithSocialAccountCancelled = () => ({
//   type: Actions.LOGIN_WITH_SOCIAL_ACCOUNT_CANCELLED,
// });

export const loginWithSocialAccountFailure = (errorMessage) => ({
  type: Actions.LOGIN_WITH_SOCIAL_ACCOUNT_FAILURE,
  payload: errorMessage,
});

export const loginWithSocialAccountSuccess = ({provider}) => (dispatch) => {
  dispatch({
    type: Actions.LOGIN_WITH_SOCIAL_ACCOUNT_SUCCESS,
    payload: {provider},
  });
};

export const loginWithSocialAccount = (userData) => {
  return async (dispatch) => {
    let errMessage = 'Authenticate failed';
    dispatch(loginWithSocialAccountRequest());
    try {
      const response = await AuthService.loginWithSocialAccount(userData);
      if (response.status === 200) {
        // response status from the server always 200.
        const {data} = response;

        saveUserToken(data.token);
        batch(() => {
          dispatch(
            loginWithSocialAccountSuccess({provider: userData.social_provider}),
          );
          dispatch(setUserToken(data.token));

          const {user} = data;

          // response server without social_account for new user.
          if (user.social_account) {
            dispatch(setUserData(user));

            // response server with social_account for user already login/register.
          } else {
            dispatch(
              setUserData({
                ...user,
                social_account: userData,
              }),
            );
          }
        });
      }
    } catch (e) {
      if (e.response !== undefined) {
        if (e.response.status === 422) {
          errMessage = 'Username / Password yang anda masukan salah';
          dispatch(loginWithSocialAccountFailure(errMessage));
        }
      } else {
        dispatch(loginWithSocialAccountFailure(errMessage));
      }
    }
  };
};

export const resetLoginWithSocialAccount = () => ({
  type: Actions.RESET_LOGIN_WITH_SOCIAL_ACCOUNT_STATE,
});

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

export const loginSuccess = () => ({
  type: Actions.LOGIN_SUCCESS,
});

export const login = (credentials) => {
  return async (dispatch) => {
    let errMessage = 'Login failed.';
    dispatch(loginRequest());
    try {
      const response = await AuthService.loginWithEmailAndPassword(credentials);
      if (response.status === 200) {
        const {token, user} = response.data;
        saveUserToken(token);
        batch(() => {
          dispatch(loginSuccess());
          dispatch(setUserData(user));
          dispatch(setUserToken(token));
        });
      }
    } catch (e) {
      if (e.response !== undefined) {
        console.log(e);
        if (e.response.status === 422) {
          errMessage = 'Username / Password yang anda masukan salah';
          dispatch(loginFailure(errMessage));
        }
      } else {
        dispatch(loginFailure(errMessage));
      }
    }
  };
};

export const resetLoginState = () => ({
  type: Actions.RESET_LOGIN_STATE,
});

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

export const registerSuccess = () => ({
  type: Actions.REGISTER_SUCCESS,
});

export const register = (userData) => {
  return async (dispatch) => {
    let errMessage = 'Register failed.';
    dispatch(registerRequest());
    try {
      const response = await AuthService.register(userData);
      if (response.status === 201) {
        const {token, user} = response.data;
        saveUserToken(token);
        batch(() => {
          dispatch(registerSuccess());
          dispatch(setUserData(user));
          dispatch(setUserToken(token));
        });
      }
    } catch (e) {
      if (e.response !== undefined) {
        if (e.response.status === 422) {
          errMessage = 'Unprocessable entity';
          dispatch(registerFailure(errMessage));
        }
      } else {
        dispatch(registerFailure(errMessage));
      }
    }
  };
};

export const resetRegisterState = () => ({
  type: Actions.RESET_REGISTER_STATE,
});

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

export const fetchAuthenticatedUser = () => {
  return async (dispatch) => {
    let errorMessage = 'Fething authenticated user failed';
    dispatch(fetchingAuthenticatedUserRequest());
    try {
      const response = await AuthService.fetchAuthenticatedUser();
      console.log(response);
      if (response.status === 200) {
        const {user} = response.data;
        batch(() => {
          dispatch(fetchingAuthenticatedUserSuccess());
          dispatch(setUserData(user));
        });
      }
    } catch (e) {
      dispatch(fetchingAuthenticatedUserFailure(errorMessage));
    }
  };
};

/**
 * ------------------------
 * Revoke auth token
 * ------------------------
 */
const revokingTokenRequest = () => ({
  type: Actions.REVOKING_TOKEN_REQUEST,
});

const revokingTokenFailure = (errorMessage) => ({
  type: Actions.REVOKING_TOKEN_FAILURE,
  payload: errorMessage,
});

const revokingTokenSuccess = () => ({
  type: Actions.REVOKING_TOKEN_SUCCESS,
});

export const revokeToken = () => {
  return async (dispatch) => {
    let errorMessage = 'Failed to revoke token';
    dispatch(revokingTokenRequest());
    try {
      const response = await AuthService.revokeToken();
      if (response.status === 200) {
        removeUserToken();
        batch(() => {
          dispatch(revokingTokenSuccess());

          // Also reset token & user data.
          dispatch(resetUserToken());
          dispatch(resetUserData());
          dispatch(resetAuthState());
        });
      }
    } catch (e) {
      /** Also reset auth state if failed to revoke token from the server */
      if (e.response !== undefined) {
        console.log(e.response);
      }
      batch(() => {
        dispatch(revokingTokenFailure(errorMessage));
        dispatch(resetAuthState());
      });
    }
  };
};

export const resetAuthState = () => ({
  type: Actions.RESET_AUTH_STATE,
});
