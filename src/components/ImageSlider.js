import React from "react";
import HappyOneCentral from "../json/HappyOneCentral.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageBackground, Container } from "../globalStyles";
import ProgressCircle from "./ProgessCircle";
import styled from "styled-components";

const CircleSVG = styled.circle``;

const CircleDots = styled.div`
  svg {
    circle {
      stroke: white;
      stroke-width: 3;
      fill: none;
    }
  }
`;
const ImageSlider = () => {
  let settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div class="circleCont">
        <CircleDots>
          <svg class="dotOutline">
            <CircleSVG
              stroke="white"
              stroke-width="3"
              fill="none"
              cx="15"
              cy="15"
              r="12"
            ></CircleSVG>
          </svg>
          <div
            style={{
              width: "30px",
              color: "white",
              position: "absolute",
              bottom: "-7px",
            }}
          >
            {i + 1}
          </div>
        </CircleDots>
      </div>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 64000,
    cssEase: "ease-out",
    centerMode: true,
    pauseOnHover: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 360,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="container-fluid mt-5 carousel">
      <Slider {...settings}>
        {HappyOneCentral.map((picture) => {
          return <ImageBackground image={picture.src}></ImageBackground>;
        })}
      </Slider>{" "}
    </div>
  );
};
export default ImageSlider;
