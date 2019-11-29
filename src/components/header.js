import React from 'react'
import PropTypes from 'prop-types'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'gatsby'

const HeadNav = ({ siteTitle }) => {
  return (
    <header>
      <Navbar collapseOnSelect expand="md" bg="white" variant="light">
        <div className="container">
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              <h1 className="siteTitle">{siteTitle}</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/page1">
                1-Page
              </Link>
              <Link className="nav-link" to="/page2">
                2-Jumbo
              </Link>
              <Link className="nav-link" to="/page3">
                3-Different
              </Link>
              <Link className="nav-link" to="/page4">
                4-Cardset
              </Link>
              <Link className="nav-link" to="/page5">
                5-Text & Image
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}

HeadNav.propTypes = {
  siteTitle: PropTypes.string,
}

HeadNav.defaultProps = {
  siteTitle: ``,
}

export default HeadNav
