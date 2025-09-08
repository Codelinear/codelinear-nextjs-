"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import img from "./assets/material-symbols-light_hub-outline.svg";
import img2 from "./assets/material-symbols-light_security (1).svg";
import img3 from "./assets/Arrow Shrink Diagonal 2.svg";

const Apidev = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <>
        <div className="w-full h-[847x] pb-20 relative bg-white max-lg:h-full">
          <div className="left-[80px] mt-[168px] max-sm:mt-20  flex-col justify-start items-start gap-[22px] inline-flex">
            <div className="flex-col max-sm:w-full justify-start items-start gap-[30px] flex">
              <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px]  justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
                <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                  App Development and Modernization{" "}
                </div>
                <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
              </div>
              <div className="w-[562.77px] widescreen:w-full widescreen:text-[59px] widestscreen:text-[69px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-full max-sm:text-[36px]">
                API Development and Integration{" "}
              </div>
            </div>
            <div className="w-[536.02px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full max-sm:h-full">
              Craft versatile systems with our API development, fostering
              seamless integration for diverse applications, enhancing
              connectivity, and enabling efficient data exchange.{" "}
            </div>
          </div>

          <div className="left-[80px] widescreen:w-full top-[401px] mt-[42px] flex-col justify-start items-start gap-[85px] inline-flex">
            <div className="justify-start widescreen:w-full items-start gap-[52px] inline-flex max-lg:flex-wrap">
              <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
                <Image
                  src={img}
                  alt="Versatility"
                  className="w-[57px] h-[57px]"
                />
                <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                  Versatility{" "}
                </div>
                <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Build adaptable APIs supporting various data formats and
                  endpoints, ensuring compatibility with diverse applications
                  and systems effortlessly.{" "}
                </div>
              </div>
              <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
                <Image
                  src={img2}
                  alt="Security Protocols"
                  className="w-[57px] h-[57px]"
                />
                <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                  Security Protocols{" "}
                </div>
                <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Implement robust security measures like OAuth and API keys,
                  safeguarding data integrity and user privacy during
                  interactions.{" "}
                </div>
              </div>
              <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
                <Image
                  src={img3}
                  alt="Efficient Data Exchange"
                  className="w-[57px] h-[57px]"
                />
                <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                  Efficient Data Exchange{" "}
                </div>
                <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Facilitate swift and reliable data transmission, optimizing
                  communication between applications, systems, and databases,
                  enhancing overall operational efficiency.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Apidev;
