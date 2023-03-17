import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "../styles/Pagination.css"

export const Pagination = ({ currentPage, pageCount, base }) => (
  <div className="pagination">
    
    {
      <Link className={`${currentPage > 1 ? "visible" : "invisible"}`} title="Go to previous page" to={`/${base}/page=${currentPage - 1}`}>
        ← Newer posts
      </Link>
    }
    Page {currentPage} of {pageCount}
    {
      <Link className={`${currentPage < pageCount ? "visible" : "invisible"}`} title="Go to next page" to={`/${base}/page=${currentPage + 1}`}>
        Older posts →
      </Link>
    }
  </div>
)

Pagination.propTypes = {
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
  base: PropTypes.any,
}
