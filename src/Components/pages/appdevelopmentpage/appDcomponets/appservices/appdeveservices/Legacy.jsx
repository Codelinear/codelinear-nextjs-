"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import img from "./assets/App development03.jpg";

const Legacy = () => {
  return (
    <>
      <div className="w-full h-[992px] widescreen:h-auto relative bg-white mt-20 max-sm:mt-0 max-lg:h-full">
        <div className="left-[80px] top-[88px]  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col max-sm:w-full justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px]  justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
              <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                App Development and Modernization{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[562.77px] widescreen:w-full widescreen:text-[59px] widestscreen:text-[69px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-[100%] max-sm:text-[36px]">
              Legacy App Modernization{" "}
            </div>
          </div>
          <div className="w-[536.02px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
            Revitalize outdated systems with our Legacy App Modernization,
            transforming legacy software into efficient, scalable, and
            user-friendly solutions for contemporary needs.{" "}
          </div>
        </div>
        <div className="flex gap-20 max-sm:gap-[52px] max-sm:mt-[32px] mt-[54px] max-lg:flex-wrap">
          <div className="left-[80px] widescreen:w-[40%] top-[376px]  flex-col justify-start items-start gap-[54px] inline-flex max-lg:flex-row max-lg:flex-wrap">
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Technology Upgradation{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Revamp outdated technologies, ensuring compatibility with modern
                frameworks and infrastructure for enhanced performance and
                functionality.{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Enhanced User Experience{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Redesign interfaces and workflows, prioritizing user-centric
                design, optimizing usability, and improving overall user
                satisfaction and engagement.{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Scalability and Flexibility{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Adapt legacy systems for future growth, introducing scalable
                architectures and flexible components, facilitating seamless
                expansion and integration of new functionalities.{" "}
              </div>
            </div>
          </div>

          <div className="h-[568px] widescreen:w-[50%] widescreen:h-auto left-[516px] max-sm:h-auto top-[376px] max-lg:justify-center max-lg:w-full  flex-col justify-start items-center inline-flex">
            <Image
              className="w-[519.33px] widescreen:w-full widescreen:h-auto h-[779.13px] max-sm:w-full max-sm:h-auto"
              src={img}
              alt="Scalability and Flexibility"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Legacy;
