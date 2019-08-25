import React from 'react'

const SideBar = props => {
  return (
    <div>
      <div className="p-4 mb-3 bg-light rounded">
        <h4 className="font-italic">About</h4>
        <p className="mb-0">
          Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit
          amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
        </p>
      </div>

      <div className="p-4">
        <h4 className="font-italic">Archives</h4>
        <ol className="list-unstyled mb-0">
          <li>
            <a href="http://localhost:3000">March 2014</a>
          </li>
          <li>
            <a href="http://localhost:3000">February 2014</a>
          </li>
          <li>
            <a href="http://localhost:3000">January 2014</a>
          </li>
          <li>
            <a href="http://localhost:3000">December 2013</a>
          </li>
          <li>
            <a href="http://localhost:3000">November 2013</a>
          </li>
          <li>
            <a href="http://localhost:3000">October 2013</a>
          </li>
          <li>
            <a href="http://localhost:3000">September 2013</a>
          </li>
          <li>
            <a href="http://localhost:3000">August 2013</a>
          </li>
          <li>
            <a href="http://localhost:3000">July 2013</a>
          </li>
          <li>
            <a href="http://localhost:3000">June 2013</a>
          </li>
          <li>
            <a href="http://localhost:3000">May 2013</a>
          </li>
          <li>
            <a href="http://localhost:3000">April 2013</a>
          </li>
        </ol>
      </div>

      <div className="p-4">
        <h4 className="font-italic">Elsewhere</h4>
        <ol className="list-unstyled">
          <li>
            <a href="http://localhost:3000">GitHub</a>
          </li>
          <li>
            <a href="http://localhost:3000">Twitter</a>
          </li>
          <li>
            <a href="http://localhost:3000">Facebook</a>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default SideBar
