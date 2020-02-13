import React from 'react'
import { Head } from '../components/Head'
import { Button } from '@material-ui/core'

const Home = () => (
  <>
    <Head title="Home page" description="this is home page" />
    <Button color="primary">Hi</Button>
    <div className="foo">Hello!</div>
  </>
)

export default Home
