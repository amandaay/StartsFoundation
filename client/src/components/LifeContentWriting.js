import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/LifeContent.css"

function LifeContent() {
  return (
    <div className="LifeContentMainDiv">
      <div className="container containerLifeContent">
        <h1 className="LifeContentTitle">Janakpur</h1>
        <div className="row lifeContent-row">
          <div className="col life-col-div">
            <div className="circle">
              <StaticImage
                alt="volunteer"
                src="../images/projects/Volunteers.png"
                className="life-content-logo"
                width={70}
                height={130}
              />
            </div>
            <span className="life-content-title">Volunteer</span>
          </div>
          <div className="col life-col-div">
            <div className="circle">
              <StaticImage
                alt="funding"
                src="../images/projects/Funding.png"
                className="life-content-logo"
                width={70}
                height={100}
              />
            </div>
            <span className="life-content-title">Funding</span>
          </div>
          <div className="col life-col-div">
            <div className="circle">
              <StaticImage
                alt="supportedFamily"
                src="../images/projects/SupportedFamily.png"
                className="life-content-logo"
                width={70}
                height={100}
              />
            </div>
            <span className="life-content-title">Supported Family</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LifeContent
