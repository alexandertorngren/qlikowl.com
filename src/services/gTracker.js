import ReactGA from 'react-ga'

const initReactGA = () => {
  console.log(`Actual CONTEXT: ${process.env.CONTEXT}`)
  let trackerID
  switch (process.env.CONTEXT) {
    case 'production':
      trackerID = 'UA-147418387-1'
      break
    case 'branch-deploy':
      trackerID = 'UA-147418387-2'
      break
    default:
      trackerID = false
  }
  if (trackerID) {
    ReactGA.initialize(trackerID)
  }
}

const trackPage = path => {
  if (process.env.CONTEXT) {
    ReactGA.pageview(path)
  } else {
    console.error(`Actual CONTEXT is: ${process.env.CONTEXT}`)
  }
}

export { initReactGA, trackPage }
