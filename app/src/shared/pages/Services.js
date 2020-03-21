import React from 'react'
import loadable from '@loadable/component'

const ServicesBlock = loadable(() => import('../components/ServicesBlock'))
const Page = loadable(() => import('../components/PageTemplate'))

export default function Services() {
  return (
    <Page name="services">
      <ServicesBlock />
    </Page>
  )
}
