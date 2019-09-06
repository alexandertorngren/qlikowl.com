import React from 'react'
import { DiReact } from 'react-icons/di'
import { getEntry } from '../services/contentfulClient'
import Loading from './Loading';

const DateFormated = props => <span>{new Date(props.date).toLocaleDateString().substr(0, 4)}</span>

class Footer extends React.Component {
  state = {
    site: '',
    hasData: false
  }

  componentDidMount() {
    this._asyncFetch = getEntry('5nYiPPMvdN1MFpHnGt5NMd').then(response => {
      this._asyncFetch = null
      this.setState({ site: response, hasData: true })
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

    const { site } = this.state;

    if (site.copyright) {
      return (
        <footer className="blog-footer">
          <p>
            © Copyright <DateFormated date={site.publishDate} /> | {site.siteName} by{' '}
            <a href={`mailto:${site.email}`} alt={site.name}>
              {site.name}
            </a>{' '}
            | All Right Reserved | Powered by{' '}
            <a href="https://reactjs.org/" className="react">
              <DiReact size={30} /> React
            </a>
          </p>
          <p>
            <a href="#top">Back to top</a>
          </p>
        </footer>
      )
    } else {
      return (
        <footer className="blog-footer">
          <p>
            {site.siteName} <DateFormated date={site.publishDate} />
            {' by '}
            <a href={`mailto:${site.email}`} alt={site.name}>
              {site.name}
            </a>{' '}
            | Powered by{' '}
            <a href="https://reactjs.org/" className="react">
              <DiReact size={30} /> React
            </a>
          </p>
          <p>
            <a href="#top">Back to top</a>
          </p>
        </footer>
      )
    }
  }
}

export default Footer
