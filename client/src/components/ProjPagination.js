import React from "react"
import "../styles/ProjPagination.css"
import { FcPrevious, FcNext } from "react-icons/fc"
import PropTypes from "prop-types"

/**
 * pagination for projects tabs specifically
 * @return JSX for pagination
 */
function ProjectPagination({
  currentPage,
  totalPages,
  onPageChange,
  children,
}) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="pagination-circle">
        {totalPages > 1 && (
          <FcPrevious
            className="proj-content-left-arrow"
            onClick={() =>
              onPageChange(currentPage === 0 ? totalPages - 1 : currentPage - 1)
            }
          />
        )}
      </div>
      <div className="pagination-content">{children}</div>
      <div className="pagination-circle">
        {totalPages > 1 && (
          <FcNext
            className="proj-content-right-arrow"
            onClick={() =>
              onPageChange(currentPage === totalPages - 1 ? 0 : currentPage + 1)
            }
          />
        )}
      </div>
    </div>
  )
}

ProjectPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default ProjectPagination
