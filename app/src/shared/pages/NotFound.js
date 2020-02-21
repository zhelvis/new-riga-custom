import React from 'react'
import { Typography } from '@material-ui/core'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <React.Fragment>
      <Seo title="Not Found" description="this page does not exist" />
      <Typography color="textSecondary" variant="h2">
        404
      </Typography>
    </React.Fragment>
  )
}
