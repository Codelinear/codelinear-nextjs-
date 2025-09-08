"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import img from "../assets/system-uicons_scale (1).svg";
import img2 from "../assets/ph_note-pencil-light.svg";
import img3 from "../assets/system-uicons_scale (2).svg";
import axios from "axios";

const Cloudops = () => {
  return (
    <>
      <>
        <div className="w-full h-[887x] pb-40 max-sm:pb-20 relative bg-white max-lg:h-full">
          <div className="left-[80px] mt-[168px] max-sm:mt-10  flex-col justify-start items-start gap-[22px] inline-flex">
            <div className="flex-col justify-start items-start gap-[30px] flex max-sm:w-full">
              <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px]  justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
                <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                  Cloud Engineering{" "}
                </div>
                <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
              </div>
              <div className="w-[562.77px] widescreen:w-full widescreen:text-[59px] widestscreen:text-[69px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-full max-sm:text-[36px]">
                Cloud Ops{" "}
              </div>
            </div>
            <div className="w-[536.02px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full max-sm:h-full">
              Elevate cloud operations with our Cloud Ops services, ensuring
              seamless deployment, management, and optimization for robust,
              efficient, and reliable digital infrastructure.{" "}
            </div>
          </div>

          <div className="left-[80px] widescreen:w-full top-[401px] mt-[42px] flex-col justify-start items-start gap-[85px] inline-flex">
            <div className="justify-start widescreen:w-full items-start gap-[52px] inline-flex max-lg:flex-wrap">
              <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
                <Image
                  src={img}
                  alt="Infrastructure Scalability"
                  className="w-[57px] h-[57px]"
                />
                <div className="text-black widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[63px] widestscreen:h-[80px] letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  Infrastructure Scalability{" "}
                </div>
                <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Utilize automation tools and practices for deploying,
                  monitoring, and managing cloud resources, ensuring
                  consistency, reliability, and efficiency in operations.{" "}
                </div>
              </div>
              <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
                <Image
                  src={img2}
                  alt="Cost Optimization"
                  className="w-[57px] h-[57px]"
                />
                <div className="text-black widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[63px] widestscreen:h-[80px] letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  Cost Optimization{" "}
                </div>
                <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Develop and execute cost-effective cloud operations plans,
                  optimizing resource allocation and utilization to meet
                  performance requirements without unnecessary expenses.{" "}
                </div>
              </div>
              <div className="flex-col widescreen:w-[25%] justify-start items-start gap-5 inline-flex">
                <Image
                  src={img3}
                  alt="Automated Deployment and Management"
                  className="w-[57px] h-[57px]"
                />
                <div className="text-black widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full widescreen:h-[63px] widestscreen:h-[80px] letter-spacing-4 text-xl font-normal font-['Graphik']  w-[273.16px] h-[48px] max-sm:h-full max-sm:w-full leading-[120%]">
                  Automated Deployment and Management{" "}
                </div>
                <div className="w-[273.16px] widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-[90%]">
                  Implement cloud operations strategies that allow for seamless
                  and efficient scaling of infrastructure based on varying
                  workloads and demands.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Cloudops;
