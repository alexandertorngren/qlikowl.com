import React from 'react'
import { Link } from 'react-router-dom'
//import Loading from './Loading'
import { MdChevronRight } from 'react-icons/md'
import Helmet from 'react-helmet'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'

const Header = (props) => {
  const { pathname } = useLocation()

  return (
    <div
      className="header-fixed w-100"
      style={{
        height: props.height,
        width: props.width
      }}>
      <div
        className="header-overlay"
        style={{
          backgroundImage: `url(${props.background})`,
          height: props.height,
          width: props.width
        }}>
        <Container
          className="header-container d-flex justify-content-center"
          style={
            pathname === '/home'
              ? {
                  maxHeight: props.height,
                  marginTop: '56px'

                  //paddingTop: props.height / 5
                }
              : {}
          }>
          {pathname === '/home' ? (
            <div className="featured d-flex flex-column align-self-center h-100">
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
