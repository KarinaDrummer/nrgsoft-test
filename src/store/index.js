import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const configureStore = (preloadedState) => {
  const store = createStore(rootReducer, preloadedState, composeWithDevTools())

  return store
}

const store = configureStore()

export default store
