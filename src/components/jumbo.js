import React from 'react'
//import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Jumbotron } from 'react-bootstrap'

const Jumbo = ({ jumboData }) => {
  return (
    <Jumbotron className="jumbotron container text-center px-5">
      <h1 className="jumbotron-heading">{jumboData.Title}</h1>
      <p className="lead text-muted">{jumboData.Text}</p>
      <p>
        <Link to={jumboData.Action} className="btn btn-primary my-2">
          {jumboData.BtnText}
        </Link>
      </p>
    </Jumbotron>
  )
}

export default Jumbo
