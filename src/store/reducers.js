import { combineReducers } from 'redux'
import { without } from "ramda"
import { ADD_POST, REMOVE_POST } from './types'

const initialState = {
  list: [],
}

function posts(state = initialState, action) {
  switch (action.type) {

    case ADD_POST:
      return { ...state, list: [...state.list, action.post] }

    case REMOVE_POST:
      return { ...state, list: without([action.post], state.list) }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  posts,
})

export default rootReducer
