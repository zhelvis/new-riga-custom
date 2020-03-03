import React from 'react'
import { Typography } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Seo from '../components/Seo'
import BannerContent from '../components/BannerContent'

const query = gql`
  {
    allContentBlocks(where: { type: "home" }) {
      body
    }
  }
`

export default function Home() {
  const { loading, error, data } = useQuery(query)

  return (
    <React.Fragment>
      <Seo title="Главная" description="this is home page" />
      <BannerContent>
        <Typography color="inherit" variant="h2">
          Главная
        </Typography>
      </BannerContent>
      {loading || error ? (
        <div />
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: data.allContentBlocks[0].body }}
        />
      )}
    </React.Fragment>
  )
}
