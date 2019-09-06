import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { getPerson } from '../services/contentfulClient'
import { IoLogoGithub, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io'
import { MdHome, MdPermContactCalendar, MdBook, MdDeveloperMode } from 'react-icons/md'
import { GoGitBranch, GoRepo } from 'react-icons/go'
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

import logo_lg from '../media/logotype/qlikowl.com@0,15x.png'
import logo_sm from '../media/logotype/qlikowl.com@0,12x.png'

const DropdownTitle = props => (
  <span>
    <GoGitBranch /> Explore
  </span>
)

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.navToggler = this.navToggler.bind(this)
    this.state = {
      isToggleOpen: false,
      width: 250,
      github: null,
      linkedIn: null,
      facebook: null
    }
  }

  navToggler() {
    const currentState = this.state.isToggleOpen
    this.setState({
      isToggleOpen: !currentState
    })
  }

  componentDidMount() {
    getPerson().then(result => {
      this.setState({
        github: result.fields.github,
        linkedIn: result.fields.linkedIn,
        facebook: result.fields.facebook,
        width: window.innerWidth
      })
    })
  }

  render() {
    return (
      <Navbar variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href={process.env.PUBLIC_URL} className="mr-auto mr-lg-0">
            <img
              src={this.state.width > 992 ? logo_lg : logo_sm}
              alt="QlikOwl"
              className="img-fluid"
            />
          </Navbar.Brand>
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
            <Nav className="mr-auto ml-sm-0 ml-md-5 w-100">
              <Nav.Link href="/">
                <MdHome /> Home
              </Nav.Link>
              <NavDropdown title={DropdownTitle()} id="basic-nav-dropdown">
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
              <Nav.Link href="/about">
                <MdBook /> About me
              </Nav.Link>
              <Nav.Link href="/contact">
                <MdPermContactCalendar /> Get in touch
              </Nav.Link>
              <Nav.Link
                className="ml-md-auto ml-sm-0"
                href={'https://github.com/' + this.state.github}>
                <IoLogoGithub size={30} />
              </Nav.Link>
              <Nav.Link href={'https://linkedin.com/in/' + this.state.linkedIn}>
                <IoLogoLinkedin size={30} />
              </Nav.Link>
              <Nav.Link href={'https://www.facebook.com/' + this.state.facebook}>
                <IoLogoFacebook size={30} />
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    )
  }
}
//<Navbar.Collapse className="offcanvas-collapse" id="navbar-offcanvas-collapse">
export default Navigation
