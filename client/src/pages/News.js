import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import "../styles/News.css"
import Layout from "../components/Layout"

function News({ data }) {
  console.log("data", data)
  const news = data.allSanityNews.nodes
  console.log("location", window.location.pathname)
  return (
    <Layout>
      <div className="container newsContainer">
        <h1 className="newsHeader">All News </h1>
        <div className="row newsRow">
          {news.map(item => (
            <div className="col newsCol" key={item._id}>
              <GatsbyImage
                className="imgs"
                image={item.image.asset.gatsbyImageData}
                alt={item.image.alt}
              />
              <div className="newsDateDiv">
                <p className="newsDate">{item.date}</p>
              </div>
              <div className="newsTitleDiv">
                <p className="newsTitle">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
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
