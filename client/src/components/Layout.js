import React from "react"
import Navbar from "./Navbar"
import PropTypes from "prop-types"

function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
