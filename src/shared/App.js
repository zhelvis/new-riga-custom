import React from 'react'
import { Router } from '@reach/router'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => (
  <Router>
    <Home path="/" />
    <NotFound default />
  </Router>
)

export default App
