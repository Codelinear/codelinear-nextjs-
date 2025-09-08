"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import img1 from "../assets/ph_clipboard-light (1).svg";
import img3 from "../assets/system-uicons_scale (3).svg";
import img2 from "../assets/system-uicons_scale (1).svg";
import axios from "axios";

const Sass = () => {
  return (
    <>
      <div className="w-full h- relative bg-white pb-[147px] max-sm:pb-20">
        <div className="left-[80px] mt-[168px] max-sm:mt-20  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px]  justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
              <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                Cloud Engineering{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[562.77px] widescreen:w-full widescreen:text-[40px] widescreen:text-[50px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-full max-sm:text-[36px]">
              Cloud App Testing & Implementation{" "}
            </div>
          </div>
          <div className="w-[536.02px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full max-sm:h-full">
            Ensure flawless functionality with our Cloud App Testing &
            Implementation, integrating robust testing and efficient deployment
            for seamless, reliable cloud-based applications.
          </div>
        </div>

        <div className="left-[80px] top-[401px] mt-[42px] flex-col justify-start items-start gap-[85px] inline-flex">
          <div className="justify-start widescreen:w-full items-start gap-[52px] inline-flex max-lg:flex-wrap max-lg:w-full">
            <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
              <Image
                src={img1}
                alt="Comprehensive Testing Strategies"
                className="w-[57px] h-[57px]"
              />
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                Comprehensive Testing Strategies{" "}
              </div>
              <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Execute testing strategies, including functional, performance,
                and security testing, to ensure the reliability and efficiency
                of cloud applications.{" "}
              </div>
            </div>
            <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
              <Image
                src={img2}
                alt="Scalable Implementation"
                className="w-[57px] h-[57px]"
              />
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                Scalable Implementation{" "}
              </div>
              <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Implement cloud applications using scalable architectures,
                allowing for flexible resource allocation and efficient handling
                of varying workloads.{" "}
              </div>
            </div>
            <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
              <Image
                src={img3}
                alt=" Continuous Integration and Deployment (CI/CD)"
                className="w-[57px] h-[57px]"
              />
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                Continuous Integration and Deployment (CI/CD){" "}
              </div>
              <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Utilize CI/CD pipelines for automated and streamlined testing,
                integration, and deployment of cloud applications, ensuring
                rapid and reliable updates.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sass;
