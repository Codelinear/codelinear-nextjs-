import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const Blursection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <div className="flex justify-center max-lg:py-[45px] pt-[50px] max-sm:py-[24px] pb-[91px]  items-center">
      <div className="py-[75px] bg-mango max-sm:py-[41px]  h-[590px] max-sm:h-[556px]  w-[1064px] justify-between flex flex-col">
        <h1 className="ml-[80px] widescreen:text-[54px] widestscreen:text-[60px] max-sm:ml-[0] max-sm:px-[25px] max-sm:w-full max-lg:ml-[42px] w-[551px] text-[48px] max-sm:text-[36px] leading-[120%] letter-spacing-2 text-[white]">
          Have a disruptive solution in mind?{" "}
        </h1>
        <div className="max-sm:px-[25px]">
          <p className="text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:py-[12px] widestscreen:py-[16px] max-sm:ml-[0] max-lg:ml-[42px] text-[white] ml-[80px]">
            We’ll help you bring your vision to life{" "}
          </p>
          <Link
            href="/contact-us"
            onClick={scrollToTop}
            className="hover:text-black text-[white] widescreen:rounded-[50px] widestscreen:rounded-[80px] px-8 py-4 max-lg:ml-[42px] max-sm:ml-[0px] ml-[80px] mt-[24px]  rounded-[31px] border border-white justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-[100%]"
          >
            <div className="text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
              Talk to our experts
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Blursection;
