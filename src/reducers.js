import {combineReducers} from 'redux';
import common from './modules/common/reducer';
import auth from './modules/auth/reducer';
import phrasebook from './modules/phrasebook/reducer';
import category from './modules/category/reducer';
import chat from './modules/chat/reducer';
import user from './modules/user/reducer';

export default combineReducers({
  common,
  auth,
  phrasebook,
  category,
  chat,
  user,
});
