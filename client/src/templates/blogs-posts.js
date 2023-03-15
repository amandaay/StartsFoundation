import { Link, graphql } from "gatsby"
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import { Blog } from "../components/RecentBlogs"
import "../styles/Blogs.css"

export const blogsQuery = graphql`
  query allNewsQuery($skip: Int!, $limit: Int!) {
    allSanityBlog(sort: { _createdAt: DESC }, limit: $limit, skip: $skip) {
      nodes {
        _id
        title
        author
        _createdAt(formatString: "MMM Do, YYYY")
        coverImage {
          asset {
            gatsbyImageData
          }
          alt
        }
        excerpt {
          children {
            text
          }
        }
        slug {
          current
        }
      }
    }
  }
`

function BlogsPosts({ data }) {
  useEffect(() => {
    const onTop = () => {
      window.scrollTo(0, 0)
    }
    onTop()
  }, [])
  console.log("BLogs Posts TEMPLATE CONTEXT", data)

  const blogs = data.allSanityBlog.nodes

  return (
    <Layout>
      <div className="container blogsContainer">
        <h1 className="blogsHeader">All Blogs </h1>
        <div className="mt-5 row g-4">
          {blogs.map(blog => {
            return (
              <Blog
                blog={blog}
                colCSS="col-4"
                imgCSS="imgHeight"
                contextCSS="contextHeight"
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

BlogsPosts.propTypes = {
  data: PropTypes.object,
}

export default BlogsPosts