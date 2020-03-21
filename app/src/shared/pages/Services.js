import React from 'react'
import loadable from '@loadable/component'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Toolbar } from '@material-ui/core'

const Seo = loadable(() => import('../components/Seo'))
const ServicesBlock = loadable(() => import('../components/ServicesBlock'))

Seo.preload()
ServicesBlock.preload()

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

  if (loading) return <span>loading...</span>
  if (error) return <span>error...</span>

  return (
    <React.Fragment>
      <Seo
        title={data.allPageMetaDataFields[0].title}
        description={data.allPageMetaDataFields[0].description}
      />
      <Toolbar />
      <ServicesBlock />
    </React.Fragment>
  )
}
