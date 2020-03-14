import React from 'react'
import Seo from '../components/Seo'
import { Toolbar, Typography } from '@material-ui/core'

import ContentBlock from '../components/ContentBlock'

export default function NotFound() {
  return (
    <React.Fragment>
      <Seo title="404" description="Страница не найдена" />
      <Toolbar />
      <ContentBlock>
        <Typography variant="h2">404</Typography>
        <Typography variant="subtitle1">Страница не найдена</Typography>
      </ContentBlock>
    </React.Fragment>
  )
}
