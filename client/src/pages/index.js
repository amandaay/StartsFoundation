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
  OurTeam,
  Testimonials,
  RecentBlogs,
} from "../components/Components"

/**
 * Home page module
 * @returns Home JSX
 */
function Home() {
  const about = useRef(null)
  const news = useRef(null)
  const join = useRef(null)
  const blog = useRef(null)
  const testimonials = useRef(null)
  const partners = useRef(null)

  const scrollToSection = elementRef => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }

  // console.log("home pathname", window.location.pathname)

  return (
    <div className="App">
      <Layout
        scrollToSection={scrollToSection}
        about={about}
        news={news}
        join={join}
        testimonials={testimonials}
        blog={blog}
        partners={partners}
      >
        <main>
          <div className="mainContainer" role="main">
            <div className="banner">
              <div className="subContainer">
                <h1 className="startsFoundation">STARTS FOUNDATION</h1>
                <p className="tagline">Helping the communities in need</p>

                <button
                  className="learnBtnMain"
                  onClick={() => scrollToSection(about)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </main>
        {/* About Section */}
        <section className="sectionAbout" id="about" ref={about}>
          <About />
        </section>
        {/* Mission Section */}
        <section className="sectionMission">
          <Mission />
        </section>
        {/* Objective Section */}
        <section className="sectionObjective" id="objective">
          <Objectives />
        </section>
        {/* News Section */}
        <section className="sectionNews" id="recent-news" ref={news}>
          <RecentNews />
        </section>
        {/* Join the Cause Section */}
        <section className="sectionJoin" id="join-cause" ref={join}>
          <JoinCause />
        </section>
        <section
          className="sectionTestimonials"
          id="testimonials"
          ref={testimonials}
        >
          <Testimonials />
        </section>
        {/* Partners/teams Section */}
        <section className="sectionOurTeam" id="partners" ref={partners}>
          <OurTeam />
        </section>
        <section className="sectionBlog" id="blog" ref={blog}>
          <RecentBlogs />
        </section>
        <span className="scrollBtnSpan">
          <ScrollToTop />
        </span>
      </Layout>
    </div>
  )
}

export default Home
