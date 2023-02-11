import React from "react"
import "./Navbar.css"
import { NavLink } from "react-router-dom"
import logo from "../../assets/images/whitelogo.png"
import PropTypes from "prop-types"

function Navbar({ scrollToSection, about, news, join }) {
  return (
    <div>
      <nav
        id="mainNavbar"
        className="navbar navbar-expand-md navbar-dark fixed-top navAll"
        role="navigation"
      >
        <div className="container-xl navContainer">
          <span className="logoSpan">
            <img src={logo} className="logo" alt="starts foundation logo" />
          </span>

          <div className="navbar-brand">
            <NavLink className="navbrand-link" to="/">
              Starts Foundation
            </NavLink>
          </div>

          <div className="collapse navbar-collapse" id="navLinks">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item" onClick={() => scrollToSection(about)}>
                <span className="dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    // id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </span>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => scrollToSection(news)}
                      >
                        Recent News
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => scrollToSection(join)}
                      >
                        Join the Cause
                      </span>
                    </li>
                    <li>
                      <span className="dropdown-item">Partners</span>
                    </li>
                    <li>
                      <span className="dropdown-item">Testimonials</span>
                    </li>
                  </ul>
                </span>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/media">
                  Media
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <span className="joinClass">
            <button className="joinBtn">Join Us</button>
          </span>
          <span className="donateClass">
            <button className="donateBtn">Donate</button>
          </span>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  scrollToSection: PropTypes.func,
  about: PropTypes.any,
}
export default Navbar
