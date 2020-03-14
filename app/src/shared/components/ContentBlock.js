import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  content: {
    padding: `${theme.spacing(4)}px ${theme.globalPadding}`,
  },
}))

export default function ContentBlock({ children }) {
  const classes = useStyles()

  return <div className={classes.content}>{children}</div>
}
