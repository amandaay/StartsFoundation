import React from "react"
import "../styles/Mission.css"
import { GiSupersonicArrow, GiStairsGoal } from "react-icons/gi"
import { RiLightbulbFlashLine } from "react-icons/ri"

function Mission() {
  return (
    <>
      <div className="MissionDiv">
        <div className="containerMission">
          <div className="mission-rows">
            <div className="row-box">
              <h1 className="missionTitle">
                Mission
                <span className="mis-icon">
                  <GiSupersonicArrow />
                </span>
              </h1>

              <p className="mission-p">
                Our major objective is to disseminate socio-economic
                opportunities to the poor and deprived communities and help them
                flourish with virtue
              </p>
            </div>
            <div className="row-box">
              <h2 className="visionTitle">
                Vision{" "}
                <span className="mis-icon">
                  <RiLightbulbFlashLine />
                </span>
              </h2>
              <p className="vision-p">
                A progressive world with no uncertain hindrances on any grounds
              </p>
            </div>
            <div className="row-box">
              <h3 className="goalTitle">
                Goal{" "}
                <span className="mis-icon">
                  <GiStairsGoal />
                </span>
              </h3>
              <p className="goal-p">
                Foster competency with awareness and facilitate people with
                amenities to build a better world for people to dwell on{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mission
