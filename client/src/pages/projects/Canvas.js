import React from "react"
import "../../styles/Projects.css"
import Layout from "../../components/Layout"
import CanvasContentWriting from "../../components/CanvasContentWriting"
import CanvasTopContainer from "../../components/CanvasTopContainer"
import { SEO } from "../../components/SEO"

/** SEO section */
const title = "Project Canvas"
const content =
  "Starts foundation project for humanitarian work to support marginalized and underserved communities in Nepal"
const keywords =
  "starts foundation, Starts Foundation, Nepal, NGO Nepal, Nonprofit Nepal, Nonprofit organization in Nepal, support starts foundation, starts foundation nepal, Starts Foundation Nepal, NGO Nepal, charity, humanitarian, philanthropy, community service, community service in nepal, Kamal Bhattarai,Project Canvas starts foundation, starts foundation project, www.startsfoundation.org, startsfoundation.org"
export const Head = () => (
  <SEO title={title} content={content} keywords={keywords} />
)

/**
 * /Projects/canvas page
 * @return JSX canvas page
 */
function Canvas() {
  return (
    <Layout>
      <>
        <div className="ProjectContent">
          <CanvasTopContainer />
          <div className="ProjectMidContainer">
            <CanvasContentWriting />
          </div>
        </div>
      </>
    </Layout>
  )
}

Canvas.propTypes = {}
export default Canvas
