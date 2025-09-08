"use client";
import Hero from "./hero/hero";
import QSection from "./qualitySection/qualitySection";
import Explore from "../production/Explore";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

import Footer from "../../Footer/Footer";
import Head from "next/head";

const QualityAssurance = () => {
  const produc = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (
        scrollPosition + 200 >= sectionTop &&
        scrollPosition < sectionBottom
      ) {
        setActiveSection(index);
      }
    });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
        <title>Services - Quality Assurance</title>
        <meta
          name="description"
          content="Explore Codelinear's quality assurance services, ensuring the reliability, performance, and security of your software products. Learn how our QA experts conduct thorough testing to identify and address any issues, delivering high-quality software solutions."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/services/quality-assurance"
        />
        <meta
          name="keywords"
          content="quality assurance, software testing, reliability, performance, security, QA experts, testing process, software solutions"
        />
      </Head>
      <div className="flex">
        <div className="left w-[100%] max-xl:w-full">
          <div className="section">
            <Hero />
          </div>
          <div className="section" id="produc" ref={produc}>
            <div className="section">
              <QSection />
            </div>
          </div>
        </div>
        <div className="right sticky max-xl:hidden h-[600px] top-28 mt-[530px]  max-xl:w-full bg-white max-xl:h-[300px] max-xl:top-10  max-md:h-[400px] pr-[80px]">
          <div className="self-stretch flex-col justify-start items-start gap-3 inline-flex max-xl:w-full  max-xl:h-[300px]">
            <div className=" overview bgneutral-100 p-2 rounded-[7px]  justify-center items-center gap-2 inline-flex">
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
            <div className=" w-[122px] h-[463px] widescreen:w-[300px] relative left-[20px] max-xl:h-[200px] max-xl:w-full">
              <div className="w-20 widescreen:w-full overview h-[35px] p-2 top-0 absolute rounded-lg justify-center items-center gap-2 inline-flex max-xl:flex-wrap ">
                <div
                  className={
                    activeSection >= 1
                      ? "active text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight"
                      : " text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight p-3"
                  }
                >
                  Quality Assurance
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
export default QualityAssurance;
