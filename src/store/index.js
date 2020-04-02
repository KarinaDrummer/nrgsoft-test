import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from './sagas'
import rootReducer from './reducers'

const
  persistConfig = { key: 'root', storage },
  persistedReducer = persistReducer(persistConfig, rootReducer),
  sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)
