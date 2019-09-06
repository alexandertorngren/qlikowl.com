import React from 'react'
import Media from 'react-bootstrap/Media'
import { getPerson } from '../services/contentfulClient'
import { IoLogoGithub, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io'

class SideBar extends React.Component {
  state = {
    name: null,
    title: null,
    company: null,
    shortBio: null,
    github: null,
    linkedIn: null,
    facebook: null,
    image: null
  }

  componentDidMount() {
    getPerson().then(result => {
      this.setState({
        name: result.fields.name,
        title: result.fields.title,
        company: result.fields.company,
        shortBio: result.fields.shortBio,
        github: result.fields.github,
        linkedIn: result.fields.linkedIn,
        facebook: result.fields.facebook,
        image: 'https:' + result.fields.image.fields.file.url
      })
    })
  }

  render() {
    return (
      <div>
        <div className="p-4 mb-3 bg-light rounded">
          <Media>
            <img
              width={100}
              height={100}
              className="mr-3"
              src={this.state.image}
              alt={this.state.name}
            />
            <Media.Body>
              <h4 className="font-italic">About</h4>
              <p className="mb-0">{this.state.name}</p>
              <p className="text-muted small">
                {this.state.title} at {this.state.company}
              </p>
            </Media.Body>
          </Media>
          <p className="mb-0">{this.state.shortBio}</p>
        </div>

        <div className="p-4">
          <h4 className="font-italic">Archives</h4>
          <ol className="list-unstyled mb-0">
            <li>
              <a href={process.env.PUBLIC_URL}>March 2014</a>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL}>February 2014</a>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL}>January 2014</a>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL}>December 2013</a>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL}>November 2013</a>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL}>October 2013</a>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL}>September 2013</a>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL}>August 2013</a>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL}>July 2013</a>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL}>June 2013</a>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL}>May 2013</a>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL}>April 2013</a>
            </li>
          </ol>
        </div>

        <div className="p-4">
          <h4 className="font-italic">Elsewhere</h4>
          <div className="d-flex justify-content-around">
            <a href={'https://github.com/' + this.state.github} className="github text-center">
              <IoLogoGithub size={40} />
              <br />
              Github
            </a>

            <a
              href={'https://linkedin.com/in/' + this.state.linkedIn}
              className="linkedIn text-center">
              <IoLogoLinkedin size={40} />
              <br />
              LinkedIn
            </a>

            <a
              href={'https://www.facebook.com/' + this.state.facebook}
              className="facebook text-center">
              <IoLogoFacebook size={40} />
              <br />
              Facebook
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar
