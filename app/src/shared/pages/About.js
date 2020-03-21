import React from 'react'
import loadable from '@loadable/component'
import { Toolbar } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const Seo = loadable(() => import('../components/Seo'))
const AboutBlock = loadable(() => import('../components/AboutBlock'))

Seo.preload()
AboutBlock.preload()

const query = gql`
  {
    allPageMetaDataFields(where: { name: "about" }) {
      title
      description
    }
  }
`

export default function About() {
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
      <AboutBlock />
    </React.Fragment>
  )
}
