import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io'
import AboutMe from './AboutMe'

const SideBar = (props) => {
  const { author } = props
  return (
    <div>
      <AboutMe author={author} />
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
        <h4 className="font-italic text-center">Get social with me</h4>
        <div className="d-flex justify-content-around">
          <a
            href={author.github}
            className="github text-center"
            target="_blank"
            rel="noopener noreferrer">
            <IoLogoGithub size={40} />
            <br />
            Github
          </a>

          <a
            href={author.linkedIn}
            className="linkedIn text-center"
            target="_blank"
            rel="noopener noreferrer">
            <IoLogoLinkedin size={40} />
            <br />
            LinkedIn
          </a>

          <a
            href={author.facebook}
            className="facebook text-center"
            target="_blank"
            rel="noopener noreferrer">
            <IoLogoFacebook size={40} />
            <br />
            Facebook
          </a>
        </div>
      </div>
    </div>
  )
}

export default SideBar
