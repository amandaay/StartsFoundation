import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import "../styles/projContentWriting.css"
import ProjectPagination from "./ProjPagination"

/**
 * content writing component in a waiting smile in Projects
 *
 * @returns JSX for stories
 */
function SmileContentWriting() {
  const data = useStaticQuery(graphql`
    query {
      allSanityAWaitingSmile(sort: { _createdAt: DESC }) {
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
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 430, height: 430)
            }
          }
        }
        totalCount
      }
    }
  `)
  const [page, setPage] = useState(0)
  const pageSize = data.allSanityAWaitingSmile.totalCount
  const smileData = data.allSanityAWaitingSmile.nodes[page]

  return (
    <section className="SmileContent">
      <ProjectPagination
        currentPage={page}
        totalPages={pageSize}
        onPageChange={setPage}
      >
        <div className="Activities">
          <h1 className="ContentTitle">{smileData.title}</h1>
          <div className="row stories-row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 stories-col-div">
            <div className="centered-image">
              <GatsbyImage
                className="stories-img"
                image={getImage(smileData.coverImage.asset.gatsbyImageData)}
                alt={smileData.coverImage.alt}
              />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 stories-col-div">
              {smileData.body.map(section => {
                return (
                  <div className="centered-stories" key={section._key}>
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
      </ProjectPagination>
    </section>
  )
}

export default SmileContentWriting
