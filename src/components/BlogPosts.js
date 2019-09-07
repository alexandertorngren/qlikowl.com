import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import { Link } from 'react-router-dom'
import { MdPersonPin, MdChevronRight } from 'react-icons/md'
import { FaCalendarDay, FaHashtag } from 'react-icons/fa'
import { getEntries } from '../services/contentfulClient'
import Loading from './Loading'

const DateFormated = props => <span>{new Date(props.date).toLocaleDateString()}</span>

export default class BlogPosts extends Component {
  state = {
    blogPosts: [],
    slug: this.props.slug,
    multi: null,
    hasData: false
  }

  componentDidMount() {
    let query = { content_type: 'blogPost' }
    if (this.state.slug) {
      query = { content_type: 'blogPost', 'fields.slug': this.state.slug }
    }

    this._asyncFetch = getEntries(query).then(response => {
      this._asyncFetch = null
      this.setState({
        blogPosts: response.items,
        multi: response.items.length > 1 ? true : false,
        hasData: true
      })
    })
  }

  componentWillUnmount() {
    if (this._asyncFetch) {
      this._asyncFetch = null
    }
  }

  blogPostMeta(fields) {
    return (
      <p className="blog-post-meta">
        <FaCalendarDay /> <DateFormated date={fields.publishDate} /> by{' '}
        <Link to={`/author/${fields.author.fields.slug}`}>
          <MdPersonPin /> {fields.author.fields.name}
        </Link>
      </p>
    )
  }

  renderImage(image, slug) {
    if (image && image.fields.file) {
      if (slug !== undefined || null) {
        return (
          <Link to={`/post/${slug}`}>
            <img className="mb-3 img-fluid" src={image.fields.file.url} alt={image.fields.title} />
          </Link>
        )
      } else {
        return (
          <img
            className="mb-3 img-fluid w-100"
            src={image.fields.file.url}
            alt={image.fields.title}
          />
        )
      }
    } else {
      return ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { slug: nextProps.slug }
  }

  updateFunction(slug) {
    this.setState({ slug: slug })
    this.handleChange()
  }

  render() {
    if (!this.state.hasData) {
      return <Loading />
    }

    const blogItems = this.state.blogPosts.map(post => {
      const fields = post.fields

      if (this.state.multi) {
        return (
          <div className="blog-post" key={fields.slug}>
            <Row>
              <Col lg={4} sm={12}>
                <ResponsiveEmbed aspect="1by1">
                  {this.renderImage(fields.blogImage, fields.slug)}
                </ResponsiveEmbed>
              </Col>
              <Col lg={8} sm={12}>
                <h2 className="blog-post-title">
                  <Link to={`/post/${fields.slug}`} slug={fields.slug}>
                    {fields.title}
                  </Link>
                </h2>
                {this.blogPostMeta(fields)}
                <p className="blog-post-body">{fields.description}</p>
                <p className="mt-4">
                  <Link to={`/post/${fields.slug}`} style={{ float: 'right' }} slug={fields.slug}>
                    Continue reading <MdChevronRight />
                  </Link>
                </p>
              </Col>
            </Row>
            <div className="dropdown-divider"></div>
          </div>
        )
      } else {
        return (
          <div className="blog-post" key={fields.slug}>
            <Row>
              <Col>
                {this.renderImage(fields.blogImage)}
                <h2 className="blog-post-title">{fields.title}</h2>
                {this.blogPostMeta(fields)}
                <p className="blog-post-body">{fields.body}</p>
                <div className="blog-post-footer mt-4 d-flex justify-content-between">
                  <span>
                    {fields.tags.map(item => (
                      <Link to={`/tags/${item}`} key={item} className="mr-2 tags">
                        <kbd>
                          <FaHashtag />
                          {item}
                        </kbd>
                      </Link>
                    ))}
                  </span>

                  <Link to={'/'} onClick={this.props.history.goBack}>
                    Back <MdChevronRight />
                  </Link>
                </div>
              </Col>
            </Row>
            <div className="dropdown-divider"></div>
          </div>
        )
      }
    })

    return <div>{blogItems}</div>
  }
}
