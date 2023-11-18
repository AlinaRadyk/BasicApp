import i18next from 'i18next';
import { put, takeEvery } from 'redux-saga/effects';

import { ERROR } from 'constants/index';

import { setUser, loginUser, logoutUser } from 'modules/auth/actions';
import {
  setError,
  clearState,
  setLoading,
  setAlertVisible,
} from 'modules/app/actions';

function* logoutUserWorker() {
  try {
    yield put(setUser(null));
    yield put(clearState());
  } catch (e) {
    yield put(setError(ERROR));
    yield put(setAlertVisible());
  }
}

type LoginParams = {
  payload: {
    email: string;
    password: string;
  }
}

function* loginUserWorker(data: LoginParams) {
  const { payload } = data;

  try {
    yield put(setLoading(true));
    yield put(setUser({ email: payload.email, username: payload.email }));
  } catch (e) {
    yield put(setError({ ...ERROR, error: i18next.t('login_failed') }));
    yield put(setAlertVisible());
  } finally {
    yield put(setLoading(false));
  }
}

export default function* () {
  yield takeEvery(loginUser, loginUserWorker);
  yield takeEvery(logoutUser, logoutUserWorker);
}
