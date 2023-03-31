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
export const Head = () => <SEO title={title} content={content} />

/**
 * /Projects/canvas page
 * @return JSX canvas page
 */
function Canvas() {
  return (
    <div className="ProjectMainDiv">
      <Layout>
        <div className="ProjectContent">
          <CanvasTopContainer />
          <div className="ProjectMidContainer">
            <CanvasContentWriting />
          </div>
        </div>
      </Layout>
    </div>
  )
}

Canvas.propTypes = {}
export default Canvas
