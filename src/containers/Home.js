import React from 'react'
import App from './App'
import Heading from '../components/Header'
import SideBar from '../components/SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = props => (
  <App>
    <Heading />
    <Container>
      <Row>
        <Col lg="8" sm="12">
          {props.children}
        </Col>
        <Col lg="4" sm="12">
          <SideBar />
        </Col>
      </Row>
    </Container>
  </App>
)

export default Home
