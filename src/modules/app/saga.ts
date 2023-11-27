import { put, select, takeEvery } from 'redux-saga/effects';

import { ERROR } from 'constants/index';
import { orderByQuadrant } from 'helpers/index';

import {
  appInit,
  setError,
  setLoading,
  getCameras,
  setCameras,
  setAlertVisible,
} from 'modules/app/actions';
import { setUser } from 'modules/auth/actions';
import { getUser } from 'modules/auth/selectors';

import Api from 'services/api';

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
    const data = yield Api.getCamerasLocations();
    yield put(setCameras(orderByQuadrant(data)));
  } catch (e) {
    yield put(setError(ERROR));
    yield put(setAlertVisible());
  } finally {
    yield put(setLoading(false));
  }
}

export default function* () {
  yield takeEvery(appInit, getUserFromAsyncStorage);
  yield takeEvery(getCameras, getContactsWorker);
}
