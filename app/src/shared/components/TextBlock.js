import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  text: {
    padding: `4rem ${theme.globalPadding} 4rem ${theme.globalPadding}`,
  },
}))

export default function TextBlock({ children }) {
  const classes = useStyles()
  return <div className={classes.text}>{children}</div>
}
