import {
  FETCH_POST,
  ADD_POST,
  TOGGLE_LIKE,
  REMOVE_POST,
} from './actionTypes'

export function fetchPost(subredditID) {
  return { type: FETCH_POST, subredditID }
}

export function addPost(post) {
  return { type: ADD_POST, post }
}

export function likePost(localIndex) {
  return { type: TOGGLE_LIKE, localIndex }
}

export function removePost(localIndex) {
  return { type: REMOVE_POST, localIndex }
}
