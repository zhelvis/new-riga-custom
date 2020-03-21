import React, { useState } from 'react'
import { Link as RouterLink } from '@reach/router'
import {
  AppBar,
  Toolbar,
  makeStyles,
  Hidden,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core'

import routes from '../routes'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: 'white',
    color: theme.palette.text.primary,
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingLeft: theme.globalPadding.h,
    paddingRight: theme.globalPadding.h,
  },
  brand: {
    marginRight: 'auto',
  },
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
  drawer: {
    width: theme.drawerWidth,
  },
  listItemLink: {
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&[aria-current="page"]': {
      '& div': {
        color: theme.palette.primary.main,
      },
    },
  },
}))

function ListItemLink({ text, ...props }) {
  const classes = useStyles()
  return (
    <li>
      <ListItem
        button
        disableRipple
        {...props}
        className={classes.listItemLink}
        component={RouterLink}
      >
        <ListItemText primary={text} />
      </ListItem>
    </li>
  )
}

export default function Header() {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)

  return (
    <div className={classes.root}>
      <AppBar className={classes.header}>
        <Toolbar disableGutters>
          <Typography className={classes.brand} color="inherit" variant="h6">
            New Riga Custom
          </Typography>
          <Hidden implementation="css" smDown>
            <nav className={classes.nav}>
              {routes.map(({ name, path }) => (
                <RouterLink className={classes.navlink} key={name} to={path}>
                  {name}
                </RouterLink>
              ))}
            </nav>
          </Hidden>
          <Hidden implementation="css" mdUp>
            <IconButton
              onClick={toggleMenu}
              color="inherit"
              edge="end"
              aria-label="открыть меню"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              open={open}
              onClose={toggleMenu}
              anchor="right"
              PaperProps={{ classes: { root: classes.drawer } }}
            >
              <Toolbar className={classes.drawerHeader}>
                <IconButton
                  aria-label="закрыть меню"
                  edge="start"
                  onClick={toggleMenu}
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
              <List component="nav">
                {routes.map(({ name, path }, i) => (
                  <ListItemLink
                    key={i}
                    to={path}
                    text={name}
                    onClick={toggleMenu}
                  />
                ))}
              </List>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  )
}
