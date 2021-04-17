import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  AUTH_WITH_SOCIAL_ACCOUNT_REQUEST,
  AUTH_WITH_SOCIAL_ACCOUNT_CANCELLED,
  AUTH_WITH_SOCIAL_ACCOUNT_FAILURE,
  AUTH_WITH_SOCIAL_ACCOUNT_SUCCESS,
  SET_USER_TOKEN,
  SET_USER_DATA,
  RESET_USER_DATA,
  RESET_USER_TOKEN,
} from '../actions/authActions';

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
    case LOGIN_REQUEST:
      return {
        ...state,
        login: {
          isLoading: true,
          isSuccess: false,
          isError: false,
          errorMessage: null,
        },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login: {
          isLoading: false,
          isSuccess: false,
          isError: true,
          errorMessage: action.payload,
        },
      };
    case LOGIN_SUCCESS:
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
    case REGISTER_REQUEST:
      return {
        ...state,
        register: {
          isLoading: true,
          isSuccess: false,
          isError: false,
          errorMessage: null,
        },
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        register: {
          isLoading: false,
          isSuccess: false,
          isError: true,
          errorMessage: action.payload,
        },
      };
    case REGISTER_SUCCESS:
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
    case AUTH_WITH_SOCIAL_ACCOUNT_REQUEST:
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
    case AUTH_WITH_SOCIAL_ACCOUNT_FAILURE:
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
    case AUTH_WITH_SOCIAL_ACCOUNT_CANCELLED:
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
    case AUTH_WITH_SOCIAL_ACCOUNT_SUCCESS:
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
    case SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case RESET_USER_DATA:
      return {
        ...state,
        user: null,
      };
    case RESET_USER_TOKEN:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
