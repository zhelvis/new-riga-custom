import React from 'react'
import Seo from '../components/Seo'
import { Typography, Toolbar } from '@material-ui/core'

export default function NotFound() {
  return (
    <React.Fragment>
      <Seo title="404" description="Страница не найдена" />
      <Toolbar />
      <Typography paragraph align="center" variant="h1">
        404
      </Typography>
      <Typography align="center">Страница не найдена</Typography>
    </React.Fragment>
  )
}
