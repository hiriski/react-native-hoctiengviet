import * as Actions from './constants';

const initialState = {
  user: null,
  token: null,
  login: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  register: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  socialAccount: {
    isLoading: false,
    cancelled: false,
    isError: false,
    errorMessage: null,
    isSuccess: false,
    data: null,
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

    /**
     * --------------
     * Social auth
     * -------------
     */
    case Actions.AUTH_WITH_SOCIAL_ACCOUNT_REQUEST:
      return {
        ...state,
        socialAccount: {
          isLoading: true,
          cancelled: false,
          isError: false,
          errorMessage: null,
          isSuccess: false,
          data: null,
        },
      };
    case Actions.AUTH_WITH_SOCIAL_ACCOUNT_FAILURE:
      return {
        ...state,
        socialAccount: {
          isLoading: false,
          cancelled: false,
          isError: true,
          errorMessage: action.payload,
          isSuccess: false,
          data: null,
        },
      };
    case Actions.AUTH_WITH_SOCIAL_ACCOUNT_CANCELLED:
      return {
        ...state,
        socialAccount: {
          isLoading: false,
          cancelled: true,
          isError: false,
          errorMessage: null,
          isSuccess: false,
          data: null,
        },
      };
    case Actions.AUTH_WITH_SOCIAL_ACCOUNT_SUCCESS:
      return {
        ...state,
        socialAccount: {
          isLoading: false,
          cancelled: false,
          isError: false,
          errorMessage: null,
          isSuccess: true,
          data: action.payload,
        },
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
