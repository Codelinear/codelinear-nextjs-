"use client";
"use client";
import React from "react";
import Image from "next/image";
// import Link from "next/link";;
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const Homeabout = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="w-full max-2md:h-full  max-2d:p-10 px-[150.20px] max-xl:px-0 py-[130.50px] bg-white justify-center items-center inline-flex relative  max-:px-4  max-xl:h-full max-sm:p-0">
        <div className="self-stretch justify-center gap-[158px] max-xl:px-[80px] max-2lg:gap-[50px] max-xl:gap-[130px] inline-flex max-2md:flex-wrap max-2md:py-10 max-lg:px-[40px] max-sm:px-[20px] max-xl:px-0  max-sm:gap-5 max-2md:gap-[20px]">
          <div className="w-[503.60px] bigscreen:text-[40px] widestscreen:text-[50px] bigscreen:w-[50%] letter-spacing-3 text-black text-[32px] font-normal font-['Graphik'] leading-[120%] max-xl:w-full">
            We navigate the intricacies of disruption with finesse. We believe
            true brilliance lies in making the complex appear effortless.{" "}
          </div>
          <div className="self-stretch bigscreen:w-[50%] flex-col justify-between items-start inline-flex max-2md:gap-10 max-xl:px-10 max-2md:p-0">
            <div className="w-[400px] bigscreen:w-full widestscreen:text-[32px] bigscreen:text-[24px] opacity-80 text-black leading-[150%] text-base font-normal font-['Graphik'] leading-normal max-2md:w-full">
              Our commitment is not just to design; it's to create experiences
              that resonate, innovate, and lead industries into a bold new era.{" "}
            </div>
            <Link
              href={"/about-us"}
              onClick={scrollToTop}
              className="hover:bg-yellow-400 transition-all px-8 py-4 rounded-[31px] widestscreen:rounded-[80px] bigscreen:rounded-[50px] bigscreen:mt-[25px] border border-black justify-center items-center gap-2 inline-flex  hover:border-yellow-400 max-sm:w-full"
            >
              <div className="text-black text-base bigscreen:text-[24px] font-normal widestscreen:text-[32px] font-['Graphik'] capitalize leading-normal">
                About us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeabout;
