import React from 'react'
import { Toolbar, Typography } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Banner from '../components/Banner'
import Advantages from '../components/Advantages'
import { main } from '../images'
import Seo from '../components/Seo'

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

  const isReady = !loading && !error

  const getBlockContent = block =>
    data.allPageContentBlocks.find(el => el.block == block).content

  return (
    <React.Fragment>
      {isReady && (
        <Seo
          title={data.allPageMetaDataFields[0].title}
          description={data.allPageMetaDataFields[0].description}
        />
      )}
      <Toolbar />
      <Banner img={main.src} lowResImg={main.lowRes}>
        {isReady && (
          <React.Fragment>
            <Typography
              color="inherit"
              variant="h2"
              style={{ marginBottom: '1rem' }}
            >
              {getBlockContent('homeTitle')}
            </Typography>
            <Typography color="inherit" variant="h5">
              {getBlockContent('homeSubtitle')}
            </Typography>
          </React.Fragment>
        )}
      </Banner>
      <Advantages />
    </React.Fragment>
  )
}
