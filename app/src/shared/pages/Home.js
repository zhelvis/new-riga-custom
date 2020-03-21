import React from 'react'
import loadable from '@loadable/component'
import { useQuery } from '@apollo/react-hooks'
import { Typography } from '@material-ui/core'
import gql from 'graphql-tag'

const Seo = loadable(() => import('../components/Seo'))
const Banner = loadable(() => import('../components/Banner'))
const AdvantagesBlock = loadable(() => import('../components/AdvantagesBlock'))
const ContactsBlock = loadable(() => import('../components/ContactsBlock'))

Seo.preload()
Banner.preload()
AdvantagesBlock.preload()
ContactsBlock.preload()

const query = gql`
  {
    allPageMetaDataFields(where: { name: "home" }) {
      title
      description
    }
    allPageContentBlocks(where: { name: "home" }) {
      block
      content
    }
  }
`

export default function Home() {
  const { loading, error, data } = useQuery(query)

  if (loading) return <span>loading...</span>
  if (error) return <span>error...</span>

  const getBlockContent = block =>
    data.allPageContentBlocks.find(el => el.block == block).content

  return (
    <React.Fragment>
      <Seo
        title={data.allPageMetaDataFields[0].title}
        description={data.allPageMetaDataFields[0].description}
      />
      <Banner>
        <React.Fragment>
          <Typography align="center" paragraph variant="h1">
            {getBlockContent('homeTitle')}
          </Typography>
          <Typography align="center" variant="h5">
            {getBlockContent('homeSubtitle')}
          </Typography>
        </React.Fragment>
      </Banner>
      <AdvantagesBlock />
      <ContactsBlock />
    </React.Fragment>
  )
}
