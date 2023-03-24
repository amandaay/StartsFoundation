import React, { useState } from "react"
import "../styles/OurTeam.css"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import PortableTextComponent from "../components/PortableText"

export function OurTeam() {
  const data = useStaticQuery(graphql`
    {
      allSanityTeam {
        nodes {
          _id
          memberName
          slug {
            _key
            _type
            current
            source
          }
          memberTitle
          memberPortrait {
            asset {
              gatsbyImageData
            }
            alt
          }
          _rawBody
          
        }
      }
    }
  `)

  const members = data.allSanityTeam.nodes

  const countMembersAmount = () => {
    let newAmount = 0

    if (window.innerWidth < 768) {
      newAmount = members.length > 3 ? 3 : members.length
    } else {
      newAmount = members.length > 5 ? 5 : members.length
    }
    return newAmount
  }
  const amount = countMembersAmount()

  const createRightContent = (members) => {
    // let amount = blogs.amount > 5 ? 5 : blogs.length
    const rightMembers = []

    for (let i = 1; i < amount; i++) {
      rightMembers.push(
        <PersonalInfo
          member={members[i]}
          css="col-6"
          imageCss="memberPic"
          contextOverflow={"generalOverflow"}
          key={members[i]._id}
        />
      )
    }
    return rightMembers
  }

  // useEffect(() => {
  //   const updateWindowDimensions = () => {
  //     setAmount(countMembersAmount())
  //   };
  //   window.addEventListener("resize", updateWindowDimensions);
  //   return () => window.removeEventListener("resize", updateWindowDimensions)
  // }, [amount, countMembersAmount])

  return (
    <div className="ourTeamMainDiv ">
      <h1 className="outTeamTitle py-3">Our Team</h1>

      <div className="mt-3 text-center text-blue fs-5">
        Meet the exceptional hands behind thefoundation of STARTS.
        <br />
        The joint effort of everyone involved to start a change finally makes
        the change.
      </div>

      <div className="d-flex justify-content-center">
        <div className="row g-5 mt-4 w-75 ourTeamScrollbar">
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            {
              members.length > 0 &&
              <PersonalInfo
                // image={members[0].memberPortrait.asset.gatsbyImageData}
                // alt={members[0].memberPortrait.alt}
                // name={members[0]}
                member={members[0]}
                css="col-12"
                imageCss="img-fluid w-100 h-100 "
                contextOverflow={"mainOverflow"}
              />
            }
          </div>

          <div className="col-12 col-lg-6">
            <div className="row g-5">
              {
                createRightContent(members ?? [])
              }
            </div>
          </div>
          <div className="col-12">
            <div className="row g-5">
              {
                members.length > amount ?
                  members.slice(amount).map((member) => {
                    console.log(member)
                    return (
                      <PersonalInfo
                        member={member}
                        css="col-6 col-lg-3"
                        imageCss="memberPic"
                        contextOverflow={"generalOverflow"}
                        key={member._id}
                      />
                    )
                  })
                  : null}
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

  return (
    <div
      className={`${props.css} h-100 `}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <div className="h-100 position-relative">
        <GatsbyImage
          className={props.imageCss}
          image={props.member.memberPortrait.asset.gatsbyImageData}
          alt={props.member.memberPortrait.alt}
        />
        {showInfo && (
          <div className="bg-black position-absolute top-0 start-0 w-100 h-100 memberIntro px-3 py-3 d-flex flex-column justify-content-between text-white">
            <div className={`${props.contextOverflow} w-100`}>
              <PortableTextComponent value={props.member._rawBody} />
            </div>
            <div className="w-100">
              <div className="border-bottom border-white"> </div>
              <div className="fs-4 font-weight-bold">{props.member.memberName}</div>
              <div className="fs-6 fst-italic">{props.member.memberTitle}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OurTeam
