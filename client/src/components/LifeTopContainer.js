import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import ProjectPagination from "./ProjPagination"
import "../styles/ProjTopContainer.css"
import { HandleText, HandleImage } from "./ProjDescriptionDataProcess"

/**
 * top container for Aid for living life in projects
 * @returns JSX for top container
 */
function LifeTopContainer() {
  const data = useStaticQuery(graphql`
    query {
      allSanityProjectGenericDescription(
        sort: { date: DESC }
        filter: { project: { eq: "aid-for-living-life" } }
        limit: 1
      ) {
        nodes {
          _id
          project
          slug {
            current
          }
          body {
            _key
            children {
              text
              _key
            }
          }
          imagesGallery {
            _key
            asset {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, height: 500)
              altText
            }
          }
        }
      }
    }
  `)

  const [page, setPage] = useState(0)
  const pageSize =
    data.allSanityProjectGenericDescription.nodes[0].imagesGallery.length

  const para = data.allSanityProjectGenericDescription.nodes[0].body
  const images =
    data.allSanityProjectGenericDescription.nodes[0].imagesGallery[page]
  const project = data.allSanityProjectGenericDescription.nodes[0].project
    .replaceAll("-", " ")
    .toUpperCase()

  return (
    <section className="proj-top-container">
      <h1 className="ProjectHeader">
        Project - {project === "SMILE" ? "A WAITING SMILE" : project}
      </h1>
      <div className="row proj-top-row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 proj-top-left">
          <ProjectPagination
            currentPage={page}
            totalPages={pageSize}
            onPageChange={setPage}
          >
            <div className="proj-top-img">
              <HandleImage className="projImg" image={images} />
            </div>
          </ProjectPagination>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 proj-top-right">
          <HandleText description={para} />
        </div>
      </div>
    </section>
  )
}

export default LifeTopContainer
