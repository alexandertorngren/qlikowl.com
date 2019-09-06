import React from 'react'
import Media from 'react-bootstrap/Media'
import { IoLogoGithub, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io'
import { getPerson } from '../services/contentfulClient'
import Loading from './Loading';

class SideBar extends React.Component {
  state = {
    author: '',
    hasData: false
  }

  componentDidMount() {
    this._asyncFetch = getPerson().then(response => {
      this._asyncFetch = null
      this.setState({
        author: response.fields,
        hasData: true
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
      return <Loading />
    }
    
    return (
      <div>
        <div className="p-4 mb-3 bg-light rounded">
          <Media>
            <img
              width={100}
              height={100}
              className="mr-3"
              src={
                'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj1x-Lp0rzkAhUjxKYKHQDxA5oQjRx6BAgBEAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FReact_(web_framework)&psig=AOvVaw1qEt5GHWGPLrgWEv6K70f1&ust=1567874773298988'
              } //{'http:' + this.state.author.image.fields.file.url}
              alt={this.state.author.name}
            />
            <Media.Body>
              <h4 className="font-italic">About</h4>
              <p className="mb-0">{this.state.author.name}</p>
              <p className="text-muted small">
                {this.state.author.title} at {this.state.author.company}
              </p>
            </Media.Body>
          </Media>
          <p className="mb-0">{this.state.author.shortBio}</p>
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
            <a href={this.state.author.github} className="github text-center">
              <IoLogoGithub size={40} />
              <br />
              Github
            </a>

            <a href={this.state.author.linkedIn} className="linkedIn text-center">
              <IoLogoLinkedin size={40} />
              <br />
              LinkedIn
            </a>

            <a href={this.state.author.facebook} className="facebook text-center">
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
