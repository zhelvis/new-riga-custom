import React from 'react'
import { IconButton, Link } from '@material-ui/core'

export default function IconButtonLink({ children, ...props }) {
  return (
    <IconButton {...props} component={Link}>
      {children}
    </IconButton>
  )
}
