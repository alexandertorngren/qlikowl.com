import React from 'react'

const Loading = props => {
  return (
    <div
      className={`d-flex justify-content-center flex-column align-items-center bg-dark ${props.className}`}
      style={props.style}>
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
