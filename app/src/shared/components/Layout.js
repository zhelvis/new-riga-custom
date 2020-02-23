import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Toolbar } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Header from './Header'
import Footer from './Footer'

const query = gql`
  {
    allContacts {
      type
      displayText
      link
    }
  }
`

const useStyles = makeStyles(theme => ({
  wrap: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flexGrow: 1,
    paddingLeft: theme.globalPadding,
    paddingRight: theme.globalPadding,
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
      <div className={classes.wrap}>
        <Toolbar />
        <div className={classes.main}>{children}</div>
        <Footer contacts={contacts} />
      </div>
    </React.Fragment>
  )
}
