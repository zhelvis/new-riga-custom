import React from 'react'
import { Typography } from '@material-ui/core'
import Seo from '../components/Seo'

export default function Services() {
  return (
    <React.Fragment>
      <Seo title="Services page" description="this is services page" />
      <Typography color="textSecondary" variant="h2">
        Services
      </Typography>
    </React.Fragment>
  )
}
