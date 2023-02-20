import React, { useState } from "react";
import "../styles/OurTeam.css";
import { StaticImage } from "gatsby-plugin-image"

export function OurTeam() {
    const [leftMember, setLeftMember] = useState("../images/about/about-2.jpg")
    const [rightMembers, setRightMembers] = useState(["../images/about/about-2.jpg", "../images/about/about-2.jpg", "../images/about/about-2.jpg", "../images/about/about-2.jpg"])


    return (
        <div className="aboutMainDiv ">
            <h1 className="ourTeamBannerColor py-3">Our Team</h1>

            <div className="mt-3 d-flex justify-content-center">
                <div className="ourTeamText bg-white text-center fs-5 col-12">
                    Test -
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="row gx-5 mt-4 p-4 bg-white w-75">
                    <div className="col-5 d-flex justify-content-center">
                        <PersonalInfo image="../images/about/about-2.jpg" css="" ></PersonalInfo>
                    </div>

                    <div className="col-7">
                        <div className="row gy-5">
                            <PersonalInfo image="../images/about/about-2.jpg" css="col-6"></PersonalInfo>
                            <PersonalInfo image="../images/about/about-2.jpg" css="col-6"></PersonalInfo>
                            <PersonalInfo image="../images/about/about-2.jpg" css="col-6"></PersonalInfo>
                            <PersonalInfo image="../images/about/about-2.jpg" css="col-6"></PersonalInfo>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-3 d-flex justify-content-center">
                <div className="ourTeamText bg-white text-center fs-5 col-12">
                    Test -
                </div>
            </div>

        </div>

    )
}

function PersonalInfo(props) {
    const [showInfo, setShowInfo] = useState(false)

    console.log(props.image)
    return (
        <div className={props.css} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <StaticImage
                className="memberLeftPic"
                src="../images/about/about-2.jpg"
                alt="nepali young girls"
            >
            </StaticImage>

        </div>

    )
}

export default OurTeam
