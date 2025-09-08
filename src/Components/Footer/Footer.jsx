"use client";
"use client";
import React from "react";
import Image from "next/image";
import "./footer.scss";
// import Link from "next/link";
import SubFooter from "./subFooter";
import Link from "next/link";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <footer className="bg-white relative h[1800px]">
        <div className="upr-footer">
          <div className="w-full h-full pl-20 pr.90px] mt-[76.61px] pb-[44.82px] bg-white flex-col justify-end items-start gap-[47.56px] inline-flex   max-md:p-10 max-sm:p-5  max-lg:pl-[40px]">
            <div className="w-[548.68px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:w-[30%] letter-spacing-4 text-400 text-[#101415] text-[24px] font-normal font-['Graphik'] leading-[120%] max-md:w-full ">
              Transforming Ideas into Competitive Advantages.
            </div>
            <Link
              href="/contact-us"
              onClick={scrollToTop}
              className="w-full h-full relative flex-col justify-start items-start flex"
            >
              <h1 className="whitespace-nowrap lets-talk letter-spacing-7 text-[258.29px] w-full font-normal font-['Graphik'] leading-[88%] max-md:text-[100px] max-[350px]:text-[25px]">
                Let’s Talk.
              </h1>

              <div className="bottom-line w-[223.13px] h-[19.14px] border max-lg:ml-0  max-xl:mt-0 max-[350px]:w-full"></div>
            </Link>
          </div>
        </div>
        <SubFooter />
      </footer>
    </>
  );
};
export default Footer;
