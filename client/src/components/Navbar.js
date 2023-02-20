import React, { useEffect, useState, useContext } from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import { MdSearch, MdMenu, MdClose } from "react-icons/md"

function Navbar(props) {
  const [isNavOpen, setIsNavOpen] = useState(false)
  // const { openSearchModal } = useContext(SearchModalContext)
  const openSearchModal = () => console.log("placeholder open search modal")

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
        <MdClose className="close" size={40} onClick={() => showMenu()} />
        <div className="container-xl navContainer">
          <span className="logoSpan">
            <StaticImage
              src="../images/logos/whitelogo.png"
              width={50}
              className="logo"
              alt="starts foundation logo"
            />
          </span>
          {/* mobile responsive styles */}
          {/* <div className="mobileIcon">
            <div className="searchIcon">
              <span className="searchIconSpan">
                <MdSearch className="searchIcon" size={40} />
              </span>
            </div>
          </div> */}
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
                      showMenu();
                      props.scrollToSection(props.about);
                      
                    }}
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
                        onClick={() => props.scrollToSection(props.news)}
                      >
                        Recent News
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => props.scrollToSection(props.join)}
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
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/media">
                  Media
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="joinClass">
                <button className="joinBtn">Join Us</button>
              </li>
              <li className="donateClass">
                <button className="donateBtn">Donate</button>
              </li>
            </ul>
            <span className="searchIconSpan">
              <MdSearch className="searchIcon" size={40} />
            </span>
            <MdMenu
              className={isNavOpen ? "menu close" : "menu"}
              size={40}
              onClick={() => showMenu()}
            />
          </div>
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
}

export default Navbar
