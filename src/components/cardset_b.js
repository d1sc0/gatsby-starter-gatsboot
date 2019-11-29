import React from 'react'
//import { Card, Button } from 'react-bootstrap'
//import { Link } from 'gatsby'
import SingleCardB from './singlecard_b'

const cardSetb = ({ cardData }) => {
  return (
    <section className="album py-5">
      <div className="container">
        <div className="row">
          {cardData.map(({ id }) => {
            return <SingleCardB key={id} />
          })}
        </div>
      </div>
    </section>
  )
}

export default cardSetb
