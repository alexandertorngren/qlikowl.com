import React from 'react'
import Template from '../templates/base'
import Heading from './Header'
import SideBar from './SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import BlogPost from './subcomponent/BlogPost'
import { getEntryBySlug } from '../services/contentfulClient'

class BlogSlug extends React.Component {
  state = {
    blogPosts: [],
    slug: this.props.match.params.slug,
    history: this.props.history
  }

  componentDidMount() {
    this._asyncRequest = getEntryBySlug('blogPost', this.props.match.params.slug).then(
      blogPosts => {
        this._asyncRequest = null
        this.setState({ blogPosts })
      }
    )
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel()
    }
  }

  render() {
    if (this.state.blogPosts.length < 1) {
      return <div>LOADING</div>
    } else {
      console.log(this.state.blogPosts)
      return (
        <Template>
          <Heading />
          <Container>
            <Card body style={{ marginTop: '-50px' }}>
              <Row>
                <Col lg="8" sm="12">
                  {this.state.blogPosts.map((item, key) => {
                    return (
                      <div key={key}>
                        <BlogPost
                          slug={item.fields.slug}
                          blogImage={item.fields.blogImage}
                          title={item.fields.title}
                          publishDate={item.fields.publishDate}
                          author={item.fields.author}
                          body={item.fields.body}
                          tags={item.fields.tags}
                          goBack={this.state.history.goBack}
                          slugState={this.state.slug}
                        />
                      </div>
                    )
                  })}
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
}

export default BlogSlug
