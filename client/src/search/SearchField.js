import React from "react"
import { FiSearch } from "react-icons/fi"
import PropTypes from "prop-types"
import "../styles/searchField.css"

function SearchField({ value, setValue, onFocus }) {
  return (
    <>
      <div className="searchFieldDiv">
        <input
          className="searchInput"
          type="text"
          placeholder="search"
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={onFocus && onFocus}
        />
        <FiSearch className="searchFieldIcon" size={40} />
      </div>
    </>
  )
}
SearchField.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.any,
  onFocus: PropTypes.any,
}
export default SearchField
