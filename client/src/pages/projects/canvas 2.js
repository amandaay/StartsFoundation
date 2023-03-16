import React from "react"
import "../../styles/Projects.css"
import Layout from "../../components/Layout"
import CanvasImgSlider from "../../components/CanvasImgSlider"
import { CanvasImgData } from "../../components/CanvasImgData"

/**
 * /Projects/canvas page
 * @return JSX canvas page
 */
function Canvas() {
  return (
    <Layout>
      <div className="ProjectMainDiv">
        <div className="ProjectContent">
          <div className="ProjectTopContainer">
            <div className="ProjectImgSlider">
              <CanvasImgSlider slides={CanvasImgData} />
            </div>
            <div className="ProjectKeyPoints">
              <h1 className="ProjectHeader">Canvas</h1>
              <p className="ProjectKeyPointsContent">
                <q className="quote">
                  Empowering people to repaint the colours of imagination in
                  their lives”
                </q>
                <br />
                Starting Year- 2019 Life after a life threatening illness or
                accident can be a challenging time for an individual both
                physically and emotionally. We initiated the ‘Canvas’ project as
                an opportunity for these people to turn a brand new page and
                repaint the colours of resilience, optimism and strength in
                their lives. This project aims to help the people from
                impoverished communities with compromised health by providing
                basic facilities, funds for medical support or employment
                opportunities. The journey began when we got to support Laxmi
                and Maiya with their health complications. We moved forward with
                the belief and determination to help them get their lives back
                on track and ensure a better life. Through this program, light
                was shed on many such stories and our attempt was officialized
                as project ‘Canvas’. This project has been moving forward with
                the help of fundraisers and different organizations- namely
                Starts Foundation and Sky is The Limit- Ashimit Udaan that
                collaborated with the agenda of making a change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Canvas.propTypes = {}
export default Canvas
