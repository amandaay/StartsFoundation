import React from "react";
import "../styles/Blogs.css";
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function Blogs() {
    const data = useStaticQuery(graphql`
    {
        allSanityBlog(sort: {_createdAt: DESC}) {
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
              body {
                children {
                  text
                }
              }
            }
        }
    }`)
    const blog = data.allSanityBlog.nodes
    console.log(blog)
    return (
        <div className="aboutMainDiv " >
            <div className="container containerCause">
                <h1 className="blogTitle">Blogs</h1>
                <div className="row">
                    {/* <div className="col-4">
                        <GatsbyImage
                            className="imgs leftBlogHeight"
                            image={blog[0].coverImage.asset.gatsbyImageData}
                            alt={blog[0].coverImage.alt}
                        />
                        <div className="px-2 py-4 bg-white leftBlogHeight shadow-lg">
                            <h3 className="text-center">
                                {blog[0].title}
                            </h3>
                            <h5 className="">
                                {blog[0]._createdAt}<br />
                                <span className="fw-bold">Blog by {blog[0].author}</span>
                            </h5>
                            <div className="mt-3 fst-italic leftContextHeight overflow-hidden">
                                {blog[0].body[0].children[0].text}
                            </div>
                        </div>
                        
                    </div> */}
                    <Blog blog={blog[0]} colCSS="col-4" blogCSS="leftBlogHeight" contextCSS="leftContextHeight" />
                    <div className="col-8">
                        <div className="row g-4">
                            <Blog blog={blog[1]} colCSS="col-6" blogCSS="rightBlogHeight" contextCSS="rightContextHeight" bottomRounded />
                            <Blog blog={blog[1]} colCSS="col-6" blogCSS="rightBlogHeight" contextCSS="rightContextHeight" bottomRounded />
                            <Blog blog={blog[1]} colCSS="col-6" blogCSS="rightBlogHeight" contextCSS="rightContextHeight" bottomRounded />
                            <Blog blog={blog[1]} colCSS="col-6" blogCSS="rightBlogHeight" contextCSS="rightContextHeight" bottomRounded />
                        </div>

                    </div>

                </div>
            </div>
        </div >
    );
}

function Blog(props) {
    const blog = props.blog
    return (
        <div className={`${props.colCSS}`}>
            <GatsbyImage
                className={`imgs ${props.blogCSS}`}
                image={blog.coverImage.asset.gatsbyImageData}
                alt={blog.coverImage.alt}
            />
            <div className={`px-2 py-4 bg-white ${props.bottomRounded ? "bottomRounded" : ""} ${props.blogCSS} shadow-lg overflow-hidden`}>
                <h3 className="text-center">
                    {blog.title}
                </h3>
                <h5 className="">
                    {blog._createdAt}<br />
                    <span className="fw-bold">Blog by {blog.author}</span>
                </h5>
                <div className={`mt-3 fst-italic ${props.contextCSS} overflow-hidden`}>
                    {blog.body[0].children[0].text}
                </div>
            </div>
        </div>
    )
}

export default Blogs;