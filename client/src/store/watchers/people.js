import { takeLatest, call, put } from 'redux-saga/effects';
import { AUTHORIZATION_FAIL, AUTHORIZATION_REQUEST, AUTHORIZATION_SUCCESS } from '../actions/people';
import Api from '../../Api';

export default function* watcher() {
  yield takeLatest(AUTHORIZATION_REQUEST, handleAuthorize);
}

function* handleAuthorize(action) {
  try {
    const { formData } = action.payload;
    const { data } = yield call(Api.authorize, formData);
    yield put({
      type: AUTHORIZATION_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    console.warn(e);
    yield put({
      type: AUTHORIZATION_FAIL,
      message: e.message,
    });
  }
}
