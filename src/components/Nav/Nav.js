import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header class="header jsHeader ">
    <div className="container">
      <div class="header-menu">
        <div class="header-menu-links">works</div>
        <div class="header-menu-links">reach us</div>
      </div>
      <div class="header-logo">
        <a href="#">naisu</a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
