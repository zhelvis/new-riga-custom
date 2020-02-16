import React from 'react'
import { Router } from '@reach/router'
import loadable from '@loadable/component'
import Layout from './components/Layout'

const Home = loadable(() => import('./pages/Home'))
const About = loadable(() => import('./pages/About'))
const Services = loadable(() => import('./pages/Services'))
const NotFound = loadable(() => import('./pages/NotFound'))

const App = () => (
  <Layout>
    <Router>
      <Home path="/" />
      <About path="about" />
      <Services path="services" />
      <NotFound default />
    </Router>
  </Layout>
)

export default App
