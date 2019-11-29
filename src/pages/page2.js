import React from 'react'
import Jumbo from '../components/jumbo'
import Layout from '../components/layout'
import SEO from '../components/seo'

const jdata = {
  Title: 'Hello World',
  Text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  Action: '/page1/',
  BtnText: 'Page One',
}

const SecondPage = ({ jumboData }) => (
  <Layout>
    <SEO title="Page2 - Jumbotron" />
    <div className="container py-5">
      <Jumbo jumboData={jdata} />
      <h1>Page 2</h1>
      <p>Welcome to page 2 and it's lovely simple Jumbotron component</p>
    </div>
  </Layout>
)

export default SecondPage
