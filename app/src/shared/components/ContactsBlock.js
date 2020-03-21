import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Link, Typography, makeStyles, Paper } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import VkIcon from './VkIcon'
import IconLinkButton from './IconButtonLink'
import { convertArrayToObject } from '../utils'
import Map from './Map'

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
}))

const query = gql`
  {
    allContacts {
      type
      displayText
      link
    }
  }
`

export default function ContactsBlock() {
  const classes = useStyles()
  const { loading, data } = useQuery(query)

  if (loading) return <div />

  const contacts = convertArrayToObject(data.allContacts, 'type')

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper className={classes.container} elevation={3}>
          <div className={classes.content}>
            <Typography paragraph variant="h2">
              Контакты
            </Typography>
            <Typography align="center" paragraph>
              {contacts.map.displayText}
            </Typography>
            <Typography paragraph>
              Время работы: {contacts.time.displayText}
            </Typography>
            <Typography paragraph>
              <Link
                color="primary"
                aria-label="Email"
                href={contacts.email.link}
              >
                {contacts.email.displayText}
              </Link>
            </Typography>
            <Typography paragraph>
              <Link
                color="primary"
                aria-label="Основной телефон"
                href={contacts.phone.link}
              >
                {contacts.phone.displayText}
              </Link>
            </Typography>
            <Typography paragraph>
              <Link
                color="primary"
                aria-label="Дополнительный телефон"
                href={contacts.addPhone.link}
              >
                {contacts.addPhone.displayText}
              </Link>
            </Typography>
            <div className={classes.social}>
              <IconLinkButton
                color="primary"
                aria-label="vk"
                href={contacts.vk.link}
              >
                <VkIcon />
              </IconLinkButton>
              <IconLinkButton
                color="primary"
                aria-label="instagram"
                href={contacts.instagram.link}
              >
                <InstagramIcon />
              </IconLinkButton>
            </div>
          </div>
        </Paper>
      </div>
      <Map markerLink={contacts.map.link} />
    </React.Fragment>
  )
}
