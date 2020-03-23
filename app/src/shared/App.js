import React from 'react'
import { Router } from '@reach/router'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import loadable from '@loadable/component'
import { convertArrayToObject } from './utils'
import { ContactsProvider } from './components/ContactsProvider'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout'

const Home = loadable(() => import('./pages/Home'))
const About = loadable(() => import('./pages/About'))
const Services = loadable(() => import('./pages/Services'))
const NotFound = loadable(() => import('./pages/NotFound'))

const query = gql`
  {
    allContacts {
      name
      type
      displayText
      link
    }
  }
`

export default function App() {
  const { loading, data } = useQuery(query)

  if (loading) return <div />

  return (
    <ContactsProvider contacts={convertArrayToObject(data.allContacts, 'type')}>
      <Layout>
        <Router primary={false}>
          <ScrollToTop path="/">
            <Home path="/" />
            <About path="about" />
            <Services path="services" />
            <NotFound default />
          </ScrollToTop>
        </Router>
      </Layout>
    </ContactsProvider>
  )
}
