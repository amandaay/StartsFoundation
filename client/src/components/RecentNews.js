import { graphql, useStaticQuery, Link } from "gatsby"
import { AiOutlineArrowRight } from "react-icons/ai"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import "../styles/RecentNews.css"

function RecentNews() {
  const data = useStaticQuery(graphql`
    {
      allSanityNews(sort: { date: DESC }, limit: 3) {
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
  `)

  const news = data.allSanityNews.nodes
  console.log("data", data)
  console.log("news", news)
  return (
    <div className="mainDiv">
      <div className="container containerNews">
        <h1 className="recentNewsTitle">Recent News</h1>
        <div className="row">
          {news.map(item => {
            const dateString = item.date
            const dateStringSplit = dateString.split(" ")

            return (
              <div className="col" key={item._id}>
                <Link to={`/News/${item.slug.current}`}>
                  <GatsbyImage
                    className="imgs"
                    image={item.image.asset.gatsbyImageData}
                    alt={item.image.alt}
                  />
                </Link>

                <div className="caption-div">
                  <div className="date-div">
                    <div className="day-div">{dateStringSplit[1]}</div>
                    <div className="month-div">{dateStringSplit[0]}</div>
                    <div className="year-div">{dateStringSplit[2]}</div>
                  </div>
                  <Link className="caption" to={`/News/${item.slug.current}`}>
                    {item.title}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        <div className="row newsRow">
          <span className="moreNews">
            <Link className="moreNewsp" to="/News">
              More News <AiOutlineArrowRight />
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default RecentNews
