import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { getEntries, getFeatured } from '../services/contentfulClient'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  state = {
    featured: {},
    background: {}
  }

  componentDidMount() {
    getEntries('background').then(response =>
      this.setState({ background: this.getCarouselItem(response) })
    )

    getFeatured('blogPost').then(response => {
      response.items.map((item, key) =>
        this.setState({
          featured: {
            title: item.fields.title,
            description: item.fields.description,
            slug: item.fields.slug
          }
        })
      )
    })
  }

  getCarouselItem(images) {
    let imgUrl = []
    let max
    images.map(item => {
      let result = item.fields.image
      max = result.length - 1

      return result.map(image => {
        return imgUrl.push('https:' + image.fields.file.url)
      })
    })

    return imgUrl[Math.floor(Math.random() * +max)]
  }

  render() {
    return (
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img className="sm-block w-100" src={this.state.background} alt={''} />
          <Carousel.Caption>
            <div className="d-flex align-items-center flex-column caption-container">
              <div className="d-flex align-items-center flex-column my-auto p-2 p-lg-4 caption-color">
                <h1 className="display-4 mt-auto">{this.state.featured.title}</h1>
                <p className="lead">{this.state.featured.description}</p>
                <p className="lead mb-auto">
                  <Link
                    to={`/post/${this.state.featured.slug}`}
                    className="text-white font-weight-bold">
                    Continue reading...
                  </Link>
                </p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Header
