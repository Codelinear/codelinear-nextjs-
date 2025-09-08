import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

const Hero = () => {
  return (
    <>
      <div className="w-full pl-20 pr[622px] max-sm:pt-[50px] max-sm:pb-[8px] pt-[142px] pb-[25.22px] bg-white justify-start inline-flex max-lg:px-[40px] max-sm:px-[20px]">
        <div className="w-[856px] letter-spacing-1 widescreen:w-[65%] widescreen:text-[76px] widestscreen:text-[90px] text-black text-[66px] font-normal font-['Graphik'] leading-[108%] max-sm:text-[48px]">
          Transform your business processes with our strategic Salesforce
          implementations.{" "}
        </div>
      </div>
    </>
  );
};

export default Hero;
