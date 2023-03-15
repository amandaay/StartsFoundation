import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import "../styles/projContentWriting.css"
import { FcPrevious, FcNext } from "react-icons/fc"

/**
 * content writing component in Canvas in Projects
 *
 * @returns JSX for stories
 */
function CanvasContentWriting() {
  const data = useStaticQuery(graphql`
    {
      allSanityCanvas(sort: { _createdAt: DESC }) {
        nodes {
          id
          title
          slug {
            current
          }
          body {
            _key
            children {
              _key
              text
            }
          }
          coverImage {
            alt
            asset {
              gatsbyImageData(width: 500, height: 500, placeholder: BLURRED)
            }
          }
        }
        totalCount
      }
    }
  `)
  const [page, setPage] = useState(0)
  const pageSize = data.allSanityCanvas.totalCount
  const canvasData = data.allSanityCanvas.nodes[page]

  return (
    <section className="">
      {/* <div className="projPaginate"> */}
      <div className="d-flex justify-content-between">
        {page > 0 && (
          <FcPrevious
            className="proj-content-left-arrow"
            onClick={() => setPage(page - 1)}
          />
        )}
        <div className="Activities">
          <h1 className="ContentTitle">{canvasData.title}</h1>
          <div className="row stories-row">
            <div className="col stories-col-div">
              <GatsbyImage
                className="stories-img"
                image={getImage(canvasData.coverImage.asset.gatsbyImageData)}
                alt={canvasData.coverImage.alt}
              />
            </div>
            <div className="col stories-col-div">
              {canvasData.body.map(section => {
                return (
                  <div key={section._key}>
                    {section.children.map(child => {
                      return (
                        <div key={child._key}>
                          <p className="projText">{child.text}</p>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {page < pageSize - 1 && (
          <FcNext
            className="proj-content-right-arrow"
            onClick={() => setPage(page + 1)}
          />
        )}
      </div>
      {/* </div> */}
    </section>
  )
}

export default CanvasContentWriting
