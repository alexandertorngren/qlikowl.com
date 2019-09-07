import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Routes from './routes/Routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'

ReactDOM.render(<Routes />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

switch (process.env.NODE_ENV) {
  case 'production':
    serviceWorker.unregister()
    break
  case 'development':
    serviceWorker.unregister()
    break
  default:
    serviceWorker.unregister()
}
