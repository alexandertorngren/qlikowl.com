import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import { Link } from 'react-router-dom'
import { MdPersonPin, MdChevronRight } from 'react-icons/md'
import { FaCalendarDay, FaHashtag } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'

const DateFormated = props => <span>{new Date(props.date).toLocaleDateString()}</span>

const blogPostMeta = fields => (
  <p className="blog-post-meta">
    <FaCalendarDay /> <DateFormated date={fields.publishDate} /> by{' '}
    <Link to={`/author/${fields.author.fields.slug}`}>
      <MdPersonPin /> {fields.author.fields.name}
    </Link>
  </p>
)

const renderImage = (image, slug) => {
  if (image && image.fields.file) {
    return (
      <Link to={`/post/${slug}`}>
        <img className="blog-post-image" src={image.fields.file.url} alt={image.fields.title} />
      </Link>
    )
  }
}

const BlogPosts = props => {
  let blogObject

  if (!props.listView) {
    blogObject = props.posts.map(post => {
      let fields = post.fields
      return (
        <div className="blog-post" key={fields.slug}>
          <Row>
            <Col>
              {renderImage(fields.blogImage, fields.slug)}
              <h2 className="blog-post-title">{fields.title}</h2>
              {blogPostMeta(fields)}

              <ReactMarkdown source={fields.body} className="blog-post-body" />

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

                <Link to={'/home'}>
                  Back <MdChevronRight />
                </Link>
              </div>
            </Col>
          </Row>
          <div className="dropdown-divider"></div>
        </div>
      )
    })
  } else {
    blogObject = props.posts.map(post => {
      let fields = post.fields
      return (
        <div className="blog-post" key={fields.slug}>
          <Row>
            <Col lg={4} sm={12}>
              <ResponsiveEmbed aspect="1by1">
                {renderImage(fields.blogImage, fields.slug)}
              </ResponsiveEmbed>
            </Col>
            <Col lg={8} sm={12}>
              <h2 className="blog-post-title">
                <Link to={`/post/${fields.slug}`} slug={fields.slug}>
                  {fields.title}
                </Link>
              </h2>
              {blogPostMeta(fields)}
              <p className="blog-post-body">{fields.description}</p>
              <p className="mt-4">
                <Link to={`/post/${fields.slug}`} style={{ float: 'right' }}>
                  Continue reading <MdChevronRight />
                </Link>
              </p>
            </Col>
          </Row>
          <div className="dropdown-divider"></div>
        </div>
      )
    })
  }

  return blogObject
}

export default BlogPosts
