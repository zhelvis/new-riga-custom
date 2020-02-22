import React from 'react'
import { Typography } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Seo from '../components/Seo'

const query = gql`
  {
    allContacts {
      id
    }
  }
`

export default function Home() {
  const { loading, error, data } = useQuery(query)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <React.Fragment>
      <Seo title="Home page" description="this is home page" />
      <Typography color="textSecondary" variant="h2">
        Home
      </Typography>
      <Typography>{JSON.stringify(data)}</Typography>
    </React.Fragment>
  )
}
