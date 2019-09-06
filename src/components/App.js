import React from 'react'
import Template from '../templates/base'
import Heading from './Header'
import SideBar from './SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends React.Component {
  render() {
    return (
      <Template>
        <Heading />
        <Container>
          <Row>
            <Col lg="8" sm="12">
              {this.props.children}
            </Col>
            <Col lg="4" sm="12">
              <SideBar />
            </Col>
          </Row>
        </Container>
      </Template>
    )
  }
}

export default App
