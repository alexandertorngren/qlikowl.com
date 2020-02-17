import React from 'react'
import Media from 'react-bootstrap/Media'

const AboutMe = (props) => {
  const { name, image, title, company, shortBio } = props.author

  return (
    <div className="p-4 mb-3 bg-light rounded">
      <Media>
        <img
          width={100}
          height={100}
          className="mr-3"
          src={`${image.fields.file.url}?fit=thumb&fm=jpg&w=100&h=100&r=max`}
          alt={name}
        />
        <Media.Body>
          <h4 className="font-italic">About</h4>
          <p className="mb-0">{name}</p>
          <p className="text-muted small">
            {title} at {company}
          </p>
        </Media.Body>
      </Media>
      <p className="mb-0">{shortBio}</p>
    </div>
  )
}

export default AboutMe
