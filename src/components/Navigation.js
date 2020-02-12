import React, { useRef, useEffect } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { IoLogoGithub, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io'
import { MdHome, MdPermContactCalendar, MdBook, MdDeveloperMode } from 'react-icons/md'
import { GoGitBranch, GoRepo } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { useToggle } from '../hooks/useToggle'

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

const NavComponent = ({ ...author }) => {
  const { on, toggle, getTogglerProps } = useToggle()
  const node = useRef()
  const toggler = useRef()

  useEffect(() => {
    const handleClick = (e) => {
      if (on) {
        if (node.current.contains(e.target) && !toggler.current.contains(e.target)) {
          return
        }
        toggle()
      } else {
        if (node.current.contains(e.target) && !toggler.current.contains(e.target)) {
          return
        } else if (!node.current.contains(e.target) && toggler.current.contains(e.target)) {
          toggle()
        } else {
          return
        }
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [on, toggle])

  return (
    <div className="nav-width">
      <div ref={toggler}>
        <Navbar.Toggle aria-controls="navbar-offcanvas-collapse" />
      </div>
      <div
        className={
          on ? 'offcanvas-collapse navbar-collapse open' : 'offcanvas-collapse navbar-collapse'
        }
        id="navbar-offcanvas-collapse">
        <div ref={node}>
          <Nav className="ml-2 pr-auto">
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
        </div>
        <SocialComponent {...author} />
      </div>
    </div>
  )
}

const SocialComponent = ({ ...author }) => {
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

const Navigation = (props) => {
  const { site, author, path } = props

  return (
    <Navbar variant="dark" expand="lg" fixed="top" style={{ height: '56px' }}>
      <Container style={{ minHeight: '40px' }}>
        <Navbar.Brand href={process.env.PUBLIC_URL || `https://${site.domain}`} className="p-0">
          <img src={site.logotype.fields.file.url} alt="QlikOwl" className="h-100 img-fluid" />
        </Navbar.Brand>
        {path !== '/' ? <NavComponent {...author} /> : <SocialComponent {...author} />}
      </Container>
    </Navbar>
  )
}

export default Navigation
