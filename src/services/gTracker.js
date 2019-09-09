import ReactGA from 'react-ga'

const initReactGA = () => {
  let trackerID
  if (process.env.NODE_ENV === 'production') {
    switch (window.document.URL.split('/')[2]) {
      case 'qlikowl.com':
        trackerID = 'UA-147418387-1'
        break
      case 'branch-deploy.qlikowl.com':
        trackerID = 'UA-147418387-2'
        break
      default:
        trackerID = false
    }

    trackerID
      ? ReactGA.initialize(trackerID)
      : console.log(`Could not connect with ReactGA.initialize('${trackerID}')`)
  }
}

const trackPage = path => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.pageview(path)
  } else {
    console.log(`Actual ENV: ${process.env.NODE_ENV}, trackPage('${path}')`)
  }
}

export { initReactGA, trackPage }
