import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link, Typography } from '@material-ui/core'
import MapWithAMarker from './Map'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.default,
  },
  map: {
    width: '100%',
    height: '20vh',
  },
  content: {
    height: 50,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.content}>
          <Typography variant="caption">New Riga Customs ©</Typography>
          <span style={{ fontSize: 10 }}>
            Разработка:{' '}
            <Link href="https://zhelvis.github.io/ru/">Владимир Жельвис</Link>
          </span>
        </div>
        <div className={classes.map}>
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUVXQwhqOBEAbvSn0_tngvkshx3hLAYrI"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </React.Fragment>
  )
}
