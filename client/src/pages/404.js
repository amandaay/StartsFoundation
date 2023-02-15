import * as React from "react"
// import Seo from "../components/seo"
import "../styles/NotFound.css"
import { Link } from "gatsby"

/**
 * module that returns error page
 * @returns error page
 */
function NotFound() {
  return (
    <div className="notFoundMainDiv">
      <h1 className="errorHeader404">404</h1>
      <h2 className="notFound">Page Not Found</h2>
      <span className="backHomeSpan">
        <Link className="backHome" to="/">
          Back Home
        </Link>
      </span>
    </div>
  )
}
// export const Head = () => <Seo title="404: Not Found" />

export default NotFound
