import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import logo_lg from '../media/logotype/qlikowl.com@0,15x.png'
import logo_sm from '../media/logotype/qlikowl.com@0,12x.png'

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.navToggler = this.navToggler.bind(this)
    this.state = {
      isToggleOpen: false,
      width: 250
    }
  }

  navToggler() {
    const currentState = this.state.isToggleOpen
    this.setState({
      isToggleOpen: !currentState
    })
  }

  componentWillMount() {
    this.setState({ width: window.innerWidth })
    console.log(window.innerWidth)
  }

  render() {
    return (
      <Navbar variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="mr-auto mr-lg-0">
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
            <Nav className="ml-auto">
              <Nav.Link href="#home">Nav</Nav.Link>
              <Nav.Link href="#features">To</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    )
  }
}
//<Navbar.Collapse className="offcanvas-collapse" id="navbar-offcanvas-collapse">
export default Navigation
