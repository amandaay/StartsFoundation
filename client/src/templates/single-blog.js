import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import PropTypes from "prop-types"
import PortableTextComponent from "../components/PortableText"

export const postQuery = graphql`
  query singleNewsQuery($id: String!) {
    sanityBlog(_id: { eq: $id }) {
        title
        _createdAt(formatString: "MMM Do, YYYY")
        author
        coverImage {
          asset {
            gatsbyImageData
          }
          alt
        }
        _rawBody
    }
  }
`
function SingleBlog({ data }) {
  const { title, date, author, coverImage, _rawBody } = data.sanityBlog
  console.log("data", data)
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{author}</p>
      <article>
        <PortableTextComponent value={_rawBody} />
      </article>
      <span>
        <GatsbyImage image={coverImage.asset.gatsbyImageData} alt={coverImage.alt} />
      </span>
    </div>
  )
}

SingleBlog.propTypes = {
  data: PropTypes.any,
}

export default SingleBlog
