"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import img6 from "../../gameassets/Game development02.jpg";
import axios from "axios";
const ArVr = () => {
  return (
    <>
      <div className="w-full relative bg-white max-sm:h-full">
        <div className="flex flex-col">
          <div className="ml-[80px] mt-[108px]  flex-col justify-start items-start gap-[22px] inline-flex max-lg:ml-[40px] max-sm:ml-[20px] max-sm:mb-[20px]">
            <div className="flex-col justify-start items-start gap-[30px] flex">
              <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[90%]">
                <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                  game development services{" "}
                </div>
                <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
              </div>
              <div className="w-[631.03px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%]  max-sm:w-[90%] max-sm:text-[36px]">
                AR/VR Game Development{" "}
              </div>
            </div>

            <div className="w-[536.02px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px]  h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal  max-sm:w-[90%] max-sm:h-full">
              Craft immersive worlds and redefine reality with our AR/VR game
              development, merging cutting-edge technology for unparalleled and
              captivating gaming experiences.{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="w-full h-[755px] widescreen:h-auto pl-20 pr-[10px] pt-[54.20px] pb-[105.80px] bg-white justify-start items-start gap-[54px] inline-flex max-lg:pl-[40px] max-sm:px-[20px] max-lg:flex-wrap max-lg:h-full max-sm:gap-[50px] max-sm:py-[50px]">
          <div className="self-stretch widescreen:w-[40%] flex-col justify-start items-start gap-[54px] inline-flex max-lg:flex-row max-lg:flex-wrap">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="widescreen:text-[30px] widescreen:text-[40px] text-black text-xl letter-spacing-4 font-normal font-['Graphik'] leading-[120%]">
                Immersive{" "}
              </div>
              <div className="w-[291.37px] widescreen:text-[20px] widescreen:text-[24px] widescreen:w-[80%] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                Deliver profound immersion, transport users into interactive
                realities, heightened senses, and reshape experiences with
                unparalleled technological engagement.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="widescreen:text-[30px] widescreen:text-[40px] text-black letter-spacing-4 text-xl font-normal font-['Graphik'] leading-[120%]">
                Life-like experience{" "}
              </div>
              <div className="w-[291.37px] widescreen:text-[20px] widescreen:text-[24px] widescreen:w-[80%] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal  max-sm:w-[90%]">
                Create lifelike experiences, seamlessly blending virtual and
                real worlds, immersing users in interactive environments.{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="widescreen:text-[30px] widescreen:text-[40px] text-black text-xl font-normal font-['Graphik'] letter-spacing-4 leading-[120%]">
                Enhanced Co-op interaction{" "}
              </div>
              <div className="w-[291.37px] widescreen:text-[20px] widescreen:text-[24px] widescreen:w-[80%] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                Enrich cooperative interaction, fostering shared experiences
                with immersive technologies, revolutionizing how users engage
                and collaborate in digital realms.
              </div>
            </div>
          </div>
          <div className="w-[522px] widescreen:w-[50%] widescreen:h-auto self-stretch flex-col justify-start items-center inline-flex max-lg:w-full max-xl:px%] max-lg:p-[0px] max-sm:p-[0px]">
            <Image
              className="w-[522px] widescreen:w-full widescreen:h-auto h-[833.20px] max-md:w-full max-md:h-full"
              src={img6}
              alt="Enhanced Co-op interaction"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArVr;
