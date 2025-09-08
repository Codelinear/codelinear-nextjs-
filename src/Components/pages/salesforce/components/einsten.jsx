import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import img from "../../cloud/assets/material-symbols-light_warning-outline.svg";
import img2 from "../../cloud/assets/material-symbols-light_security (2).svg";
import img3 from "../../cloud/assets/material-symbols-light_detection-and-zone.svg";
import Image from "next/image";

const Einsten = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <>
        <div className="w-full h-[847x] pb-20 max-sm:pb-0 relative bg-white max-lg:h-full">
          <div className="left-[80px] mt-[168px]  max-sm:mt-20 flex-col justify-start items-start gap-[22px] inline-flex">
            <div className="flex-col justify-start items-start gap-[30px] flex">
              <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px]  justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
                <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                  Salesforce Services{" "}
                </div>
                <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
              </div>
              <div className="w-[562.77px] widescreen:w-full widescreen:text-[59px] widestscreen:text-[69px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-full max-sm:text-[36px]">
                Salesforce Einstein Analytics{" "}
              </div>
            </div>
            <div className="w-[536.02px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full max-sm:h-full">
              Leverage Salesforce Einstein Analytics for advanced insights,
              actionable intelligence, and data-driven decision-making,
              optimizing performance, efficiency, and strategic planning within
              your organization.{" "}
            </div>
          </div>

          <div className="left-[80px] widescreen:w-full top-[401px] mt-[42px] flex-col justify-start items-start gap-[85px] inline-flex">
            <div className="justify-start widescreen:w-full items-start gap-[52px] inline-flex max-lg:flex-wrap">
              <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
                <Image
                  src={img}
                  alt="Custom Dashboard Development"
                  className="w-[57px] h-[57px]"
                />
                <div className="text-black widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[63px] widestscreen:h-[80px] letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  Custom Dashboard Development{" "}
                </div>
                <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Craft personalized Einstein Analytics dashboards, visualizing
                  key insights for data-driven decision-making and actionable
                  business intelligence.{" "}
                </div>
              </div>
              <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
                <Image
                  src={img2}
                  alt="Predictive Analytics Implementation"
                  className="w-[57px] h-[57px]"
                />
                <div className="text-black widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[63px] widestscreen:h-[80px] letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  Predictive Analytics Implementation{" "}
                </div>
                <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Integrate Einstein Analytics for predictive modeling,
                  uncovering patterns and trends for enhanced forecasting,
                  planning, and strategy.{" "}
                </div>
              </div>
              <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
                <Image
                  src={img3}
                  alt="Performance Optimization Solutions"
                  className="w-[57px] h-[57px]"
                />
                <div className="text-black widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[63px] widestscreen:h-[80px] letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  Performance Optimization Solutions{" "}
                </div>
                <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Enhance platform efficiency with Salesforce Einstein
                  Analytics, optimizing data processing, visualization, and
                  insights delivery for peak performance.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Einsten;
