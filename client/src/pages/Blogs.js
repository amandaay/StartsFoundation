import { navigate } from "gatsby"
import PropTypes from "prop-types"

function Blogs({ location }) {
  location.pathname === "/Blogs/"
    ? navigate("/Blogs/page=1")
    : navigate(location.pathname)

  return
}
Blogs.propTypes = {
  location: PropTypes.object,
}
export default Blogs
