import React from 'react'
import { Toolbar, Typography } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import Seo from '../components/Seo'

const query = gql`
  {
    allPageMetaDataFields(where: { name: "home" }) {
      title
      description
    }
  }
`

export default function Home() {
  const { loading, error, data } = useQuery(query)

  const isReady = !loading && !error

  return (
    <React.Fragment>
      {isReady && (
        <Seo
          title={data.allPageMetaDataFields[0].title}
          description={data.allPageMetaDataFields[0].description}
        />
      )}
      <Toolbar />
      <Typography color="inherit" variant="h2">
        Главная
      </Typography>
    </React.Fragment>
  )
}
