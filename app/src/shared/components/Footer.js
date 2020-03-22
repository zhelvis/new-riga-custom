import React from 'react'
import { Typography, makeStyles, Link } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  footer: {
    color: 'white',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyright: {
    marginTop: '1rem',
  },
  autor: {
    fontSize: 10,
    marginBottom: '1rem',
  },
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.footer}>
        <Typography
          className={classes.copyright}
          variant="caption"
          color="inherit"
        >
          ©{new Date().getFullYear()} New Riga Custom
        </Typography>
        <span className={classes.autor}>
          Разработка:{' '}
          <Link color="secondary" href="https://zhelvis.github.io/ru/">
            Владимир Жельвис
          </Link>
        </span>
      </div>
    </React.Fragment>
  )
}
