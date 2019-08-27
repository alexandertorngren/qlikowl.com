import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import bg from '../media/layout/bg3.jpg'

const Header = props => {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img className="sm-block w-100" src={bg} alt="QlikOwl.com" />
        <Carousel.Caption>
          <div className="d-flex align-items-center flex-column caption-container">
            <div className="d-flex align-items-center flex-column my-auto p-2 p-lg-4 caption-color">
              <h1 className="display-4 mt-auto">Title of a longer featured blog post</h1>
              <p className="lead">
                Multiple lines of text that form the lede, informing new readers quickly and
                efficiently about what’s most interesting in this post’s contents.
              </p>
              <p className="lead mb-auto">
                <a href="http://localhost:3000" className="text-white font-weight-bold">
                  Continue reading...
                </a>
              </p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Header
