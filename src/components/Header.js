import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { MdChevronRight } from 'react-icons/md'
import Helmet from 'react-helmet'

const Header = props => {
  if (!props) {
    return <Loading />
  }

  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img className="sm-block w-100" src={props.background} alt={''} />
        <Carousel.Caption>
          <div className="d-flex align-items-center flex-column caption-container">
            <div className="d-flex align-items-center flex-column my-auto p-2 p-lg-4 caption-color">
              <Helmet>
                <title>{`${props.featured.metaTitle} - ${process.env.REACT_APP_TITLE}`}</title>
                <meta name="description" content={props.featured.description} />
                <meta name="og:image" content={props.featured.blogImage.fields.file.url} />
              </Helmet>
              <h1 className="display-4 mt-auto">{props.featured.title}</h1>
              <p className="lead">{props.featured.description}</p>
              <p className="lead mb-auto">
                <Link to={`/post/${props.featured.slug}`} className="text-white font-weight-bold">
                  Continue reading <MdChevronRight />
                </Link>
              </p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Header
