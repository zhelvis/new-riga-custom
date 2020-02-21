import React from 'react'
import { Link as RouterLink } from '@reach/router'
import { makeStyles } from '@material-ui/core/styles'
import {
  Link,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import PhoneIcon from '@material-ui/icons/Phone'
import InstagramIcon from '@material-ui/icons/Instagram'
import VkIcon from './VkIcon'

import MapWithAMarker from './Map'

import routes from '../routes'
import contacts from '../contacts'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: 'black',
    color: theme.palette.background.default,
  },
  map: {
    width: '100%',
    height: '30vh',
  },
  content: {
    paddingRight: theme.globalPadding,
    paddingLeft: theme.globalPadding,
  },
  footer: {
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  centered: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  navlink: {
    color: 'inherit',
    fontSize: '1rem',
    textDecoration: 'none',
    '&[aria-current="page"]': {
      color: theme.palette.secondary.main,
      pointerEvents: 'none',
    },
  },
  listItemIcon: {
    color: theme.palette.background.default,
  },
  listItemLink: {
    color: theme.palette.background.default,
    textDecoration: 'underline',
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.content}>
          <Grid container spasing={0}>
            <Grid xs={12} md={4} item>
              <List>
                {routes.map(({ name, path }) => (
                  <ListItem key={name} disableGutters>
                    <RouterLink className={classes.navlink} to={path}>
                      {name}
                    </RouterLink>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid xs={12} md={8} item container>
              <Grid item xs={12} sm={6}>
                <List>
                  <ListItem disableGutters>
                    <ListItemIcon className={classes.listItemIcon}>
                      <LocationOnIcon />
                    </ListItemIcon>
                    <Typography variant="body2">
                      <Link
                        className={classes.listItemLink}
                        href={contacts.map.link}
                      >
                        {contacts.map.display}
                      </Link>
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon className={classes.listItemIcon}>
                      <PhoneIcon />
                    </ListItemIcon>
                    <Typography variant="body2">
                      <Link
                        className={classes.listItemLink}
                        href={contacts.phone.link}
                      >
                        {contacts.phone.display}
                      </Link>
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon className={classes.listItemIcon}>
                      <AccessTimeIcon />
                    </ListItemIcon>
                    <Typography variant="body2">09:00 - 19:00</Typography>
                  </ListItem>
                </List>
              </Grid>
              <Grid xs={12} sm={6} item>
                <List>
                  <ListItem disableGutters>
                    <ListItemIcon className={classes.listItemIcon}>
                      <AlternateEmailIcon />
                    </ListItemIcon>
                    <Typography variant="body2">
                      <Link
                        className={classes.listItemLink}
                        href={contacts.email.link}
                      >
                        {contacts.email.display}
                      </Link>
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon className={classes.listItemIcon}>
                      <VkIcon />
                    </ListItemIcon>
                    <Typography variant="body2">
                      <Link
                        className={classes.listItemLink}
                        href={contacts.vk.link}
                      >
                        {contacts.vk.display}
                      </Link>
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon className={classes.listItemIcon}>
                      <InstagramIcon />
                    </ListItemIcon>
                    <Typography variant="body2">
                      <Link
                        className={classes.listItemLink}
                        href={contacts.instagram.link}
                      >
                        {contacts.instagram.display}
                      </Link>
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={classes.map}>
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUVXQwhqOBEAbvSn0_tngvkshx3hLAYrI"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className={classes.footer}>
          <Typography variant="caption">New Riga Customs ©</Typography>
          <span style={{ fontSize: 10 }}>
            Разработка:{' '}
            <Link href="https://zhelvis.github.io/ru/">Владимир Жельвис</Link>
          </span>
        </div>
      </div>
    </React.Fragment>
  )
}
