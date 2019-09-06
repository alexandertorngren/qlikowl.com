import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import { Link } from 'react-router-dom'
import { MdPersonPin, MdChevronRight } from 'react-icons/md'
import { FaCalendarDay, FaHashtag } from 'react-icons/fa'

const DateFormated = props => <span>{new Date(props.date).toLocaleDateString()}</span>

const BlogPost = props => {
  const { blogImage, author } = props.post
  const fileUrl = `https:${blogImage.fields.file.url}`

  if (props.slugState !== undefined) {
    return (
      <div className="blog-post" id={props.post.slug}>
        <Row>
          <Col>
            <img className="mb-3 img-fluid" src={fileUrl} alt={blogImage.fields.title} />
            <h2 className="blog-post-title">
              <Link to={`/post/${props.post.slug}`}>{props.post.title}</Link>
            </h2>
            <p className="blog-post-meta">
              <FaCalendarDay /> <DateFormated date={props.post.publishDate} /> by{' '}
              <Link to={`/author/${author.fields.slug}`}>
                <MdPersonPin /> {author.fields.name}
              </Link>
            </p>
            <p className="blog-post-body">{props.post.body}</p>
            <p className="blog-post-footer mt-4 d-flex justify-content-between">
              <div>
                {props.post.tags.map((item, key) => (
                  <Link to={`/tags/${item}`} key={item} className="mr-2 tags">
                    <kbd>
                      <FaHashtag />
                      {item}
                    </kbd>
                  </Link>
                ))}
              </div>
              <Link d onClick={props.goBack}>
                Back <MdChevronRight />
              </Link>
            </p>
          </Col>
        </Row>
        <div className="dropdown-divider"></div>
      </div>
    )
  } else {
    return (
      <div className="blog-post" id={props.post.slug}>
        <Row>
          <Col lg={4} sm={12}>
            <ResponsiveEmbed aspect="1by1">
              <img className="mr-3 img-fluid" src={fileUrl} alt={blogImage.fields.title} />
            </ResponsiveEmbed>
          </Col>
          <Col lg={8} sm={12}>
            <h2 className="blog-post-title">
              <Link to={`/post/${props.post.slug}`}>{props.post.title}</Link>
            </h2>
            <p className="blog-post-meta">
              <FaCalendarDay /> <DateFormated date={props.post.publishDate} /> by{' '}
              <Link to={`/author/${author.fields.slug}`}>
                <MdPersonPin /> {author.fields.name}
              </Link>
            </p>
            <p className="blog-post-body">{props.post.description}</p>
            <p className="mt-4">
              <Link to={`/post/${props.post.slug}`} style={{ float: 'right' }}>
                Continue reading <MdChevronRight />
              </Link>
            </p>
          </Col>
        </Row>
        <div className="dropdown-divider"></div>
      </div>
    )
  }
}

export default BlogPost
