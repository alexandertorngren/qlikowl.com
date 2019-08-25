import React from 'react'
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'

class PopoverComp extends React.Component {
  render() {
    return (
      <div>
        <Button id="PopoverFocus" type="button">
          Launch Popover (Focus)
        </Button>

        <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
          <PopoverHeader>Focus Trigger</PopoverHeader>
          <PopoverBody>
            Focusing on the trigging element makes this popover appear. Blurring (clicking away)
            makes it disappear. You cannot select this text as the popover will disappear when you
            try.
          </PopoverBody>
        </UncontrolledPopover>
      </div>
    )
  }
}

export default PopoverComp
