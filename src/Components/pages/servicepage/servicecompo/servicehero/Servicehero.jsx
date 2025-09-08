"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
const Servicehero = () => {
  return (
    <>
      <div className="service-hero">
        <div className="w-full pl-20 max-lg:px-10 max-sm:pb-[52px] pr-[339.66px] pt-[142px] pb-[159.22px] bg-white justify-start items-center inline-flex max-xl:px-20 max-xl:py-32 max-md:py-[120px] max-sm:pb-10 max-sm:h-full max-sm:p-5 max-sm:pt-[50px] max-sm:pb-40">
          <div className="w-4px] text-400 text-black text-[87.74px] widescreen:text-[100px] widestscreen:text-[121px] letter-spacing-5 font-normal font-['Graphik'] leading-[108%] max-md:text-[50px] max-md:leading-[54px]  max-lg:text-[70px] max-lg:leading-[75px] ">
            We help you do amazing things through cutting-edge technology.{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicehero;
