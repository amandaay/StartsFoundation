import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import "../styles/LifeContent.css"
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
            gatsbyImageData(height: 100, width: 70)
          }
        }
      }
    }
  `)
  const logos = logosData.allFile.nodes;

  return (
    <div className="LifeContentMainDiv">
      <div className="container containerLifeContent">
        {/* <h1 className="LifeContentTitle">ACTIVITIES</h1> */}
        <div className="row lifeContent-row">
          {logos.map(logo => {
            return (
              <div key={logo.id} className="col life-col-div">
                <div className="circle">
                  <GatsbyImage
                    alt={logo.name.slice(2)}
                    image={logo.childImageSharp.gatsbyImageData}
                    className="life-content-logo"
                    width={logos.width}
                    height={logo.name === "Volunteer" ? 130 : logos.height}
                  />
                </div>
                <span className="life-content-title">{logo.name.slice(2)}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// LifeContent.propTypes = {
//   logos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       src: PropTypes.string.isRequired,
//       width: PropTypes.number.isRequired,
//       height: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// }
export default LifeContentLogos;
