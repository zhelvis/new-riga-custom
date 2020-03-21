import React from 'react'
import loadable from '@loadable/component'
import { useQuery } from '@apollo/react-hooks'
import { Typography } from '@material-ui/core'
import gql from 'graphql-tag'

const Page = loadable(() => import('../components/PageTemplate'))
const Banner = loadable(() => import('../components/Banner'))
const AdvantagesBlock = loadable(() => import('../components/AdvantagesBlock'))
const ContactsBlock = loadable(() => import('../components/ContactsBlock'))

// need for preventing material ui css missmatch on rehydration
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
    </Page>
  )
}
