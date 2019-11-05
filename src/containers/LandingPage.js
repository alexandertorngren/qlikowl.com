import React from 'react'
import Navigation from '../components/Navigation'
import Col from 'react-bootstrap/Col'
import { IoLogoGithub, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io'
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { trackPage } from '../services/gTracker'
import Helmet from 'react-helmet'

import '../scss/_cover.scss'
import Footer from '../components/Footer'
import { getEntry, getSite, createSocialUrl } from '../services/contentfulClient'
import Loading from '../components/Loading'
import HandleScroll from '../services/HandleScroll'

class LandingPage extends React.Component {
  state = {
    author: '',
    background: '',
    site: '',
    hasData: false
  }

  myRef = React.createRef()

  componentDidMount = () => {
    this._asyncFetch = getSite()
      .then(response => {
        this._asyncFetch = null
        createSocialUrl(response.fields.owner)
        return response
      })
      .then(site => {
        this._asyncFetch = getEntry('H0EjxqdvViOmSP4VTDML7').then(backgrounds => {
          this._asyncFetch = null

          const images = backgrounds.image
          const len = images.length - 1

          this.setState(
            {
              site: site.fields,
              author: site.fields.owner.fields,
              background: images[Math.floor(Math.random() * +len)].fields.file.url,
              hasData: true
            },
            HandleScroll(this.props, this.myRef)
          )
        })
      })
  }

  componentWillUnmount() {
    if (this._asyncFetch) {
      this._asyncFetch = null
    }
  }

  render() {
    trackPage(this.props.match.path)

    if (!this.state.hasData) {
      return <Loading />
    }

    const { site, author, background } = this.state

    return (
      <div className="wrapper" ref={this.myRef}>
        <div
          className="cover-container"
          id="cover-page-bg"
          style={{ backgroundImage: `url(${background})` }}>
          <Helmet>
            <title>{`QlikOwl will soon be available! - ${process.env.REACT_APP_TITLE}`}</title>
            <meta name="description" content={site.description} />
            <meta name="og:image" content={background} />
          </Helmet>
          <Navigation site={site} author={author} path={this.props.match.path} />
          <div id="cover-page">
            <main role="main" className="cover">
              <div className="inner">
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
              </div>
            </main>
          </div>
          <Footer site={site} author={author} spc={true} className="fixed-bottom" />
        </div>
      </div>
    )
  }
}
export default LandingPage
