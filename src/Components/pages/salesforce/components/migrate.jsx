import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import img from "../assets/Frame 1000002802.jpg";
import Image from "next/image";
const Migrate = () => {
  return (
    <>
      <div className="w-full h-[992px] widescreen:h-auto relative bg-white mt-20 max-lg:h-full">
        <div className="left-[80px] top-[88px]  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px]  justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
              <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                Salesforce Services{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[562.77px] widescreen:w-full widescreen:text-[59px] widestscreen:text-[69px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-[100%] max-sm:text-[36px]">
              Upgrades and Migrations{" "}
            </div>
          </div>
          <div className="w-[536.02px] max-sm:h-auto h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
            Seamless Salesforce upgrades and migrations engineered for
            excellence. Elevate performance, enhance features, and navigate
            transitions effortlessly with our expert-led transformations
            tailored to your business needs.{" "}
          </div>
        </div>

        <div className="flex gap-20  mt-[54px] max-lg:flex-wrap">
          <div className="left-[80px] widescreen:w-[40%] top-[376px]  flex-col justify-start items-start gap-[54px] inline-flex max-lg:flex-row max-lg:flex-wrap">
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Salesforce Version Upgrades{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Seamlessly transition to the latest Salesforce version with
                comprehensive planning, testing, and data migration expertise.{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                On-Premises to Salesforce Online Migration{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Migrate smoothly from on-premises systems to Salesforce Online,
                optimizing functionality, data integrity, and performance.{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Data Migration and Transition Planning{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Ensure a secure and efficient transition by expertly managing
                data migration, mapping, validation, and synchronization during
                upgrades.{" "}
              </div>
            </div>
          </div>

          <div className="h-[568px] widescreen:w-[50%] widescreen:h-auto left-[516px] max-lg:w-full max-lg:justify-center top-[376px]  flex-col justify-start items-center inline-flex max-sm:w-full max-sm:h-full">
            <Image
              className="w-[519.33px] widescreen:w-full widescreen:h-auto h-[779.13px] max-sm:w-full max-sm:h-full"
              src={img}
              alt="Salesforce Services"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Migrate;
