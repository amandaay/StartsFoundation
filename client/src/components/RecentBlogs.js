import React from "react"
import "../styles/RecentBlogs.css"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { CiCalendarDate } from "react-icons/ci"
import { IoPersonOutline } from "react-icons/io5"
import { AiOutlineArrowRight } from "react-icons/ai"

function RecentBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityBlog(sort: { _createdAt: DESC }) {
        nodes {
          _id
          title
          _createdAt(formatString: "MMM Do, YYYY")
          author
          coverImage {
            asset {
              gatsbyImageData
            }
            alt
          }
          slug {
            current
          }
          excerpt {
            children {
              text
            }
          }
        }
      }
    }
  `)
  const blogs = data.allSanityBlog.nodes
  console.log(blogs)
  const createRightBlog = (blogs) => {
    let length = blogs.length > 5 ? 5 : blogs.length
    const rightBlogs = []
    for (let i = 1; i < length; i++) {
      rightBlogs.push(
        <Blog
          blog={blogs[i]}
          colCSS="col-md-6"
          imgCSS="rightImgHeight"
          contextCSS="rightContextHeight"
        />
      )
    }
    return rightBlogs
  }

  return (
    <div className="BlogsMainDiv">
      <div className="container containerCause">
        <h1 className="blogTitle ">Blogs</h1>
        <div className="row gx-4">
          <Blog
            blog={blogs[0]}
            colCSS="col-4"
            imgCSS="leftImgHeight"
            contextCSS="leftContextHeight"
            show
          />
          <div className="col-8">
            <div className="row gy-4">
              {
                createRightBlog(blogs ?? [])
              }
            </div>
          </div>
          <div className="row newsRow">
            <span className="moreNews">
              <Link className="moreBlogsp" to="/Blogs">
                More Blogs <AiOutlineArrowRight />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Blog(props) {
  const blog = props.blog
  return (
    <div className={`${props.colCSS}`}>
      <Link to={`/Blogs/${blog.slug.current}`}>
        <GatsbyImage
          className={`img-fluid ${props.imgCSS} rounded-top`}
          image={blog.coverImage.asset.gatsbyImageData}
          alt={blog.coverImage.alt}
        />
      </Link>
      <div
        className={`d-flex justify-content-center bg-white rounded-bottom ${props.contextCSS} shadow-lg`}
      >
        <div className="mt-3 w-90 overflow-hidden">
          <Link className="titleFont" to={`/Blogs/${blog.slug.current}`}>
            {blog.title}
          </Link>
          <h6 className="mt-2 text-secondary">
            {CiCalendarDate()} {blog._createdAt}
          </h6>
          <h6 className="mt-2 text-secondary">
            {IoPersonOutline()} Blog by {blog.author}
          </h6>

          {
            props.show ?
              <div>
                <div className="w-100 mt-3 border-bottom"></div>
                <div className={`mt-3 fst-italic text-secondary overflow-hidden`}>
                  {blog.excerpt[0].children[0].text}
                </div>
              </div>
              : <div></div>
          }
        </div>

      </div>
    </div>
  )
}

export default RecentBlogs
