import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const App = props => (
  <div>
    <Navigation site={props.site} author={props.author} />
    {props.children}
    <Footer site={props.site} />
  </div>
)

export default App
