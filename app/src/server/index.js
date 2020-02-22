import express from 'express'
import fetch from 'node-fetch'
import React from 'react'
//import { renderToString } from 'react-dom/server'
import { ServerLocation } from '@reach/router'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles'
import { ChunkExtractor } from '@loadable/server'
import { ApolloProvider } from '@apollo/react-common'
import { renderToStringWithData } from '@apollo/react-ssr'
import { createHttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

import htmlTemplate from './htmlTemplate'
import App from '../shared/App'
import theme from '../shared/theme'
import config from '../../config'

const stats = `./dist/loadable-stats.json`

const app = express()

app.use(express.static('dist'))

app.get('*', async (req, res) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: config.api,
      fetch: fetch,
      credentials: 'same-origin',
      headers: {
        cookie: req.header('Cookie'),
      },
    }),
    cache: new InMemoryCache(),
  })

  const extractor = new ChunkExtractor({ statsFile: stats })
  const sheets = new ServerStyleSheets()
  const markup = await renderToStringWithData(
    extractor.collectChunks(
      sheets.collect(
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ServerLocation url={req.url}>
              <App />
            </ServerLocation>
          </ThemeProvider>
        </ApolloProvider>
      )
    )
  )
  const helmet = Helmet.renderStatic()
  const css = sheets.toString()
  const scripts = extractor.getScriptTags()
  const initialState = client.extract()
  res.send(htmlTemplate(markup, helmet, css, scripts, initialState))
})

app.listen(config.port)
