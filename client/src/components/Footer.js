import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { socialLinks } from "../constants/socialLinks"
import { usefulLinks } from "../constants/usefulLinks"
import { Link } from "gatsby"
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footerContainer">
          {/* first footer division */}
          <div className="footer1">
            <div className="logoDiv">
              <StaticImage
                src="../images/logos/whitelogo.png"
                className="logo"
                alt="starts foundation logo"
              />
            </div>
            <i className="footerText">
              Starts Foundation is a pivotal platform for people to start and
              take action for meaningful, socio-economic change and upliftment
              of individuals in the Nepali society
            </i>
          </div>
          {/* second footer division */}
          <div className="footer2">
            <h1 className="footerH1">Support Starts Foundation</h1>
            <h2 className="footerH2">
              <i>Become partner or sponsor</i>
            </h2>
            <div className="horizontalLine">
              <span className="donateSpan">
                <Link to="/donation">
                  <button className="donateBtn">Donate</button>
                </Link>
              </span>
              <span className="joinSpan">
                <button className="joinBtn">Join</button>
              </span>
            </div>

            <ul className="footer__socialList">
              {socialLinks.map(item => (
                <li key={item.name}>
                  <div className="iconDiv">
                    <a className="iconClass" href={item.url}>
                      {item.icon}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* third footer division */}
          <div className="footer3">
            <h3 className="footerH3">Useful Links</h3>
            <ul className="footer__usefulList">
              {usefulLinks.map(item => (
                <li key={item.name}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <span className="copyright">
            © Starts Foundation. All Rights Reserved{" "}
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer
