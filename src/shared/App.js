import React from 'react'
import { Router } from '@reach/router'
import loadable from '@loadable/component'
import Layout from './components/Layout'

const Home = loadable(() => import('./pages/Home'))
const About = loadable(() => import('./pages/About'))
const NotFound = loadable(() => import('./pages/NotFound'))

const App = () => (
  <Layout>
    <Router>
      <Home path="/" />
      <About path="about" />
      <NotFound default />
    </Router>
  </Layout>
)

export default App
