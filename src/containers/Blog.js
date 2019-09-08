import React from 'react'
import App from './App'
import SideBar from '../components/SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import BlogPosts from '../components/BlogPosts'
import Header from '../components/Header'
import { Route } from 'react-router-dom'
import { getEntries } from '../services/contentfulClient'

class Blog extends React.Component {
  state = {
    posts: [],
    slug: this.props.match.params.slug,
    hasData: null
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateComponent()
  }

  componentWillUnmount() {
    if (this._asyncFetch) {
      this._asyncFetch = null
    }
  }

  updateComponent() {
    if (this.state.slug !== this.props.match.params.slug) {
      this.setState({ slug: this.props.match.params.slug })
      this.fetchData()
    }
  }

  fetchData() {
    let query = { content_type: 'blogPost' }

    if (this.state.hasData === null) {
      this._asyncFetch = getEntries(query).then(posts => {
        this._asyncFetch = null
        this.setState({
          posts: posts.items,
          hasData: true,
          slug: this.props.match.params.slug
        })
      })
    } else if (this.state.slug !== this.props.match.params.slug) {
      query = { content_type: 'blogPost', 'fields.slug': this.props.match.params.slug }

      this._asyncFetch = getEntries(query).then(posts => {
        this._asyncFetch = null
        this.setState({
          posts: posts.items,
          hasData: true,
          slug: this.props.match.params.slug
        })
      })
    }
  }

  render() {
    return (
      <App>
        <Route path="/home" render={() => <Header />} />
        <Container>
          <Card
            body
            style={this.props.match.params.slug ? { marginTop: '50px' } : { marginTop: '-50px' }}>
            <Row>
              <Col lg="8" sm="12">
                <BlogPosts posts={this.state.posts} />
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

export default Blog
