import React, { useState, useContext } from 'react'
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
  Link,
  Divider,
} from '@material-ui/core'

import { ContactsContext } from './ContactsProvider'
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
    marginRight: theme.spacing(4),
  },
  info: {
    display: 'flex',
  },
  infoItem: {
    marginLeft: theme.spacing(4),
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
  listNavLink: {
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

function ListNavLink({ text, ...props }) {
  const classes = useStyles()
  return (
    <ListItem
      button
      disableRipple
      {...props}
      className={classes.listNavLink}
      component={RouterLink}
    >
      <ListItemText primary={text} />
    </ListItem>
  )
}

function ListContactLink({ primary, secondary, ...props }) {
  return (
    <ListItem button disableRipple {...props} component="a">
      <ListItemText
        primary={primary}
        secondary={secondary}
        primaryTypographyProps={{
          color: 'primary',
        }}
      />
    </ListItem>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const contacts = useContext(ContactsContext)

  const toggleMenu = () => setOpen(!open)

  return (
    <div className={classes.root}>
      <AppBar className={classes.header}>
        <Toolbar disableGutters>
          <Typography className={classes.brand} color="inherit" variant="h6">
            New Riga Custom
          </Typography>

          <div style={{ flexGrow: 1 }}>
            <Hidden implementation="css" smDown>
              <nav>
                {routes.map(({ name, path }) => (
                  <RouterLink className={classes.navlink} key={name} to={path}>
                    {name}
                  </RouterLink>
                ))}
              </nav>
            </Hidden>
          </div>
          <Hidden implementation="css" smDown>
            <div className={classes.info}>
              <Typography className={classes.infoItem}>
                <Link
                  href={contacts.phone.link}
                  aria-label={`телефон (${contacts.phone.name})`}
                >
                  {contacts.phone.displayText}
                </Link>
              </Typography>
              <Typography className={classes.infoItem}>
                {contacts.time.displayText}
              </Typography>
            </div>
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
                  <ListNavLink
                    key={i}
                    to={path}
                    text={name}
                    onClick={toggleMenu}
                  />
                ))}
              </List>
              <Divider />
              <List component="div">
                <ListItem conponent="div">
                  <ListItemText
                    primary={contacts.time.displayText}
                    secondary={contacts.time.name}
                  />
                </ListItem>
                <ListContactLink
                  primary={contacts.phone.displayText}
                  secondary={contacts.phone.name}
                  aria-label={`телефон (${contacts.phone.name})`}
                  href={contacts.phone.link}
                />
                <ListContactLink
                  primary={contacts.addPhone.displayText}
                  secondary={contacts.addPhone.name}
                  aria-label={`телефон (${contacts.addPhone.name})`}
                  href={contacts.phone.link}
                />
                <ListContactLink
                  primary={contacts.whatsapp.displayText}
                  secondary={contacts.whatsapp.name}
                  aria-label={contacts.whatsapp.name}
                  href={contacts.phone.link}
                />
              </List>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  )
}
