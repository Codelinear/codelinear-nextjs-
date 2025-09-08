"use client";
import React from "react";
import Image from "next/image";
import img from "../../../../../assets/aboutassets/image 20.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Office = () => {
  return (
    <>
      <div className="office max-md:p-10 max-sm:p-5">
        <div className="w-full h-[773px] relative bg-white max-lg:flex max-lg:justify-center max-lg:flex-wrap max-lg:h-full max-md:p-0 max-lg:gap-40 max-lg:p-10 max-sm:p-0">
          <div className="w-[598.86px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:w-[40%] left-[80px] top-[80px] absolute text-black text-4xl font-normal font-['Graphik'] letter-spacing-6 leading-[120%] max-lg:w-full max-lg:left-0 max-lg:h-full max-lg:relative max-sm:text-[24px] max-sm:p-0">
            We are visionaries who uplift one another, thrive on inclusion, and
            are determined to collectively make a difference for our clients and
            the world around them.{" "}
          </div>
          <Image
            className="w-[738px] widescreen:h-auto widescreen:w-[50%] h-[340.82px] absolute right-[80px] top-[373.07px] max-lg:top-0 absolute max-lg:relative max-lg:w-full max-lg:left-0  max-lg:right-0 max-md:top-0 max-lg:h-full"
            src={img}
            alt="We are visionaries who uplift one another"
          />
        </div>
      </div>
    </>
  );
};

export default Office;
