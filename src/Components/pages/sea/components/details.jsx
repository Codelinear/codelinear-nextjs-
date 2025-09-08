"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";

const Details = () => {
  return (
    <>
      <div className="flex gap-[216px] max-sm:gap-[32px] max-lg:flex-col max-1xl:gap-[56px] max-lg:py-[45px] max-sm:py-[40px] pb-[93px] pt-[68.5px]">
        <div className="w-[542px] widescreen:w-[900px] max-lg:w-full max-lg:h-auto flex flex-col gap-[30px] max-sm:gap-[20px]">
          <div className=" w-full justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
            <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
              what we did
            </div>
            <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
          </div>
          <h1 className="w-[527px] widescreen:w-[700px] widestscreen:w-[900px] widescreen:text-[40px] widestscreen:text-[50px] max-sm:text-[24px] max-xl:w-full text-[36px] leading-[120%] letter-spacing-2">
            We undertook a comprehensive initiative to conceptualize, design,
            and develop a revolutionary SEO tool tailored to meet SEA's specific
            objectives and industry demands.{" "}
          </h1>
        </div>
        <div className="max-xl:w-full mt-[51px] max-lg:mt-0">
          <p className="max-sm:w-full max-lg:w-[82%] text-base opacity-80 widescreen:w-[600px] widestscreen:w-[700px] widescreen:text-[20px] widestscreen:text-[24px] w-[458px]">
            The project leveraged an array of services offered by Codelinear,
            including user experience design, advanced analytics integration,
            and product engineering.{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default Details;
