"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import bug from "./assets/bug.svg";
import apple from "./assets/apple.svg";
import nativ from "./assets/native.svg";
import flut from "./assets/flut.svg";

const Mobileapp = () => {
  return (
    <>
      <div className="w-full widescreen:h-auto h-[759px] relative bg-white max-[740px]:h-full">
        <div className="m[80px] mt-[88px]  flex-col justify-start items-start gap-[22px] inline-flex max-sm:mt-0">
          <div className="flex-col max-sm:w-full justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
              <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                App Development and Modernization{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[620.77px] widescreen:w-[100%] widescreen:text-[59px] widestscreen:text-[69px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-[688px]:w-full max-sm:text-[36px]">
              Mobile App Development{" "}
            </div>
          </div>
          <div className="w-[536.02px] widescreen:w-[80%] widestscreen:text-[20px] widestscreen:text-[24px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%] max-sm:h-full">
            Craft exceptional mobile experiences with our design-led mobile app
            development, integrating innovation, user-centric design, and
            cutting-edge technologies.{" "}
          </div>
        </div>
        <div className="left-[80px] widescreen:text-[30px] widestscreen:text-[40px] top-[356.27px]  text-black text-xl font-normal font-['Graphik'] leading-normal mt-[42px] mb-[45.73px] max-lg:w-[90%]">
          Our capabilities{" "}
        </div>

        <div className="flex flex-wrap gap-[31px] w-[721px] widescreen:w-full max-lg:w-[100%] max-sm:justify-center max-sm:pb-[80px]">
          <div className="pl-[25.86px] widescreen:w-[35%] widescreen:py-[50px] pr-[33.34px] pt-[24.63px] pb-[25.37px] left-[80px] top-[426px]  bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] justify-start items-center inline-flex">
            <div className="self-stretch justify-center items-center gap-[42px] inline-flex">
              {/* <div  /> */}

              <Image
                className="w-[57px] h-[57px] relative"
                src={bug}
                alt="Native Android App Development"
              />
              <div className="w-[166.81px] text-black text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-[50%] font-normal font-['Graphik'] leading-tight">
                Native Android App Development{" "}
              </div>
            </div>
          </div>
          <div className="pl-[25.86px] widescreen:w-[35%] widescreen:py-[50px] pr-[33.34px] pt-[24.63px] pb-[25.37px] left-[80px] top-[564px]  bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] justify-start items-center inline-flex">
            <div className="self-stretch justify-center items-center gap-[42px] inline-flex">
              {/* <div /> */}
              <Image
                className="w-[57px] h-[57px] relative"
                src={nativ}
                alt="Hybrid React Native App Development"
              />
              <div className="w-[166.81px] text-black text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-[50%] font-normal font-['Graphik'] leading-tight">
                Hybrid React Native App Development{" "}
              </div>
            </div>
          </div>
          <div className="pl-[25.86px] widescreen:w-[35%] widescreen:py-[50px] pr-[33.34px] pt-[24.63px] pb-[25.37px] left-[438.92px] top-[426px]  bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] justify-start items-center inline-flex">
            <div className="self-stretch justify-center items-center gap-[42px] inline-flex">
              {/* <div  /> */}
              <Image
                className="w-[57px] h-[57px] relative"
                src={apple}
                alt="Native iOS App Development"
              />
              <div className="w-[166.81px] text-black text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-[50%] font-normal font-['Graphik'] leading-tight">
                Native iOS App Development{" "}
              </div>
            </div>
          </div>
          <div className="pl-[25.86px] widescreen:w-[35%] widescreen:py-[50px] pr-[33.34px] pt-[24.63px] pb-[25.37px] left-[438.92px] top-[564px]  bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] justify-start items-center inline-flex">
            <div className="self-stretch justify-center items-center gap-[42px] inline-flex">
              {/* <div  /> */}
              <Image
                className="w-[57px] h-[57px] relative"
                src={flut}
                alt="Hybrid Flutter App Development"
              />
              <div className="w-[166.81px] text-black text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-[50%] font-normal font-['Graphik'] leading-tight">
                Hybrid Flutter App Development{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobileapp;
