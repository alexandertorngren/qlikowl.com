import React from 'react'
import App from './App'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import BlogPosts from '../components/BlogPosts'

class BlogPost extends React.Component {
  state = {
    slug: this.props.match.params.slug
  }

  render() {
    if (!this.state.slug) {
      return <div>LOADING</div>
    } else {
      return (
        <App site={this.state.site} person={this.state.person}>
          <Header featured={this.state.featured} />
          <Container>
            <Card body style={{ marginTop: '-50px' }}>
              <Row>
                <Col lg="8" sm="12">
                  <BlogPosts slug={this.state.slug} history={this.props.history} />
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
}

export default BlogPost
