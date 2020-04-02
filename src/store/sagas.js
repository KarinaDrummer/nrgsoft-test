import { call, put, takeEvery, all } from 'redux-saga/effects'
import { v4 as uuidv4 } from 'uuid'
import api from '../api'
import { FETCH_POST, ADD_POST } from './types'

// Worker
function* fetchPost(action) {
  try {
    const
      { data: response } = yield call(api.fetchPosts, action.subredditID),
      { children: listOfPosts } = response.data,
      randomIndex = Math.floor(Math.random() * (listOfPosts.length)),
      localIndex = uuidv4(),
      { title, permalink } = listOfPosts[randomIndex].data

    yield put({ type: ADD_POST, post: { localIndex, title, permalink } })

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
