"use client";
import { gsap } from "gsap";
import graphintersect from "./assets/Intersect.svg";
import grapharrow from "./assets/about page arrow.svg";
import grapharrow2 from "./assets/file.svg";
import "./circle.scss";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Animatecircle = () => {
  let circle1 = useRef(null);
  let circle2 = useRef(null);
  let circle3 = useRef(null);
  let arrow = useRef(null);
  let arrow3 = useRef(null);
  let arrow2 = useRef(null);
  let intersecter = useRef(null);
  let circle4 = useRef(null);
  let we = useRef(null);

  const mouseOverAnimation = () => {
    gsap.to(circle1, { opacity: 0 });
    gsap.to(intersecter.current, { width: "182px" });
    gsap.to(arrow, { opacity: 1 });
    gsap.to(arrow2, { opacity: 1 });
    gsap.to(arrow3, { opacity: 1 });
    gsap.to(we, { opacity: 1 });
    gsap.to(circle2, { opacity: 1, y: 83, x: 131, scale: 1 });
    gsap.to(circle3, { opacity: 1, y: 83, x: -131, scale: 1 });
    gsap.to(circle4, { opacity: 1, y: -143, x: -7, scale: 1 });
    if (width <= 640) {
      gsap.to(circle1, { opacity: 0 });
      gsap.to(intersecter.current, { width: "182px" });
      gsap.to(arrow, { opacity: 1 });
      gsap.to(arrow2, { opacity: 1 });
      gsap.to(arrow3, { opacity: 1 });
      gsap.to(we, { opacity: 1 });
      gsap.to(circle2, { opacity: 1, y: 83, x: 131, scale: 1 });
      gsap.to(circle3, { opacity: 1, y: 83, x: -131, scale: 1 });
      gsap.to(circle4, { opacity: 1, y: -143, x: -7, scale: 1 });
    }
  };

  const mouseOutAnimation = () => {
    gsap.to(circle1, { opacity: 1 });
    gsap.to(arrow, { opacity: 0 });
    gsap.to(arrow2, { opacity: 0 });
    gsap.to(arrow3, { opacity: 0 });
    gsap.to(we, { opacity: 0 });
    gsap.to(circle2, { opacity: 0, y: 0, x: 0, scale: 0.7 });
    gsap.to(circle3, { opacity: 0, y: 0, x: 0, scale: 0.7 });
    gsap.to(circle4, { opacity: 0, y: 0, scale: 0.7 });
    gsap.to(intersecter.current, { width: 0 });
    if (width <= 840) {
      gsap.to(circle1, { opacity: 0 });
      gsap.to(intersecter.current, { width: "182px" });
      gsap.to(arrow, { opacity: 1 });
      gsap.to(arrow2, { opacity: 1 });
      gsap.to(arrow3, { opacity: 1 });
      gsap.to(we, { opacity: 1 });
      gsap.to(circle2, { opacity: 1, y: 83, x: 131, scale: 1 });
      gsap.to(circle3, { opacity: 1, y: 83, x: -131, scale: 1 });
      gsap.to(circle4, { opacity: 1, y: -143, x: -7, scale: 1 });
    }
  };
  const width = 1440;
  useEffect(() => {
    if (width <= 1024) {
      gsap.to(circle1, { opacity: 0 });
      gsap.to(intersecter.current, { width: "182px" });
      gsap.to(arrow, { opacity: 1 });
      gsap.to(arrow2, { opacity: 1 });
      gsap.to(arrow3, { opacity: 1 });
      gsap.to(we, { opacity: 1 });
      gsap.to(circle2, { opacity: 1, y: 83, x: 131, scale: 1 });
      gsap.to(circle3, { opacity: 1, y: 83, x: -131, scale: 1 });
      gsap.to(circle4, { opacity: 1, y: -143, x: -7, scale: 1 });
    }
  });
  return (
    <div className="pt-[150px] widescreen:pt-[300px] widestscreen:pt-[350px] max-[901px]:h-[700px] max-sm:pt-0 max-sm:h-[380px]">
      <div
        className="w-[50%] ml-[25%] h-[644px] absolute z-[3] insert-hover max-[901px]:h-[700px] max-[481px]:h-[500px] "
        onMouseOver={mouseOverAnimation}
        onMouseOut={mouseOutAnimation}
      ></div>
      <div className="circles-animation aboutsection my-20 max-md:h-full">
        <Image
          src={graphintersect}
          alt="Codelinear animation circle"
          className="intersect"
          ref={intersecter}
        />
        <Image
          src={grapharrow2}
          alt="Codelinear animation circle"
          className="arrow-small"
          ref={(el) => (arrow2 = el)}
        />
        <p className="text-graph" ref={(el) => (arrow3 = el)}>
          We help you get here.
        </p>
        <Image
          src={grapharrow}
          alt="Codelinear animation circle"
          className="arrowanimate"
          ref={(el) => (arrow = el)}
        />
        <p className="we" ref={(el) => (we = el)}>
          We help you get here.
        </p>

        <div
          // style={{ color:  ? "#000000" : "#d8d6d6", fontWeight: 900 }}
          className="circle11"
          ref={(el) => (circle1 = el)}
        >
          codelinear
        </div>
        <div
          // style={{ color: isDarkMode ? "#000000" : "#d8d6d6", fontWeight: 800 }}
          className="circle20 circle21"
          ref={(el) => (circle2 = el)}
        >
          Disrupt
        </div>
        <div
          // style={{ color: isDarkMode ? "#000000" : "#d8d6d6", fontWeight: 800 }}
          className="circle20 circle22"
          ref={(el) => (circle3 = el)}
        >
          Develop
        </div>
        <div
          // style={{ color: isDarkMode ? "#000000" : "#d8d6d6", fontWeight: 800 }}
          className="circle20 circle23"
          ref={(el) => (circle4 = el)}
        >
          Design
        </div>
      </div>
    </div>
  );
};

export default Animatecircle;
