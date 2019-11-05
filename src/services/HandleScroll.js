const handleScroll = (props, myRef) => {
  const { index, selected } = props
  if (index === selected) {
    setTimeout(() => {
      myRef.current.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }
}

export default handleScroll
