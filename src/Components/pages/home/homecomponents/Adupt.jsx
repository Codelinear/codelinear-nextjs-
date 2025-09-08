"use client";
"use client";
import React from "react";
import Image from "next/image";
// import Link from "next/link";;
import "./dupt.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const Adupt = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="adupt">
        <div className="w-full h-[1147px]  max-xl:h-full relative bg-[#111]   max-lg:pb-[80px]">
          <div className="flex w-full justify-between max-lg:mb-0 max-lg:flex-wrap mb-[72px] max-sm:mb-[0px] max-xl:pr-[80px] max-md:py-10 mb-10  max-lg:pr-[30px]">
            <div className="w-[503.60px] widescreen:w-[50%] widescreen:text-[40px] widestscreen:text-[50px] ml-[80px] max-lg:ml-[40px] max-md:m-[40px] max-sm:ml-[20px] mt-[113.71px]  text-zinc-400 text-[32px] font-normal font-['Graphik'] leading-[120%] letter-spacing-3  max-md:w-full">
              In the fast-paced world of technology, we don't just adapt; we
              disrupt.{" "}
            </div>
            <Link href={"/industries"} onClick={scrollToTop}>
              <div className="px-8 py-4  top-[113.71px] right-[80px] absolute widescreen:rounded-[50px] widestscreen:rounded-[80px] px-[32px] rounded-[31px] border border-zinc-400  text-zinc-400 justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all     max-md:hidden hover:border-yellow-400 hover:text-black max-xl:relative  max-xl:left-0   max-xl:p-4  max-xl:h-16">
                <div className="Industries text-base widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                  Industries
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-10 max-sm:mt-0 max-sm:w-full max-xl:pb-20 max-xl:px-10 max-md:px-0">
            <div className="adupt-cards w-[21.5%] h-[229px] max-sm:justify-start max-sm:items-start max-sm:p-[10px] pt-[52px] pb-[40.33px] left-[80px] top-[300px]  bg-neutral-900 flex-col justify-end items-center gap-[40.67px] max-sm:gap-[20px] inline-flex">
              <div className="adupt-svg w-16 h-[70px] relative flex-col justify-start items-start flex"></div>
              <div className="Industries h-[28px] text-center max-sm:text-left text-zinc-400 text-xl max-sm:text-base font-normal widescreen:text-[24px] widescreen:text-[24px] font-['Graphik']">
                Fintech{" "}
              </div>
            </div>
            <div className="adupt-cards w-[21.5%] h-[229px] max-sm:justify-start max-sm:items-start max-sm:p-[10px] pt-[52px] pb-[40.33px] left-[80px] top-[300px]  bg-neutral-900 flex-col justify-end items-center gap-[40.67px] max-sm:gap-[20px] inline-flex">
              <div className=" adupt-svg3 w-16  h-[70px] relative flex-col justify-start items-start flex"></div>
              <div className="Industries h-[28px] text-center max-sm:text-left text-zinc-400 text-xl max-sm:text-base font-normal widescreen:text-[24px] widescreen:text-[24px] font-['Graphik']">
                Technology{" "}
              </div>
            </div>
            <div className="adupt-cards w-[21.5%] h-[229px] max-sm:justify-start max-sm:items-start max-sm:p-[10px] pt-[52px] pb-[40.33px] left-[80px] top-[300px]  bg-neutral-900 flex-col justify-end items-center gap-[40.67px] max-sm:gap-[20px] inline-flex">
              <div className=" adupt-svg6 w-16 h-[70px] relative flex-col justify-start items-start flex"></div>
              <div className="Industries h-[28px] text-center max-sm:text-left text-zinc-400 text-xl max-sm:text-base font-normal widescreen:text-[24px] widescreen:text-[24px] font-['Graphik']">
                Ecommerce{" "}
              </div>
            </div>
            <div className="adupt-cards w-[21.5%] h-[229px] max-sm:justify-start max-sm:items-start max-sm:p-[10px] pt-[52px] pb-[40.33px] left-[80px] top-[300px]  bg-neutral-900 flex-col justify-end items-center gap-[40.67px] max-sm:gap-[20px] inline-flex">
              <div className=" adupt-svg9 w-16 h-[70px] relative flex-col justify-start items-start flex"></div>
              <div className="Industries h-[28px] text-center max-sm:text-left text-zinc-400 text-xl max-sm:text-base font-normal widescreen:text-[24px] widescreen:text-[24px] font-['Graphik']">
                Manufacturing{" "}
              </div>
            </div>
            <div className="adupt-cards w-[21.5%] h-[229px] max-sm:justify-start max-sm:items-start max-sm:p-[10px] pt-[52px] pb-[40.33px] left-[80px] top-[300px]  bg-neutral-900 flex-col justify-end items-center gap-[40.67px] max-sm:gap-[20px] inline-flex">
              <div className="adupt-svg2 w-16 h-[70px] relative flex-col justify-start items-start flex"></div>
              <div className="Industries h-[28px] text-center max-sm:text-left text-zinc-400 text-xl max-sm:text-base font-normal widescreen:text-[24px] widescreen:text-[24px] font-['Graphik']">
                Supply chain and logistics{" "}
              </div>
            </div>
            <div className="adupt-cards w-[21.5%] h-[229px] max-sm:justify-start max-sm:items-start max-sm:p-[10px] pt-[52px] pb-[40.33px] left-[80px] top-[300px]  bg-neutral-900 flex-col justify-end items-center gap-[40.67px] max-sm:gap-[20px] inline-flex">
              <div className=" adupt-svg4 w-16 h-[70px] relative flex-col justify-start items-start flex"></div>
              <div className="Industries h-[28px] text-center max-sm:text-left text-zinc-400 text-xl max-sm:text-base font-normal widescreen:text-[24px] widescreen:text-[24px] font-['Graphik']">
                Healthcare{" "}
              </div>
            </div>
            <div className="adupt-cards w-[21.5%] h-[229px] max-sm:justify-start max-sm:items-start max-sm:p-[10px] pt-[52px] pb-[40.33px] left-[80px] top-[300px]  bg-neutral-900 flex-col justify-end items-center gap-[40.67px] max-sm:gap-[20px] inline-flex">
              <div className=" adupt-svg7 w-16 h-[70px] relative flex-col justify-start items-start flex"></div>
              <div className="Industries h-[28px] text-center max-sm:text-left text-zinc-400 text-xl max-sm:text-base font-normal widescreen:text-[24px] widescreen:text-[24px] font-['Graphik']">
                Food and Beverages{" "}
              </div>
            </div>
            <div className="adupt-cards w-[21.5%] h-[229px] max-sm:justify-start max-sm:items-start max-sm:p-[10px] pt-[52px] pb-[40.33px] left-[80px] top-[300px]  bg-neutral-900 flex-col justify-end items-center gap-[40.67px] max-sm:gap-[20px] inline-flex">
              <div className=" adupt-svg10 w-16 h-[70px] relative flex-col justify-start items-start flex"></div>
              <div className="Industries h-[28px] text-center max-sm:text-left text-zinc-400 text-xl max-sm:text-base font-normal widescreen:text-[24px] widescreen:text-[24px] font-['Graphik']">
                Hospitality{" "}
              </div>
            </div>
            <div className="adupt-cards w-[21.5%] h-[229px] max-sm:justify-start max-sm:items-start max-sm:p-[10px] pt-[52px] pb-[40.33px] left-[80px] top-[300px]  bg-neutral-900 flex-col justify-end items-center gap-[40.67px] max-sm:gap-[20px] inline-flex">
              <div className=" adupt-svg5 w-16 h-[70px] relative flex-col justify-start items-start flex"></div>
              <div className="Industries h-[28px] text-center max-sm:text-left text-zinc-400 text-xl max-sm:text-base font-normal widescreen:text-[24px] widescreen:text-[24px] font-['Graphik']">
                Real Estate{" "}
              </div>
            </div>
            <div className="adupt-cards w-[21.5%] h-[229px] max-sm:justify-start max-sm:items-start max-sm:p-[10px] pt-[52px] pb-[40.33px] left-[80px] top-[300px]  bg-neutral-900 flex-col justify-end items-center gap-[40.67px] max-sm:gap-[20px] inline-flex">
              <div className=" adupt-svg8 w-16 h-[70px] relative flex-col justify-start items-start flex"></div>
              <div className="Industries h-[28px] text-center max-sm:text-left text-zinc-400 text-xl max-sm:text-base font-normal widescreen:text-[24px] widescreen:text-[24px] font-['Graphik']">
                Sustainable Energy{" "}
              </div>
            </div>
          </div>
          <Link
            href={"/industries"}
            className="flex justify-center px-[20px]"
            onClick={scrollToTop}
          >
            <div className="w-[100%] flex justify-center items-center rounded-[31px] border border-zinc-400  text-zinc-400 justify-center items-center gap-2  hover:bg-yellow-400 transition-all hidden max-md:block hover:border-yellow-400 hover:text-black max-xl:relative  max-xl:left-0   max-xl:p-4  max-xl:h-16">
              <div className="Industries w-auto h-auto text-base font-normal text-center font-['Graphik'] capitalize leading-[190%]">
                Industries
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Adupt;
