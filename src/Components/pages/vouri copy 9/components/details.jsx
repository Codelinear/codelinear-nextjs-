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
            We partnered with IKEA to develop a custom Vendor Management System
            (VMS) built on cutting-edge technologies.{" "}
          </h1>
          <ul className="max-sm:w-full ml-[20px] list-disc max-lg:w-[82%] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] opacity-80 max-sm:mt-[4px]">
            <li>
              React Development: A user-friendly interface ensured a smooth and
              intuitive experience for both IKEA and its vendors.
            </li>
            <li>
              Node.js Development: Robust backend development facilitated
              efficient data management and seamless communication.
            </li>
            <li>
              Cloud Engineering: Scalable cloud infrastructure ensured the VMS
              could handle IKEA's global operations with ease.
            </li>
          </ul>
        </div>
        <div className="max-xl:w-full flex flex-col max-sm:gap-[24px] max-lg:mt-0 mt-[51.5px] flex-wrap gap-[40px]">
          <div className="w-[327px] widescreen:w-[440px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              20% Increase{" "}
            </h1>
<p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]">              in Vendor Onboarding Efficiency{" "}
            </p>
          </div>
          <div className="w-[342px] widescreen:w-[440px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              30% Reduction{" "}
            </h1>
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]"> in Communication Time </p>
          </div>
          <div className="w-[422px] widescreen:w-[490px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              15% Improvement{" "}
            </h1>
<p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]">              in Product Quality & Delivery Timeliness
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
