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

const PoweredBy = () => (
  <span>
    {' '}
    Powered by{' '}
    <a href="https://reactjs.org/" className="react">
      <DiReact size={30} /> React
    </a>
  </span>
)

const Owner = ({ ...props }) => (
  <span>
    by{' '}
    <a href={`mailto:${props.author.email}`} alt={props.author.name}>
      {props.author.name}
    </a>{' '}
  </span>
)

const FooterElement = ({ ...props }) => (
  <footer className={props.className ? `blog-footer ${props.className}` : 'blog-footer'}>
    <p>
      {props.site.copyright ? '© Copyright ' : props.site.siteName}{' '}
      <DateFormated date={props.site.publishDate} /> <Owner {...props} /> |
      <PoweredBy />
    </p>
    <Back spc={props.spc} scroll={props.scroll} />
  </footer>
)

const Footer = (props) => {
  if (!props) {
    return <Loading />
  }
  // const { site, spc, scroll, className, copyright } = props
  //const item = { site, spc, scroll, className, copyright }

  return <FooterElement {...props} />
}

export default Footer
