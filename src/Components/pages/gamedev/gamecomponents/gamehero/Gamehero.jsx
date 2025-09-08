"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const Gamehero = () => {
  return (
    <div className="w-full pl-20 p2px] pt-[142.78px] max-sm:pt-[50px] pb-[25.22px] bg-white justify-start inline-flex max-lg:pl-[40px] max-sm:pl-[20px] max-lg:h-full">
      <div className="w-[738px] widescreen:w-[65%] max-lg:w-[90%]">
        <span className="text-black  letter-spacing-1 text-opacity-50 text-[66px] widescreen:text-[76px] widestscreen:text-[90px] font-normal font-['Graphik'] leading-[108%]  max-sm:text-[50px]">
          Build incredible worlds with our robust{" "}
        </span>
        <span className="text-black  letter-spacing-1 text-[66px] widescreen:text-[76px] widestscreen:text-[90px] font-normal font-['Graphik'] leading-[108%]  max-sm:text-[50px]">
          game development{" "}
        </span>
        <span className="text-black  letter-spacing-1 text-opacity-50 text-[66px] widescreen:text-[76px] widestscreen:text-[90px] font-normal font-['Graphik'] leading-[108%]  max-sm:text-[50px]">
          services.{" "}
        </span>
      </div>
    </div>
  );
};

export default Gamehero;
