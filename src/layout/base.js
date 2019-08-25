import React from 'react'
import Container from 'react-bootstrap/Container'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Navigation />
        <Container fluid="true" className="m-0 p-0">
          {children}
          <Footer />
        </Container>
      </div>
    )
  }
}

export default Template
