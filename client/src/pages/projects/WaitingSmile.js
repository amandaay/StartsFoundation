import React from "react"
import "../../styles/Projects.css"
import Layout from "../../components/Layout"
import SmileContentWriting from "../../components/SmileContentWriting"
import SmileTopContainer from "../../components/SmileTopContainer"

/**
 * /Projects/AWaitingSmile page
 * @return JSX a waiting smile page
 */
function AWaitingSmile() {
  return (
    <div className="ProjectMainDiv">
      <Layout>
        <div className="ProjectContent">
          <SmileTopContainer />
          <div className="ProjectMidContainer">
            <SmileContentWriting />
          </div>
        </div>
      </Layout>
    </div>
  )
}

AWaitingSmile.propTypes = {}
export default AWaitingSmile
