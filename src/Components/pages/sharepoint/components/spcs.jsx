import img from "../../cloud/assets/system-uicons_scale (1).svg";
import img2 from "../../cloud/assets/ph_note-pencil-light.svg";
import img3 from "../../cloud/assets/system-uicons_scale (2).svg";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
const SPCS = () => {
  return (
    <>
      <>
        <div className="w-full h-[847x] pb-20 relative bg-white max-lg:h-full">
          <div className="left-[80px] mt-[168px] max-sm:mt-[90px]  flex-col justify-start items-start gap-[22px] inline-flex">
            <div className="flex-col justify-start items-start gap-[30px] flex">
              <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px]  justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
                <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                  Microsoft Sharepoint services{" "}
                </div>
                <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
              </div>
              <div className="w-[562.77px] widescreen:w-full widescreen:text-[59px] widestscreen:text-[69px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-full max-sm:text-[36px]">
                SharePoint Consulting and Strategy{" "}
              </div>
            </div>
            <div className="w-[536.02px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full max-sm:h-full">
              Navigate business intricacies with our SharePoint consulting. We
              strategize, customize, and optimize, ensuring SharePoint becomes
              your tailored solution for seamless collaboration, innovation, and
              success.{" "}
            </div>
          </div>

          <div className="left-[80px] widescreen:w-full top-[401px] mt-[42px] flex-col justify-start items-start gap-[85px] inline-flex">
            <div className="justify-start widescreen:w-full items-start gap-[52px] inline-flex max-lg:flex-wrap">
              <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
                <Image
                  src={img}
                  alt="SharePoint Implementation Strategy"
                  className="w-[57px] h-[57px]"
                />
                <div className="text-black widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[63px] widestscreen:h-[80px] letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  SharePoint Implementation Strategy{" "}
                </div>
                <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Craft a roadmap for seamless SharePoint implementation,
                  aligning with organizational goals for efficient collaboration
                  and workflow.{" "}
                </div>
              </div>
              <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
                <Image
                  src={img2}
                  alt="Governance and Compliance Consulting"
                  className="w-[57px] h-[57px]"
                />
                <div className="text-black widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[63px] widestscreen:h-[80px] letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  Governance and Compliance Consulting{" "}
                </div>
                <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Establish robust governance policies and compliance
                  frameworks, ensuring secure and compliant SharePoint usage
                  within organizations.{" "}
                </div>
              </div>
              <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
                <Image
                  src={img3}
                  alt=" SharePoint Adoption Planning"
                  className="w-[57px] h-[57px]"
                />
                <div className="text-black widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[63px] widestscreen:h-[80px] letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  SharePoint Adoption Planning{" "}
                </div>
                <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Design and execute adoption plans, training, and change
                  management strategies for enhanced SharePoint engagement and
                  organizational effectiveness.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default SPCS;
