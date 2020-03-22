import React from 'react'
import loadable from '@loadable/component'
import { useQuery } from '@apollo/react-hooks'
import { Typography } from '@material-ui/core'
import gql from 'graphql-tag'

import Page from '../components/PageTemplate'

// need for preventing material ui css missmatch
const Banner = loadable(() => import('../components/Banner'))
const AdvantagesBlock = loadable(() => import('../components/AdvantagesBlock'))
const ContactsBlock = loadable(() => import('../components/ContactsBlock'))

Banner.preload()
AdvantagesBlock.preload()
ContactsBlock.preload()

const query = gql`
  {
    allPageContentBlocks(where: { name: "home" }) {
      block
      content
    }
  }
`

export default function Home() {
  const { loading, data } = useQuery(query)

  if (loading) return <div />

  const getBlockContent = block =>
    data.allPageContentBlocks.find(el => el.block == block).content

  return (
    <Page name="home">
      <Banner>
        <Typography align="center" paragraph variant="h1">
          {getBlockContent('homeTitle')}
        </Typography>
        <Typography align="center" variant="h5">
          {getBlockContent('homeSubtitle')}
        </Typography>
      </Banner>
      <AdvantagesBlock />
      <ContactsBlock />
    </Page>
  )
}
