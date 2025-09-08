"use client";
import React from "react";
import Image from "next/image";

import img1 from "../assets/case study page01.jpg";
import img2 from "../assets/case study page02.jpg";
import img3 from "../assets/case study page03.jpg";
import img4 from "../assets/case study page04.jpg";
import img5 from "../assets/case study page05.jpg";
import img6 from "../assets/case study page06.jpg";
import img7 from "../assets/case study page07.jpg";
import img8 from "../assets/case study page08.jpg";
import img9 from "../assets/case study page09.jpg";
import img10 from "../assets/case study page10.jpg";
import img11 from "../assets/case study page11.jpg";
import img12 from "../assets/case study page12.jpg";
import img13 from "../assets/case study page13.jpg";
import img14 from "../assets/case study page14.jpg";
import img15 from "../assets/case study page15.jpg";
import img16 from "../assets/case study page16.jpg";
import img17 from "../assets/case study page17.jpg";
import img18 from "../assets/case study page18.jpg";
import img19 from "../assets/case study page19.jpg";
import img20 from "../assets/case study page20.jpg";
import img21 from "../assets/Desktop - 46.jpg";
import img22 from "../assets/Desktop - 46 (1).jpg";
import img23 from "../assets/Desktop - 46 (2).jpg";
import img24 from "../assets/Desktop - 46 (3).jpg";
import img25 from "../assets/Desktop - 46 (4).jpg";
import img26 from "../assets/Desktop - 46 (5).jpg";
import img27 from "../assets/Desktop - 46 (6).jpg";
import img28 from "../assets/Desktop - 46 (7).jpg";
import img29 from "../assets/kanbar.jpg";
import img30 from "../assets/Group 17.png";
import img31 from "../assets/shubham-dhage-3JjnYjHCK0c-unsplash 1.png";
import img32 from "../assets/image 3 (1).png";
import img33 from "../assets/niklas-jonasson-kEUqqARSlrw-unsplash 1 (1).png";
import img34 from "../assets/shubham-dhage-RJEuYGR5tBg-unsplash 2 (1).png";
import Link from "next/link";
import axios from "axios";

