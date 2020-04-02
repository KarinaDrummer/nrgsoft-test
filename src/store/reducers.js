import { combineReducers } from 'redux'
import { dissoc } from "ramda"
import { ADD_POST, REMOVE_POST } from './types'

const initialState = {
  registry: {},
}

function posts(state = initialState, action) {
  switch (action.type) {

    case ADD_POST:
      return {
        ...state,
        registry: { ...state.registry, [action.post.localIndex]: action.post }
      }

    case REMOVE_POST:
      return {
        ...state,
        registry: dissoc( action.localIndex, state.registry )
      }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  posts,
})

export default rootReducer
