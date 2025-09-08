"use client";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import img from "../assets/system-uicons_scale (1).svg";
import img2 from "../assets/system-uicons_scale (2).svg";
import img3 from "../../cloud/assets/system-uicons_scale (3).svg";
import Image from "next/image";

const Experience = () => {
  return (
    <>
      <div className="w-full h-[847x] pb-20 relative bg-white max-lg:h-full">
        <div className="left-[80px] mt-[168px] max-sm:mt-0  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px]  justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
              <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                Technology Consulting{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[562.77px] widescreen:w-full widescreen:text-[59px] widestscreen:text-[69px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-full max-sm:text-[36px]">
              Customer Experience Consulting{" "}
            </div>
          </div>
          <div className="w-[536.02px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full max-sm:h-full">
            Elevate customer satisfaction and loyalty with our Customer
            Experience Consulting, optimizing touchpoints, fostering engagement,
            and delivering unforgettable brand interactions.{" "}
          </div>
        </div>

        <div className="left-[80px] widescreen:w-full top-[401px] mt-[42px] flex-col justify-start items-start gap-[85px] inline-flex">
          <div className="justify-start widescreen:w-full items-start gap-[52px] inline-flex max-lg:flex-wrap">
            <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
              <Image
                src={img}
                alt="Holistic CX Analysis"
                className="w-[57px] h-[57px]"
              />
              <div className="text-black widescreen:text-[30px] widescreen:h-[80px] widestscreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] max-sm:h-full max-sm:w-full leading-[120%]">
                Holistic CX Analysis{" "}
              </div>
              <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                Conduct thorough analysis to understand and improve every
                touchpoint in the customer journey.{" "}
              </div>
            </div>
            <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
              <Image
                src={img2}
                alt="Personalization Strategies"
                className="w-[57px] h-[57px]"
              />
              <div className="text-black widescreen:text-[30px] widescreen:h-[80px] widestscreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] max-sm:h-full max-sm:w-full leading-[120%]">
                Personalization Strategies{" "}
              </div>
              <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                Implement personalized approaches to enhance customer
                interactions and foster brand loyalty.{" "}
              </div>
            </div>
            <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
              <Image
                src={img3}
                alt="Continuous Feedback Integration"
                className="w-[57px] h-[57px]"
              />
              <div className="text-black widescreen:text-[30px] widescreen:h-[80px] widestscreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik']  max-sm:h-full max-sm:w-full leading-[120%]">
                Continuous Feedback Integration{" "}
              </div>
              <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                Establish mechanisms for ongoing customer feedback integration
                to adapt strategies and ensure a consistently positive
                experience.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
