import React from 'react'
import Toast from 'react-bootstrap/Toast'
import { Row } from 'react-bootstrap/Row'
import { Col } from 'react-bootstrap/Col'

const ToastComp = props => (
  <Row>
    <Col xs={6}>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </Col>
  </Row>
)

export default ToastComp
