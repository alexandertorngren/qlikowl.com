import React from 'react'
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { initReactGA } from '../services/gTracker'
import LandingPage from '../containers/LandingPage'
import { Blog, BlogTest } from '../containers/Blog'

const Routes = () => {
  initReactGA()
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Blog} />
        <Route path="/post/:slug" component={Blog} />
        <Route path="/tags/:tag" component={Blog} />

        <Route path="/explore" component={LandingPage} />
        <Route path="/about" component={LandingPage} />
        <Route path="/contact" component={LandingPage} />

        <Route path="/test" component={BlogTest} />
        <Route component={LandingPage} />

        <Redirect from="/explore" to="/" />
        <Redirect from="/about" to="/" />
        <Redirect from="/contact" to="/" />
        <Redirect from="/explore" to="/" />
      </Switch>
    </Router>
  )
}

export default Routes
