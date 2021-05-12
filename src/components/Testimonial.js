import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import PropagateLoader from 'react-spinners/PropagateLoader'
import { css } from "@emotion/core";

import "react-multi-carousel/lib/styles.css";
import "./Testimonial.css";

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

const override = css`
  display: block;
  margin: 75px auto;
  size: 300px;
  text-align: center;
  `;

const Testimonial = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://wknd-take-home-challenge-api.herokuapp.com/testimonial"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="testimonial">
      <h1>Testimonial</h1>
      {data ? <Carousel
        responsive={responsive}
        renderButtonGroupOutside={true}
        infinite={true}
        containerClass="carousel-container"
        
      >
        {data.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                title={item.by}
                subtitle={item.testimony}
              />
            );
          })}
      </Carousel> : <PropagateLoader color="blue" css={override}/> }
    </div>
  );
};

export default Testimonial;
