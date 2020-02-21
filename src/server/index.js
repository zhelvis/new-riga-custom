import express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerLocation } from '@reach/router'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles'
import { ChunkExtractor } from '@loadable/server'

import { DataProvider } from '../shared/components/DataContext'

import htmlTemplate from './htmlTemplate'
import App from '../shared/App'
import theme from '../shared/theme'
import config from '../../config'
import getCmsData from './getCmsData'

const stats = `./dist/loadable-stats.json`

const app = express()

app.use(express.static('dist'))

app.get('*', async (req, res) => {
  let cmsData
  try {
    cmsData = await getCmsData()
    console.log(cmsData)
    console.log(req.url)
  } catch (e) {
    cmsData = {}
  }

  const extractor = new ChunkExtractor({ statsFile: stats })
  const sheets = new ServerStyleSheets()
  const markup = renderToString(
    extractor.collectChunks(
      sheets.collect(
        <DataProvider data={cmsData}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ServerLocation url={req.url}>
              <App />
            </ServerLocation>
          </ThemeProvider>
        </DataProvider>
      )
    )
  )
  const helmet = Helmet.renderStatic()
  const css = sheets.toString()
  const scripts = extractor.getScriptTags()
  res.send(htmlTemplate(markup, helmet, css, scripts, cmsData))
})

app.listen(config.port)
