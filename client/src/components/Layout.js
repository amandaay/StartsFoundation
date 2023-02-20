import React from "react"
import Navbar from "./Navbar"
import PropTypes from "prop-types"
import Footer from "./Footer"

function Layout(props) {
  return (
    <div>
      <Navbar {...props} />
      {props.children}
      <Footer />
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
