import React from 'react'
import CardSet from '../components/cardset'
import Layout from '../components/layout'
import SEO from '../components/seo'

const cardnums = [1, 2, 3, 4, 5, 6]

const SecondPage = ({ cardData }) => (
  <Layout>
    <SEO title="Page4 - Cardset" />

    <div className="container py-5">
      <h1>Page 4 - Cardset</h1>
      <p>
        This page uses a Card Set component. Take a look at cardset.js and
        singlecard.js
      </p>
    </div>

    <CardSet cardData={cardnums} />
  </Layout>
)

export default SecondPage
