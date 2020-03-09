import React from 'react'
import loadable from '@loadable/component'
import Seo from '../components/Seo'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Toolbar, Typography, makeStyles } from '@material-ui/core'

const ServiceGroupBlock = loadable(() =>
  import('../components/ServiceGroupBlock')
)

ServiceGroupBlock.preload()

import Banner from '../components/Banner'
import { main } from '../images'

const useStyles = makeStyles(theme => ({
  content: {
    padding: `2.5rem ${theme.globalPadding} 2.5rem ${theme.globalPadding}`,
  },
}))

const query = gql`
  {
    allPageMetaDataFields(where: { name: "services" }) {
      title
      description
    }
    allPageContentBlocks(where: { name: "services" }) {
      block
      content
    }
    allServiceGroups {
      name
      services {
        name
      }
    }
  }
`

export default function Services() {
  const { loading, error, data } = useQuery(query)
  const isReady = !loading && !error
  const classes = useStyles()

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
          <Typography color="inherit" variant="h2">
            {getBlockContent('servicesTitle')}
          </Typography>
        )}
      </Banner>
      <div className={classes.content}>
        {isReady && <ServiceGroupBlock data={data.allServiceGroups} />}
      </div>
    </React.Fragment>
  )
}
