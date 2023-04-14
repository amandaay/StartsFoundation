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
const keywords =
  "starts foundation, Starts Foundation, Nepal, NGO Nepal, Nonprofit Nepal, Nonprofit organization in Nepal, support starts foundation, starts foundation nepal, Starts Foundation Nepal, NGO Nepal, charity Nepal, humanitarian starts foundation, philanthropy starts foundation, community service, community service in nepal, Kamal Bhattarai,www.startsfoundation.org, startsfoundation.org, A waiting smile project, Starts foundation a waiting smile, starts foundation projects"
export const Head = () => (
  <SEO title={title} content={content} keywords={keywords} />
)

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
