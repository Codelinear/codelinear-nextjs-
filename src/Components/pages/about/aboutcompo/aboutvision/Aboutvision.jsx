"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const Aboutvision = () => {
  return (
    <>
      <div className="aboutvision">
        <div className="w-full max-md:px-[40px] max-sm:p-[20px] h-[full] px-[80px] pt-[129px] pb-[57px] bg-white justify-center items-center inline-flex max-md:h-full max-lg:p-10 max-sm:pb-[117px]">
          <div className="w-[1030.32px] widescreen:text-[50px] widestscreen:text-[60px] widescreen:w-[60%] max-lg:w-full  text-center text-black text-[48px] font-normal font-['Graphik'] letter-spacing-2 leading-[120%] max-md:text-[36px] max-md:h-full max-md:leading-[43px] max-md:text-left">
            Our vision is to propel humanity forward by building digital
            products that uplift our client's value proposition and enrich their
            users' lives.{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutvision;
