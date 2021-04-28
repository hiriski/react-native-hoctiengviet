import {combineReducers} from 'redux';
import auth from './modules/auth/reducer';
import phrasebook from './modules/phrasebook/reducer';

export default combineReducers({
  auth,
  phrasebook,
});
