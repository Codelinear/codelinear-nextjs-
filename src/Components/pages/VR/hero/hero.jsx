"use client";
import Link from "next/link";
import image from "../assets/ARVR01.jpg";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <section id="prod-hero">
        <h1 className="text-[66px] widescreen:w-[65%] widescreen:text-[76px] widescreen:text-[90px] max-sm:h-[full pl-[80px] leading-[108%] pb-[65px] max-sm:pb-0  max-sm:mb-0 max-sm:pt-[50px] max-sm:mb-[25px] pt-[142px] letter-spacing-1 w-[976px] max-lg:pl-[40px] max-sm:pl-[20px] max-sm:text-[50px] max-lg:w-[90%]">
          Immerse your audience in captivating digital experiences like never
          before.{" "}
        </h1>
        <div>
          <Image
            src={image}
            className="object-cover"
            alt="AR/VR services transcend"
          />
        </div>
        <p>
          Our AR/VR services transcend boundaries, offering an array of
          immersive solutions that elevate your brand and captivate your
          audience.
        </p>
        <Link href={"/contact-us"} onClick={scrollToTop}>
          <button>Talk to our experts</button>
        </Link>
      </section>
    </>
  );
};
export default Hero;
