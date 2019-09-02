import React from 'react'
import Template from '../templates/base'
import Heading from './Header'
//import SideBar from './SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import BlogPost from './subs/BlogPost'
import initClient from '../services/contentfulClient'

//import Pagination from './subs/Pagination'
console.log(process.env.REACT_APP_SPACE_ID);
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
      .getEntries()
      .then(response => response)
      .catch(error => console.error(error));
  }

  render() {
    const { contentTypes, blogPosts } = this.state;
    console.log(contentTypes);
    console.log(blogPosts);

    return (
      <Template>
        <Heading />
        <Container>
          <Row>
            <Col lg="12" sm="12">
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </Template>
    )
  }

/*
  createPosts() {
    this.blogPosts = this.state.blogPosts.map((item, key) => {
      return (
        <div key={key}>
          <BlogPost
            title={item.title}
            date={item.date}
            author={item.author}
            summary={item.summary}
            body={item.body}
          />
        </div>
      )
    })

    return this.blogPosts
  }

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
