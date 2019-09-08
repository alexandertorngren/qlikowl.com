import React from 'react'
import Navigation from '../components/Navigation'
import Col from 'react-bootstrap/Col'
import { IoLogoGithub, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io'
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

import '../scss/_cover.scss'
import Footer from '../components/Footer'
import { getPerson, getEntry, getSite } from '../services/contentfulClient'
import Loading from '../components/Loading'

class LandingPage extends React.Component {
  state = {
    author: '',
    background: '',
    site: '',
    hasData: false
  }

  componentDidMount() {
    this._asyncFetch = getSite()
      .then(response => {
        this._asyncFetch = null
        return response
      })
      .then(site => {
        this._asyncFetch = getEntry('H0EjxqdvViOmSP4VTDML7')
          .then(backgrounds => {
            this._asyncFetch = null

            const images = backgrounds.image
            const len = images.length - 1

            return {
              site,
              background: images[Math.floor(Math.random() * +len)].fields.file.url
            }
          })
          .then(({ site, background }) => {
            this._asyncFetch = getPerson().then(author => {
              this._asyncFetch = null
              this.setState({ site: site.fields, author: author.fields, background, hasData: true })
            })
          })
      })
  }

  componentWillUnmount() {
    if (this._asyncFetch) {
      this._asyncFetch = null
    }
  }

  render() {
    if (!this.state.hasData) {
      return <Loading className="w-100 h-100 position-absolute" style={{ marginTop: '-56px' }} />
    }

    const { site, author, background } = this.state

    return (
      <div
        className="cover-container"
        id="cover-page-bg"
        style={{ backgroundImage: `url(${background})` }}>
        <Navigation site={site} author={author} path={this.props.match.path} />
        <Col id="cover-page">
          <main role="main" className="inner cover">
            <h1 className="font-italic">Still under development!</h1>
            <p className="lead">The page will soon be available with a lot of content</p>
            <div className="p-4">
              <h4 className="font-italic">Get social with me</h4>
              <div className="d-flex justify-content-around">
                <a
                  href={author.github}
                  className="text-center text-light"
                  target="_blank"
                  rel="noopener noreferrer">
                  <IoLogoGithub size={40} />
                  <br />
                  Github
                </a>

                <a
                  href={author.linkedIn}
                  className="text-center text-light"
                  target="_blank"
                  rel="noopener noreferrer">
                  <IoLogoLinkedin size={40} />
                  <br />
                  LinkedIn
                </a>

                <a
                  href={author.facebook}
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
              <Link to={'/home'} className="btn btn-secondary">
                Take a sneak peak <MdChevronRight />
              </Link>
            </p>
          </main>
        </Col>
        <Footer site={site} author={author} className="fixed-bottom" />
      </div>
    )
  }
}
export default LandingPage
