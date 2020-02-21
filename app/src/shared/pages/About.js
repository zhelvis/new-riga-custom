import React from 'react'
import { Typography } from '@material-ui/core'
import Seo from '../components/Seo'

export default function About() {
  return (
    <React.Fragment>
      <Seo title="About page" description="this is about page" />
      <Typography color="textSecondary" variant="h2">
        About
      </Typography>
    </React.Fragment>
  )
}
