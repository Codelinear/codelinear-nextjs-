"use client";
import Lottie from "lottie-react";
import axios from "axios";
import animationData from "./about page.json";

const AboutHero = () => {
  return (
    <>
      <div className="about-hero">
        <div className="section max-xl:px-[80px] max-lg:px-[40px] w-full px-[161px] pt-[96.64px] pb-[103.51px] bg-white flex-col justify-end items-center gap-[78.74px] max-md:px-[40px] max-md:mt-[60px] inline-flex max-sm:p-5 max-md:h-full max-md:my-10 max-sm:m-0 max-sm:pt-[116px]">
          <Lottie
            className="mt5 w-[918px] bigscreen:w-[90%] bigscreen:h-auto h-[381px] max-lg:w-[663px] max-lg:h-[275px] max-sm:h-fill max-sm:w-[100%]"
            animationData={animationData}
            loop={false}
            autoplay={true}
          />
          <div className="w-[536.02px] widescreen:text-[24px] widescreen:text-[24px] widescreen:w-[50%] opacity-80 text-center text-black text-base font-normal font-['Graphik'] leading-normal max-md:p5 max-md:text-justify max-md:w-full">
            We integrate our tech expertise with a social conscience to build
            digital products that provide end-user with the finest experience.{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
