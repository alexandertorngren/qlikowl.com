import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { getEntries } from '../services/contentfulClient'
import { Link } from 'react-router-dom'
import Loading from './Loading';

class Header extends React.Component {
  state = {
    featured: '',
    background: '',
    hasData: false
  }

  componentDidMount() {
    this._asyncRequest = getEntries({content_type:'background'}).then(response => {
      this._asyncRequest = null
      this.setState({ background: this.getCarouselItem(response.items) })

      this._asyncRequest = getEntries({ content_type: 'blogPost', 'fields.featured': true }).then(
        response => {
          this._asyncRequest = null
          this.setState({
            featured: response.items[0].fields,
            hasData: true
          })
        }
      )
    })
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel()
    }
  }

  getCarouselItem(images) {
    let imgUrl = []
    let max = images.length-1

    images.map(item => {
      return item.fields.image.map(image => {
        return imgUrl.push('https:' + image.fields.file.url)
      })
    })

    return imgUrl[Math.floor(Math.random() * +max)]
  }

  render() {
    if (!this.state.hasData) {
      return <Loading />
    }
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
