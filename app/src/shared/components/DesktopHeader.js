import React from 'react'
import { AppBar, Toolbar, Typography, Link, Hidden } from '@material-ui/core'
import { Link as RouterLink } from '@reach/router'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import InstagramIcon from '@material-ui/icons/Instagram'
import VkIcon from './VkIcon'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import IconButtonLink from './IconButtonLink'

import { makeStyles } from '@material-ui/core/styles'

import routes from '../routes'

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingLeft: theme.globalPadding,
    paddingRight: theme.globalPadding,
  },
  title: {
    fontWeight: 'bold',
    paddingRight: theme.spacing(4),
  },
  nav: {
    flexGrow: 1,
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
  info: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  timeIcon: {
    paddingRight: theme.spacing(1),
  },
}))

export default function DesktopHeader({ contacts }) {
  const classes = useStyles()
  return (
    <AppBar className={classes.header} position="fixed">
      <Toolbar disableGutters>
        <Typography className={classes.title} variant="h6">
          New Riga Custom
        </Typography>
        <nav className={classes.nav}>
          {routes.map(({ name, path }) => (
            <RouterLink className={classes.navlink} key={name} to={path}>
              {name}
            </RouterLink>
          ))}
        </nav>
        <Hidden mdDown implementation="css">
          <div className={classes.info}>
            <AccessTimeIcon className={classes.timeIcon} />
            <Typography>{contacts.time.display}</Typography>
          </div>
        </Hidden>
        <div className={classes.info}>
          <Typography>
            <Link color="primary" href={contacts.phone.link}>
              {contacts.phone.display}
            </Link>
          </Typography>
        </div>
        <IconButtonLink
          color="primary"
          href={contacts.email.link}
          aria-label="email"
        >
          <AlternateEmailIcon />
        </IconButtonLink>
        <IconButtonLink color="primary" href={contacts.vk.link} aria-label="vk">
          <VkIcon />
        </IconButtonLink>
        <IconButtonLink
          color="primary"
          href={contacts.instagram.link}
          aria-label="instagram"
        >
          <InstagramIcon />
        </IconButtonLink>
        <IconButtonLink
          color="primary"
          href={contacts.map.link}
          aria-label="location"
        >
          <LocationOnIcon />
        </IconButtonLink>
      </Toolbar>
    </AppBar>
  )
}
