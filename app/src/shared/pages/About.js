import React from 'react'
import { Toolbar, Typography, makeStyles } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import Seo from '../components/Seo'
import Banner from '../components/Banner'
import { main } from '../images'

const query = gql`
  {
    allPageMetaDataFields(where: { name: "about" }) {
      title
      description
    }
    allPageContentBlocks(where: { name: "about" }) {
      block
      content
    }
  }
`

const useStyles = makeStyles(theme => ({
  content: {
    padding: `2.5rem ${theme.globalPadding} 2.5rem ${theme.globalPadding}`,
  },
}))

export default function About() {
  const { loading, error, data } = useQuery(query)

  const classes = useStyles()
  const isReady = !loading && !error

  const getBlockContent = block =>
    data.allPageContentBlocks.find(el => el.block == block).content

  console.log()
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
          <Typography color="inherit" variant="h2">
            {getBlockContent('aboutTitle')}
          </Typography>
        )}
      </Banner>
      <div className={classes.content}>
        {isReady && (
          <Typography color="inherit" variant="subtitle1">
            {getBlockContent('aboutMain')}
          </Typography>
        )}
      </div>
    </React.Fragment>
  )
}
