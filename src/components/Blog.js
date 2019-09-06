import React from 'react'
import Template from '../templates/base'
import Heading from './Header'
import SideBar from './SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import BlogPost from './subcomponent/BlogPost'
import { getEntries, getEntryBySlug } from '../services/contentfulClient'

class Blog extends React.Component {
  state = {
    blogPosts: [],
    slug: null,
    singlePost: false
  }

  componentDidMount() {
    if (this.state.slug !== null) {
      getEntryBySlug('blogPost', this.props.match.params.slug).then(response =>
        this.setState({ blogPosts: response, singlePost: true })
      )
    } else {
      getEntries('blogPost').then(response =>
        this.setState({ blogPosts: response, singlePost: false })
      )
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.match.params.slug !== this.state.slug &&
      nextProps.match.params.slug !== undefined
    ) {
      getEntryBySlug('blogPost', nextProps.match.params.slug).then(response =>
        this.setState({ blogPosts: response, singlePost: true, slug: nextProps.match.params.slug })
      )
    } else {
      getEntries('blogPost').then(response =>
        this.setState({ blogPosts: response, singlePost: false })
      )
    }
  }

  createPosts() {
    this.blogPosts = this.state.blogPosts.map((item, key) => {
      return (
        <div key={key}>
          <BlogPost
            slug={item.fields.slug}
            blogImage={item.fields.blogImage}
            title={item.fields.title}
            publishDate={item.fields.publishDate}
            author={item.fields.author}
            description={item.fields.description}
            body={item.fields.body}
            singlePost={this.state.singlePost}
            goBack={this.props.history.goBack}
          />
        </div>
      )
    })

    return this.blogPosts
  }

  render() {
    return (
      <Template>
        <Heading />
        <Container>
          <Card body style={{ marginTop: '-50px' }}>
            <Row>
              <Col lg="8" sm="12">
                {this.createPosts()}
              </Col>
              <Col lg="4" sm="12">
                <SideBar />
              </Col>
            </Row>
          </Card>
        </Container>
      </Template>
    )
  }
}

export default Blog
