import 'core-js/es/promise' // for ie11
import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { loadableReady } from '@loadable/component'
import { DataProvider } from '../shared/components/DataContext'

import App from '../shared/App'
import theme from '../shared/theme'

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <DataProvider data={preloadedState}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </DataProvider>
  )
}

loadableReady(() => {
  ReactDOM.hydrate(<Main />, document.querySelector('#root'))
})
