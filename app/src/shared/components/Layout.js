import React from 'react'
import { makeStyles, Link, Typography } from '@material-ui/core'

import Header from './Header'

const useStyles = makeStyles(theme => ({
  wrap: {
    minHeight: '100vh',
    paddingBottom: theme.footerHeight,
  },
  footer: {
    position: 'relative',
    zIndex: 2,
    marginTop: `-${theme.footerHeight}px`,
    height: theme.footerHeight,
    color: 'white',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export default function Layout({ children }) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Header />
      <div className={classes.wrap}>{children}</div>
      <footer className={classes.footer}>
        <Typography variant="caption">
          ©{new Date().getFullYear()} New Riga Custom
        </Typography>
        <span style={{ fontSize: 10 }}>
          Разработка:{' '}
          <Link color="secondary" href="https://zhelvis.github.io/ru/">
            Владимир Жельвис
          </Link>
        </span>
      </footer>
    </React.Fragment>
  )
}
