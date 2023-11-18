import { all } from 'redux-saga/effects';

import appSaga from 'modules/app/saga';
import authSaga from 'modules/auth/saga';

export default function* () {
  yield all([
    appSaga(),
    authSaga(),
  ]);
}
