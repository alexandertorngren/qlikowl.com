import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

const App = props => (
  <Router>
    <Navigation site={props.site} author={props.author} />
    {props.children}
    <Footer site={props.site} />
  </Router>
)

export default App
