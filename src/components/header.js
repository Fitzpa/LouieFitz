import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="navbar navbar-expand-lg navbar-dark bg-dark d-flex flex-sm-column flex-md-row">
    <h2>
      <Link className="navbar-brand mr-0" to="/">
        {siteTitle}
      </Link>
    </h2>
    <ul className="nav nav-flex flex-sm-row align-self-sm-center navbar-nav ml-sm-0 ml-md-auto">
      <li className="nav-item pr-sm-3 p-0">
        <a className="nav-link p-0" href="#about">
          <h6 className="mb-0">About</h6>
        </a>
      </li>
      <li className="nav-item pl-sm-3 p-0">
        <a className="nav-link p-0" href="#contact">
          <h6 className="mb-0">Contact</h6>
        </a>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
