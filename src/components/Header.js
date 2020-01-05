import React from 'react'
import { Link } from 'react-router-dom'
//import Loading from './Loading'
import { MdChevronRight } from 'react-icons/md'
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'

const Header = (props) => {
  const { pathname } = useLocation()

  return (
    <div
      className="header-fixed w-100"
      style={{
        backgroundImage: `url(${props.background})`,
        height: props.height,
        width: props.width
      }}>
      <div className="header-overlay" style={{ height: props.height, width: props.width }}>
        <Container
          className="header-container"
          style={
            pathname === '/home'
              ? {
                  maxHeight: props.height,
                  paddingTop: props.height / 5
                }
              : {}
          }>
          {pathname === '/home' ? (
            <div className="featured d-flex align-items-left flex-column">
              <Row>
                <Col lg={12} sm={12}>
                  <Helmet>
                    <title>{`${props.featured.fields.metaTitle} - ${process.env.REACT_APP_TITLE}`}</title>
                    <meta name="description" content={props.featured.fields.description} />
                    <meta
                      name="og:image"
                      content={props.featured.fields.blogImage.fields.file.url}
                    />
                  </Helmet>
                  <h1 className="display-4 mt-auto">{props.featured.fields.title}</h1>
                  <ReactMarkdown
                    source={props.featured.fields.description}
                    renderers={{ code: CodeBlock }}
                    className="d-flex align-items-left flex-column my-auto pb-4 caption-color"
                  />
                  <p className="lead mb-auto">
                    <Link
                      to={`/post/${props.featured.fields.slug}/featured`}
                      className="btn btn-secondary">
                      Continue reading <MdChevronRight />
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
          ) : null}
        </Container>
        {props.children}
      </div>
    </div>
  )
}

export default Header
