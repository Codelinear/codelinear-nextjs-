"use client";
import React from "react";
import Image from "next/image";

const Bloghero = () => {
  return (
    <>
      <div className="blog-hero">
        <div className="w-full h-[359px] max-lg:h-full max-lg:px-[40px] max-sm:px-[20px] max-xl:px-[80px] pl-20 pr-[0px] pt-[142.78px] pb-[73.22px] max-sm:pb-[40px] bg-white justify-start items-center inline-flex max-sm:pt-[60.5px]">
          <div className="w-[738px] widescreen:text-[76px] widestscreen:text-[90px] widescreen:w-[840px] widestscreen:w-[980px] max-md:w-full text-black text-[66px] font-normal font-['Graphik'] leading-[108%] letter-spacing-1  max-lg:w-full max-md:text-[50px] ">
            Insights that help you stay in the know.{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bloghero;
