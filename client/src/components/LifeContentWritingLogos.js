import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import "../styles/projContentWriting.css"
// import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

/**
 * Logo Component for Aid For Living Life in Projects for mid component
 * for content writing
 * @returns JSX for logos
 */
function LifeContentLogos() {
  const logosData = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)
  const logos = logosData.allFile.nodes

  return (
    <div className="LifeContentMainDiv">
      <div className="container containerLifeContent">
        <div className="row lifeContent-row">
          {logos.map(logo => {
            return (
              <div key={logo.id} className="col life-col-div">
                <div className="life-circle">
                  <GatsbyImage
                    alt={logo.name.slice(2)}
                    image={logo.childImageSharp.gatsbyImageData}
                    className="life-content-logo"
                  />
                </div>
                <span className="life-logo-content-title">
                  {logo.name.slice(2)}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LifeContentLogos
