import React from 'react'
import { DiReact } from 'react-icons/di'
import Loading from './Loading'

const DateFormated = props => <span>{new Date(props.date).toLocaleDateString().substr(0, 4)}</span>

const Footer = props => {
  if (!props) {
    return <Loading />
  }

  const { site, author } = props

  if (site.copyright) {
    return (
      <footer className={props.className ? `blog-footer ${props.className}` : 'blog-footer'}>
        <p>
          © Copyright <DateFormated date={site.publishDate} /> | {site.siteName} by{' '}
          <a href={`mailto:${author.email}`} alt={author.name}>
            {author.name}
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
      <footer className={props.className ? `blog-footer ${props.className}` : 'blog-footer'}>
        <p>
          {site.siteName} <DateFormated date={site.publishDate} />
          {' by '}
          <a href={`mailto:${author.email}`} alt={author.name}>
            {author.name}
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

export default Footer
