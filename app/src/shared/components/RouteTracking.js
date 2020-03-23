import React from 'react'
import ReactGA from 'react-ga'
import config from '../../../config'

ReactGA.initialize(config.ga)

export default function RouterTracking({ children, location }) {
  React.useEffect(() => {
    ReactGA.pageview(location.pathname)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return children
}
