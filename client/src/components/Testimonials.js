import React from "react"
import "../styles/Testimonials.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai"

export function Testimonials() {
  const data = useStaticQuery(graphql`
    {
      allSanityTestimonials {
        nodes {
          _id
          name
          image {
            alt
            asset {
              gatsbyImageData
            }
          }
          body {
            children {
              text
            }
          }
        }
      }
    }
  `)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    }
  }
  const testimonials = data.allSanityTestimonials.nodes

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {

    const { carouselState: { currentSlide, slidesToShow, totalItems } } = rest;
    // console.log(rest)
    // console.log(next)
    return (
      <div className="carousel-button-group">
        <AiOutlineLeftCircle className={`${currentSlide === 0 ? 'd-none' : ''} position-absolute leftButtonPosition fs-1 text-white`} onClick={() => previous()} />
        <AiOutlineRightCircle className={`${currentSlide + slidesToShow === totalItems ? 'd-none' : ''} position-absolute rightButtonPosition fs-1 text-white`} onClick={() => next()} />
      </div>
    );
  };

  return (
    <div className="TestimonialsMainDiv px-3">
      <div className="container containerCause px-3">
        <h1 className="testimonialsTitle">Testimonials</h1>
        <div className="position-relative">
          <Carousel
            responsive={responsive}
            slidesToSlide={1}
            additionalTransfrom={0}
            itemClass="px-3 h-auto"
            containerClass="react-multi-carousel-list"
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
          >
            {testimonials.map(testimonial => {
              return (
                <Testimonial
                  image={testimonial.image.asset.gatsbyImageData}
                  name={testimonial.name}
                  body={testimonial.body}
                  key={testimonial._id}
                />
              )
            })}
          </Carousel>
        </div>

      </div>
    </div>
  )
}

function Testimonial(props) {
  return (
    <div className="py-4 w-100 bg-white d-flex justify-content-center h-100">
      <div className="bg-white testimonialHeight w-85">
        <div className="row ">
          <div className="col-4 d-flex justify-content-center">
            <GatsbyImage
              className="rounded-circle w-75"
              image={props.image}
              alt={props.name}
            />
          </div>
          <div className="col-8 d-flex align-items-center">
            <div>
              <div>
                <span className="fs-5">{props.name}</span>
                <br />
                <span className="text-secondary">UC Berkly</span>
              </div>
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-center">
            <div className="w-100 border-bottom border-secondary"></div>
          </div>
          <div className="mt-3 d-flex justify-content-center">
            {props.body[0].children[0].text}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
