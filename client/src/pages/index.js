import React, { useRef } from "react"
import "../styles/Home.css"
import {
  Layout,
  About,
  ScrollToTop,
  RecentNews,
  JoinCause,
  Mission,
  Objectives,
} from "../components/Components"

/**
 * Home page module
 * @returns Home JSX
 */
function Home() {
  const about = useRef(null)
  const news = useRef(null)
  const join = useRef(null)

  const scrollToSection = elementRef => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }

  // const navBarInfo = {
  //   about: about,
  //   news: news,
  //   join: join,
  //   scroll: scrollToSection,
  // }

  return (
    <div className="App">
      <Layout
        scrollToSection={scrollToSection}
        about={about}
        news={news}
        join={join}
      >
        <main>
          <div className="mainContainer" role="main">
            {/* <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://i.postimg.cc/KYy4bCnC/DSC1103-292-min.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.postimg.cc/KYy4bCnC/DSC1103-292-min.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.postimg.cc/KYy4bCnC/DSC1103-292-min.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.postimg.cc/KYy4bCnC/DSC1103-292-min.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}

            <div className="banner">
              <div className="subContainer">
                <h1 className="startsFoundation">STARTS FOUNDATION</h1>
                <p className="tagline">Helping the communities in need</p>

                <button className="learnBtnMain">Learn More</button>
              </div>
            </div>
          </div>
        </main>
        {/* About Section */}
        <section className="sectionAbout" ref={about}>
          <About />
        </section>
        {/* Mission Section */}
        <section className="sectionMission">
          <Mission />
        </section>
        {/* Objective Section */}
        <section className="sectionObjective">
          <Objectives />
        </section>
        {/* News Section */}
        <section className="sectionNews" ref={news}>
          <RecentNews />
        </section>
        {/* Join the Cause Section */}
        <section className="sectionJoin" ref={join}>
          <JoinCause />
        </section>
        <span className="scrollBtnSpan">
          <ScrollToTop />
        </span>
      </Layout>
    </div>
  )
}

export default Home
