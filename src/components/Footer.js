import React from 'react'
import { getSite } from '../services/contentfulClient'
import { DiReact } from 'react-icons/di'

const DateFormated = props => <span>{new Date(props.date).toLocaleDateString().substr(0, 4)}</span>

const Copyright = props => {
  if (props.copyright) {
    return (
      <p>
        © Copyright <DateFormated date={props.publishDate} /> | {props.siteName} by{' '}
        <a href={`mailto:${props.email}`} alt={props.name}>
          {props.name}
        </a>{' '}
        | All Right Reserved | Powered by{' '}
        <a href="https://reactjs.org/" className="react">
          <DiReact size={30} /> React
        </a>
      </p>
    )
  } else {
    return (
      <p>
        {props.siteName} <DateFormated date={props.publishDate} />
        {' by '}
        <a href={`mailto:${props.email}`} alt={props.name}>
          {props.name}
        </a>{' '}
        | Powered by{' '}
        <a href="https://reactjs.org/" className="react">
          <DiReact size={30} /> React
        </a>
      </p>
    )
  }
}

class Footer extends React.Component {
  state = {
    site: {},
    social: {},
    person: {}
  }

  componentDidMount() {
    this._asyncRequest = getSite().then(response => {
      this._asyncRequest = null
      this.setState({
        site: response.site.fields,
        person: response.person.fields,
        social: {
          github: 'https://github.com/' + response.person.fields.github,
          linkedIn: 'https://linkedin.com/in/' + response.person.fields.linkedIn,
          facebook: 'https://www.facebook.com/' + response.person.fields.facebook
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
    console.log(this.state)
    return (
      <footer className="blog-footer">
        <Copyright
          copyright={this.state.site.copyright}
          publishDate={this.state.site.publishDate}
          siteName={this.state.site.siteName}
          email={this.state.person.email}
          name={this.state.person.name}
        />
        <p>
          <a href="#top">Back to top</a>
        </p>
      </footer>
    )
  }
}

export default Footer
