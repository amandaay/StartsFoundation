import React, { useState } from "react"
import "../styles/OurTeam.css"
import { StaticImage } from "gatsby-plugin-image"

export function OurTeam() {
  return (
    <div className="ourTeamMainDiv ">
      <h1 className="outTeamTitle py-3">Our Team</h1>

      <div className="mt-3 text-center text-white fs-5">
        Meet the exceptional hands behind thefoundation of STARTS.
        <br />
        The joint effort of everyone involved to start a change finally makes the change.
      </div>

      <div className="d-flex justify-content-center">
        <div className="row gx-5 mt-4 p-4 w-75 scroll">
          <div className="col-6 d-flex justify-content-center">
            <PersonalInfo
              image="../images/about/about-2.jpg"
              css="w-100 h-100"
              imageCss="memberLeftPic"
            ></PersonalInfo>
          </div>

          <div className="col-6">
            <div className="row g-5">
              <PersonalInfo
                image="../images/about/about-2.jpg"
                css="col-6 h-100"
                imageCss="memberRightPic"
              ></PersonalInfo>
              <PersonalInfo
                image="../images/about/about-2.jpg"
                css="col-6 h-100"
                imageCss="memberRightPic"
              ></PersonalInfo>
              <PersonalInfo
                image="../images/about/about-2.jpg"
                css="col-6 h-100"
                imageCss="memberRightPic"
              ></PersonalInfo>
              <PersonalInfo
                image="../images/about/about-2.jpg"
                css="col-6 h-100"
                imageCss="memberRightPic"
              ></PersonalInfo>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-4 d-flex justify-content-center">
        <div className="ourTeamText bg-white text-center fs-5 col-12">
          Test -
        </div>
      </div> */}
    </div>
  )
}

function PersonalInfo(props) {
  const [showInfo, setShowInfo] = useState(false)

  // console.log(props.image)
  return (
    <div
      className={`${props.css}`}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <div className="position-relative h-100">
        <StaticImage
          className={props.imageCss}
          src="../images/about/about-2.jpg"
          alt="nepali young girls"
        ></StaticImage>
        {showInfo && (
          <div className="bg-black position-absolute top-0 start-0 w-100 h-100 memberIntro px-3 pb-3 d-flex align-items-end">
            <div className="text-white">
              <div className="block w-100">description</div>
              <div className="fs-3 font-weight-bold">RAM KC</div>
              <div className="fs-5">Writing & Communications</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OurTeam
