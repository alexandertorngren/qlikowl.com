import React from 'react'
import Template from '../layout/base'
import Heading from '../components/Header'
import SideBar from '../components/SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = props => {
  return (
    <Template>
      <Heading />
      <Container>
        <Row>
          <Col lg="8" sm="12">
            main
          </Col>
          <Col lg="4" sm="12">
            <SideBar />
          </Col>
        </Row>
      </Container>
    </Template>
  )
}

export default Home
