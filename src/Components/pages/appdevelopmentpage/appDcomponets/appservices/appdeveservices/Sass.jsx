"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import img1 from "./assets/system-uicons_scale.svg";
import img2 from "./assets/No Poverty.svg";
import img3 from "./assets/material-symbols-light_update (1).svg";

const Sass = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="w-full h- relative bg-white">
        <div className="left-[80px] mt-[168px] max-sm:mt-20  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col max-sm:w-full justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px]  justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
              <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                App Development and Modernization{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[562.77px] widescreen:w-full widescreen:text-[59px] widestscreen:text-[69px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-full max-sm:text-[36px]">
              SaaS Development{" "}
            </div>
          </div>
          <div className="w-[536.02px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full max-sm:h-full">
            Transform your business with our SaaS development, delivering
            scalable, secure, and user-friendly software solutions for all
            business from big enterprises to startups.{" "}
          </div>
        </div>

        <div className="left-[80px] widescreen:w-full top-[401px]  mt-[42px] flex-col justify-start items-start gap-[85px] inline-flex">
          <div className="justify-start widescreen:w-full items-start gap-[52px] inline-flex max-lg:flex-wrap max-lg:w-full">
            <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
              <Image
                src={img1}
                alt="Scalability"
                className="w-[57px] h-[57px]"
              />
              <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Scalability{" "}
              </div>
              <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Easily scale your software to accommodate growing user bases,
                ensuring optimal performance and responsiveness for evolving
                demands.{" "}
              </div>
            </div>
            <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
              <Image
                src={img2}
                alt="Multi-Tenancy"
                className="w-[57px] h-[57px]"
              />
              <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Multi-Tenancy{" "}
              </div>
              <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Efficiently serve multiple clients with isolated and
                customizable instances, enhancing security and customization for
                diverse user needs.{" "}
              </div>
            </div>
            <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
              <Image
                src={img3}
                alt="Automatic Updates"
                className="w-[57px] h-[57px]"
              />
              <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Automatic Updates{" "}
              </div>
              <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Ensure seamless functionality with automated updates,
                guaranteeing users access the latest features and improvements
                without manual intervention.{" "}
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-[58px] max-sm:gap-[40px] inline-flex max-sm:flex-wrap">
            <div className="w-[267.25px] widescreen:w-[40%] widescreen:text-[30px] widestscreen:text-[40px] text-black text-xl max-sm:text-[24px] font-normal font-['Graphik'] leading-normal max-sm:w-full">
              Need help in making the next big thing?{" "}
            </div>
            <Link
              href={"/contact-us"}
              onClick={scrollToTop}
              className="px-8  max-sm:w-full py-4 rounded-[31px] border border-black justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all  hover:border-yellow-400  max-sm:w-full"
            >
              <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                Talk to our experts
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sass;
