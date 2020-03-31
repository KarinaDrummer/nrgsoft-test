import { combineReducers } from 'redux'
import { without } from "ramda"
import mock from '../config/mock'

const initialState = {
  list: mock,
}

function posts(state = initialState, action) {
  switch (action.type) {

    case 'ADD_POST':
      return { ...state, posts: [...state.posts, action.post] }

    case 'REMOVE_POST':
      return { ...state, posts: without([action.post], state.posts) }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  posts,
})

export default rootReducer
