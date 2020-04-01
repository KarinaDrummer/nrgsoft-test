import { FETCH_POST, ADD_POST, REMOVE_POST } from './types'

export function fetchPost(subredditID) {
  return { type: FETCH_POST, subredditID }
}

export function addPost(post) {
  return { type: ADD_POST, post }
}

export function removePost(post) {
  return { type: REMOVE_POST, post }
}
