import { navigate } from "gatsby"
import PropTypes from "prop-types"

function News({ location }) {
  if (typeof window !== "undefined") {
    location.pathname === "/News/"
      ? navigate("/News/page=1")
      : navigate(location.pathname)
    return
  }
}
News.propTypes = {
  location: PropTypes.object,
}
export default News
