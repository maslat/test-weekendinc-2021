import React from "react";
import "./Testimonial.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./CarouselItem";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h1>Testimonial</h1>
      <Carousel
        partialVisbile
        responsive={responsive}
        renderButtonGroupOutside={true}
        infinite={true}
        containerClass='carousel-container'
      >
        <CarouselItem title='Blu Kicks' subtitle='Places where you can leverage tools and software to free up time to focus on growing the business.' />
        <CarouselItem title='Angelus' subtitle='All those apps took me months to get running. Now the site practically runs itself!' />
        <CarouselItem title='SoYoung' subtitle='Unless you have a truly unique product, it will be very hard to differentiate and gain brand traction' />
        <CarouselItem title='Monti' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' />
      </Carousel>
    </div>
  );
};

export default Testimonial;
