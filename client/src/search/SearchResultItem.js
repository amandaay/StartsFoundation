import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "../styles/SearchResults.css"

function BlogsSearchResultItem({ blog }) {
  return (
    <div className="blogResultDiv">
      <div className="blogResultInnerDiv1">
        <GatsbyImage
          image={blog.coverImage.asset.gatsbyImageData}
          className="miniImg"
          alt={blog.alt || ""}
        />
      </div>
      <div className="blogResultInnerDiv2">
        <Link to={`/${blog.slug}`} className="searchBlogTitle">
          {" "}
          {blog.title}{" "}
        </Link>
      </div>
    </div>
  )
}

BlogsSearchResultItem.propTypes = {
  blog: PropTypes.any,
}

function NewsSearchResultItem({ news }) {
  return (
    <div className="blogResultDiv">
      <div className="blogResultInnerDiv1">
        <GatsbyImage
          image={news.image.asset.gatsbyImageData}
          className="miniImg"
          alt={news.image.alt || ""}
        />
      </div>
      <div className="blogResultInnerDiv2">
        <Link to={`/${news.slug}`} className="searchBlogTitle">
          {" "}
          {news.title}{" "}
        </Link>
      </div>
    </div>
  )
}
NewsSearchResultItem.propTypes = {
  news: PropTypes.any,
}
export { BlogsSearchResultItem, NewsSearchResultItem }
