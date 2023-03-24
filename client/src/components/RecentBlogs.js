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
  const countBlogsAmount = () => {
    let newAmount = 0

    if (window.innerWidth < 768) {
      newAmount = blogs.length > 3 ? 3 : blogs.length
    } else {
      newAmount = blogs.length > 5 ? 5 : blogs.length
    }
    return newAmount
  }
  const amount = countBlogsAmount()
  const createRightBlog = blogs => {
    // let amount = blogs.amount > 5 ? 5 : blogs.length
    const rightBlogs = []

    for (let i = 1; i < amount; i++) {
      rightBlogs.push(
        <Blog
          blog={blogs[i]}
          colCSS="col-12 col-md-6"
          imgCSS="rightImgHeight"
          contextCSS="rightContextHeight"
          key={blogs[i]._id}
        />
      )
    }
    return rightBlogs
  }

  // useEffect(() => {
  //   const updateWindowDimensions = () => {
  //     setAmount(countBlogsAmount())
  //   };
  //   window.addEventListener("resize", updateWindowDimensions);
  //   return () => window.removeEventListener("resize", updateWindowDimensions)
  // }, [blogs, countBlogsAmount])

  return (
    <div className="BlogsMainDiv px-3 px-md-0">
      <div className="container containerCause">
        <h1 className="blogTitle ">Blogs</h1>
        <div className="row g-4">
          <Blog
            blog={blogs[0]}
            colCSS="col-12 col-md-4"
            imgCSS="leftImgHeight"
            contextCSS="leftContextHeight"
            show
            key={blogs[0]._id}
          />
          <div className="col-12 col-md-8" key="rightblogs">
            <div className="row gy-4">{createRightBlog(blogs ?? [])}</div>
          </div>

        </div>
        <div className="d-flex justify-content-end mt-3">
          <Link className="moreBlogsp" to="/Blogs">
            More Blogs <AiOutlineArrowRight />
          </Link>
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
        <div className="mt-3 mb-3 w-90">
          <Link style={{ textDecoration: 'none' }} to={`/Blogs/${blog.slug.current}`}>
            <p className="title-font-size titleOverflow">{blog.title}</p>
          </Link>
          <h6 className="mt-2 text-secondary font-size">
            {CiCalendarDate()} {blog._createdAt}
          </h6>
          <h6 className="mt-2 text-secondary font-size">
            {IoPersonOutline()} Blog by {blog.author}
          </h6>
          <div className={`${props.show ? "visible" : "d-none"}`}>
            <div className="w-100 mt-3 border-bottom"></div>
            <div className={`mt-3 fst-italic text-secondary contextOverflow`}>
              {blog.excerpt[0].children[0].text}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentBlogs
