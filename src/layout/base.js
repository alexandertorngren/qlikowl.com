import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Navigation />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
