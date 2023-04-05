import React from "react"
import "../../styles/Projects.css"
import Layout from "../../components/Layout"
import SmileContentWriting from "../../components/SmileContentWriting"
import SmileTopContainer from "../../components/SmileTopContainer"
import { SEO } from "../../components/SEO"

/** SEO section */
const title = "A Waiting Smile"
const content =
  "Starts foundation project for humanitarian work to support marginalized and underserved communities in Nepal"
export const Head = () => <SEO title={title} content={content} />

/**
 * /Projects/AWaitingSmile page
 * @return JSX a waiting smile page
 */
function AWaitingSmile() {
  return (
    <Layout>
      <>
        <div className="ProjectContent">
          <SmileTopContainer />
          <div className="ProjectMidContainer">
            <SmileContentWriting />
          </div>
        </div>
      </>
    </Layout>
  )
}

AWaitingSmile.propTypes = {}
export default AWaitingSmile
