import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { getSite, getPerson } from '../services/contentfulClient'
import { IoLogoGithub, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io'
import { MdHome, MdPermContactCalendar, MdBook, MdDeveloperMode } from 'react-icons/md'
import { GoGitBranch, GoRepo } from 'react-icons/go'
import { NavLink } from 'react-router-dom'
import {
  DiReact,
  DiJavascript1,
  DiCssdeck,
  DiUbuntu,
  DiRequirejs,
  DiSymfonyBadge,
  DiOpensource,
  DiDocker
} from 'react-icons/di'
import Loading from './Loading'

/*
  DiLinux,
  DiMongodb,
  DiNodejsSmall,
  DiNpm,
  DiPhp,
  DiVisualstudio,
  */

class Navigation extends React.Component {
  state = {
    isToggleOpen: false,
    width: 250,
    site: '',
    author: '',
    hasData: false
  }

  componentDidMount() {
    this.navToggler = this.navToggler.bind(this)

    this._asyncFetch = getSite().then(response => {
      this._asyncFetch = null
      this.setState({
        site: response.fields,
        hasData: true
      })

      this._asyncFetch = getPerson().then(response => {
        this._asyncFetch = null
        this.setState({
          author: response.fields,
          hasData: true
        })
      })
    })
  }

  componentWillUnmount() {
    if (this._asyncFetch) {
      this._asyncFetch = null
    }
  }

  navToggler() {
    const currentState = this.state.isToggleOpen
    this.setState({
      isToggleOpen: !currentState
    })
  }

  destructObject(logos) {
    if (logos.length) {
      return
    }
    return null
  }

  navComponent(author) {
    return (
      <div className="nav-width">
        <Navbar.Toggle
          aria-controls="navbar-offcanvas-collapse"
          onClick={() => this.navToggler()}
        />
        <div
          className={
            this.state.isToggleOpen
              ? 'offcanvas-collapse navbar-collapse open'
              : 'offcanvas-collapse navbar-collapse'
          }
          id="navbar-offcanvas-collapse">
          <Nav className="ml-2 mr-auto">
            <NavLink to={'/home'} className="nav-link">
              <MdHome /> Home
            </NavLink>
            <NavDropdown
              title={
                <span>
                  <GoGitBranch /> Explore
                </span>
              }
              id="basic-nav-dropdown"
              className="pr-3">
              <NavDropdown.Item href="/explore/projects">
                <GoRepo /> Projects
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="/explore/qlik-sense">
                <DiOpensource /> Qlik Sense
              </NavDropdown.Item>
              <NavDropdown.Item href="/explore/qlik-core">
                <DiDocker /> Qlik Core
              </NavDropdown.Item>
              <NavDropdown.Item href="/explore/qlik-extension">
                <DiRequirejs /> Qlik Extension
              </NavDropdown.Item>
              <NavDropdown.Item href="/explore/qlik-api">
                <MdDeveloperMode /> Qlik API
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="/explore/javascript">
                <DiJavascript1 /> JavaScript
              </NavDropdown.Item>
              <NavDropdown.Item href="/explore/react">
                <DiReact /> React
              </NavDropdown.Item>
              <NavDropdown.Item href="/explore/style">
                <DiCssdeck /> Style
              </NavDropdown.Item>
              <NavDropdown.Item href="/explore/server-linux">
                <DiUbuntu /> Server / Linux
              </NavDropdown.Item>
              <NavDropdown.Item href="/explore/symfony-php">
                <DiSymfonyBadge /> Symfony / PHP
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              to={'/about'}
              className="nav-link"
              activeStyle={{
                fontWeight: 'bold'
              }}>
              <MdBook /> About me
            </NavLink>
            <NavLink
              to={'/contact'}
              className="nav-link"
              activeStyle={{
                color: '#fff'
              }}>
              <MdPermContactCalendar /> Get in touch
            </NavLink>
          </Nav>
          {this.createSocial(author)}
        </div>
      </div>
    )
  }

  createSocial(author) {
    return (
      <Nav className="ml-auto social">
        <Nav.Link href={author.github} target="_blank">
          <IoLogoGithub size={30} />
        </Nav.Link>
        <Nav.Link href={author.linkedIn} target="_blank">
          <IoLogoLinkedin size={30} />
        </Nav.Link>
        <Nav.Link href={author.facebook} target="_blank">
          <IoLogoFacebook size={30} />
        </Nav.Link>
      </Nav>
    )
  }

  render() {
    const { site, author } = this.state

    if (!this.state.hasData) {
      return <Loading />
    }

    return (
      <Navbar variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href={process.env.PUBLIC_URL || `https://${site.domain}`} className="p-0">
            <img src={site.logotype.fields.file.url} alt="QlikOwl" className="h-100 img-fluid" />
          </Navbar.Brand>
          {this.props.path !== '/' ? this.navComponent(author) : this.createSocial(author)}
        </Container>
      </Navbar>
    ) //mr-auto ml-sm-0 ml-md-5 w-100 d-md-flex //mr-auto mr-lg-0
  }
}

export default Navigation
