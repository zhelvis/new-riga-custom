import React from 'react'
import { Typography } from '@material-ui/core'
import Seo from '../components/Seo'
import BannerContent from '../components/BannerContent'

export default function About() {
  return (
    <React.Fragment>
      <Seo title="О нас" description="this is about page" />
      <BannerContent>
        <Typography color="inherit" variant="h2">
          О нас
        </Typography>
      </BannerContent>
    </React.Fragment>
  )
}
