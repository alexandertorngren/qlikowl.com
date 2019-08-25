import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer className="blog-footer">
        <p>
          © Copyright 2019 |QlikOwl by <a href="mailto:info@test.com">Alexander Torngren</a> | All
          Right Reserved | Powered by{' '}
          <a href="https://reactjs.org/" className="react">
            React
          </a>
        </p>
        <p>
          <a href="#top">Back to top</a>
        </p>
      </footer>
    )
  }
}

export default Footer
