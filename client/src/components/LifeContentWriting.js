import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import "../styles/LifeContent.css"
import LifeContentWritingLogos from "./LifeContentWritingLogos"
import { FcPrevious, FcNext } from "react-icons/fc"

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
    <section className="lifeActivityContainer">
      {/* <div className="projPaginate"> */}
      <div className="d-flex justify-content-between">
        {page > 0 && (
          <FcPrevious
            className="life-left-arrow"
            onClick={() => setPage(page - 1)}
          />
        )}
        <div className="lifeActivities">
          <h1 className="LifeContentTitle">
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
        {page < pageSize - 1 && (
          <FcNext
            className="life-right-arrow"
            onClick={() => setPage(page + 1)}
          />
        )}
      </div>

      {/* </div> */}
    </section>
  )
}

export default LifeContentWriting
