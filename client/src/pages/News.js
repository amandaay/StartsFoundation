import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

function News({ data }) {
  console.log("data", data)
  return <div>test</div>
}

News.propTypes = {
  data: PropTypes.any,
}

export const query = graphql`
  {
    allSanityNews(sort: { date: DESC }) {
      nodes {
        _id
        slug {
          current
        }
        title
        date(formatString: "MMM Do, YYYY")
        image {
          alt
          asset {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
export default News
