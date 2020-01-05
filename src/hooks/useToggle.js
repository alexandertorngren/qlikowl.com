import { useState } from 'react'

const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args))

function useToggle(initialState = false) {
  const [on, setOn] = useState(initialState)
  const toggle = () => setOn(!on)

  const getTogglerProps = (props = {}) => ({
    ...props,
    onClick: callAll(props.onClick, toggle)
  })

  return { on, toggle, getTogglerProps }
}

export { useToggle }
