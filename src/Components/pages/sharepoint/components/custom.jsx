import Link from "next/link";
import img from "../../cloud/assets/material-symbols-light_warning-outline.svg";
import img2 from "../../cloud/assets/material-symbols-light_security (2).svg";
import img3 from "../../cloud/assets/material-symbols-light_detection-and-zone.svg";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
const Custom = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <>
        <div className="w-full h-[847x] pb-20 max-sm:pb-0 relative bg-white max-lg:h-full">
          <div className="left-[80px] mt-[168px] max-sm:mt-[80px]  flex-col justify-start items-start gap-[22px] inline-flex">
            <div className="flex-col justify-start items-start gap-[30px] flex">
              <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px]  justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
                <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                  Microsoft Sharepoint services{" "}
                </div>
                <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
              </div>
              <div className="w-[562.77px] widescreen:w-full widescreen:text-[59px] widestscreen:text-[69px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-full max-sm:text-[36px]">
                Custom Development{" "}
              </div>
            </div>
            <div className="w-[536.02px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full max-sm:h-full">
              Tailor SharePoint to your needs with our custom development
              services, crafting bespoke web parts, dynamic SPFx solutions, and
              seamless Power Apps integration for enhanced user experiences.{" "}
            </div>
          </div>

          <div className="left-[80px] widescreen:w-full top-[401px] mt-[42px] flex-col justify-start items-start gap-[85px] inline-flex">
            <div className="justify-start widescreen:w-full items-start gap-[52px] inline-flex max-lg:flex-wrap">
              <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
                <Image
                  src={img}
                  alt="Custom Web Parts Development"
                  className="w-[57px] h-[57px]"
                />
                <div className="text-black widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[63px] widestscreen:h-[80px] letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  Custom Web Parts Development{" "}
                </div>
                <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Craft bespoke web parts to enhance SharePoint functionality,
                  meeting unique business needs with tailored solutions.{" "}
                </div>
              </div>
              <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
                <Image
                  src={img2}
                  alt="SharePoint Framework (SPFx) Solutions"
                  className="w-[57px] h-[57px]"
                />
                <div className="text-black widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[63px] widestscreen:h-[80px] letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  SharePoint Framework (SPFx) Solutions{" "}
                </div>
                <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Develop modern solutions using SharePoint Framework,
                  delivering dynamic and responsive apps for enhanced user
                  experiences.{" "}
                </div>
              </div>
              <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
                <Image
                  src={img3}
                  alt="Power Apps Integration with SharePoint"
                  className="w-[57px] h-[57px]"
                />
                <div className="text-black widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[63px] widestscreen:h-[80px] letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  Power Apps Integration with SharePoint{" "}
                </div>
                <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Integrate Power Apps seamlessly with SharePoint for custom app
                  development, providing advanced functionalities aligned with
                  organizational requirements.
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-[58px] max-sm:gap-[40px] inline-flex max-sm:flex-wrap">
              <div className="w-[267.25px] widescreen:w-[40%] widescreen:text-[30px] widestscreen:text-[40px] letter-spacing-4 text-black text-xl max-sm:text-[24px] font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Need help in making the next big thing?{" "}
              </div>
              <Link
                href={"/contact-us"}
                onClick={scrollToTop}
                className="px-8 py-4 max-sm:w-full rounded-full border border-black justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:full"
              >
                <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                  Talk to our experts
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Custom;
