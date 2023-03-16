import React from "react"
import "../../styles/Projects.css"
import Layout from "../../components/Layout"
import LifeImgSlider from "../../components/LifeImgSlider"
import { LifeImgData } from "../../components/LifeImgData"
import LifeContentWriting from "../../components/LifeContentWriting"

/**
 * /Projects/AidForLivingLife page
 * @return JSX aid for living life page
 */
function AidForLivingLife() {
  return (
    <div className="ProjectMainDiv">
      <Layout>
        <div className="ProjectContent">
          <h1 className="ProjectHeader">Project - AID FOR LIVING LIFE</h1>
          <div className="ProjectTopContainer">
            <div className="ProjectImgSlider">
              <LifeImgSlider slides={LifeImgData} />
            </div>
            <div className="ProjectKeyPoints">
              <p className="ProjectKeyPointsContent">
                In Nepal, unexpected disasters strip many people from the stable
                foundations through which they live and survive. These
                adversities devastate their physical and psychological well
                being as well as their means of sustenance.
                <br />
                Our journey of Aid For Living Life began with the vision of
                providing expeditious aid to those struck by unexpected adverse
                circumstances in Nepal. In 2017, two people - one Nepali and one
                Norwegian, connected together in a time when floods were
                ravaging this nation and disrupting homes and lives of many.
                They had a vision to provide immediate needed support to those
                in need and so, the Aid For Living Life Project commenced by
                distributing relief packages to about 200 affected families.
                <br />
                We are going strong since, and have recently distributed about
                900 relief packages in the face of the COVID-19 pandemic.
              </p>
            </div>
          </div>
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