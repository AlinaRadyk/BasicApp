import { createAction } from 'redux-actions';

import APP_ACTIONS_CONSTANTS from 'constants/actions';

export const setError = createAction(APP_ACTIONS_CONSTANTS.SET_ERROR);
export const setMode = createAction(APP_ACTIONS_CONSTANTS.SET_MODE);
export const setLanguage = createAction(APP_ACTIONS_CONSTANTS.SET_LANGUAGE);
export const clearError = createAction(APP_ACTIONS_CONSTANTS.CLEAR_ERROR);
export const setLoading = createAction(APP_ACTIONS_CONSTANTS.SET_LOADING);
export const appInit = createAction(APP_ACTIONS_CONSTANTS.APP_INIT);
export const setAlertVisible = createAction(APP_ACTIONS_CONSTANTS.SET_ALERT_VISIBLE);
export const clearState = createAction(APP_ACTIONS_CONSTANTS.CLEAR_STATE);
export const getContacts = createAction(APP_ACTIONS_CONSTANTS.GET_CONTACTS);
export const setContacts = createAction(APP_ACTIONS_CONSTANTS.SET_CONTACTS);
