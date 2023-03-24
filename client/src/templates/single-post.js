import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import PropTypes from "prop-types"
import PortableTextComponent from "../components/PortableText"
import "../styles/SinglePost.css"
import Layout from "../components/Layout"

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
          gatsbyImageData(placeholder: BLURRED, fit: FILL)
        }
      }
    }
  }
`
function SinglePost({ data }) {
  const { title, date, _rawBody, image, caption } = data.sanityNews
  
  return (
    <Layout>
      <div className="container postContent">
        <h1 className="postTitle">{title}</h1>

        <p className="date">{date}</p>
        <article>
          <PortableTextComponent value={_rawBody} />
        </article>
        <span>
          <GatsbyImage
            className="postImage"
            image={image.asset.gatsbyImageData}
            alt={image.alt}
          />
          <p className="post-caption">{caption}</p>
        </span>
      </div>
    </Layout>
  )
}

SinglePost.propTypes = {
  data: PropTypes.any,
}

export default SinglePost
