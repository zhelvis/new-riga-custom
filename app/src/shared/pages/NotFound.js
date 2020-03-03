import React from 'react'
import Seo from '../components/Seo'
import { Typography } from '@material-ui/core'
import BannerContent from '../components/BannerContent'

export default function NotFound() {
  return (
    <React.Fragment>
      <Seo title="404" description="this page does not exist" />
      <BannerContent>
        <Typography color="inherit" variant="h2">
          404
        </Typography>
      </BannerContent>
    </React.Fragment>
  )
}
