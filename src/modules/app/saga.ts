import { put, select, takeEvery } from 'redux-saga/effects';

import { ERROR } from 'constants/index';

import {
  appInit,
  setError,
  setLoading,
  setAlertVisible,
} from 'modules/app/actions';
import { setUser } from 'modules/auth/actions';
import { getUser } from 'modules/auth/selectors';

function* getUserFromAsyncStorage() {
  try {
    const user = yield select(getUser);

    if (user) {
      yield put(setUser(user));
    }
    yield put(setLoading(false));
  } catch (e) {
    yield put(setError(ERROR));
    yield put(setAlertVisible());
  }
}

export default function* () {
  yield takeEvery(appInit, getUserFromAsyncStorage);
}
