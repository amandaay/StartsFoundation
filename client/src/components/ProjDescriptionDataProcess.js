import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

/**
 * this function handles the complex data of the images from proj description
 * @return jsx of mapping the
 */
function HandleText({ description }) {
  return (
    <div>
      {description.map(section => (
        <div key={section._key}>
          {section.children.map(paragraph => (
            <p key={paragraph._key}>{paragraph.text}</p>
          ))}
        </div>
      ))}
    </div>
  )
}

function HandleImage({ image }) {
  return (
    <div>
      <GatsbyImage
        key={image._key}
        image={getImage(image.asset.gatsbyImageData)}
        alt={image.asset.altText || ""}
      />
    </div>
  )
}

HandleText.propTypes = {
  description: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          _key: PropTypes.string.isRequired,
        })
      ),
      _key: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

HandleImage.propTypes = {
  image: PropTypes.shape({
    _key: PropTypes.string.isRequired,
    asset: PropTypes.shape({
      gatsbyImageData: PropTypes.object.isRequired,
      altText: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export { HandleText, HandleImage }
