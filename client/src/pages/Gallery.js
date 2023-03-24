import { navigate } from "gatsby"
import PropTypes from "prop-types"

function Gallery({ location }) {
  location.pathname === "/Gallery/"
    ? navigate("/Gallery/page=1")
    : navigate(location.pathname)

  return
}

Gallery.propTypes = {
  location: PropTypes.object,
}

export default Gallery
