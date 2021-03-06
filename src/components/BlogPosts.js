import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import { Link } from 'react-router-dom'
import { MdPersonPin, MdChevronRight, MdChevronLeft } from 'react-icons/md'
import { FaCalendarDay, FaHashtag } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import Helmet from 'react-helmet'
import CodeBlock from './CodeBlock'
import Loading from './Loading'

const DateFormated = (props) => <span>{new Date(props.date).toLocaleDateString()}</span>

const blogPostMeta = (fields) => (
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
        <img
          className="blog-post-image"
          src={`${image.fields.file.url}?fm=png&f=face&fit=thumb`}
          alt={image.fields.title}
        />
      </Link>
    )
  }
}

const BlogPosts = (props) => {
  const blogObject = props.posts.map((post, key) => {
    let fields = post.fields

    return (
      <div className="blog-post" key={key}>
        <Row>
          <Col lg={12} sm={12}>
            <h1 className="blog-post-title">
              <Link to={`/post/${fields.slug}`} slug={fields.slug}>
                {fields.title}
              </Link>
            </h1>
            {blogPostMeta(fields)}
          </Col>
        </Row>
        <Row className="mb-4">
          <Col lg={4} sm={12}>
            <ResponsiveEmbed aspect="1by1">
              {renderImage(fields.blogImage, fields.slug)}
            </ResponsiveEmbed>
          </Col>
          <Col lg={8} sm={12}>
            <ReactMarkdown
              source={fields.description}
              renderers={{ code: CodeBlock }}
              className="blog-post-body"
            />
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
  return blogObject
}

const BlogPost = (props) => {
  if (!props.post) {
    return <Loading />
  }
  const { match, post } = props
  const fields = post.fields
  return (
    <div className="blog-post" key={fields.slug}>
      <Helmet>
        <title>{`${fields.metaTitle} - ${process.env.REACT_APP_TITLE}`}</title>
        <meta name="description" content={fields.description} />
        <meta property="og:url" content={process.env.PUBLIC_URL + match.url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={fields.metaTitle} />
        <meta property="og:description" content={fields.description} />
        <meta name="og:image" content={fields.blogImage.fields.file.url} />
      </Helmet>
      <Row>
        <Col>
          {renderImage(fields.blogImage, fields.slug)}
          <h1 className="blog-post-title">{fields.title}</h1>
          {blogPostMeta(fields)}

          <ReactMarkdown
            source={fields.body}
            renderers={{ code: CodeBlock }}
            className="blog-post-body"
          />

          <div className="blog-post-footer mt-4">
            <div className="d-flex flex-row justify-content-between">
              <Link to={'/home'} className="d-none d-sm-block">
                <MdChevronLeft /> Back
              </Link>
              <div className="d-flex flex-wrap justify-content-end align-items-end">
                {fields.tags.map((item) => (
                  <div className="m-1">
                    <Link to={`/tags/${item}`} key={item} className="tags">
                      <kbd>
                        <FaHashtag />
                        {item}
                      </kbd>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="dropdown-divider"></div>
    </div>
  )
}

export { BlogPosts, BlogPost }
