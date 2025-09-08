"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const IndustryHero = () => {
  return (
    <>
      <div className="w-full px-[20px] pt-[204.83px] pb-[144.17px] bg-white justify-center items-center max-sm:justify-start inline-flex max-lg:pt-[120px] max-sm:pt-[96px] max-sm:pb-[36px]">
        <div className="w-[950px] widescreen:text-[76px] widestscreen:text-[90px] widescreen:w-[1050px] widestscreen:w-[1150px] letter-spacing-1 text-center text-black leading-[108%] text-[66px] max-sm:text-[50px] max-sm:text-left  font-normal font-['Graphik']">
          Explore how we transform diverse sectors with innovation.{" "}
        </div>
      </div>
    </>
  );
};

export default IndustryHero;
