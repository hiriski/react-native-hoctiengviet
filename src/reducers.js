import {combineReducers} from 'redux';
import common from './modules/common/reducer';
import auth from './modules/auth/reducer';
import phrasebook from './modules/phrasebook/reducer';
import category from './modules/category/reducer';

export default combineReducers({
  common,
  auth,
  phrasebook,
  category,
});
