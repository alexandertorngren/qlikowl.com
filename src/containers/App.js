import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const App = props => (
  <div>
    <Navigation />
    {props.children}
    <Footer />
  </div>
)

export default App
