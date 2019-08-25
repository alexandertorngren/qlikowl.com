import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'

//import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/scss/main.scss'

// Pages
import Home from './views/Home'

var hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
