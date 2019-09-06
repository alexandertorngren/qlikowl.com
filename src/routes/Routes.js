import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from '../containers/Home'
import Blog from '../containers/Blog'
//import BlogSlug from '../containers/BlogSlug'

const history = createBrowserHistory()

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Blog} />

      <Route path="/posts" component={Blog} />
      <Route path="/post/:slug" component={Blog} />

      <Route path="/tags/:slug" component={Blog} />

      <Route path="/page/:page" component={Home} />
    </Switch>
  </Router>
)

export default Routes
