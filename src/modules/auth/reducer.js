import * as Actions from './constants';

const initialState = {
  user: null,
  token: null,
  isLoggedOut: false,
  socialProvider: null,
  login: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
  },
  register: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
  },
  loginSocialAccount: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    /**
     * --------------
     * Login
     * -------------
     */
    case Actions.LOGIN_REQUEST:
      return {
        ...state,
        login: {
          isLoading: true,
          isSuccess: false,
          isError: false,
          errorMessage: null,
        },
      };
    case Actions.LOGIN_FAILURE:
      return {
        ...state,
        login: {
          isLoading: false,
          isSuccess: false,
          isError: true,
          errorMessage: action.payload,
        },
      };
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          isLoading: false,
          isSuccess: true,
          isError: false,
          errorMessage: null,
        },
      };
    case Actions.RESET_LOGIN_STATE:
      return {
        ...state,
        login: initialState.login,
      };

    /**
     * --------------
     * Register
     * -------------
     */
    case Actions.REGISTER_REQUEST:
      return {
        ...state,
        register: {
          isLoading: true,
          isSuccess: false,
          isError: false,
          errorMessage: null,
        },
      };
    case Actions.REGISTER_FAILURE:
      return {
        ...state,
        register: {
          isLoading: false,
          isSuccess: false,
          isError: true,
          errorMessage: action.payload,
        },
      };
    case Actions.REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          isLoading: false,
          isSuccess: true,
          isError: false,
          errorMessage: null,
        },
      };
    case Actions.RESET_REGISTER_STATE:
      return {
        ...state,
        register: initialState.register,
      };

    /**
     * --------------
     * Social auth
     * -------------
     */
    case Actions.LOGIN_WITH_SOCIAL_ACCOUNT_REQUEST:
      return {
        ...state,
        loginSocialAccount: {
          isLoading: true,
          isSuccess: false,
          isError: false,
          errorMessage: null,
        },
      };
    case Actions.LOGIN_WITH_SOCIAL_ACCOUNT_FAILURE:
      return {
        ...state,
        loginSocialAccount: {
          isLoading: false,
          isSuccess: false,
          isError: true,
          errorMessage: action.payload,
        },
      };
    // case Actions.LOGIN_WITH_SOCIAL_ACCOUNT_CANCELLED:
    //   return {
    //     ...state,
    //   };
    case Actions.LOGIN_WITH_SOCIAL_ACCOUNT_SUCCESS:
      const {provider} = action.payload;
      return {
        ...state,
        socialProvider: provider,
        loginSocialAccount: {
          isLoading: false,
          isSuccess: true,
          isError: false,
          errorMessage: null,
        },
      };
    case Actions.RESET_LOGIN_WITH_SOCIAL_ACCOUNT_STATE:
      return {
        ...state,
        loginSocialAccount: initialState.loginSocialAccount,
      };

    /**
     * ----------------
     * Revoke token
     * ----------------
     */
    case Actions.REVOKING_TOKEN_SUCCESS:
      return {
        ...state,
        isLoggedOut: true, // Playing with this state from the ui
      };

    /**
     * --------------
     * Common
     * -------------
     */
    case Actions.SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case Actions.SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case Actions.RESET_USER_DATA:
      return {
        ...state,
        user: null,
      };
    case Actions.RESET_USER_TOKEN:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
