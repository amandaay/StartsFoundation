import React from "react"
import "../../styles/Projects.css"
import Layout from "../../components/Layout"
import LifeContentWriting from "../../components/LifeContentWriting"
import LifeTopContainer from "../../components/LifeTopContainer"
import { SEO } from "../../components/SEO"

/** SEO section */
const title = "Aid For Living Life"
const content =
  "Starts foundation project for humanitarian work to support marginalized and underserved communities in Nepal"
export const Head = () => <SEO title={title} content={content} />

/**
 * /Projects/AidForLivingLife page
 * @return JSX aid for living life page
 */
function AidForLivingLife() {
  return (
    <div className="ProjectMainDiv">
      <Layout>
        <div className="ProjectContent">
          <LifeTopContainer />
          <div className="ProjectMidContainer">
            <LifeContentWriting />
          </div>
        </div>
      </Layout>
    </div>
  )
}

AidForLivingLife.propTypes = {}
export default AidForLivingLife
