import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi everyone!</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>My name is Zainab.</p>
    <p>Let's have fun with JAMstack Hackathon</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
