import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import img6 from "../assets/ARVR02.jpg";

const VR5 = () => {
  return (
    <>
      <div className="w-full h-[367px] relative bg-white">
        <div className="flex flex-col">
          <div className="ml-[80px] mt-[67px]  flex-col justify-start items-start gap-[22px] inline-flex max-sm:mb-[50px] max-lg:ml-[40px] max-sm:ml-[0px] max-sm:px-[20px]">
            <div className="flex-col max-sm:w-full justify-start items-start gap-[30px] flex">
              <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                  AR/VR Services{" "}
                </div>
                <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
              </div>
              <div className="w-[631.03px] widescreen:w-full widescreen:text-[59px] widestscreen:text-[69px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:text-[36px] max-lg:w-[100%]">
                AR/VR App Development{" "}
              </div>
            </div>

            <div className="w-[536.02px] widescreen:w-[80%] widescreen:text-[20px] widescreen:text-[24px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[100%] max-sm:h-full">
              Craft immersive digital realms with our AR/VR app development,
              combining design finesse and advanced technology for unparalleled,
              interactive experiences.{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="w-full h-[755px] widescreen:h-auto pl-20 pr-[0px] pt-[0px] pb-[145.80px] bg-white justify-start items-start gap-[54px] max-[1100px]:gap-[50px] inline-flex max-lg:flex-wrap max-lg:h-full max-lg:gap-[50px] max-lg:pl-[40px] max-sm:px-[20px] max-sm:gap-[50px]">
          <div className="self-stretch  widescreen:w-[40%] flex-col justify-start items-start gap-[54px] inline-flex max-lg:flex-row max-lg:flex-wrap">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl widescreen:text-[30px] widestscreen:text-[40px] font-normal font-['Graphik'] leading-[120%] letter-spacing-4">
                Tailored Experiences{" "}
              </div>
              <div className="w-[291.37px] max-sm:w-full opacity-80 widescreen:text-[20px] widescreen:w-[80%] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                Develop custom AR/VR applications tailored to the unique needs
                and goals of your audience or business, ensuring a personalized
                user experience.{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl widescreen:text-[30px] widestscreen:text-[40px] font-normal font-['Graphik'] leading-[120%] letter-spacing-4">
                Cross-Platform Compatibility{" "}
              </div>
              <div className="w-[291.37px] max-sm:w-full opacity-80 widescreen:text-[20px] widescreen:w-[80%] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                Optimize applications for various platforms, including VR
                headsets, AR glasses, and mobile devices, to reach a broad
                audience and provide a seamless experience across devices.{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-xl widescreen:text-[30px] widestscreen:text-[40px] font-normal font-['Graphik'] leading-[120%] letter-spacing-4">
                Real-Time Interactivity{" "}
              </div>
              <div className="w-[291.37px] max-sm:w-full opacity-80 widescreen:text-[20px] widescreen:w-[80%] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                Implement real-time interactivity within the applications,
                enabling users to engage with the virtual or augmented
                environment dynamically and fostering a sense of active
                participation.{" "}
              </div>
            </div>
          </div>
          <div className="w-[522px] widescreen:w-[50%] widescreen:h-auto max-lg:w-full self-stretch flex-col justify-start max-lg:justify-start items-center inline-flex">
            <Image
              className="w-[522px] h-[833.20px] widescreen:w-full widescreen:h-auto max-sm:w-full max-sm:h-full"
              src={img6}
              alt="AR/VR App Service"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VR5;
