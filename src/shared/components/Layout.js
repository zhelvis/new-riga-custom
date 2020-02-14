import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Toolbar } from '@material-ui/core'
import Header from './Header'

const useStyles = makeStyles(theme => ({
  wrap: {
    position: 'relative',
    minHeight: '100vh',
  },
  main: {
    display: 'block',
    paddingBottom: theme.footerHeight,
  },
  footer: {
    height: theme.footerHeight,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid black',
  },
}))

export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Header />
      <div className={classes.wrap}>
        <Toolbar />
        <main className={classes.main}>{children}</main>
        <footer className={classes.footer}>
          <p>footer</p>
        </footer>
      </div>
    </React.Fragment>
  )
}
