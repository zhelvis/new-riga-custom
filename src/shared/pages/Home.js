import React from 'react'
import { Typography } from '@material-ui/core'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <React.Fragment>
      <Seo title="Home page" description="this is home page" />
      <Typography color="textSecondary" variant="h2">
        Home
      </Typography>
    </React.Fragment>
  )
}
