"use client";
import React from "react";
import Image from "next/image";

import Link from "next/link";

import axios from "axios";
import { useState, useEffect } from "react";
import img from "../../../../salesforce/assets/Frame 1000002801.jpg";

const ARservice = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="serviepagearrv">
        <div className="w-full h-[700px] widescreen:h-auto relative max-[1410px]:h-full">
          <div className="flex max-lg:flex-col max-xl:w-full max-lg:justify-start max-xl:gap-[80px] max-3lg:gap-[40px] max-2lg:gap-[0px] max-lg:items-start">
            <div className="max-xl:w-full widescreen:w-full max-md:ml-0">
              <div className="mt-[80px] max-[500px]:mt-28  flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="opacity-60 w-[521.42px] widescreen:w-[90%] justify-start items-center gap-[13.42px] inline-flex max-lg:w-full">
                  <div className=" text-black widescreen:text-[20px] widescreen:text-[24px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    our services
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="flex-col justify-start items-start gap-[42px] flex">
                  <div className="flex-col justify-start items-start gap-[22px] flex">
                    <div className="w-[631.03px] widescreen:w-full widescreen:text-[60px] widestscreen:text-[72px] max-[1410px]:w-[561px] max-lg:w-[631px] max-1xl:w-[521px] max-md:w-full text-black letter-spacing-2 text-[48px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px]">
                      Salesforce Services{" "}
                    </div>
                    <div className="w-[513.61px] widescreen:text-[24px] widescreen:text-[24px] widescreen:w-full max-md:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                      Salesforce Services{" "}
                    </div>
                  </div>
                  <Link
                    className=" max-sm:w-full"
                    onClick={scrollToTop}
                    href={"/services/salesforce-services"}
                  >
                    <button className="px-8 py-4 max-sm:w-full rounded-[31px] widescreen:px-[32px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-full">
                      <div className="text-black leading-none widescreen:text-[24px] text-base font-normal font-['Graphik'] capitalize">
                        Learn more
                      </div>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex mt-16 gap-10 max-sm:gap-5  max-sm:justify-between w-[621px] max-[1410px]:w-[561px] widescreen:w-full max-1xl:w-[531px] max-lg:w-[621px] max-[1410px]:w-[531px]  max-md:w-full flex-wrap">
                {" "}
                <div className="w-[175px] left-[513px] widescreen:text-[24px] widescreen:text-[24px] widescreen:w-[30%] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Salesforce Consulting and Strategy{" "}
                </div>
                <div className="w-[175px] left-[513px] widescreen:text-[24px] widescreen:text-[24px] widescreen:w-[30%] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Upgrades and Migrations{" "}
                </div>
                <div className="w-[175px] left-[513px] widescreen:text-[24px] widescreen:text-[24px] widescreen:w-[30%] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Workflow and Process Automation{" "}
                </div>
                <div className="w-[175px] left-[513px] widescreen:text-[24px] widescreen:text-[24px] widescreen:w-[30%] top-[496px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[45%]">
                  Integration Services{" "}
                </div>
              </div>
            </div>
            <div className="max-md:w-full widescreen:w-full max-md:h-full">
              <div className="w-[359px] widescreen:w-[80%] widescreen:h-auto  max-md:w-full max-md:h-full max-lg:w-[665px] max-lg:h-[800px] h-[434px] left-[730px] mt-[80px] max-sm:mt-[30px] bg-zinc-100 flex-col justify-center items-center inline-flex">
                <Image
                  className="w-[360px] widescreen:w-full widescreen:h-auto h-[434px] max-md:w-full max-md:h-full max-lg:w-[665px] max-lg:h-[800px]"
                  src={img}
                  alt="Salesforce Services"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ARservice;
