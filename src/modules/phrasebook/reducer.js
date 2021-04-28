import * as Actions from './constants';

const initialState = {
  create: {
    isError: false,
    isLoading: false,
    isSuccess: false,
  },
  list: [], // all of phrasebooks.
};

export default function phrasebookReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * ---------------
     * Create Phrase
     * ---------------
     */
    case Actions.CREATE_PHRASEBOOK_REQUEST:
      return {
        ...state,
        create: {
          isError: false,
          isLoading: true,
          isSuccess: false,
        },
      };
    case Actions.CREATE_PHRASEBOOK_FAILURE:
      return {
        ...state,
        create: {
          isError: true,
          isLoading: false,
          isSuccess: false,
        },
      };
    case Actions.CREATE_PHRASEBOOK_SUCCESS:
      return {
        ...state,
        create: {
          isError: false,
          isLoading: false,
          isSuccess: true,
        },
      };
    case Actions.RESET_CREATE_PRASEBOOK_STATE:
      return {
        ...state,
        create: initialState.create,
      };

    default:
      return state;
  }
}
