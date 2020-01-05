import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import { IoLogoGithub, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io'
import { MdChevronRight } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { trackPage } from '../services/gTracker'
import Helmet from 'react-helmet'
import client from '../services/contentful'

import '../scss/_cover.scss'
import Footer from '../components/Footer'

const LandingPage = (props) => {
  const [state, setState] = useState()
  const { pathname } = useLocation()
  trackPage(props.match.url)

  useEffect(() => {
    const getData = async () => {
      try {
        let author = await client.getEntry(process.env.REACT_APP_OWNER_ID)
        let site = await client.getEntry(process.env.REACT_APP_SITE_ID)
        let bg = await client.getEntry(process.env.REACT_APP_BG_ID)
        let img = await bg.fields.image
        let background = await img[Math.floor(Math.random() * +img.length - 1)]

        setState({
          author: author.fields,
          background: background.fields.file.url,
          site: site.fields,
          loaded: true
        })
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [props, pathname])

  if (!state) {
    return false
  }
  const { site, author, background } = state

  return (
    <div className="wrapper">
      <div
        className="cover-container"
        id="cover-page-bg"
        style={{ backgroundImage: `url(${background})` }}>
        <Helmet>
          <title>{`QlikOwl will soon be available! - ${process.env.REACT_APP_TITLE}`}</title>
          <meta name="description" content={site.description} />
          <meta name="og:image" content={background} />
          <meta property="og:url" content={process.env.PUBLIC_URL + props.match.url} />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content={`QlikOwl will soon be available! - ${process.env.REACT_APP_TITLE}`}
          />
          <meta property="og:description" content={site.description} />
        </Helmet>
        <Navigation site={site} author={author} path={props.match.url} />
        <div id="cover-page">
          <main role="main" className="cover">
            <div className="inner">
              <h1 className="font-italic">Still under development!</h1>
              <p className="lead">The page will soon be available with a lot of content</p>
              <div className="p-4">
                <h4 className="font-italic">Get social with me</h4>
                <div className="d-flex justify-content-around">
                  <a
                    href={site.owner.fields.github}
                    className="text-center text-light"
                    target="_blank"
                    rel="noopener noreferrer">
                    <IoLogoGithub size={40} />
                    <br />
                    Github
                  </a>

                  <a
                    href={site.owner.fields.linkedIn}
                    className="text-center text-light"
                    target="_blank"
                    rel="noopener noreferrer">
                    <IoLogoLinkedin size={40} />
                    <br />
                    LinkedIn
                  </a>

                  <a
                    href={site.owner.fields.facebook}
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
        <Footer site={site} author={site.owner.fields} spc={true} className="fixed-bottom" />
      </div>
    </div>
  )
}
export default LandingPage
