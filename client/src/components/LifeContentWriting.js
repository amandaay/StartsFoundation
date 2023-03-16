import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import "../styles/projContentWriting.css"
import LifeContentWritingLogos from "./LifeContentWritingLogos"
import ProjectPagination from "./ProjPagination"

/**
 * content writing component in Aid For living life in Projects
 *
 * @returns JSX for content writing
 */
function LifeContentWriting() {
  const data = useStaticQuery(graphql`
    query {
      allSanityAidForLivingLife(sort: { date: ASC }) {
        nodes {
          id
          activity
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
        }
        totalCount
      }
    }
  `)

  const [page, setPage] = useState(0)
  const pageSize = data.allSanityAidForLivingLife.totalCount
  const lifeData = data.allSanityAidForLivingLife.nodes[page]

  return (
    <section className="ActivityContainer">
      <ProjectPagination
        currentPage={page}
        totalPages={pageSize}
        onPageChange={setPage}
      >
        <div className="Activities">
          <h1 className="ContentTitle">
            {lifeData.activity
              ? lifeData.activity + ": " + lifeData.title
              : lifeData.title}
          </h1>
          <LifeContentWritingLogos />
          {lifeData.body.map(section => {
            return (
              <div key={section._key}>
                {section.children.map(child => {
                  return (
                    <p className="projText" key={child._key}>
                      {child.text}
                    </p>
                  )
                })}
              </div>
            )
          })}
        </div>
      </ProjectPagination>
    </section>
  )
}

export default LifeContentWriting
