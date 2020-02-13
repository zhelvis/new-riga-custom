import express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerLocation } from '@reach/router'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles'

import htmlTemplate from './htmlTemplate'
import App from '../shared/App'
import theme from '../shared/theme'
import config from '../../config'

const app = express()

app.use(express.static('dist'))

app.get('*', (req, res) => {
  const sheets = new ServerStyleSheets()
  const markup = renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ServerLocation url={req.url}>
          <App />
        </ServerLocation>
      </ThemeProvider>
    )
  )
  const helmet = Helmet.renderStatic()
  const css = sheets.toString()
  res.send(htmlTemplate(markup, helmet, css))
})

app.listen(config.port)
