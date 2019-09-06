import React from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap'

const ToastComp = props => {
  this.props = props
  return (
    <div>
      <Toast>
        <ToastHeader icon={this.props.icon}>{this.props.header}</ToastHeader>
        <ToastBody>{this.props.body}</ToastBody>
      </Toast>
    </div>
  )
}

export default ToastComp
