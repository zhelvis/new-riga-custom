import React from 'react'
import { Router } from '@reach/router'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import loadable from '@loadable/component'
import { convertArrayToObject } from './utils'
import { ContactsProvider } from './components/ContactsProvider'

const ScrollToTop = loadable(() => import('./components/ScrollToTop'))
const Layout = loadable(() => import('./components/Layout'))
const Home = loadable(() => import('./pages/Home'))
const About = loadable(() => import('./pages/About'))
const Services = loadable(() => import('./pages/Services'))
const NotFound = loadable(() => import('./pages/NotFound'))

const query = gql`
  {
    allContacts {
      type
      displayText
      link
    }
  }
`

export default function App() {
  const { loading, data } = useQuery(query)

  if (loading) return <div />

  const contacts = convertArrayToObject(data.allContacts, 'type')
  return (
    <ContactsProvider contacts={contacts}>
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
