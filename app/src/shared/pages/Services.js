import React from 'react'
import Seo from '../components/Seo'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { Toolbar, Typography } from '@material-ui/core'

const query = gql`
  {
    allPageMetaDataFields(where: { name: "services" }) {
      title
      description
    }
  }
`

export default function Services() {
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
        Услуги
      </Typography>
    </React.Fragment>
  )
}
