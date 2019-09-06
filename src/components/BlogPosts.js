import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import { Link } from 'react-router-dom'
import { MdPersonPin, MdChevronRight } from 'react-icons/md'
import { FaCalendarDay } from 'react-icons/fa'
import { getEntries } from '../services/contentfulClient'

const DateFormated = props => <span>{new Date(props.date).toLocaleDateString()}</span>

export default class BlogPosts extends Component {
  state = {
    blogPosts: [],
    multi: true
  }

  componentDidMount() {
    console.log(this.props);
    this._asyncFetch = getEntries({ content_type: 'blogPost' })
      .then(response => {
        this._asyncFetch = null
        this.setState({
          blogPosts: response.items,
          multi: response.items.length > 1 ? true : false
        })
      })
  }

  componentWillUnmount() {
    if (this._asyncFetch) {
      this._asyncFetch = null
    }
  }

  render() {
    const blogItems = this.state.blogPosts.map(post => {
      return (
        <div className="blog-post" id={post.fields.slug}>
          <Row>
            <Col lg={4} sm={12}>
              <ResponsiveEmbed aspect="1by1">
                <img
                  className="mr-3 img-fluid"
                  src={post.fields.blogImage.fields.file.url}
                  alt={post.fields.blogImage.fields.title}
                />
              </ResponsiveEmbed>
            </Col>
            <Col lg={8} sm={12}>
              <h2 className="blog-post-title">
                <Link to={`/post/${post.fields.slug}`}>{post.fields.title}</Link>
              </h2>
              <p className="blog-post-meta">
                <FaCalendarDay /> <DateFormated date={post.fields.publishDate} /> by{' '}
                <Link to={`/author/${post.fields.author.fields.slug}`}>
                  <MdPersonPin /> {post.fields.author.fields.name}
                </Link>
              </p>
              <p className="blog-post-body">{post.fields.description}</p>
              <p className="mt-4">
                <Link to={`/post/${post.fields.slug}`} style={{ float: 'right' }}>
                  Continue reading <MdChevronRight />
                </Link>
              </p>
            </Col>
          </Row>
          <div className="dropdown-divider"></div>
        </div>
      )
    })
    return <div>{blogItems}</div>
  }
}
