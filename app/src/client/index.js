import 'core-js/es/promise' // for older browsers
import fetch from 'unfetch' // for older browsers
import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { loadableReady } from '@loadable/component'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'

import App from '../shared/App'
import theme from '../shared/theme'
import config from '../../config'

const client = new ApolloClient({
  link: createHttpLink({
    uri: config.api,
    fetch,
  }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  ssrForceFetchDelay: 100,
})

delete window.__APOLLO_STATE__

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  )
}

loadableReady(() => {
  ReactDOM.hydrate(<Main />, document.querySelector('#root'))
})
