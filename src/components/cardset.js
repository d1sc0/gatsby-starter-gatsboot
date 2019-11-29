import React from 'react'
//import { Card, Button } from 'react-bootstrap'
//import { Link } from 'gatsby'
import SingleCard from './singlecard'

const cardSet = ({ cardData }) => {
  return (
    <section className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {cardData.map(({ id }) => {
            return <SingleCard key={id} />
          })}
        </div>
      </div>
    </section>
  )
}

export default cardSet
