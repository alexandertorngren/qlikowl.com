import React from 'react'
import { Link } from 'react-router-dom'
import { MdChevronRight } from 'react-icons/md'
import Helmet from 'react-helmet'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'

const Header = (props) => {
  const { pathname } = useLocation()

  if (props.clientWidth <= 768) {
    return null
  }
  return (
    <div
      className="header-fixed w-100"
      style={
        pathname === '/home'
          ? {
              paddingTop: '56px',
              height: `${props.clientHeight}px`,
              width: `${props.clientWidth}px`
            }
          : {}
      }>
      <div
        className="header-overlay"
        style={
          pathname === '/home'
            ? {
                backgroundImage: `url(${props.background})`,
                height: '100%'
              }
            : { backgroundImage: `url(${props.background})`, paddingTop: '156px' }
        }>
        <Container className="header-container d-flex justify-content-center h-100">
          {pathname === '/home' ? (
            <div className="featured d-flex flex-column align-self-center py-auto">
              <Helmet>
                <title>{`${props.featured.fields.metaTitle} - ${process.env.REACT_APP_TITLE}`}</title>
                <meta name="description" content={props.featured.fields.description} />
                <meta name="og:image" content={props.featured.fields.blogImage.fields.file.url} />
              </Helmet>
              <h1 className="display-4 mt-2 mx-auto">{props.featured.fields.title}</h1>
              <ReactMarkdown
                source={props.featured.fields.description}
                renderers={{ code: CodeBlock }}
                className="pb-4 caption-color mx-auto"
              />
              <div className="lead d-flex">
                <Link
                  to={`/post/${props.featured.fields.slug}/featured`}
                  className="btn btn-secondary  mx-auto">
                  Continue reading <MdChevronRight />
                </Link>
              </div>
            </div>
          ) : null}
        </Container>
        {props.children}
      </div>
    </div>
  )
}

export default Header
