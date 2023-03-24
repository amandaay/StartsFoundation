import React, { useEffect, useState, useContext } from "react"
import { Link, navigate } from "gatsby"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import { MdSearch, MdMenu, MdClose } from "react-icons/md"
import { SearchModalContext } from "../context/searchModalContext"

function Navbar(props) {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { openSearchModal } = useContext(SearchModalContext)

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "initial"
    }
  }, [isNavOpen])

  const handleSearchModalOpen = () => {
    openSearchModal()
  }

  const showMenu = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <div>
      <nav
        id="mainNavbar"
        className={
          isNavOpen
            ? "navbar navbar-expand-md navbar-dark fixed-top navAll active"
            : "navbar navbar-expand-md navbar-dark fixed-top navAll"
        }
        role="navigation"
      >
        <MdClose
          aria-label="close menu"
          role="button"
          tabIndex={0}
          className="close"
          size={40}
          onClick={() => showMenu()}
          onKeyDown={() => showMenu()}
        />
        <div className="container-xl navContainer">
          <span className="logoSpan">
            <StaticImage
              src="../images/logos/whitelogo.png"
              width={50}
              className="logo"
              alt="starts foundation logo"
            />
          </span>

          <div className="navbar-brand">
            <Link className="navbrand-link brand" to="/">
              Starts Foundation
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navLinks">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => showMenu()}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <span className="dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    // id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      window.location.pathname === "/"
                        ? props.scrollToSection(props.about)
                        : navigate("/#about")
                    }}
                  >
                    About Us
                  </span>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li onClick={() => showMenu()}>
                      <span
                        className="dropdown-item"
                        onClick={() => {
                          window.location.pathname === "/"
                            ? props.scrollToSection(props.join)
                            : navigate("/#join-cause")
                        }}
                      >
                        Join the Cause
                      </span>
                    </li>
                    <li>
                      <span className="dropdown-item"
                        onClick={() => {
                          window.location.pathname === "/"
                            ? props.scrollToSection(props.partners)
                            : navigate("/#partners")
                        }}>Partners</span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => {
                          window.location.pathname === "/"
                            ? props.scrollToSection(props.testimonials)
                            : navigate("/#testimonials")
                        }}
                      >
                        Testimonials
                      </span>
                    </li>
                  </ul>
                </span>
              </li>
              <li className="nav-item">
                <span className="dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Projects
                  </span>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/projects/aidForLivingLife"
                      >
                        Aid For Living Life
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/projects/canvas">
                        Canvas
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/projects/aWaitingSmile"
                      >
                        A waiting Smile
                      </Link>
                    </li>
                  </ul>
                </span>
              </li>
              <li className="nav-item">
                <span className="dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Media
                  </span>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => {
                          window.location.pathname === "/"
                            ? props.scrollToSection(props.blog)
                            : navigate("/#blog")
                        }}
                      >
                        Blogs
                      </span>
                    </li>
                    <li onClick={() => showMenu()}>
                      <span
                        className="dropdown-item"
                        onClick={() => {
                          window.location.pathname === "/"
                            ? props.scrollToSection(props.news)
                            : navigate("/#recent-news")
                        }}
                      >
                        Recent News
                      </span>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Gallery">
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </span>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact Us
                </Link>
              </li>
              <li className="joinClass">
                <Link to="/JoinUs">
                  <button className="joinBtn">Join Us</button>
                </Link>
              </li>
              <li className="donateClass">
                <Link to="/donation">
                  <button className="donateBtn">Donate</button>
                </Link>
              </li>
            </ul>
            <span
              className="searchIconSpan"
              onClick={handleSearchModalOpen}
              onKeyDown={handleSearchModalOpen}
              role="button"
              tabIndex={0}
            >
              <MdSearch className="searchIcon" size={40} />
            </span>
          </div>
          <MdMenu
            className={isNavOpen ? "menu close" : "menu"}
            size={40}
            onClick={() => showMenu()}
            onKeyDown={() => showMenu()}
          />
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  scrollToSection: PropTypes.func,
  about: PropTypes.any,
  news: PropTypes.any,
  join: PropTypes.any,
  blog: PropTypes.any,
  testimonials: PropTypes.any,
  partners: PropTypes.any,
}

export default Navbar
