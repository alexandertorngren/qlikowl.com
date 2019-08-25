import React from 'react'
import BlogPost from './subs/BlogPost'
import API from '../services/api'
import Pagination from './subs/Pagination'

class Blog extends React.Component {
  state = {
    blogPosts: []
  }

  componentDidMount() {
    API.get('/article').then(res => {
      const blogPosts = res.data
      this.setState({ blogPosts })
    })
  }

  componentWillUnmount() {
    this.setState({ articles: [] })
  }

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
}

export default Blog
