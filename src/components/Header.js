import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { getEntries } from '../services/contentfulClient'
import { Link } from 'react-router-dom'
import Loading from './Loading'

class Header extends React.Component {
  state = {
    featured: '',
    background: '',
    hasData: false
  }

  componentDidMount() {
    this._asyncFetch = getEntries({ content_type: 'background' }).then(images => {
      const backgroundImg = images.items.map(bg => {
        const image = bg.fields.image
        const len = Math.floor(Math.random() * +image.length - 1)
        return image[len].fields.file.url
      })

      this.setState({ background: backgroundImg })
      this._asyncFetch = null

      this._asyncFetch = getEntries({ content_type: 'blogPost', 'fields.featured': true }).then(
        response => {
          this._asyncFetch = null
          this.setState({
            featured: response.items[0].fields,
            hasData: true
          })
        }
      )
    })
  }

  componentWillUnmount() {
    if (this._asyncFetch) {
      this._asyncFetch = null
    }
  }

  render() {
    if (!this.state.hasData) {
      return <Loading />
    }

    const { background, featured } = this.state

    return (
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img className="sm-block w-100" src={background} alt={''} />
          <Carousel.Caption>
            <div className="d-flex align-items-center flex-column caption-container">
              <div className="d-flex align-items-center flex-column my-auto p-2 p-lg-4 caption-color">
                <h1 className="display-4 mt-auto">{featured.title}</h1>
                <p className="lead">{featured.description}</p>
                <p className="lead mb-auto">
                  <Link to={`/post/${featured.slug}`} className="text-white font-weight-bold">
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
