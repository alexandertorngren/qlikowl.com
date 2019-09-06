import React from 'react'
import Media from 'react-bootstrap/Media'
import { getPerson } from '../services/contentfulClient'
import { IoLogoGithub, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io'

class SideBar extends React.Component {
  state = {
    social: {},
    person: {},
    avatar: null
  }

  componentDidMount() {
    this._asyncRequest = getPerson().then(result => {
      this._asyncRequest = null
      this.setState({
        person: result.fields,
        avatar: 'https:' + result.fields.image.fields.file.url,
        social: {
          github: 'https://github.com/' + result.fields.github,
          linkedIn: 'https://linkedin.com/in/' + result.fields.linkedIn,
          facebook: 'https://www.facebook.com/' + result.fields.facebook
        }
      })
    })
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel()
    }
  }

  render() {
    console.log(this.state.person.name)
    return (
      <div>
        <div className="p-4 mb-3 bg-light rounded">
          <Media>
            <img
              width={100}
              height={100}
              className="mr-3"
              src={this.state.avatar}
              alt={this.state.person.name}
            />
            <Media.Body>
              <h4 className="font-italic">About</h4>
              <p className="mb-0">{this.state.person.name}</p>
              <p className="text-muted small">
                {this.state.person.title} at {this.state.person.company}
              </p>
            </Media.Body>
          </Media>
          <p className="mb-0">{this.state.person.shortBio}</p>
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
          <h4 className="font-italic">Get social with me</h4>
          <div className="d-flex justify-content-around">
            <a href={this.state.social.github} className="github text-center">
              <IoLogoGithub size={40} />
              <br />
              Github
            </a>

            <a href={this.state.social.linkedIn} className="linkedIn text-center">
              <IoLogoLinkedin size={40} />
              <br />
              LinkedIn
            </a>

            <a href={this.state.social.facebook} className="facebook text-center">
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
