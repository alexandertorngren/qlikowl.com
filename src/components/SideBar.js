import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io'
import AboutMe from './AboutMe'
import { Link } from 'react-router-dom'
import _ from 'lodash'

const GetSocial = (props) => {
  const { author } = props
  return (
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
  )
}

const TagList = ({ ...props }) => {
  let uniqueTags = []

  props.posts.forEach((element) => {
    element.fields.tags.map((value) => {
      return uniqueTags.push(value)
    })
  })

  uniqueTags = _.uniq(uniqueTags)
  console.log(uniqueTags)

  return uniqueTags.map((tag, key) => (
    <li key={key}>
      <Link to={`/tags/${tag}`} title={tag}>
        #{tag}
      </Link>
    </li>
  ))
}

const SideBar = (props) => {
  return (
    <div>
      <AboutMe author={props.author} />
      <div className="p-4">
        <h4 className="font-italic">Tags</h4>
        <ul className="list-unstyled mb-0">
          <TagList {...props} />
        </ul>
      </div>
      <GetSocial author={props.author} />
    </div>
  )
}

export default SideBar
