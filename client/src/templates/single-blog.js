import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import PropTypes from "prop-types"
import PortableTextComponent from "../components/PortableText"
import Layout from "../components/Layout"
import { CiCalendarDate } from "react-icons/ci"
import { IoPersonOutline } from "react-icons/io5"
import { SEO } from "../components/SEO"

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
  const { title, _createdAt, author, coverImage, _rawBody } = data.sanityBlog

  return (
    <Layout>
      <div className="blogsContainer d-flex justify-content-center">
        <div className="w-75">
          <h2>{title}</h2>
          <h6 className="mt-2 text-secondary">
            {CiCalendarDate()} {_createdAt}
          </h6>
          <h6 className="mt-2 text-secondary">
            {IoPersonOutline()} Blog by {author}
          </h6>

          <div className="w-100 mt-3 border-bottom"></div>

          <article className="w-100 mt-3">
            <GatsbyImage
              className="inlineImg"
              image={coverImage.asset.gatsbyImageData}
              alt={coverImage.alt}
            />
            <PortableTextComponent value={_rawBody} />
          </article>
        </div>
      </div>
    </Layout>
  )
}

SingleBlog.propTypes = {
  data: PropTypes.any,
}

export default SingleBlog

/**
 * SEO section
 */
export const Head = ({ data }) => {
  const { title, _rawBody } = data.sanityBlog

  let text = `${title}`
  if (
    _rawBody[0].length !== 0 ||
    _rawBody[0] !== undefined ||
    _rawBody[0] !== null
  ) {
    text = _rawBody[0].children.reduce((accumulative, currentValue) => {
      currentValue = currentValue.text
      return accumulative + currentValue
    }, "")
  }

  return <SEO title={title} content={text} />
}
