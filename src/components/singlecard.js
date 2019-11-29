import React from 'react'
import { Card, Button } from 'react-bootstrap'
//import { Link } from 'gatsby'

const singleCard = () => {
  return (
    <>
      {/* start of card */}
      <article className="col-md-4">
        <Card className="card mb-4 box-shadow">
          <Card.Img
            variant="top"
            className="mb-0"
            src="https://www.fillmurray.com/640/360"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="primary">Read More...</Button>
              <small className="text-muted">9 mins</small>
            </div>
          </Card.Body>
        </Card>
      </article>
      {/* end of card */}
    </>
  )
}

export default singleCard
