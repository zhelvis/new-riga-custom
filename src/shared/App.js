import React from 'react'
import { Router } from '@reach/router'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

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
