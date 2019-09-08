import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
//import Home from '../containers/Home'
//Aimport BlogHome from '../containers/BlogHome'
import LandingPage from '../containers/LandingPage'
import Blog from '../containers/Blog'

const Routes = props => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Blog} />
      <Route path="/post/:slug" component={Blog} />
      <Route component={LandingPage} />
    </Switch>
  </Router>
)

export default Routes
