import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    height: theme.bannerHeight,
    width: '100%',
    backgroundSize: `cover`,
    backgroundPosition: `center 25%`,
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
    <div
      style={{
        backgroundImage: lowResImg
          ? `url(${img}), url(${lowResImg})`
          : `url(${img})`,
      }}
      className={classes.root}
    >
      {children}
    </div>
  )
}
