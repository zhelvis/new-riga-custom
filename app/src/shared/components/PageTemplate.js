import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Toolbar } from '@material-ui/core'
import Seo from './Seo'

const query = gql`
  query Metadata($name: String!) {
    allPageMetaDataFields(where: { name: $name }) {
      title
      description
    }
  }
`

export default function Page({ name, children }) {
  const { loading, data } = useQuery(query, {
    variables: { name },
  })

  return (
    <React.Fragment>
      <Toolbar />
      {!loading && (
        <Seo
          title={data.allPageMetaDataFields[0].title}
          description={data.allPageMetaDataFields[0].description}
        />
      )}
      {children}
    </React.Fragment>
  )
}
