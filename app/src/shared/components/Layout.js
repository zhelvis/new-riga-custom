import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Toolbar } from '@material-ui/core'
import Header from './Header'
import Footer from './Footer'

const useStyles = makeStyles(theme => ({
  wrap: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flexGrow: 1,
    paddingLeft: theme.globalPadding,
    paddingRight: theme.globalPadding,
  },
}))

export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Header />
      <div className={classes.wrap}>
        <Toolbar />
        <div className={classes.main}>{children}</div>
        <Footer />
      </div>
    </React.Fragment>
  )
}
