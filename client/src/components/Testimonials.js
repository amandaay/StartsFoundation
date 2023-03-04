import React, { useState } from "react";
import "../styles/Testimonials.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import testimonialImg1 from "../images/testimonials/testimonial1.png"
import testimonialImg2 from "../images/testimonials/testimonial2.png"
import testimonialImg3 from "../images/testimonials/testimonial3.png"


export function Testimonials() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }

    return (
        <div className="aboutMainDiv " >
            <div className="container containerCause">
                <h1 className="testimonialsTitle">Testimonials</h1>
                <Carousel
                    responsive={responsive}
                    slidesToSlide={1}
                    additionalTransfrom={0}
                >
                    <Testimonial image={testimonialImg1} />
                    <Testimonial image={testimonialImg2} />
                    <Testimonial image={testimonialImg3} />
                </Carousel>

            </div>
        </div >

    )
}

function Testimonial(props) {
    return (
        <div className="w-100 px-3">
            <div className="bg-white testimonialHeight">
                <div className="py-4 d-flex justify-content-center">
                    <img src={props.image} alt="testimonial" className="testimonialProfile rounded-circle" />
                </div>
            </div>

        </div>
    )
}

export default Testimonials
