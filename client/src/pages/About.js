import React from "react"
import "../styles/About.css"
import { StaticImage } from "gatsby-plugin-image"

/**
 * about page
 * @returns JSX of about page
 */
function About() {
  return (
    <>
      <div className="aboutMainDiv">
        <div className="container aboutContentDiv">
          <div className="upper-row">
            <div className="first-pic-div">
              <StaticImage
                className="first-pic"
                src="../images/about/about-1.jpg"
                alt="Starts Foundation helping"
              />
            </div>
            <div className="aboutUsDiv">
              <h1 className="aboutTitle">About Us</h1>
              <p className="aboutContent">
                Starts was initiated as a pivotal platform to embark much needed
                journeys towards sustainable development in Nepali society. It
                is a movement that inspires people to start and take action for
                meaningful change in individuals’ lives in society. Starts
                foundation is a youth-led, non governmental organization with an
                intent to build a resilient and welfare-based society.
                <br />
                We address concerns as fundamental to humanity as ‘Hunger’ or
                ‘independence to live a dignified life for the needy and
                differently-abled.’ We aim to bring highly driven and motivated
                youths together on a shared platform to create a movement for
                change.
              </p>
            </div>
          </div>
          <div className="row bottom-row">
            <div className="col small-img">
              <StaticImage
                className="small-img-class"
                src="../images/about/about-2.jpg"
                alt="nepali young girls"
              />
            </div>
            <div className="col small-img">
              <StaticImage
                className="small-img-class"
                src="../images/about/about-3.jpg"
                alt="nepali elderly community"
              />
            </div>
            <div className="col small-img">
              <StaticImage
                className="small-img-class"
                src="../images/about/about-4.jpg"
                alt="nepali students"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

About.propTypes = {}
export default About
