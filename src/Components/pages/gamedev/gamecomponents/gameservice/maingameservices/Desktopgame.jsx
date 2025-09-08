"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import img from "../../gameassets/image 163.svg";
import img2 from "../../gameassets/cryengine-logo-vertical-black 1.svg";
import img3 from "../../gameassets/image 167.png";
import img4 from "../../gameassets/image 166.png";
import img5 from "../../gameassets/image 165.png";
import img6 from "../../gameassets/Game development01.jpg";
import axios from "axios";

const Desktopgame = () => {
  return (
    <>
      <div className="w-full relative bg-white max-sm:h-full">
        <div className="flex flex-col">
          <div className="ml-[80px] mt-[108px]  flex-col justify-start items-start gap-[22px] inline-flex max-lg:ml-[40px] max-sm:ml-[20px] max-sm:mb-[20px]">
            <div className="flex-col justify-start items-start gap-[30px] flex">
              <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[90%]">
                <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                  game development services{" "}
                </div>
                <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
              </div>
              <div className="w-[631.03px] widescreen:w-full widescreen:text-[59px] widestscreen:text-[69px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%]  max-sm:w-[90%] max-sm:text-[36px]">
                Desktop Game Development{" "}
              </div>
            </div>

            <div className="w-[536.02px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal  max-sm:w-[90%] max-sm:h-full">
              Desktop game development provides expansive graphics, processing
              power, and immersive gameplay, catering to a dedicated gaming
              audience seeking high-quality experiences.{" "}
            </div>
          </div>
          <div className="ml-[80px] mb-[86px] mt-[42px] top-[345px]  flex-col justify-start items-start gap-[35px] inline-flex  max-sm:px-[20px] max-lg:ml-[0px] max-md:px-[40px] max-sm:top-[150px]">
            <div className="text-black widescreen:text-[30px] widescreen:text-[40px] widescreen:w-full text-xl font-normal font-['Graphik'] leading-normal">
              Technologies we use{" "}
            </div>
            <div className="w-[703px] widescreen:w-[1000px] max-md:w-full  justify-start items-start gap-[47px] inline-flex max-md:flex-wrap max-md:justify-center max-sm:w-[100%]">
              <div className="widescreen:w-[200px] w-[103px] flex-col justify-start items-center gap-4 inline-flex">
                <div className="w-[64.14px] h-[64.14px] bg-black rounded-full justify-center items-center inline-flex">
                  <Image
                    className="w-[64.14px] h-[64.14px]"
                    src={img}
                    alt="Unreal Engine"
                  />
                </div>
                <div className="text-black widescreen:w-full letter-spacing-4 text-base font-normal font-['Graphik'] leading-tight widescreen:text-[20px] widestscreen:text-[24px] ">
                  Unreal Engine{" "}
                </div>
              </div>
              <div className="widescreen:w-[200px] w-[103px] flex-col justify-start items-center gap-4 inline-flex">
                <div className="w-[64.14px] h-[64.14px] justify-center items-center inline-flex">
                  <Image
                    className="w-[64.14px] h-[64.14px]"
                    src={img5}
                    alt="Unity"
                  />
                </div>
                <div className="text-black letter-spacing-4 text-base font-normal font-['Graphik'] leading-tight widescreen:text-[20px] widestscreen:text-[24px] ">
                  Unity{" "}
                </div>
              </div>
              <div className="w-[103px] h-[99px] pt-2.5 flex-col justify-between items-center inline-flex">
                <Image
                  className="w-[103px] h-[48.48px] relative"
                  src={img2}
                  alt="CryEngine"
                />

                <div className="text-black widescreen:mt-[20px] letter-spacing-4 text-base font-normal font-['Graphik'] leading-tight widescreen:text-[20px] widestscreen:text-[24px] ">
                  CryEngine{" "}
                </div>
              </div>
              <div className="widescreen:w-[200px] w-[103px] flex-col justify-start items-center gap-4 inline-flex">
                <div className="w-[64.14px] pt-[0.38px] pb-1 justify-center items-center inline-flex">
                  <Image
                    className="w-[65.83px] h-[59.80px]"
                    src={img4}
                    alt="Open3D"
                  />
                </div>
                <div className="text-black letter-spacing-4 text-base font-normal font-['Graphik'] leading-tight widescreen:text-[20px] widestscreen:text-[24px] ">
                  Open3D{" "}
                </div>
              </div>
              <div className="widescreen:w-[200px] w-[103px] flex-col justify-start items-center gap-4 inline-flex">
                <div className="w-[64.14px] h-[64.14px] py-[10.40px] justify-center items-center inline-flex">
                  <Image
                    className="w-[64.50px] h-[43.33px]"
                    src={img3}
                    alt="Amazon Lumberyard"
                  />
                </div>
                <div className="w-[103px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-full text-center text-black text-base font-normal font-['Graphik'] leading-tight">
                  Amazon Lumberyard{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="w-full widescreen:h-auto h-[755px] pl-20 pr-[10px] pt-[27.20px] pb-[105.80px] bg-white justify-start items-start gap-[54px] inline-flex max-lg:pl-[40px] max-sm:px-[20px] max-lg:flex-wrap max-lg:h-full max-sm:gap-[50px] max-sm:py-[50px]">
          <div className="self-stretch widescreen:w-[40%] flex-col justify-start items-start gap-[54px] inline-flex max-lg:flex-row max-lg:flex-wrap">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black widescreen:text-[30px] widestscreen:text-[40px] text-xl letter-spacing-4 font-normal font-['Graphik'] leading-[120%]">
                High-End Graphics Rendering{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                Elevate visual experiences with cutting-edge graphics,
                delivering lifelike environments and immersive gameplay for
                unparalleled desktop gaming adventures.{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black widescreen:w-[100%] widescreen:text-[30px] widestscreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-[120%]">
                Advanced Processing Power{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal  max-sm:w-[90%]">
                Harness the full potential of desktop hardware, ensuring
                seamless and complex game mechanics, enabling a truly dynamic
                and responsive gaming experience.{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl font-normal widescreen:text-[30px] widestscreen:text-[40px] font-['Graphik'] letter-spacing-4 leading-[120%]">
                Expansive Gameplay Possibilities{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                Unleash creativity with vast, intricate game worlds,
                sophisticated AI, and diverse gameplay mechanics, offering
                players limitless engagement and exploration.{" "}
              </div>
            </div>
          </div>
          <div className="w-[522px] widescreen:w-[50%] widescreen:h-auto self-stretch flex-col justify-start items-center inline-flex max-lg:w-full max-lg:p-[0px] max-sm:p-[0px]">
            <Image
              className="w-[522px] h-[833.20px] widescreen:w-full widescreen:h-auto max-md:w-full max-md:h-full"
              src={img6}
              alt="Expansive Gameplay Possibilities"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktopgame;
