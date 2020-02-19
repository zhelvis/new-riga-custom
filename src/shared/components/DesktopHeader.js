import React from 'react'
import { AppBar, Toolbar, Typography, Link, Hidden } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import InstagramIcon from '@material-ui/icons/Instagram'
import VkIcon from './VkIcon'
import NavLink from './NavLink'
import IconButtonLink from './IconButtonLink'

import { makeStyles } from '@material-ui/core/styles'

const routes = [
  { name: 'Главная', path: '/' },
  { name: 'О нас', path: 'about' },
  { name: 'Услуги', path: 'services' },
]

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

export default function DesktopHeader() {
  const classes = useStyles()
  return (
    <AppBar className={classes.header} position="fixed">
      <Toolbar disableGutters>
        <Typography className={classes.title} variant="h6">
          New Riga Custom
        </Typography>
        <nav className={classes.nav}>
          {routes.map(({ name, path }) => (
            <NavLink key={name} to={path}>
              {name}
            </NavLink>
          ))}
        </nav>
        <Hidden mdDown implementation="css">
          <div className={classes.info}>
            <AccessTimeIcon className={classes.timeIcon} />
            <Typography>09:00 - 19:00</Typography>
          </div>
        </Hidden>
        <div className={classes.info}>
          <Typography>
            <Link color="primary" href="tel:+79998887766">
              +7 999 888 77 66
            </Link>
          </Typography>
        </div>
        <div className={classes.info}>
          <IconButtonLink color="primary" href="#" aria-label="instagram">
            <InstagramIcon />
          </IconButtonLink>
          <IconButtonLink color="primary" href="#" aria-label="vk">
            <VkIcon />
          </IconButtonLink>
          <IconButtonLink color="primary" href="#" aria-label="location">
            <LocationOnIcon />
          </IconButtonLink>
        </div>
      </Toolbar>
    </AppBar>
  )
}
