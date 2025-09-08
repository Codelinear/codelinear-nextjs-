import { useEffect, useState } from "react";
import axios from "axios";
const Details = () => {
  return (
    <>
      <div className="flex gap-[216px] max-sm:gap-[32px] max-lg:flex-col max-1xl:gap-[56px] max-lg:py-[45px] max-sm:py-[40px] pb-[68px] pt-[92px]">
        <div className="w-[542px] widescreen:w-[900px] max-lg:w-full max-lg:h-auto flex flex-col gap-[30px] max-sm:gap-[20px]">
          <div className=" w-full justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
            <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
              what we did
            </div>
            <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
          </div>
          <h1 className="w-[542px] widescreen:w-[100%] widescreen:text-[40px] widestscreen:text-[50px] max-sm:letter-spacing-6 max-sm:text-[24px] max-lg:w-full text-[36px] leading-[120%] letter-spacing-3">
            Understanding the immense potential of DEEL's vision, we assembled a
            dedicated team of web application developers and QA engineers.{" "}
          </h1>
          <ul className="max-sm:w-full widescreen:text-[20px] widestscreen:text-[24px] list-disc ml-[20px] max-lg:w-[82%] text-base widescreen:leading-[150%] opacity-80 max-sm:mt-[4px]">
            <li>
              Developed a cutting-edge web-app: Leveraging advanced web
              development techniques, we meticulously crafted a seamless and
              intuitive module that seamlessly integrated with DEEL's existing
              platform.
            </li>{" "}
            <li>
              Rigorous QA Engineering: Our meticulous QA engineers relentlessly
              tested the web-app across various devices and user scenarios,
              ensuring a flawless user experience.
            </li>{" "}
          </ul>
        </div>
        <div className="max-xl:w-full flex flex-col max-sm:gap-[24px] max-lg:mt-0 mt-[51.5px] flex-wrap gap-[40px]">
          <div className="w-[343px] widescreen:w-[440px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              40% Reduction{" "}
            </h1>
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]">in processing time </p>
          </div>
          <div className="w-[292px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              10% Boost{" "}
            </h1>
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]"> in HR team productivity </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
