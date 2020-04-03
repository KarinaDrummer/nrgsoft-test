import { combineReducers } from 'redux'
import { assoc, evolve, not, dissoc } from "ramda"
import { ADD_POST, TOGGLE_LIKE, REMOVE_POST } from './actionTypes'

const initialState = { registry: {} }

/*
*  I'm sorry if it looks like a Lisp, but please, don't worry,
*  I guess I can write code like a normal human
*/

function posts(state = initialState, action) {
  switch (action.type) {

    case ADD_POST:
      return assoc( 'registry',
        assoc( action.post.localIndex, action.post, state.registry ),
        state )

    case TOGGLE_LIKE:
      return assoc( 'registry',
        assoc( action.localIndex,
          evolve({isLiked: not}, state.registry[action.localIndex]),
          state.registry ),
        state )

    case REMOVE_POST:
      return assoc( 'registry',
        dissoc( action.localIndex, state.registry ),
        state )

    default:
      return state
  }
}

const rootReducer = combineReducers({
  posts,
})

export default rootReducer
