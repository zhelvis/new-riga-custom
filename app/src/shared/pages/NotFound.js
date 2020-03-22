import React from 'react'
import { Typography, Toolbar } from '@material-ui/core'

import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <React.Fragment>
      <Toolbar />
      <Seo title="404" description="Страница не найдена" />
      <br />
      <Typography paragraph align="center" variant="h1">
        404
      </Typography>
      <Typography align="center">Страница не найдена</Typography>
    </React.Fragment>
  )
}
