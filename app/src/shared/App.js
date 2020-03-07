import React from 'react'
import { Router } from '@reach/router'
import loadable from '@loadable/component'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

const Home = loadable(() => import('./pages/Home'))
const About = loadable(() => import('./pages/About'))
const Services = loadable(() => import('./pages/Services'))
const NotFound = loadable(() => import('./pages/NotFound'))

const App = () => (
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
)

export default App
