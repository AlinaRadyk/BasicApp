import { createAction } from 'redux-actions';

import APP_ACTIONS_CONSTANTS from 'constants/actions';

export const loginUser = createAction(APP_ACTIONS_CONSTANTS.LOGIN_USER);
export const logoutUser = createAction(APP_ACTIONS_CONSTANTS.LOGOUT_USER);

export const setUser = createAction(APP_ACTIONS_CONSTANTS.SET_USER);
