"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const AppHero = () => {
  return (
    <>
      <div className="w-full h-0px] pl-20 pr[622px] max-sm:pt-[50px] pt-[142px] pb-[25.22px] bg-white justify-start inline-flex max-lg:px-[40px] max-sm:px-[20px]">
        <div className="w-[856px] letter-spacing-1 widescreen:w-[65%] widescreen:text-[76px] widestscreen:text-[90px] text-black text-[66px] font-normal font-['Graphik'] leading-[108%] max-sm:text-[48px]">
          Build exceptional apps that meet the demands of tomorrow's digital
          landscape.{" "}
        </div>
      </div>
    </>
  );
};

export default AppHero;
