import { call, put, takeEvery, all } from 'redux-saga/effects'
import api from '../api'
import { FETCH_POST, ADD_POST } from './types'

// Worker
function* fetchPost(action) {
  try {
    const
      { data } = yield call(api.fetchPosts, action.payload.subredditID),
      randomIndex = Math.floor(Math.random() * (data.children.length)),
      { title, permalink } = data.children[randomIndex]

    yield put({ type: ADD_POST, post: { title, permalink } })

  } catch (error) {
    console.error(error.message)
  }
}

// Watcher
function* watchPostRequests() {
  yield takeEvery(FETCH_POST, fetchPost)
}

export default function* rootSaga() {
  yield all([
    watchPostRequests()
  ])
}
