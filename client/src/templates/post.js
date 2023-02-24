import React, { useEffect } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import "../styles/News.css"
import Layout from "../components/Layout"

function NewsPost({ pageContext }) {
  const { pageCount, group, index, first, last } = pageContext
  const previousIndex = index - 1
  const nextIndex = index + 1

  const previousPageUrl =
    previousIndex === 1 ? "/News" : `/News/${previousIndex}`
  const nextPageUrl = `/News/${nextIndex}`

  return (
    <Layout>
      <div className="container newsContainer">
        <h1 className="newsHeader">All News </h1>

        <div className="row newsRow">
          {group.map(post => (
            <div className="col newsCol" key={post._id}>
              <GatsbyImage
                className="imgs"
                image={post.image.asset.gatsbyImageData}
                alt={post.image.alt}
              />
              <div className="newsTitleDiv">
                <p className="newsTitle">{post.title}</p>
              </div>
              <div className="newsDateDiv">
                <p className="newsDate">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination">
        {!first && (
          <Link to={previousPageUrl} className="previous-link">
            Previous page
          </Link>
        )}

        {!last && (
          <Link to={nextPageUrl} className="previous-link">
            Next page
          </Link>
        )}
      </div>
    </Layout>
  )
}

News.propTypes = {
  pageContext: PropTypes.any,
}
export default NewsPost
