import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import "../styles/News.css"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import { Pagination } from "../components/Pagination"

export const newsQuery = graphql`
  query allNewsQuery($skip: Int!, $limit: Int!) {
    allSanityNews(sort: { date: DESC }, limit: $limit, skip: $skip) {
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

function NewsPosts({ data, pageContext }) {
  useEffect(() => {
    const onTop = () => {
      if (window !== "undefined") {
        window.scrollTo(0, 0)
      }
    }
    onTop()
  }, [])

  const news = data.allSanityNews.nodes

  return (
    <Layout>
      <div className="newsContainer">
        <h1 className="newsHeader">All News </h1>
        <div className="newsRow">
          {news.map(item => (
            <div className="newsCol" key={item._id}>
              <Link to={`/News/${item.slug.current}`}>
                <GatsbyImage
                  className="imgs"
                  image={item.image.asset.gatsbyImageData}
                  alt={item.image.alt}
                />
              </Link>
              <div className="newsTitleDiv">
                <Link className="newsTitle" to={`/News/${item.slug.current}`}>
                  {item.title}
                </Link>
              </div>
              <div className="newsDateDiv">
                <p className="newsDate">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="paginationDiv">
          {pageContext.pageCount > 1 && (
            <Pagination
              currentPage={pageContext.currentPage}
              pageCount={pageContext.pageCount}
              base={"News"}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

NewsPosts.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export default NewsPosts
