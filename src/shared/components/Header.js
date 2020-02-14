import React from 'react'
import { Link } from '@reach/router'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? 'red' : 'blue',
        },
      }
    }}
  />
)

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          App Bar
        </Typography>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">Dashboard</NavLink>
        </nav>
      </Toolbar>
    </AppBar>
  )
}
