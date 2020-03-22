import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Typography } from '@material-ui/core'
import gql from 'graphql-tag'

import Page from '../components/PageTemplate'
import Banner from '../components/Banner'
import AdvantagesBlock from '../components/AdvantagesBlock'
import ContactsBlock from '../components/ContactsBlock'

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

  const getBlockContent = block =>
    data.allPageContentBlocks.find(el => el.block == block).content

  return (
    <Page name="home">
      <Banner>
        {!loading && (
          <React.Fragment>
            <Typography align="center" paragraph variant="h1">
              {getBlockContent('homeTitle')}
            </Typography>
            <Typography align="center" variant="h5">
              {getBlockContent('homeSubtitle')}
            </Typography>
          </React.Fragment>
        )}
      </Banner>
      <AdvantagesBlock />
      <ContactsBlock />
    </Page>
  )
}
