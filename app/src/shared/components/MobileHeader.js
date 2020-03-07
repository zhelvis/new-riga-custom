import React from 'react'
import { Link as RouterLink } from '@reach/router'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import PhoneIcon from '@material-ui/icons/Phone'
import InstagramIcon from '@material-ui/icons/Instagram'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import VkIcon from './VkIcon'
import IconButtonLink from './IconButtonLink'

import { makeStyles } from '@material-ui/core/styles'

import routes from '../routes'

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingLeft: theme.globalPadding,
    paddingRight: theme.globalPadding,
  },
  nav: {
    display: 'flex',
    flexDirection: 'row-reverse',
    flexGrow: 1,
  },
  drawerHeader: {
    flexDirection: 'row-reverse',
  },
  drawerPaper: {
    width: theme.drawerWidth,
  },
  drawerActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
  },
  listItemLink: {
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&[aria-current="page"]': {
      color: theme.palette.primary.main,
      pointerEvents: 'none',
    },
  },
}))

function ActionButtons({ contacts, ...props }) {
  return (
    <React.Fragment>
      <IconButtonLink {...props} href={contacts.phone.link} aria-label="phone">
        <PhoneIcon />
      </IconButtonLink>
      <IconButtonLink {...props} href={contacts.email.link} aria-label="email">
        <AlternateEmailIcon />
      </IconButtonLink>
      <IconButtonLink {...props} href={contacts.vk.link} aria-label="vk">
        <VkIcon />
      </IconButtonLink>
      <IconButtonLink
        {...props}
        href={contacts.instagram.link}
        aria-label="instagram"
      >
        <InstagramIcon />
      </IconButtonLink>
      <IconButtonLink {...props} href={contacts.map.link} aria-label="location">
        <LocationOnIcon />
      </IconButtonLink>
    </React.Fragment>
  )
}

function ListItemLink({ text, ...props }) {
  const classes = useStyles()
  return (
    <li>
      <ListItem
        {...props}
        className={classes.listItemLink}
        component={RouterLink}
      >
        <ListItemText primary={text} />
      </ListItem>
    </li>
  )
}

export default function MobileHeader({ contacts }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const toggleMenu = () => setOpen(!open)

  return (
    <React.Fragment>
      <AppBar className={classes.header} position="fixed">
        <Toolbar disableGutters>
          <IconButton edge="start" aria-label="menu" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
          <nav className={classes.nav}>
            <div>
              <ActionButtons contacts={contacts} color="primary" edge="end" />
            </div>
          </nav>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={open}
        onClose={toggleMenu}
        PaperProps={{ classes: { root: classes.drawerPaper } }}
      >
        <Toolbar className={classes.drawerHeader}>
          <IconButton aria-label="close" onClick={toggleMenu}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <List>
          {routes.map(({ name, path }) => (
            <ListItemLink
              key={name}
              to={path}
              text={name}
              onClick={toggleMenu}
            />
          ))}
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemText
              primary="Время работы"
              secondary={contacts.time.display}
            />
          </ListItem>
        </List>
        <Divider />
        <div className={classes.drawerActions}>
          <ActionButtons contacts={contacts} color="primary" />
        </div>
      </Drawer>
    </React.Fragment>
  )
}
