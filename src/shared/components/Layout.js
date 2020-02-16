import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Toolbar, Link } from '@material-ui/core'
import Header from './Header'

const useStyles = makeStyles(theme => ({
  wrap: {
    position: 'relative',
    minHeight: '100vh',
  },
  main: {
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
          <small>
            Разработка:{' '}
            <Link href="https://zhelvis.github.io/ru/">Владимир Жельвис</Link>
          </small>
        </footer>
      </div>
    </React.Fragment>
  )
}
