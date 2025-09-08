import { useEffect, useState } from "react";
import axios from "axios";
import img from "../assets/shubham-dhage-MNCVkZxae6A-unsplash 1.jpg";
import Image from "next/image";
const Predictive = () => {
  return (
    <>
      <div className="w-full h-[992px] widescreen:h-auto relative bg-white mt-20 max-lg:h-full">
        <div className="left-[80px] top-[88px]  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col max-sm:w-full justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] widescreen:w-[700px] widestscreen:w-[900px]  justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
              <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                Artificial Intelligence (AI) services{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[562.77px] widescreen:w-full widescreen:text-[59px] widestscreen:text-[69px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-[100%] max-sm:text-[36px]">
              Natural Language Processing solutions{" "}
            </div>
          </div>
          <div className="w-[536.02px] widescreen:w-[80%] widescreen:h-auto widescreen:text-[20px] widestscreen:text-[24px] h-[85.15px] max-sm:h-auto opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
            Transform your operations with NLP expertise, leveraging language
            understanding for improved communication, insights, and
            decision-making within your organization.{" "}
          </div>
        </div>

        <div className="flex gap-20 max-sm:gap-[32px] mt-[54px] max-lg:flex-wrap">
          <div className="left-[80px] widescreen:w-[40%] top-[376px]  flex-col justify-start items-start gap-[54px] inline-flex max-lg:flex-row max-lg:flex-wrap">
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Text Summarization Solutions{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Implement NLP for automatic text summarization, condensing
                lengthy content to extract key information, aiding quick
                comprehension.{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Chatbot Development{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Build interactive chatbots, enhancing customer support and user
                engagement with natural language conversations.{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black widescreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Keyword Extraction Services{" "}
              </div>
              <div className="w-[291.37px] widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Identify and summarize essential terms within textual content
                for improved search and categorization.{" "}
              </div>
            </div>
          </div>
          <div className="h-[568px] widescreen:w-[50%] widescreen:h-auto left-[516px] max-lg:w-full max-lg:justify-center top-[376px]  flex-col justify-start items-center inline-flex max-sm:w-full max-sm:h-full">
            <Image
              className="w-[519.33px] widescreen:w-full widescreen:h-auto h-[779.13px] max-sm:w-full max-sm:h-full"
              src={img}
              alt="Chatbot Development"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Predictive;
