import { combineReducers } from 'redux'
import { assoc, evolve, not, dissoc } from "ramda"
import {
  ADD_POST,
  TOGGLE_LIKE,
  REMOVE_POST,
} from './actionTypes'

const initialState = {
  registry: {},
}

function posts(state = initialState, action) {
  switch (action.type) {

    case ADD_POST:
      return {
        ...state,
        registry: {
          ...state.registry,
          [action.post.localIndex]: action.post
        }
      }

    case TOGGLE_LIKE:
      return {
        ...state,
        registry: assoc(
          action.localIndex,
          evolve({isLiked: not}, state.registry[action.localIndex]),
          state.registry
        )
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
