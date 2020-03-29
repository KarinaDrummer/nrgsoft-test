import React from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Error } from '~/pages/*'
import { Layout, Progress } from '~/components/*'

const AsyncUserPage = Loadable({
  loader: () => import('../pages/User'),
  loading: Progress,
})

const Router = () =>
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/members/:id" component={AsyncUserPage} />
        <Route component={Error} />
      </Switch>
    </Layout>
  </BrowserRouter>

export default Router
