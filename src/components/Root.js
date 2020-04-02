import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { store, persistor } from '../store'
import Home from '../pages/Home'
import Error from '../pages/Error'

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Error} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
)

export default Root
