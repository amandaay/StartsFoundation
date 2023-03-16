import React, { useState } from "react"
import "../styles/ImgSlider.css"
import { CanvasImgData } from "./CanvasImgData"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
import PropTypes from "prop-types"

/**
 *
 * @param {slides} slides taken from the canvas image data
 * @returns image slider of the Canvas component in the top container
 * ref: https://www.youtube.com/watch?v=l1MYfu5YWHc
 */

function CanvasImgSlider({ slides }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <section className="ImgSlider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {CanvasImgData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="Canvas" className="SliderImg" />
            )}
          </div>
        )
      })}
    </section>
  )
}

CanvasImgSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
    })
  ),
}

export default CanvasImgSlider
