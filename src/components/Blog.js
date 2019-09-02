import React from 'react'
import Template from '../templates/base'
import Heading from './Header'
import SideBar from './SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlogPost from './subs/BlogPost'
import initClient from '../services/contentfulClient'

//import Pagination from './subs/Pagination'
const client = initClient(process.env.REACT_APP_SPACE_ID, process.env.REACT_APP_ACCESS_TOKEN);

class Blog extends React.Component {
  state = {
    contentTypes: [],
    blogPosts: []
  }

  componentDidMount() {  
    this.getContents()
      .then(response =>
        this.setState({
          contentTypes: response
        })
      )
      .then(
        this.getEntries().then(response =>
          this.setState({
            blogPosts: response
          })
        )
      )
  }

  async getContents() {
    return await client
      .getContentTypes()
      .then(response => response.items)
      .catch(error => console.error(error));
  }

  async getEntries() {
    return await client
      .getEntries({ 'content_type': 'blogPost' })
      .then(response => response.items)
      .catch(error => console.error(error));
  }

  createPosts() {
    this.blogPosts = this.state.blogPosts.map((item, key) => {
      return (
        <div key={key}>
          <BlogPost
            title={item.fields.title}
            date={item.fields.publishDate}
            author={item.fields.author.fields.name}
            summary={item.fields.body}
            body={item.fields.body}
          />
        </div>
      )
    })

    return this.blogPosts
  }

  render() {
    const { blogPosts } = this.state;
    console.log(blogPosts);

    return (
      <Template>
        <Heading />
        <Container>
          <Row>
            <Col lg="8" sm="12">
              {this.createPosts()}
            </Col>
            <Col lg="4" sm="12">
              <SideBar />
            </Col>
          </Row>
        </Container>
      </Template>
    )
  }

/*
  

  render() {
    return (
      <div>
        {this.createPosts()}
        <Pagination />
      </div>
    )
  }

  */
}

export default Blog
