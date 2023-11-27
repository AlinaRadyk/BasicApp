import { handleActions } from 'redux-actions';

import {
  setError,
  setMode,
  clearError,
  setLoading,
  setLanguage,
  clearState,
  setCameras,
  setAlertVisible,
} from 'modules/app/actions';

import { MODES, SUPPORTED_LANGUAGES } from 'constants/index';

const initialState = {
  error: null,
  errorText: null,
  loading: false,
  alertVisible: false,
  mode: MODES.LIGHT,
  language: SUPPORTED_LANGUAGES.EN,
  cameras: [],
};

export default handleActions(
  {
    [setError]: (state, { payload }) => ({
      ...state,
      error: payload.error,
      errorText: payload.errorText,
    }),
    [clearError]: state => ({
      ...state,
      error: null,
      errorText: null,
    }),
    [setMode]: (state, { payload }) => ({
      ...state,
      mode: payload,
    }),
    [setLanguage]: (state, { payload }) => ({
      ...state,
      language: payload,
    }),
    [setLoading]: (state, { payload }) => ({
      ...state,
      loading: payload,
    }),
    [clearState]: state => ({
      ...initialState,
      mode: state.mode,
    }),
    [setAlertVisible]: state => ({
      ...state,
      alertVisible: !state.alertVisible,
    }),
    [setCameras]: (state, { payload }) => ({
      ...state,
      cameras: payload,
    }),
  },
  initialState,
);
