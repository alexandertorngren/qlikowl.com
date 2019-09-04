import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import App from './App'
import Blog from './Blog'
import BlogPost from './subs/BlogPost'

const history = createBrowserHistory()


const Routes = props => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Blog} />
      <Route path="/page/:page" component={App} />
      <Route path="/post/:slug" component={BlogPost} />
    </Switch>
  </Router>
)

export default Routes;