import React, { useState } from "react"
import "../styles/Testimonials.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export function Testimonials() {
  const data = useStaticQuery(graphql`
    {
      allSanityTestimonials {
        nodes {
          _id
          name
          image {
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
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  const testimonials = data.allSanityTestimonials.nodes
  console.log(testimonials)
  return (
    <div className="aboutMainDiv ">
      <div className="container containerCause">
        <h1 className="testimonialsTitle">Testimonials</h1>
        <Carousel
          responsive={responsive}
          slidesToSlide={1}
          additionalTransfrom={0}
          itemClass="px-3 h-auto"
          containerClass="react-multi-carousel-list"
        >
          {
            testimonials.map((testimonial) => {
              return (
                <Testimonial
                  image={testimonial.image.asset.gatsbyImageData}
                  name={testimonial.name}
                  body={testimonial.body}
                />
              )
            })
          }
        </Carousel>
      </div>
    </div>
  )
}

function Testimonial(props) {
  return (
    <div className="py-4 w-100 bg-white d-flex justify-content-center h-auto">
      <div className="bg-white testimonialHeight w-85">
        <div className="row ">
          <div className="col-4 d-flex justify-content-center">
            <GatsbyImage
              className="rounded-circle w-75"
              image={props.image}
            />
          </div>
          <div className="col-8 d-flex align-items-center">
            <div>
              <div><span className="fs-5">{props.name}</span><br /><span className="text-secondary">UC Berkly</span></div>
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-center">
            <div className="w-100 border-bottom border-secondary"></div>
          </div>
          <div className="mt-3 d-flex justify-content-center">
            <p>{props.body[0].children[0].text}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Testimonials
