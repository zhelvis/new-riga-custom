import React, { useContext } from 'react'
import { Link, Typography, makeStyles, Paper } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import VkIcon from './VkIcon'
import IconLinkButton from './IconButtonLink'
import Map from './Map'
import { ContactsContext } from './ContactsProvider'

const useStyles = makeStyles(theme => ({
  root: {
    paddingRight: theme.globalPadding.h,
    paddingLeft: theme.globalPadding.h,
  },
  container: {
    padding: theme.spacing(2),
    position: 'relative',
    zIndex: 1,
    marginBottom: `-${theme.globalPadding.v}`,
  },
  content: {
    height: `100%`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  social: {
    marginTop: `1rem`,
  },
}))

export default function ContactsBlock() {
  const classes = useStyles()
  const contacts = useContext(ContactsContext)
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper className={classes.container} elevation={3}>
          <div className={classes.content}>
            <Typography paragraph variant="h2">
              Контакты
            </Typography>
            <Typography variant="caption">{contacts.map.name}</Typography>
            <Typography paragraph align="center">
              {contacts.map.displayText}
            </Typography>
            <Typography variant="caption">{contacts.time.name}</Typography>
            <Typography paragraph>{contacts.time.displayText}</Typography>
            <Typography variant="caption">{contacts.email.name}</Typography>
            <Typography paragraph>
              <Link
                color="primary"
                aria-label={contacts.email.name}
                href={contacts.email.link}
              >
                {contacts.email.displayText}
              </Link>
            </Typography>
            <Typography variant="caption">{contacts.phone.name}</Typography>
            <Typography paragraph>
              <Link
                color="primary"
                aria-label={`Телефон (${contacts.phone.name})`}
                href={contacts.phone.link}
              >
                {contacts.phone.displayText}
              </Link>
            </Typography>
            <Typography variant="caption">{contacts.addPhone.name}</Typography>
            <Typography paragraph>
              <Link
                color="primary"
                aria-label={`Телефон (${contacts.addPhone.name})`}
                href={contacts.addPhone.link}
              >
                {contacts.addPhone.displayText}
              </Link>
            </Typography>
            <div className={classes.social}>
              <IconLinkButton
                color="primary"
                aria-label={contacts.vk.name}
                href={contacts.vk.link}
              >
                <VkIcon />
              </IconLinkButton>
              <IconLinkButton
                color="primary"
                aria-label={contacts.instagram.name}
                href={contacts.instagram.link}
              >
                <InstagramIcon />
              </IconLinkButton>
              <IconLinkButton
                color="primary"
                aria-label={contacts.whatsapp.name}
                href={contacts.whatsapp.link}
              >
                <WhatsAppIcon />
              </IconLinkButton>
            </div>
          </div>
        </Paper>
      </div>
      <Map markerLink={contacts.map.link} />
    </React.Fragment>
  )
}
