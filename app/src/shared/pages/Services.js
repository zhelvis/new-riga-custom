import React from 'react'
import Seo from '../components/Seo'
import { Typography } from '@material-ui/core'
import BannerContent from '../components/BannerContent'

export default function Services() {
  return (
    <React.Fragment>
      <Seo title="Услуги" description="this is services page" />
      <BannerContent>
        <Typography color="inherit" variant="h2">
          Услуги
        </Typography>
      </BannerContent>
    </React.Fragment>
  )
}
