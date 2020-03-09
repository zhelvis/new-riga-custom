import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: theme.bannerHeight,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    backgroundSize: `cover`,
    backgroundPosition: `center 25%`,
  },
  blackout: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.5,
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: theme.globalPadding,
    paddingRight: theme.globalPadding,
    color: 'white',
  },
}))
export default function Banner({ children, img, lowResImg }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div
        style={{
          backgroundImage: lowResImg
            ? `url(${img}), url(${lowResImg})`
            : `url(${img})`,
        }}
        className={classes.image}
      ></div>
      <div className={classes.blackout}></div>
      <div className={classes.content}>{children}</div>
    </div>
  )
}
