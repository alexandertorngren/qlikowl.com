import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { IoLogoGithub, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io'
import { MdHome, MdPermContactCalendar, MdBook, MdDeveloperMode } from 'react-icons/md'
import { GoGitBranch, GoRepo } from 'react-icons/go'
import { Link } from 'react-router-dom'

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

/*
  DiLinux,
  DiMongodb,
  DiNodejsSmall,
  DiNpm,
  DiPhp,
  DiVisualstudio,
  */

//const activeStyle = { color: '#ccc' }

class Navigation extends React.Component {
  state = {
    toggleClass: 'offcanvas-collapse navbar-collapse',
    isToggleOpen: false,
    width: 250
  }

  componentDidMount() {
    this.navToggler = this.navToggler.bind(this)
  }

  navToggler() {
    const currentState = this.state.isToggleOpen
    const toggleClass = !currentState
      ? 'offcanvas-collapse navbar-collapse open'
      : 'offcanvas-collapse navbar-collapse'
    this.setState({
      toggleClass,
      isToggleOpen: !currentState
    })
  }

  navComponent(author) {
    return (
      <div className="nav-width">
        <Navbar.Toggle
          aria-controls="navbar-offcanvas-collapse"
          onClick={() => this.navToggler()}
        />
        <div className={this.state.toggleClass} id="navbar-offcanvas-collapse">
          <Nav className="ml-2 mr-auto">
            <Link to={'/home'} className="nav-link">
              <MdHome /> Home
            </Link>
            <NavDropdown
              title={
                <span>
                  <GoGitBranch /> Explore
                </span>
              }
              id="basic-nav-dropdown">
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
            <Nav.Link to={'/about'} className="nav-link">
              <MdBook /> About me
            </Nav.Link>
            <Link to={'/contact'} className="nav-link">
              <MdPermContactCalendar /> Get in touch
            </Link>
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
    const { site, author } = this.props
    if (!site && !author) {
      return false
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
    )
  }
}

export default Navigation
