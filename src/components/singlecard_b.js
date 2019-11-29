import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'gatsby'

const singleCardb = () => {
  return (
    <>
      {/* start of card */}
      <article className="col-md-6">
        <Card className="card flex-md-row mb-4 box-shadow h-md-250">
          <Card.Body className="card-body d-flex flex-column align-items-start">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to="/">Continue Reading...</Link>
          </Card.Body>
          <Card.Img
            className="card-img-right flex-auto d-none d-md-block"
            variant="right"
            src="https://www.fillmurray.com/200/250"
          />
        </Card>
      </article>
      {/* end of card */}
    </>
  )
}

export default singleCardb
