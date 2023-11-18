import { put, select, takeEvery } from 'redux-saga/effects';

import { ERROR, USERS } from 'constants/index';

import {
  appInit,
  setError,
  setLoading,
  getContacts,
  setContacts,
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

function* getContactsWorker() {
  try {
    yield put(setLoading(true));
    yield put(setContacts(USERS));
  } catch (e) {
    yield put(setError(ERROR));
    yield put(setAlertVisible());
  } finally {
    yield put(setLoading(false));
  }
}

export default function* () {
  yield takeEvery(appInit, getUserFromAsyncStorage);
  yield takeEvery(getContacts, getContactsWorker);
}
