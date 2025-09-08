"use client";
import Hero from "./hero/hero";
import LowSection from "./lowCodeSection/lowSection";
import Explore from "../production/Explore";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

import Footer from "../../Footer/Footer";
import Head from "next/head";
const Lowcode = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (
        scrollPosition + 300 >= sectionTop &&
        scrollPosition < sectionBottom
      ) {
        setActiveSection(index);
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Services - Low-code & No-code</title>
        <meta
          name="description"
          content="Discover Codelinear's low-code and no-code development services, offering efficient and rapid application development solutions. Learn how we leverage low-code and no-code platforms to accelerate the development process and deliver innovative solutions."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/services/low-code-and-no-code"
        />
        <meta
          name="keywords"
          content="low-code development, no-code development, rapid application development, application development solutions, low-code platforms, no-code platforms, innovation, development process acceleration"
        />
      </Head>
      <div className="flex justify-between">
        <div className="section left w-[80%] max-xl:w-full">
          <div>
            <Hero />
          </div>
          <div className="section" id="produc">
            <LowSection />
          </div>
        </div>
        <div className="right sticky max-xl:hidden h-[600px] top-28 mt-[530px]  max-xl:w-full bg-white max-xl:h-[300px] max-xl:top-10  max-md:h-[400px] pr-[80px]">
          <div className="self-stretch flex-col justify-start items-start gap-[12px] inline-flex max-xl:w-full  max-xl:h-[300px]">
            <div className=" overview mb-[2px] bgneutral-100 p-2 rounded-[7px]  justify-center items-center gap-2 inline-flex">
              <div
                className={
                  activeSection === 0
                    ? "active text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight"
                    : " text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight p-3"
                }
              >
                Overview
              </div>
            </div>
            <div className=" w-[143.4px] widescreen:w-[300px] relative max-xl:h-[200px] max-xl:w-full">
              <div className="w-full w-[117px] overview h-[35px] p-[8px] top-0 absolute rounded-lg justify-start items-center gap-2 inline-flex max-xl:flex-wrap ">
                <div
                  className={
                    activeSection >= 1
                      ? "active text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight"
                      : " text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight p-3"
                  }
                >
                  Low-code and No-code{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Explore />
      {/* <Footer /> */}
    </>
  );
};
export default Lowcode;
