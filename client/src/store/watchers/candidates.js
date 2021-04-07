import { takeLatest, call, put } from 'redux-saga/effects';
import Api from '../../Api';
import * as candidate from '../actions/candidates';

export default function* watcher() {
  yield takeLatest(candidate.GET_CANDIDATES_REQUEST, handleCandidatesList);
  yield takeLatest(candidate.POST_VOTE_REQUEST, handleVote);
}

function* handleCandidatesList() {
  try {
    const { data } = yield call(Api.getCandidatesList);
    yield put({
      type: candidate.GET_CANDIDATES_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    console.warn(e);
    yield put({
      type: candidate.GET_CANDIDATES_FAIL,
      message: e.message,
    });
  }
}

function* handleVote(action) {
  try {
    const { id, token } = action.payload;
    const { data } = yield call(Api.postVote, id, token);
    yield put({
      type: candidate.POST_VOTE_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    console.warn(e);
    yield put({
      type: candidate.POST_VOTE_FAIL,
      message: e.message,
    });
  }
}
