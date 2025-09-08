"use client";
import React from "react";
import Image from "next/image";

const CaseHero = () => {
  return (
    <>
      <div className="casehero">
        <div className="w-full  h-[444px] max-lg:p-10 pt-[222px] widescreen:h-auto pb-20 bg-white justify-center items-center inline-flex max-sm:px-[20px] max-sm:pb-0 max-sm:h-auto">
          <div className="w-[742px] widescreen:w-[840px] widestscreen:w-[980px] widescreen:text-[76px] widestscreen:text-[90px] max-lg:w-full text-center letter-spacing-1 text-black text-[66px] font-normal font-['Graphik'] leading-[108%] max-sm:text-[50px] max-lg:text-left max-lg:text-[60px]">
            Immersive Case Studies Reflecting Innovation and Impact{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseHero;
