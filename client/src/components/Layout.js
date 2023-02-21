import React from "react"
import Navbar from "./Navbar"
import PropTypes from "prop-types"
import Footer from "./Footer"
import { SearchModalContextProvider } from "../context/searchModalContext"
import Search from "../search/SearchModal"

function Layout(props) {
  return (
    <SearchModalContextProvider>
      <Navbar {...props} />
      <Search/>
      {props.children}
      <Footer />
    </SearchModalContextProvider>
  )
}
Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
