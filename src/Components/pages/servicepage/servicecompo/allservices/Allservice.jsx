"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Productdesing from "./servicesinside/Productdesing";
import Appdevelopment from "./servicesinside/Appdevelopment";
import Consulting from "./servicesinside/Consulting";
import Ecommerce from "./servicesinside/Ecommerce";
import CloudEn from "./servicesinside/CloudEn";
import Link from "next/link";
import GameDevservice from "./servicesinside/GameDevservice";
import ARservice from "./servicesinside/ARservice";
import QalityAssurance from "./servicesinside/QalityAssurance";
import Lowcode from "./servicesinside/Lowcode";
import AIservice from "./servicesinside/AIservice";
import Salesforceservice from "./servicesinside/salesforceservice";
import Sharepointservies from "./servicesinside/sharepoint";
import "./service.scss";
import axios from "axios";
import img from "./assets/service page 2nd fold.jpg";

const Allservice = () => {
  const produc = useRef(null);
  const appdeve = useRef(null);
  const consult = useRef(null);
  const ecommerce = useRef(null);
  const gservice = useRef(null);
  const arvr = useRef(null);
  const quality = useRef(null);
  const cloud = useRef(null);
  const ai = useRef(null);
  const sp = useRef(null);
  const sf = useRef(null);
  const lowcode = useRef(null);

  const scrollToMobileGameu = () => {
    if (produc.current) {
      produc.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTodesktopgame = () => {
    if (appdeve.current) {
      appdeve.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTounreal = () => {
    if (consult.current) {
      consult.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTounity = () => {
    if (ecommerce.current) {
      ecommerce.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToarvrr = () => {
    if (cloud.current) {
      cloud.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTogservice = () => {
    if (gservice.current) {
      gservice.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToarrv = () => {
    if (arvr.current) {
      arvr.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTowuality = () => {
    if (quality.current) {
      quality.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTolowcode = () => {
    if (lowcode.current) {
      lowcode.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToai = () => {
    if (ai.current) {
      ai.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTosf = () => {
    if (sf.current) {
      sf.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTosp = () => {
    if (sp.current) {
      sp.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        console.log(index);
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
      <div className="allservice relative">
        <div className="main-allservice">
          <div className="w-full h-full relative bg-white flex justify-between max-xl:justify-start max-xl:w-full max-xl:flex-wrap-reverse">
            <div className="left max-xl:w-full">
              <div className="pb-20 max-xl:pt-0 wrap-reverse relative h-auto flex flex-col-reverse max-lg:flex-wrap max-md:p-[40px] max-lg:w-full section max-sm:p-5">
                <div className="w-[738px] max-xl:w-[900px] widescreen:w-[1100px] widestscreen:w-[1440px] widescreen:text-[50px] widestscreen:text-[64px] ml-[80px] mt-[59px] max-xl:mt-[70px] max-lg:mx-0 max-lg:px-10 max-md:p-0 letter-spacing-2 max-xl:ml-[80px] max-md:ml-0  text-black text-[48px] font-normal font-['Graphik'] leading-[120%] max-lg:w-full max-lg:m- max-sm:m-0 max-md:mt-10 max-sm:text-[24px] max-sm:leading-[29px]">
                  We help businesses launch their success and bring the luxury
                  of transformational technology and dynamic UI/UX right to
                  their threshold.{" "}
                </div>
                <div className="mb-[39px] widescreen:w-[65%] widescreen:h-auto max-xl:flex max-xl:justify-center max-xl:w-full max-xl:left-0 w-[707px] relative left-[23%] max-lg:left-0 max-lg:p-0 max-md:p-0">
                  <Image
                    className="w-[707.30px] widescreen:w-[100%] widestscreen:w-[90%] h-[676.40px] widescreen:h-auto origin-top-left rotat-[19.37deg] max-md:w-full max-sm:h-auto  max-lg:w-[665px] max-lg:h-[500px]"
                    src={img}
                    alt="businesses launch their success"
                  />
                </div>
              </div>

              <div className="pl-[80px] max-xl:px-[80px] max-lg:p-[40px] max-sm:p-[20px]">
                <div
                  className="section"
                  id="product-design-and-innovation"
                  ref={produc}
                >
                  <Productdesing />
                </div>
                <div className="section" id="appdeve" ref={appdeve}>
                  <Appdevelopment />
                </div>
                <div className="section" id="consult" ref={consult}>
                  <Consulting />
                </div>
                <div className="section" id="arvr" ref={ai}>
                  <AIservice />
                </div>
                <div className="section max-sm:hidden" id="Lowcode" ref={sf}>
                  <Salesforceservice />
                </div>
                <div className="section max-sm:hidden" id="Lowcode" ref={sp}>
                  <Sharepointservies />
                </div>
                <div className="section" id="ecommerce" ref={ecommerce}>
                  <Ecommerce />
                </div>
                <div className="section" id="cloudd" ref={cloud}>
                  <CloudEn />
                </div>
                <div className="section" id="gservice" ref={gservice}>
                  <GameDevservice />
                </div>
                <div className="section" id="arvr" ref={arvr}>
                  <ARservice />
                </div>
                <div className="section" id="Lowcode" ref={lowcode}>
                  <Lowcode />
                </div>
                <div className="hidden max-sm:block" id="Lowcode">
                  <Salesforceservice />
                </div>
                <div className="hidden max-sm:block" id="Lowcode">
                  <Sharepointservies />
                </div>
                <div className="section" id="quality" ref={quality}>
                  <QalityAssurance />
                  <div className="section h-[210px] w-100% max-sm:h-4"></div>
                </div>
              </div>
            </div>

            <div className="right bg-transparent  sticky max-xl:hidden widescreen:h-[900px] widescreen:top-[124px] h-[600px] top-[76px] mt-0  max-xl:w-full bg-white max-xl:h-[300px] max-xl:top-10  max-md:h-[400px] widescreen:w-[380px] pr-[80px]">
              <div className="self-stretch flex-col justify-start items-start gap-[4px] inline-flex max-xl:w-full  max-xl:h-[300px]">
                <div className=" overview p-2 bgneutral-100 rounded-[7px] justify-center items-center gap-2 inline-flex">
                  <div
                    className={
                      activeSection === 0
                        ? "active text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight"
                        : " text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight p-3"
                    }
                  >
                    Overview
                  </div>
                </div>
                <div className=" w-[222px] widescreen:w-[300px] widescreen:h-auto h-[463px] relative left-[15px] max-xl:h-[200px] max-xl:w-full">
                  <div className="w-20 overview h-[35px] p-2 left-0 top-0 absolute rounded-lg justify-center items-center gap-[11px] inline-flex max-xl:flex-wrap ">
                    <div
                      className={
                        activeSection >= 1
                          ? "active text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px]font-normal font-['Graphik'] leading-tight"
                          : " text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px]font-normal font-['Graphik'] leading-tight p-3"
                      }
                    >
                      Services
                    </div>
                  </div>
                  <div className=" stick_list w-[197px] widescreen:w-[300px] h-[412px] left-[25px] top-[51px] absolute flex-col justify-start items-start gap-[4px] inline-flex max-xl:flex-row max-xl:flex-wrap  max-xl:w-full  max-xl:h-[200px]  max-lg:relative max-lg:left-[0]">
                    <Link
                      scroll={false}
                      href="#Product-Design-and-Innovation"
                      onClick={scrollToMobileGameu}
                      className={
                        activeSection === 2
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[153.52px] widescreen:w-full widescreen:leading-[120%] opacity-80 text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-[16.80px]">
                        Product Design and Innovation{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#App-Development-and-Modernization"
                      onClick={scrollTodesktopgame}
                      className={
                        activeSection === 3
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1  p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[153.52px] widescreen:w-full widescreen:leading-[120%] opacity-80 text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-[16.80px]">
                        App Development and Modernization{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#Technology-Consulting"
                      onClick={scrollTounreal}
                      className={
                        activeSection === 4
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1  p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[153.52px] widescreen:w-full widescreen:leading-[120%] opacity-80 text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-[16.80px]">
                        Technology Consulting{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#Artificial-Intelligence-(AI)-services"
                      onClick={scrollToai}
                      className={
                        activeSection === 5
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1  p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[153.25px] widescreen:w-full widescreen:leading-[120%] opacity-80 text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-[16.80px]">
                        Artificial Intelligence (AI) services{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#Salesforce-Services"
                      onClick={scrollTosf}
                      className={
                        activeSection === 6
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1  p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[153.98px] widescreen:leading-[120%] widescreen:w-[100%] opacity-80 text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-[16.80px]">
                        Salesforce Services{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#Microsoft-SharePoint-Services"
                      onClick={scrollTosp}
                      className={
                        activeSection === 7
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className=" w-[153.98px] widescreen:leading-[120%] widescreen:w-[100%] opacity-80 text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-[16.80px]">
                        Microsoft SharePoint services{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#Ecommerce-Marketplace-Development"
                      onClick={scrollTounity}
                      className={
                        activeSection === 8
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1  p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[183.72px] widescreen:leading-[120%] widescreen:w-full opacity-80 text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-[16.80px]">
                        Ecommerce Marketplace Development{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#Cloud-Engineering"
                      onClick={scrollToarvrr}
                      className={
                        activeSection === 9
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1  p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[153.06px] widescreen:leading-[120%] widescreen:w-full opacity-80 text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-[16.80px]">
                        Cloud Engineering{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#Game-Development"
                      onClick={scrollTogservice}
                      className={
                        activeSection === 10
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1  p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[153.01px] widescreen:leading-[120%] widescreen:w-full opacity-80 text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-[16.80px]">
                        Game Development{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#AR/VR-Services"
                      onClick={scrollToarrv}
                      className={
                        activeSection === 11
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1  p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[153.25px] widescreen:w-full widescreen:leading-[120%] leading-[120%] opacity-80 text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-[16.80px]">
                        AR/VR Services{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#Low-code-and-No-code"
                      onClick={scrollTolowcode}
                      className={
                        activeSection === 12
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1  p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[153.52px] widescreen:w-full widescreen:leading-[120%] opacity-80 text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-[16.80px]">
                        Low-code and No-code{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#Quality-Assurance"
                      onClick={scrollTowuality}
                      className={
                        activeSection === 13
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1  p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[153.98px] widescreen:leading-[120%] widescreen:w-[100%] opacity-80 text-black text-[14px] widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-[16.80px]">
                        Quality Assurance{" "}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allservice;
