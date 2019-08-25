import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Blog from './Blog'
import SideBar from './SideBar'

class MainContainer extends React.Component {
  render() {
    return (
      <Container role="main">
        <Row>
          <Col md="8" className="blog-main">
            <h3 className="pb-4 mb-4 font-italic border-bottom">From the Firehose</h3>
            <Blog />
          </Col>
          <aside className="col-md-4 blog-sidebar">
            <SideBar />
          </aside>
        </Row>
      </Container>
    )
  }
}

export default MainContainer
