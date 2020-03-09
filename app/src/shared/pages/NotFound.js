import React from 'react'
import Seo from '../components/Seo'
import { Toolbar, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  content: {
    padding: `2.5rem ${theme.globalPadding} 2.5rem ${theme.globalPadding}`,
  },
}))

export default function NotFound() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Seo title="404" description="Страница не найдена" />
      <Toolbar />
      <div className={classes.content}>
        <Typography variant="h2">404</Typography>
        <Typography variant="subtitle1">Страница не найдена</Typography>
      </div>
    </React.Fragment>
  )
}
