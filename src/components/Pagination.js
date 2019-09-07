import React from 'react'
import { Nav, Button } from 'react-bootstrap'

const Pagination = props => {
  return (
    <Nav className="blog-pagination">
      <Button color="link" className="btn-outline-primary">
        Older
      </Button>
      <Button className="btn-outline-secondary disabled">Newer</Button>
    </Nav>
  )
}

export default Pagination
