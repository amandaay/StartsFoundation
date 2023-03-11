import React from "react";
import "../../styles/Projects.css";
import Layout from "../../components/Layout"
import SmileImgSlider from "../../components/SmileImgSlider";
import { SmileImgData } from "../../components/SmileImgData";


/**
 * /Projects/AWaitingSmile page
 * @return JSX a waiting smile page
 */
function AWaitingSmile() {
  return (
    <Layout>
      <div className="ProjectMainDiv">
        
        <div className="ProjectContent">
          <div className="ProjectTopContainer">
            <div className="ProjectImgSlider">
              <SmileImgSlider slides={SmileImgData} />
            </div>
            <div className="ProjectKeyPoints">
              <h1 className="ProjectHeader">A Waiting Smile</h1>
              <p className="ProjectKeyPointsContent">
              <q className="quote">Spreading smiles through an opportunity for learning and
                discovering creativity</q>
                <br />
                Starting Year- 2020 The education system in Nepal is still in
                the phase of improvement and growth. Currently, this sector has
                seen some major development and expansion but due to hurdles
                like lower socio-economic condition, geographical difficulties,
                the quality of education is still not up to mark. Many
                underprivileged students suffer due to these constraints; they
                are deprived of even basic study materials when in need- which
                further demotivates them from the whole study process. Our
                project “Pratichhit muskan” translated as ‘Awaiting Smile’ aims
                to minimize students’ turnover due to the unavailability of
                study materials on time while also helping to enhance the
                quality of education they are getting. We will provide quality
                study materials like pens, copies, books, bags to needy students
                to promote faster and effective learning while aiding their
                academic activities and performance. Selected study materials
                are provided to students according to their needs and interests
                which are identified through workshops, interviews with the
                students and/or teachers, etc
              </p>
            </div>
          </div>
        </div>
      </div>
      </Layout>
  );
}

AWaitingSmile.propTypes = {};
export default AWaitingSmile;
