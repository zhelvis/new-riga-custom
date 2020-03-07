import React from 'react'
import Seo from '../components/Seo'
import TextBlock from '../components/TextBlock'
import { Toolbar, Typography } from '@material-ui/core'

export default function NotFound() {
  return (
    <React.Fragment>
      <Seo title="404" description="Страница не найдена" />
      <Toolbar />
      <TextBlock>
        <Typography variant="h2">404</Typography>
        <Typography variant="subtitle1">Страница не найдена</Typography>
      </TextBlock>
    </React.Fragment>
  )
}
