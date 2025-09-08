"use client";
import React from "react";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full pl-20 pr[622px] pt-[142px] max-sm:pt-[50px] pb-[25.22px] bg-white justify-start inline-flex max-lg:px-[40px] max-sm:px-[20px]">
        <div className="w-[856px] letter-spacing-1 widescreen:w-[65%] widescreen:text-[76px] widestscreen:text-[90px] text-black text-[66px] font-normal font-['Graphik'] leading-[108%] max-sm:text-[48px]">
          From document management to workflow automation, we customize the
          SharePoint experience for your success.{" "}
        </div>
      </div>
    </>
  );
};

export default Hero;
