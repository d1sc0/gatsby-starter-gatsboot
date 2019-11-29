import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbo from '../components/jumbo'
import JumboB from '../components/jumbo_b'
import CardSet from '../components/cardset'
import CardSetb from '../components/cardset_b'

const jdata = {
  Title: 'Welcome',
  Text:
    'Bringing together a bunch of components to make a home page for my site. Flexitarian humblebrag tilde +1 adaptogen XOXO 3 wolf moon. Selfies schlitz you probably heard of them prism 90s enamel pin. PBR&B try-hard asymmetrical vegan adaptogen kickstarter woke umami cloud bread viral. Squid vegan kogi offal mixtape photo booth.',
  Action: '/',
  BtnText: 'Take me home!',
}

const jbdata = {
  Title: 'Take me away!',
  Text:
    'Bringing together a bunch of components to make a home page for my site.Flexitarian humblebrag tilde + 1 adaptogen XOXO 3 wolf moon. Selfies schlitz you probably heard of them prism 90s enamel pin. PBR & B try-hard asymmetrical vegan adaptogen kickstarter woke umami cloud bread viral. Squid vegan kogi offal mixtape photo booth.',
  Action: '/',
  BtnText: 'Continue Reading...',
}

const cardnums = [1, 2, 3, 4, 5, 6]
const cardnumsB = [1, 2]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbo jumboData={jdata} />
    <CardSet cardData={cardnums} />
    <CardSetb cardData={cardnumsB} />
    <JumboB jumboData={jbdata} />
    <div className="container py-5">
      <h1>Home Page</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <article className="col-md-6"></article>
    </div>
  </Layout>
)

export default IndexPage
