import React from 'react'
import { Typography } from '@material-ui/core'
import Seo from '../components/Seo'
import { DataContext } from '../components/DataContext'

export default function Home() {
  const data = React.useContext(DataContext)
  console.log(data)
  return (
    <React.Fragment>
      <Seo title="Home page" description="this is home page" />
      <Typography color="textSecondary" variant="h2">
        Home
      </Typography>
      <Typography color="textSecondary" variant="body1">
        {JSON.stringify(data)}
      </Typography>
    </React.Fragment>
  )
}
