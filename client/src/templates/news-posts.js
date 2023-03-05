import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import "../styles/News.css"
import PropTypes from "prop-types"

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
console.log("DATA", newsQuery)

function NewsPosts({ data }) {
  console.log("News Posts TEMPLATE CONTEXT", data)
  //   const { pageCount, group, index, first, last } = data

  //   const news = data.allSanityNews.nodes

  return (
    <div>test</div>
    // <div className="container newsContainer">
    //   <h1 className="newsHeader">All News </h1>
    //   <div className="row newsRow">
    //     {news.map(item => (
    //       <div className="col newsCol" key={item._id}>
    //         <Link to={`/News/${item.slug.current}`}>
    //           <GatsbyImage
    //             className="imgs"
    //             image={item.image.asset.gatsbyImageData}
    //             alt={item.image.alt}
    //           />
    //         </Link>
    //         <div className="newsTitleDiv">
    //           <Link className="newsTitle" to={`/News/${item.slug.current}`}>
    //             {item.title}
    //           </Link>
    //         </div>
    //         <div className="newsDateDiv">
    //           <p className="newsDate">{item.date}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  )
}

NewsPosts.propTypes = {
  data: PropTypes.array,
}

export default NewsPosts
