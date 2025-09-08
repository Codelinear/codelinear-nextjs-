"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import img from "../../gameassets/solar_gamepad-broken.svg";
import img2 from "../../gameassets/iconamoon_3d-light.svg";
import code from "../../gameassets/material-symbols_code.svg";
import axios from "axios";
const Unity = () => {
  return (
    <div className="unreal">
      <div className="w-full h-[813px] relative bg-white max-lg:h-full max-lg:mb-[100px]">
        <div className="left-[80px] top-[67px] absolute flex-col justify-start items-start gap-[22px] inline-flex  max-lg:relative max-lg:left-[40px] max-sm:left-[0px] max-sm:pl-[20px]">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[90%]">
              <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                game development services{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[631.03px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px] w-full">
              Unity Game Development{" "}
            </div>
          </div>
          <div className="w-[536.02px] widescreen:w-[80%] widestscreen:text-[20px] widestscreen:text-[24px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%] max-sm:h-full">
            Elevate your gaming vision with Unity's versatile game development,
            blending powerful tools, cross-platform capabilities, and incredible
            interactive experiences.
          </div>
        </div>
        <div className="left-[80px] top-[350.20px] absolute max-lg:pl-[40px] max-lg:left-0 justify-start items-start gap-[21px] inline-flex max-lg:flex-wrap max-lg:relative max-lg:top-[100px] max-lg:w-[100%] max-sm:px-[20px] max-sm:left-0 max-sm:justify-center">
          <div className="pl-[25.38px] widescreen:w-[25%] max-sm:w-full pr-11 pt-[38.18px] pb-[40.20px] bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] flex-col justify-center items-start gap-[41.38px] inline-flex">
            <div className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex">
              <Image
                className="w-[47.71px] h-[35.78px] relative"
                src={img}
                alt="Easy cross-platform development"
              />
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[185.22px] widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[96px] max-sm:w-full letter-spacing-4 text-black text-[20px] font-normal font-['Graphik'] leading-[120%]">
                Easy cross-platform development{" "}
              </div>
              <div className="w-[235.01px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-full max-sm:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Effortlessly create across platforms with streamlined and
                user-friendly cross-platform development solutions.{" "}
              </div>
            </div>
          </div>
          <div className="pl-[25.38px] widescreen:w-[25%] pr-11 pt-[38.18px] pb-[40.20px] bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] flex-col justify-center items-start gap-[41.38px] inline-flex">
            <div className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex">
              <Image
                className="w-[47.71px] h-[35.78px] relative"
                src={code}
                alt="Robust development environment"
              />
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[195.22px] widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[96px] max-sm:w-full letter-spacing-4 text-black text-[20px] font-normal font-['Graphik'] leading-[120%]">
                Robust development environment{" "}
              </div>
              <div className="w-[235.01px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-full max-sm:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Unity provides a robust development environment fostering
                efficiency, and seamless integration.{" "}
              </div>
            </div>
          </div>
          <div className="pl-[25.38px] widescreen:w-[25%] pr-11 pt-[38.18px] pb-[40.20px] bg-neutral-100 bg-opacity-90 backdrop-blur-[30.40px] flex-col justify-center items-start gap-[41.38px] inline-flex">
            <div className="w-[57.25px] h-[57.25px] relative flex-col justify-start items-start flex">
              <Image
                className="w-[47.71px] h-[35.78px] relative"
                src={img2}
                alt="2D & 3D capabilities"
              />
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[159.22px] widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[96px] max-sm:w-full letter-spacing-4 text-black text-[20px] font-normal font-['Graphik'] leading-[120%]">
                2D & 3D capabilities{" "}
              </div>
              <div className="w-[235.01px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-full max-sm:w-full opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                Unlock limitless creative possibilities , regardless of the type
                of game you want to create.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unity;
