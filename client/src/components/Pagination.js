import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "../styles/Pagination.css"

export const Pagination = ({ currentPage, pageCount, base }) => (
  <div className="pagination">
    {currentPage > 1 ? (
      <Link title="Go to previous page" to={`/page/${currentPage - 1}`}>
        ← Newer posts
      </Link>
    ) : (
      <span />
    )}
    Page {currentPage} of {pageCount}
    {currentPage < pageCount ? (
      <Link title="Go to next page" to={`/page/${currentPage + 1}`}>
        Older posts →
      </Link>
    ) : (
      <span />
    )}
  </div>
)

Pagination.propTypes = {
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
  base: PropTypes.any,
}
