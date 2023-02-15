import React, { useState, useEffect } from "react"
import { FaAngleDoubleUp } from "react-icons/fa"
import "../styles/ScrollToTop.css"
/**
 * module that lets user scroll up to top of home page
 * @returns JSX of scroll to top icon
 * reference URL: https://youtu.be/oszUqCqTGHo
 */
const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true)
      } else {
        setShowScrollTopButton(false)
      }
    })
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div onClick={() => scrollTop()}>
      {showScrollTopButton && <FaAngleDoubleUp className="showScrollBtn" />}
    </div>
  )
}

export default ScrollToTop
