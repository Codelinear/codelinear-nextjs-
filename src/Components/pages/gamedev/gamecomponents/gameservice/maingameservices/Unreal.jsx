"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import eye from "../../gameassets/ph_eye.svg";
import watch from "../../gameassets/mdi_stopwatch-outline.svg";
import game from "../../gameassets/iconoir_3d-select-solid.svg";
import axios from "axios";

const Unreal = () => {
  return (
    <div className="unreal">
      <div className="w-full h-[815px] relative bg-white max-lg:h-full">
        <div className="ml-[80px] mt-[67px]  flex-col justify-start items-start gap-[22px] inline-flex max-lg:ml-[40px] max-sm:ml-[20px]">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[90%]">
              <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                game development services{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[631.03px] widescreen:text-[59px] widestscreen:text-[69px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px] w-full">
              Unreal Game Development{" "}
            </div>
          </div>
          <div className="w-[536.02px] widescreen:text-[20px] widestscreen:text-[24px] widestscreen:w-[80%] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]  max-sm:h-full">
            Unreal Engine game production combines advanced graphics, intuitive
            design tools, and powerful performance, crafting immersive and
            unforgettable gaming experiences.{" "}
          </div>
        </div>

        <div className="ml-[80px] widescreen:w-full mt-[42.20px]  justify-start items-start gap-[21px] inline-flex max-lg:flex-wrap max-lg:ml-[40px] max-sm:ml-[0px] max-sm:px-[20px]  max-sm:justify-center">
          <div className="pl-[25.86px] widescreen:w-[25%] pr-11 pt-[38.18px] pb-[40.20px] bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] flex-col justify-center items-start gap-[41.38px] inline-flex">
            <Image
              className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex"
              src={eye}
              alt="Breath-taking visuals"
            />
            <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[159.68px] max-sm:w-full  letter-spacing-4 text-black text-xl font-normal font-['Graphik'] leading-[120%] widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full">
                Breath-taking visuals{" "}
              </div>
              <div className="w-[235.01px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-full max-sm:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Deliver breathtaking visuals, pushing the boundaries of realism
                and immersive gaming experiences.{" "}
              </div>
            </div>
          </div>
          <div className="pl-[25.95px] widescreen:w-[25%] pr-11 pt-[38.21px] pb-[40.20px] bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] flex-col justify-center items-start gap-[41.35px] inline-flex">
            <div className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex">
              <Image
                className="w-[42.94px] h-[47.29px] relative"
                src={game}
                alt="Real time rendering"
              />
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[159.68px] max-sm:w-full  letter-spacing-4 text-black text-xl font-normal font-['Graphik'] leading-[120%] widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full">
                Real time rendering{" "}
              </div>
              <div className="w-[235.01px] max-sm:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-full">
                Achieve stunning real-time rendering, bringing visuals to life
                instantly for unparalleled gaming experiences.{" "}
              </div>
            </div>
          </div>
          <div className="pl-[25.95px] widescreen:w-[25%] pr-11 pt-[38.18px] pb-[40.20px] bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] flex-col justify-center items-start gap-[41.38px] inline-flex">
            <Image
              className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex"
              src={watch}
              alt="Quick prototyping"
            />
            <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[159.68px] max-sm:w-full letter-spacing-4 text-black text-xl font-normal font-['Graphik'] leading-[120%] widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full">
                Quick prototyping{" "}
              </div>
              <div className="w-[235.01px] max-sm:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-full">
                Prototype swiftly, expediting the creation and testing of game
                concepts easily and efficiently.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unreal;
