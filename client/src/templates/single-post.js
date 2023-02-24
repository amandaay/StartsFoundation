import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import PropTypes from "prop-types"
import PortableTextComponent from "../components/PortableText"

export const postQuery = graphql`
  query SingleNewsQuery($id: String!) {
    sanityNews(_id: { eq: $id }) {
      title
      date(formatString: "MMM Do, YYYY")
      _rawBody
      caption
      image {
        alt
        asset {
          gatsbyImageData(width: 200, placeholder: BLURRED)
        }
      }
    }
  }
`
function SinglePost({ data }) {
  const { title, date, _rawBody, image, caption } = data.sanityNews
  console.log("data", data)
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{date}</p>
      <article>
        <PortableTextComponent value={_rawBody} />
      </article>
      <span>
        <GatsbyImage image={image.asset.gatsbyImageData} alt={image.alt} />
        <p>{caption}</p>
      </span>
    </div>
  )
}

SinglePost.propTypes = {
  data: PropTypes.func,
}

export default SinglePost
