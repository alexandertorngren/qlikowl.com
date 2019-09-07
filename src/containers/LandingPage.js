import React from 'react'
import Navigation from '../components/Navigation'
import Col from 'react-bootstrap/Col'
import { IoLogoGithub, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io'
import { MdChevronRight } from 'react-icons/md'

import '../scss/_cover.scss'
import Footer from '../components/Footer'
import { getPerson, getEntries } from '../services/contentfulClient'
import Loading from '../components/Loading'

class LandingPage extends React.Component {
  state = {
    author: '',
    background: '',
    hasData: false
  }

  componentDidMount() {
    this._asyncFetch = getEntries({ content_type: 'background' }).then(response => {
      this._asyncFetch = null
      this.setState({ background: this.getCarouselItem(response.items) })
    })

    this._asyncFetch = getPerson().then(response => {
      this._asyncFetch = null
      this.setState({
        author: response.fields,
        hasData: true
      })
    })
  }

  getCarouselItem(items) {
    let fields = items[0].fields
    return fields.image[Math.floor(Math.random() * +fields.image.length - 1)].fields.file.url
  }

  render() {
    console.log('<LandingPage>', this.props)

    if (!this.state.hasData) {
      return <Loading className="w-100 h-100 position-absolute" style={{ marginTop: '-56px' }} />
    }

    return (
      <div
        className="cover-container"
        id="cover-page-bg"
        style={{ backgroundImage: `url(${this.state.background})` }}>
        <Navigation />

        <Col id="cover-page">
          <main role="main" className="inner cover">
            <h1 className="font-italic">Still under development!</h1>
            <p className="lead">The page will soon be available with a lot of content</p>
            <div className="p-4">
              <h4 className="font-italic">Get social with me</h4>
              <div className="d-flex justify-content-around">
                <a
                  href={this.state.author.github}
                  className="text-center text-light"
                  target="_blank"
                  rel="noopener noreferrer">
                  <IoLogoGithub size={40} />
                  <br />
                  Github
                </a>

                <a
                  href={this.state.author.linkedIn}
                  className="text-center text-light"
                  target="_blank"
                  rel="noopener noreferrer">
                  <IoLogoLinkedin size={40} />
                  <br />
                  LinkedIn
                </a>

                <a
                  href={this.state.author.facebook}
                  className="text-center text-light"
                  target="_blank"
                  rel="noopener noreferrer">
                  <IoLogoFacebook size={40} />
                  <br />
                  Facebook
                </a>
              </div>
            </div>
            <p className="lead">
              <a href="/home" className="btn btn-secondary">
                Take a sneak peak <MdChevronRight />
              </a>
            </p>
          </main>
        </Col>
        <Footer className="fixed-bottom" />
      </div>
    )
  }
}
export default LandingPage
