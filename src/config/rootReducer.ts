import { combineReducers } from 'redux';

import app from 'modules/app/reducer';
import auth from 'modules/auth/reducer';

export default combineReducers({
  app,
  auth,
});
