import { call, put, takeEvery, all } from 'redux-saga/effects'
import { v4 as uuidv4 } from 'uuid'
import { getPosts } from '../api'
import { FETCH_POST, ADD_POST } from './actionTypes'

// Worker
function* fetchPost(action) {
  try {
    const
      listOfPosts = yield call(getPosts, action.subredditID),
      randomIndex = Math.floor(Math.random() * (listOfPosts.length)),
      localIndex = uuidv4(),
      { title, permalink } = listOfPosts[randomIndex].data

    const post = { localIndex, title, permalink, isLiked: false }
    yield put({ type: ADD_POST, post })

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
