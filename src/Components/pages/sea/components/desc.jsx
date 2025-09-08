"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";

const Desc = () => {
  return (
    <section>
      <div className="pt-[58px] max-lg:py-[45px] pb-[85.5px] max-xl:gap-[50px] max-sm:py-[24px] max-xl:justify-between max-2lg:gap-[20px] max-lg:flex-col max-lg:gap-[80px] max-sm:gap-[36px] flex gap-[216px]">
        <div className="flex flex-col">
          <h1 className="w-[542px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:w-[700px] widestscreen:w-[1024px] mb-[56px] max-sm:mb-[12px] max-lg:mb-[21px] max-sm:text-[24px] max-lg:w-full text-[36px] leading-[120%] letter-spacing-2">
            SEA's mission was straightforward: a tool that went beyond the
            frills, delivering tangible impact in the unpredictable landscape of
            SEO.{" "}
          </h1>
        </div>
        <div className="w-[440px] widescreen:w-[700px] widestscreen:w-[900px] max-lg:w-[100%] max-md:w-full flex flex-col gap-[63px] max-sm:gap-[40px]">
          <div className="w-[342px] max-lg:w-full flex flex-col gap-[30px]">
            <div className="w-full justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
              <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                Industry{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="bg-[#F2F2F2] widescreen:py-[12px] widestscreen:py-[16px] max-sm:w-[90px] widescreen:w-[150px] widescreen:text-[20px] widestscreen:text-[24px] w-[118px] py-[8px] px-[16px] text-[#000000] rounded-[8px] flex justify-center items-center text-base max-sm:text-sm font-normal font-['Archivo']">
              Marketing{" "}
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="w-[342px] widescreen:w-full max-lg:w-full justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
              <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                services provided{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="flex gap-[14px] flex-wrap w-[100%]">
              <div className="bg-[#F2F2F2] widescreen:text-[20px] widestscreen:text-[24px] widescreen:py-[12px] widestscreen:py-[16px] py-[8px] px-[16px] text-[#000000] rounded-[8px] flex justify-center items-center text-base max-sm:text-sm font-normal font-['Archivo']">
                User Experience{" "}
              </div>
              <div className="bg-[#F2F2F2] widescreen:text-[20px] widestscreen:text-[24px] widescreen:py-[12px] widestscreen:py-[16px] py-[8px] px-[16px] text-[#000000] rounded-[8px] flex justify-center items-center text-base max-sm:text-sm font-normal font-['Archivo']">
                Product Engineering{" "}
              </div>
              <div className="bg-[#F2F2F2] widescreen:text-[20px] widestscreen:text-[24px] widescreen:py-[12px] widestscreen:py-[16px] py-[8px] px-[16px] text-[#000000] rounded-[8px] flex justify-center items-center text-base max-sm:text-sm font-normal font-['Archivo']">
                AI integration{" "}
              </div>
              <div className="bg-[#F2F2F2] widescreen:text-[20px] widestscreen:text-[24px] widescreen:py-[12px] widestscreen:py-[16px] py-[8px] px-[16px] text-[#000000] rounded-[8px] flex justify-center items-center text-base max-sm:text-sm font-normal font-['Archivo']">
                Technology Consulting{" "}
              </div>
              <div className="bg-[#F2F2F2] widescreen:text-[20px] widestscreen:text-[24px] widescreen:py-[12px] widestscreen:py-[16px] py-[8px] px-[16px] text-[#000000] rounded-[8px] flex justify-center items-center text-base max-sm:text-sm font-normal font-['Archivo']">
                Enterprise application development{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Desc;
