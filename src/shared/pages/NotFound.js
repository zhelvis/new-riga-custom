import React from 'react'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <React.Fragment>
      <Seo title="Not Found" description="this page does not exist" />
      <span>404</span>
    </React.Fragment>
  )
}
