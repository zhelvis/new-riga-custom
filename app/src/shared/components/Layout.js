import React from 'react'
import loadable from '@loadable/component'
import { makeStyles } from '@material-ui/core/styles'

import Header from './Header'

// need for preventing material ui css missmatch
const Footer = loadable(() => import('./Footer'))
Footer.preload()

const useStyles = makeStyles(() => ({
  wrap: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flexGrow: 1,
  },
}))

export default function Layout({ children }) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Header />
      <div className={classes.wrap}>
        <div className={classes.main}>{children}</div>
        <Footer />
      </div>
    </React.Fragment>
  )
}
