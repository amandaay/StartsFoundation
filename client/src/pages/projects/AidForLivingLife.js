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
const keywords =
  "starts foundation, Starts Foundation, Nepal, NGO Nepal, Nonprofit Nepal, Nonprofit organization in Nepal, support starts foundation, starts foundation nepal, Starts Foundation Nepal, NGO Nepal, charity, humanitarian, philanthropy, community service, community service in nepal, Kamal Bhattarai, Aid for Living, Aid for Living Starts Foundation, Starts Foundation project,www.startsfoundation.org, startsfoundation.org"
export const Head = () => (
  <SEO title={title} content={content} keywords={keywords} />
)

/**
 * /Projects/AidForLivingLife page
 * @return JSX aid for living life page
 */
function AidForLivingLife() {
  return (
    <Layout>
      <>
        <div className="ProjectContent">
          <LifeTopContainer />
          <div className="ProjectMidContainer">
            <LifeContentWriting />
          </div>
        </div>
      </>
    </Layout>
  )
}

AidForLivingLife.propTypes = {}
export default AidForLivingLife
