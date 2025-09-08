import img from "../assets/Frame 1000002802 (1).jpg";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
const Performance = () => {
  return (
    <>
      <div className="w-full h-[992px] widescreen:h-auto relative bg-white mt-20 max-lg:h-full max-sm:mt-0">
        <div className="left-[80px] top-[88px]  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px]  justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
              <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                Performance Optimization{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[582.77px] widescreen:w-full letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-[100%] max-sm:text-[36px]">
              SharePoint Performance Analysis{" "}
            </div>
          </div>
          <div className="w-[536.02px] widescreen:w-[80%] widescreen:h-auto widescreen:text-[20px] widestscreen:text-[24px] h-[85.15px] max-sm:h-auto opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
            Revitalize your digital workspace with our SharePoint Performance
            Optimization. Enhance speed, streamline workflows, and ensure peak
            efficiency for a SharePoint experience that transcends expectations.{" "}
          </div>
        </div>

        <div className="flex gap-20 mt-[54px] max-lg:flex-wrap">
          <div className="left-[80px] widescreen:w-[40%] top-[376px]  flex-col justify-start items-start gap-[54px] inline-flex max-lg:flex-row max-lg:flex-wrap">
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                SharePoint Performance Analysis
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Conduct thorough assessments to identify performance
                bottlenecks, ensuring optimal speed, responsiveness, and
                reliability.{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Performance Tuning Solutions{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Implement tailored solutions to fine-tune SharePoint
                performance, optimizing response times and enhancing overall
                system efficiency.{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Caching and Indexing Strategies{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Develop effective caching and indexing strategies, enhancing
                SharePoint performance with efficient data retrieval and
                display.{" "}
              </div>
            </div>
          </div>

          <div className="h-[568px] widescreen:h-auto widescreen:w-[50%] max-lg:w-full  left-[516px] top-[376px]  flex-col justify-start items-center inline-flex max-sm:w-full max-sm:h-full">
            <Image
              className="w-[519.33px] widescreen:w-full widescreen:h-auto h-[779.13px] max-sm:w-full max-sm:h-full"
              src={img}
              alt="Performance Tuning Solutions"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
