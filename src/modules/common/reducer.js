import * as Actions from './constants';

const initialState = {
  theme: 'light', // default is light
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.TOGGLE_THEME:
      const nextTheme = state.theme === 'light' ? 'dark' : 'light';
      return {
        ...state,
        theme: nextTheme,
      };
    default:
      return state;
  }
}
