import React from "react"
import { PortableText } from "@portabletext/react"
import PropTypes from "prop-types"
import { getImage, getImageDimensions } from "@sanity/asset-utils"
import sanityConfig from "../../sanity-config"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSanityImageData } from "../utils/getSanityImageData"

const portableTextComponents = {
  types: {
    customImage: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset
      const { width, height } = getImageDimensions(value)

      const image = {
        url: imageData.url,
        width,
        height,
      }

      const gatsbyImageData = getSanityImageData({
        image,
        layout: "constrained",
      })

      return (
        <GatsbyImage
          image={gatsbyImageData}
          alt={value.alt}
          className="bodyImage"
        />
      )
    },
  },
}
function PortableTextComponent({ value }) {
  return <PortableText value={value} components={portableTextComponents} />
}

PortableTextComponent.propTypes = {
  value: PropTypes.array,
}
export default PortableTextComponent
