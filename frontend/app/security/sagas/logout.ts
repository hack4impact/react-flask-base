import { call, put, takeLatest } from 'redux-saga/effects';

import { logout } from 'security/actions';
import SecurityApi from 'security/api';
import {goTo} from 'utils/history';
import {flashInfo} from 'components/Flash';
import {PATHS} from 'config';

function* sagaWorker() {
  yield put(logout.fulfill());
  yield flashInfo('You\'ve logged out');
  yield call(goTo(PATHS.Home));
  try {
    yield call(SecurityApi.logout);
  } catch (error) {
    // ignore
  }
}

export default function* saga() {
  yield takeLatest(logout.TRIGGER, sagaWorker);
}
