import React from 'react'
import App from './App'
import Heading from '../components/Header'
import SideBar from '../components/SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import BlogPost from '../components/BlogPost'
import { getSite } from '../services/contentfulClient'

class BlogSlug extends React.Component {
  state = {
    slug: this.props.match.params.slug,
  }
  
  componentDidMount() {
    console.log(this.state.slug, this.props.match.params.slug)

    this._asyncRequest = getSite(this.state.slug).then(response => {
      this._asyncRequest = null
      this.setState({
        site: response.site.fields,
        person: {
          person: response.person.fields,
          social: {
            github: 'https://github.com/' + response.person.fields.github,
            linkedIn: 'https://linkedin.com/in/' + response.person.fields.linkedIn,
            facebook: 'https://www.facebook.com/' + response.person.fields.facebook
          }
        },
        blogPosts: response.blogPosts.items,
        featured: response.featured.items,
        background: response.background
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      this.props.onChange(this.state.slug)
    }
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel()
    }
  }

  render() {
    console.log(this.state)
    if (this.state.blogPosts.length < 1) {
      return <div>LOADING</div>
    } else {
      return (
        <App site={this.state.site} person={this.state.person}>
          <Heading featured={this.state.featured} />
          <Container>
            <Card body style={{ marginTop: '-50px' }}>
              <Row>
                <Col lg="8" sm="12">
                  {this.state.blogPosts.map((post, key) => {
                    return (
                      <BlogPost
                        key={key}
                        post={post.fields}
                        goBack={this.state.history.goBack}
                        slugState={this.state.slug}
                      />
                    )
                  })}
                </Col>
                <Col lg="4" sm="12">
                  <SideBar data={this.state.person} />
                </Col>
              </Row>
            </Card>
          </Container>
        </App>
      )
    }
  }
}

export default BlogSlug
