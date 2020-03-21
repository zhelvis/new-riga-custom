import React from 'react'
import loadable from '@loadable/component'

const AboutBlock = loadable(() => import('../components/AboutBlock'))
const Page = loadable(() => import('../components/PageTemplate'))

export default function About() {
  return (
    <Page name="about">
      <AboutBlock />
    </Page>
  )
}
