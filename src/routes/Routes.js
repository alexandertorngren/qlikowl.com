import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
//import Home from '../containers/Home'
import BlogHome from '../containers/BlogHome'
import BlogPost from '../containers/BlogPost'
import LandingPage from '../containers/LandingPage'

const history = createBrowserHistory()

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={LandingPage} history={history} />
      <Route path="/home" component={BlogHome} history={history} />
      <Route exact path="/blog" component={BlogHome} />
      <Route path="/blog/p/:page" component={BlogHome} history={history} />
      <Route path="/post/:slug" component={BlogPost} history={history} />
    </Switch>
  </Router>
)

export default Routes
