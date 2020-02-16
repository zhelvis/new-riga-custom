import React from 'react'
import { Link } from '@reach/router'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  navlink: {
    color: 'inherit',
    fontSize: '1rem',
    textDecoration: 'none',
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    '&[aria-current="page"]': {
      color: theme.palette.primary.main,
      pointerEvents: 'none',
    },
  },
}))

export default function NavLink(props) {
  const classes = useStyles()
  return <Link {...props} className={classes.navlink} />
}
