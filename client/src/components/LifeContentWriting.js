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
      allSanityAidForLivingLifeCovid(sort: { _createdAt: DESC }) {
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
        }
        totalCount
      }
      allSanityAidForLivingLifeOthers(sort: { _createdAt: DESC }) {
        nodes {
          id
          title
          slug {
            current
          }
          body {
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
  const covidPageSize = data.allSanityAidForLivingLifeCovid.totalCount
  const nonSpecificPageSize = data.allSanityAidForLivingLifeOthers.totalCount
  const pageSize = covidPageSize + nonSpecificPageSize
  const covidData = data.allSanityAidForLivingLifeCovid.nodes[page]
  const nonSpecificData =
    data.allSanityAidForLivingLifeOthers.nodes[page - covidPageSize]

  return (
    <section>
      <div className="LifeActivities">
        {page > 0 && (
          <FcPrevious
            className="life-left-arrow"
            onClick={() => setPage(page - 1)}
          />
        )}
        {page < covidPageSize ? (
          <>
            <h1 className="LifeContentTitle">
              COVID Relief: {covidData.title}
            </h1>
            <LifeContentWritingLogos />
            {covidData.body.map(section => {
              return (
                <div key={section._key}>
                  {section.children.map(child => {
                    return <p key={child._key}>{child.text}</p>
                  })}
                </div>
              )
            })}
          </>
        ) : (
          <>
            <h1 className="LifeContentTitle">{nonSpecificData.title}</h1>
            {nonSpecificData.body.map(section => {
              return (
                <div key={section._key}>
                  {section.children.map(child => {
                    return <p key={child._key}>{child.text}</p>
                  })}
                </div>
              )
            })}
          </>
        )}
      </div>
      {page < pageSize - 1 && (
        <FcNext
          className="life-right-arrow"
          onClick={() => setPage(page + 1)}
        />
      )}
    </section>
  )
}

export default LifeContentWriting
