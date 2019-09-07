import React from 'react'
import App from './App'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import BlogPosts from '../components/BlogPosts'

class BlogHome extends React.Component {
  state = {
    page: this.props.match.params.page
  }

  componentDidMount() {
    this.setState({ page: this.props.match.params.page })
  }

  render() {
    return (
      <App>
        <Header />
        <Container>
          <Card body style={{ marginTop: '-50px' }}>
            <Row>
              <Col lg="8" sm="12">
                <BlogPosts slug={this.props.match.params.slug} history={this.props.history} />
              </Col>
              <Col lg="4" sm="12">
                <SideBar />
              </Col>
            </Row>
          </Card>
        </Container>
      </App>
    )
  }
}

export default BlogHome
