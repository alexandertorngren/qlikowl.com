import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import { Link } from 'react-router-dom'
import { MdPersonPin, MdChevronRight } from 'react-icons/md'
import { FaCalendarDay } from 'react-icons/fa'

const DateFormated = props => <span>{new Date(props.date).toLocaleDateString()}</span>

class BlogPost extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      toggle: false
    }
  }

  toggle() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div className="blog-post" id={this.props.slug}>
        <Row>
          <Col lg={4} sm={12}>
            <ResponsiveEmbed aspect="1by1">
              <img
                className="mr-3 img-fluid"
                src={this.props.blogImage.fields.file.url}
                alt={this.props.blogImage.fields.title}
              />
            </ResponsiveEmbed>
          </Col>
          <Col lg={8} sm={12}>
            <h2 className="blog-post-title">
              <Link to={`/post/${this.props.slug}`}>{this.props.title}</Link>
            </h2>
            <p className="blog-post-meta">
              <FaCalendarDay /> <DateFormated date={this.props.publishDate} /> by{' '}
              <Link to={`/author/${this.props.author.fields.slug}`}>
                <MdPersonPin /> {this.props.author.fields.name}
              </Link>
            </p>
            <p className="blog-post-body">
              {this.props.singlePost ? this.props.body : this.props.description}
            </p>
            <p className="mt-4">
              {this.props.singlePost ? (
                <a href="#back" onClick={this.props.goBack} style={{ float: 'right' }}>
                  Back <MdChevronRight />
                </a>
              ) : (
                <Link to={`/post/${this.props.slug}`} style={{ float: 'right' }}>
                  Continue reading <MdChevronRight />
                </Link>
              )}
            </p>
          </Col>
        </Row>
        <div className="dropdown-divider"></div>
      </div>
    )
  }
}

export default BlogPost
