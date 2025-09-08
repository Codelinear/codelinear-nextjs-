import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import img from "../assets/Technology consulting02.jpg";
import Image from "next/image";
const Transform = () => {
  return (
    <>
      <div className="w-full h-[992px] widescreen:h-auto relative bg-white mt-20 max-sm:mt-0 max-lg:h-full">
        <div className="left-[80px] max-md:w-full top-[88px]  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col max-md:w-full justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px]  justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
              <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                Technology Consulting{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[709.77px] max-md:w-full letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-[100%] max-sm:text-[36px]">
              Digital transformation consulting{" "}
            </div>
          </div>
          <div className="w-[536.02px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
            Ignite business evolution with our Digital Transformation
            Consulting, orchestrating strategic technological shifts for
            enhanced efficiency, innovation, and sustained growth.{" "}
          </div>
        </div>

        <div className="flex gap-20 max-sm:gap-[32px] mt-[54px] max-lg:flex-wrap">
          <div className="left-[80px] widescreen:w-[40%] top-[376px]  flex-col justify-start items-start gap-[54px] inline-flex max-lg:flex-row max-lg:flex-wrap">
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full  letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[28px] max-sm:h-full max-sm:w-full leading-[120%]">
                Strategic Roadmapping{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Develop comprehensive strategies and roadmaps for organizations
                to navigate and implement digital transformation effectively.{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black  widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[28px] max-sm:h-full max-sm:w-full leading-[120%]">
                Technology Integration{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Identify and integrate cutting-edge technologies to optimize
                processes and drive innovation within the digital transformation
                journey.{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black lett widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full er-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[28px] max-sm:h-full max-sm:w-full leading-[120%]">
                Organizational Alignment{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Facilitate alignment of organizational structures, culture, and
                processes to ensure a cohesive and successful digital
                transformation across all levels.{" "}
              </div>
            </div>
          </div>

          <div className="h-[568px] widescreen:w-[50%] widescreen:h-auto left-[516px] top-[376px] max-lg:w-full max-lg:justify-center  flex-col justify-start items-center inline-flex max-sm:w-full max-sm:h-full">
            <Image
              className="w-[519.33px] widescreen:w-full widescreen:h-auto h-[779.13px] max-sm:w-full max-sm:h-full"
              src={img}
              alt=" Identify and integrate cutting-edge technologies to optimize processes"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transform;
