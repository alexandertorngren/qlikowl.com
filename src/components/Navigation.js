import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.navToggler = this.navToggler.bind(this)
    this.state = {
      isToggleOpen: false
    }
  }

  navToggler() {
    const currentState = this.state.isToggleOpen
    this.setState({
      isToggleOpen: !currentState
    })
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="#home" className="mr-auto mr-lg-0">
          QlikOwl
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
          <Nav className="mr-auto">
            <Nav.Link href="#home">Nav</Nav.Link>
            <Nav.Link href="#features">To</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </div>
      </Navbar>
    )
  }
}
//<Navbar.Collapse className="offcanvas-collapse" id="navbar-offcanvas-collapse">
export default Navigation
