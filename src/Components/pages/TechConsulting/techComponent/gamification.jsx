import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import img1 from "../assets/ph_note-pencil-light.svg";
import img3 from "../assets/ph_note-pencil-light (1).svg";
import img2 from "../../cloud/assets/ph_note-pencil-light.svg";
import Image from "next/image";

const Gamification = () => {
  return (
    <>
      <div className="w-full h- relative bg-white pb-[147px] max-sm:pb-20">
        <div className="left-[80px] mt-[168px]  max-sm:mt-0 flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px]  justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
              <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                Technology Consulting{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[562.77px] widescreen:w-full widescreen:text-[40px] widescreen:text-[50px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-full max-sm:text-[36px]">
              Gamification as a Service{" "}
            </div>
          </div>
          <div className="w-[536.02px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full max-sm:h-full">
            Enhance engagement and user participation with our Gamification as a
            Service, crafting customized game elements to elevate experiences
            and interactions.{" "}
          </div>
        </div>

        <div className="left-[80px] top-[401px] mt-[42px] flex-col justify-start items-start gap-[85px] inline-flex">
          <div className="justify-start widescreen:w-full items-start gap-[52px] inline-flex max-lg:flex-wrap max-lg:w-full">
            <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
              <Image
                src={img1}
                alt="Engaging User Experiences"
                className="w-[57px] h-[57px]"
              />
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[28px] max-sm:h-full max-sm:w-full leading-[120%] widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[73px] widestscreen:h-[80px]">
                Engaging User Experiences{" "}
              </div>
              <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Implement gamification elements to enhance user engagement and
                motivation within digital platforms.{" "}
              </div>
            </div>
            <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
              <Image
                src={img2}
                alt="Behavioral Incentives"
                className="w-[57px] h-[57px]"
              />
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[28px] max-sm:h-full max-sm:w-full leading-[120%] widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[73px] widestscreen:h-[80px]">
                Behavioral Incentives{" "}
              </div>
              <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Design effective incentive structures and rewards to drive
                desired user behaviors and interactions.{" "}
              </div>
            </div>
            <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
              <Image
                src={img3}
                alt="Data-Driven Insights"
                className="w-[57px] h-[57px]"
              />
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[28px] max-sm:h-full max-sm:w-full leading-[120%] widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[73px] widestscreen:h-[80px]">
                Data-Driven Insights{" "}
              </div>
              <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Utilize analytics to gather insights into user behavior within
                gamified experiences, enabling continuous improvement and
                optimization.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gamification;
