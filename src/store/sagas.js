import { call, put, takeEvery, all } from 'redux-saga/effects'
import api from '../api'

// Worker
function* fetchPost(action) {
  try {
    const post = yield call(api.fetchPosts, action.payload.subredditID)
    yield put({ type: "ADD_POST", post: post })
  } catch (error) {
    console.error(error.message)
  }
}

// Watcher
function* watchPostRequests() {
  yield takeEvery("FETCH_POST", fetchPost)
}

export default function* rootSaga() {
  yield all([
    watchPostRequests()
  ])
}
