import React from 'react'
import { DiReact } from 'react-icons/di'
import Loading from './Loading'

const DateFormated = (props) => (
  <span>{new Date(props.date).toLocaleDateString().substr(0, 4)}</span>
)

const Back = (props) => {
  return props.spc ? (
    <p></p>
  ) : (
    <p>
      <button type="button" className="btn btn-link" onClick={() => window.scrollTo(0, 0)}>
        Back to top
      </button>
    </p>
  )
}

const Footer = (props) => {
  if (!props) {
    return <Loading />
  }

  const { site, spc, scroll } = props

  if (site.copyright) {
    return (
      <footer className={props.className ? `blog-footer ${props.className}` : 'blog-footer'}>
        <p>
          © Copyright <DateFormated date={site.publishDate} /> | {site.siteName} by{' '}
          <a href={`mailto:${site.owner.email}`} alt={site.owner.name}>
            {site.owner.name}
          </a>{' '}
          | All Right Reserved | Powered by{' '}
          <a href="https://reactjs.org/" className="react">
            <DiReact size={30} /> React
          </a>
        </p>
        <Back spc={spc} scroll={scroll} />
      </footer>
    )
  } else {
    return (
      <footer className={props.className ? `blog-footer ${props.className}` : 'blog-footer'}>
        <p>
          {site.siteName} <DateFormated date={site.publishDate} />
          {' by '}
          <a href={`mailto:${site.owner.email}`} alt={site.owner.name}>
            {site.owner.name}
          </a>{' '}
          | Powered by{' '}
          <a href="https://reactjs.org/" className="react">
            <DiReact size={30} /> React
          </a>
        </p>
        <Back spc={spc} scroll={scroll} />
      </footer>
    )
  }
}

export default Footer