const Casecards = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="case-cards">
        <div className="w-full px-[80px] max-lg:px-[40px] max-sm:px-[20px] h-full justify-start items-start gap-[62px] max-2xl:gap-[54px] inline-flex flex-wrap max-sm:gap-[78px]   max-lg:p-5 max-1xl:justify-center max-1xl:items-center">
          <div className="flex-col w-[30%] max-1xl:w-[40%] h-full max-lg:w-[45%] max-sm:w-full justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] w justify-end items-center inline-flex w-full h-full">
              <Image
                className="w-full h-full"
                loading="lazy"
                src={img1}
                alt="william abraham"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  william abraham{" "}
                </div>
                <div className="hidden max-sm:flex justify-start items-center gap-[13.42px]  max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-[Archivo] uppercase leading-normal">
                    william abraham{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Elevating luxurious men’s socks digital platform{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/william-abraham"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-[Archivo] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Clothing{" "}
                </div>
              </div>
            </div>
          </div>

          
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img2}
                alt="wear well"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  wear well{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    wear well{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Redefining the global presence of a leading garment exporter{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/wear-well"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Retail and apparel{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img3}
                alt="Case Study - soch"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  soch{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    soch{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  uplifting pioneers in ethnic wear{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/soch"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Retail and apparel{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img4}
                alt="Case Study - leaf & hive"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  leaf & hive{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    leaf & hive{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Making an innovative beverage more accessible{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/leaf-and-hive"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  food & beverages{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img5}
                alt="Case Study - sodashi"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-ful justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  sodashi{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    sodashi{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  helping Vegan, hand-crafted skincare go worldwide{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/sodashi"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Skincare{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full   justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img6}
                alt="Case Study - klub"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-ful justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  klub{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    klub{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Ensuring investments in startups are more secure{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/klub"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Fintech{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img7}
                alt="Case Study - vuori"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  vuori{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    vuori{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  shifting the pace with Performance Apparel{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/vouri"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Retail and apparel{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img8}
                alt="Case Study - tradejini"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  tradejini{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    tradejini{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Transforming the digital presence of a trading giant.{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/tradejini"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Fintech{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full   justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img9}
                alt="Case Study - lyra health"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  lyra health{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    lyra health{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Driving business growth with revolutionary mental healthcare{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/lyra"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Healthcare{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full ]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img10}
                alt="Case Study - steelcase"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  steelcase{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    steelcase{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Helping a thought leader in bettering workplaces{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/steelcase"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Furnishing{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg-[510px]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img11}
                alt="Case Study - MoveWorks"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  MoveWorks{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    MoveWorks{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Automating tasks so businesses can focus on what matters{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/moveworks"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Technology{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg-[510px]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img12}
                alt="Case Study - SDU"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  SDU{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    SDU{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Pioneering Financial Excellence in the Digital Frontier{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={
                    "/case-studies/singhvi-dev-and-uni-llp-chartered-accountants"
                  }
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Accounting and finance{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg[510px]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img13}
                alt="Case Study - Studio Neat"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  Studio Neat{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    Studio Neat{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  empowering designers to make simple products that solve
                  problems{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/studio-neat"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Products{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max- max-lg:w-[45%] max-sm:w-full max-510px]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img14}
                alt="Case Study - Middle"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  Middle{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    Middle{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  easing the conversation between clients and brokers{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/middle"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  fintech{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lgh-[510px]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img15}
                alt="Case Study - Booking Factory"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  Booking Factory{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    Booking Factory{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  bettering the experience of a hotel management system{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/booking-factory"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Technology{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-l:h-[510px]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img16}
                alt="Case Study - IMAPAC"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  IMAPAC{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    IMAPAC{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Actionable insights to aid biopharma businesses in making big
                  decisions{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/imapac"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  biopharmaceutical{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img17}
                alt="Case Study - Klassen and Smith"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  Klassen and Smith{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    Klassen and Smith{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  a modern solution to traditional craftsmanship{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/klassen-and-smith"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Construction{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max510px]  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img18}
                alt="Case Study - VacayStay 406"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  VacayStay 406{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    VacayStay 406{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  enabling vacations in south Montana to the world{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/vacaystay-406"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Hospitality{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img19}
                alt="Case Study - Contrasted Marketing"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  Contrasted Marketing{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    Contrasted Marketing{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  shifting the presence of an upcoming marketing giant{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/contrasted-marketing"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Marketing{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                src={img20}
                alt="Case Study - Landmark"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  Landmark{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    Landmark{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Refining the way surveys are done{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/landmark"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  construction{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img22}
                alt="Case Study - convoy"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  convoy{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    convoy{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Supply Chain, logistics made seamless{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/convoy"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Supply chain, logistics{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img21}
                alt="Case Study - homes r us"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  homes r us{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    homes r us{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  innovating a home-grown furnishing brand’s reach{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/homes-r-us"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Retail{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img23}
                alt="Case Study - Course Hero"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  Course Hero{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    Course Hero{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  empowering students across the world through aI{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/course-hero"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Ed-Tech{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img24}
                alt="Case Study - mica rino"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  mica rino{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    mica rino{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  reimagining neighborhoods and residences{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/mica-rino"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  real estate{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img25}
                alt="Case Study - lit up visuals"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  lit up visuals{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    lit up visuals{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Visualizing architecture made easy{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/lit-up-visuals"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Visualization-real estate{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img26}
                alt="Case Study - kernel wealth"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  kernel wealth{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    kernel wealth{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Redefining the way people manage finances{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/kernel-wealth"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  fintech{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img27}
                alt="Case Study - Wilderness Travel"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  Wilderness Travel{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    Wilderness Travel{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  A Breath-taking digital presence for a Breath-taking tour
                  agency{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/wilderness-travel"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Travel{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img28}
                alt="Case Study - hinge health"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  hinge health{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-normal">
                    hinge health{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Revolutionary healthcare now at your fingertips{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/hinge-health"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  healthcare{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img29}
                alt="Case Study - kanbar digital"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  kanbar digital{" "}
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    kanbar digital{" "}
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Digital marketing strategies made simple{" "}
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/kanbar-digital"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Marketing{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img30}
                alt="Case Study - IEA Training"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  IEA Training
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    IEA Training
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Empowering professionals for emerging industries.
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/iea-training"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Ed-Tech{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img31}
                alt="Case Study - Digital Toolkit"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  Digital Toolkit
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    Digital Toolkit
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Transforming through digital lens.
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/digital-toolkit"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Marketing
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img32}
                alt="Case Study - WoolAid"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  WoolAid
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    WoolAid
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Healing with nature: A sustainable solution.
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/woolaid"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Healthcare
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img33}
                alt="Case Study - Altitude Charter"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  Altitude Charter
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    Altitude Charter
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Living luxury in the sky at: Altitude.
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/altitude-charter"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Private Aviation
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[30%] max-1xl:w-[40%] max-lg:w-[45%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
            <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
              <Image
                className="w-full "
                loading="lazy"
                src={img34}
                alt="Case Study - LocalSEOguys"
              />
            </div>
            <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
              <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                  LocalSEOguys
                </div>
                <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                  <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                    LocalSEOguys
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                </div>
                <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                  Building brands in digital age: SEO experts
                </div>
              </div>
              <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                <Link
                  href={"/case-studies/localseoguys"}
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                  Marketing{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Casecards;
