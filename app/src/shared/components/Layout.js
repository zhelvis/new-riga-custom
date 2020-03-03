import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Header from './Header'
import Footer from './Footer'
import BannerBackground from './BannerBackground'

const query = gql`
  {
    allContacts {
      type
      displayText
      link
    }
  }
`

const useStyles = makeStyles(() => ({
  wrap: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flexGrow: 1,
  },
}))

export default function Layout({ children }) {
  const classes = useStyles()
  const { loading, error, data } = useQuery(query)

  // for ssr
  if (loading) return <p>loading...</p>
  if (error) return <p>error!</p>

  let contacts = {}

  data.allContacts.forEach(
    ({ type, displayText, link }) =>
      (contacts[type] = { display: displayText, link })
  )

  return (
    <React.Fragment>
      <Header contacts={contacts} />
      <BannerBackground />
      <div className={classes.wrap}>
        <div className={classes.main}>{children}</div>
        <Footer contacts={contacts} />
      </div>
    </React.Fragment>
  )
}
