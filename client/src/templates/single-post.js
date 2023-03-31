import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import PropTypes from "prop-types"
import PortableTextComponent from "../components/PortableText"
import "../styles/SinglePost.css"
import Layout from "../components/Layout"
import { CiCalendarDate } from "react-icons/ci"

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
  console.log("Rawbody type", typeof _rawBody)
  return (
    <Layout>
      <div className="blogsContainer d-flex justify-content-center">
        <div className="w-75">
          <h2>{title}</h2>
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
