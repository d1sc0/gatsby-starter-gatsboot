import React from 'react'
//import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Jumbotron } from 'react-bootstrap'

const JumboB = ({ jumboData }) => {
  return (
    <Jumbotron className="jumbotron container p-3 p-md-5 mb-4 text-white rounded bg-dark imageback">
      <h1 className="jumbotron-heading text-white display-4 font-italic">
        {jumboData.Title}
      </h1>
      <p className="lead my-3">{jumboData.Text}</p>
      <p className="lead my-3">
        <Link className="text-white font-weight-bold" to={jumboData.Action}>
          {jumboData.BtnText}
        </Link>
      </p>
    </Jumbotron>
  )
}

export default JumboB
