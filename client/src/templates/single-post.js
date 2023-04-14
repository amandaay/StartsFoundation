import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import PropTypes from "prop-types"
import PortableTextComponent from "../components/PortableText"
import "../styles/SinglePost.css"
import Layout from "../components/Layout"
import { CiCalendarDate } from "react-icons/ci"
import { SEO } from "../components/SEO"

/**
 * GraphQL query for news post
 */
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
/**
 * News Post module for single news page
 * @param {object} graphql data
 * @returns JSX of single news page
 */
function SinglePost({ data }) {
  const { title, date, _rawBody, image, caption } = data.sanityNews

  return (
    <Layout>
      <div className="singleNewsContainer">
        <div className="w-75">
          <h1 className="h1-post-title">{title}</h1>
          <h6 className="mt-2 text-secondary">
            {CiCalendarDate()} {date}
          </h6>

          <div className="w-100 mt-3 border-bottom"></div>

          <article className="w-100 mt-3 news-article">
            <div className="inline-img-text">
              <div className="img-div">
                <GatsbyImage
                  className="inline-img"
                  image={image.asset.gatsbyImageData}
                  alt={image.alt}
                />
              </div>
              <p className="post-caption inline-text">{caption}</p>
            </div>
            <div className="content">
              {" "}
              <PortableTextComponent value={_rawBody} />
            </div>
          </article>
        </div>
      </div>
    </Layout>
  )
}

SinglePost.propTypes = {
  data: PropTypes.any,
}

export default SinglePost

/**
 * SEO section
 */
export const Head = ({ data }) => {
  const { title, _rawBody } = data.sanityNews

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
  const keywords =
    "starts foundation news, Starts Foundation, Nepal, NGO Nepal, Nonprofit Nepal, Nonprofit organization in Nepal, support starts foundation, starts foundation nepal, Starts Foundation Nepal, NGO Nepal, charity, humanitarian, philanthropy, community service, community service in nepal, Kamal Bhattarai, Aid for Living, Project Canvas,www.startsfoundation.org, startsfoundation.org, A waiting smile"
  return <SEO title={title} content={text} keywords={keywords} />
}
