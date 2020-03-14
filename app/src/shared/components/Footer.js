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
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import PhoneIcon from '@material-ui/icons/Phone'
import InstagramIcon from '@material-ui/icons/Instagram'
import VkIcon from './VkIcon'

import MapWithAMarker from './Map'
import ContentBlock from './ContentBlock'

import routes from '../routes'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
  },
  contacts: {
    width: '100%',
    backgroundColor: 'inherit',
    color: 'white',
  },
  map: {
    width: '100%',
    height: 300,
  },
  footer: {
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: 'inherit',
  },
  listItemLink: {
    color: 'inherit',
  },
}))

export default function Footer({ contacts }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ContentBlock>
        <Grid container spacing={2}>
          <Grid xs={12} md={6} item>
            <Card className={classes.contacts} elevation={0}>
              <CardHeader title="Разделы" />
              <CardContent>
                <List>
                  {routes.map(({ name, path }) => (
                    <ListItem key={name} disableGutters>
                      <RouterLink className={classes.navlink} to={path}>
                        {name}
                      </RouterLink>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6} item container>
            <Card className={classes.contacts} elevation={0}>
              <CardHeader title="Контакты" />
              <CardContent>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <List disablePadding>
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
                        <Typography variant="body2">
                          {contacts.time.display}
                        </Typography>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <List disablePadding>
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
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ContentBlock>
      <div className={classes.map}>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUVXQwhqOBEAbvSn0_tngvkshx3hLAYrI"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          mapLink={contacts.map.link}
        />
      </div>
      <div className={classes.footer}>
        <Typography variant="caption">
          New Riga Custom © {new Date().getFullYear()}
        </Typography>
        <span style={{ fontSize: 10 }}>
          Разработка:{' '}
          <Link href="https://zhelvis.github.io/ru/">Владимир Жельвис</Link>
        </span>
      </div>
    </div>
  )
}
