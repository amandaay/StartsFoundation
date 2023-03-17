import React from "react"
import "../../styles/Projects.css"
import Layout from "../../components/Layout"
import CanvasContentWriting from "../../components/CanvasContentWriting"
import CanvasTopContainer from "../../components/CanvasTopContainer"

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
