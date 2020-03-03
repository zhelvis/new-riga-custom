import React from 'react'
import { makeStyles, Toolbar } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: theme.backgroundImageHeight,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: theme.globalPadding,
    paddingRight: theme.globalPadding,
    color: theme.palette.background.default,
  },
}))

export default function BannerContent({ children }) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Toolbar />
      <div className={classes.root}>{children}</div>
    </React.Fragment>
  )
}
