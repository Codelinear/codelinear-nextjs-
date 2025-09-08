"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import img from "../assets/Cloud engineering03.jpg";
import Cloudops from "./cloudops";
import Test from "./test";
import Security from "./security";
import CloudCM from "./Cloudcm";
import Manage from "./manage";
import axios from "axios";
import Image from "next/image";

const Cloudservice = () => {
  const produc = useRef(null);
  const appdeve = useRef(null);
  const consult = useRef(null);
  const ecommerce = useRef(null);
  const gservice = useRef(null);

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
  const scrollTogservice = () => {
    if (gservice.current) {
      gservice.current.scrollIntoView({ behavior: "smooth" });
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
      <div className="app-devepage mt-[40px] max-sm:mt-[23px]">
        <div className="w-full h-full pl-[80px] pb-[29px] bg-white justify-center items-center gap-[108px] inline-flex max-lg:px-[40px] max-sm:px-[20px]">
          <div className="flex justify-between w-full">
            <div className="left">
              <div>
                <div className="section w-full self-stretch justify-center items-center inline-flex max-lg:justify-start">
                  <Image
                    className="w-[727.57px] h-[717.49px] max-lg:w-[100%] max-sm:h-full"
                    src={img}
                    alt="Cloud Engineering services transcend"
                  />
                </div>
              </div>

              <div>
                <div className="w-full mb-[70px] relative bg-white section">
                  <div className="w-[670px] widescreen:w-[870px] widestscreen:w-[1070px] widescreen:text-[40px] widestscreen:text-[50px] letter-spacing-6 mt-[130px]  text-black text-[36px] font-normal font-['Graphik'] leading-[120%] max-lg:w-[100%] max-sm:text-[24px] max-sm:tracking-tight max-sm:mt-[100px]">
                    Our Cloud Engineering services transcend traditional
                    approaches, creating a synergy between function and form in
                    the digital landscape.{" "}
                  </div>
                  <Link
                    scroll={false}
                    href="/contact-us"
                    className="px-8 py-4 ml80px] mt-[42px]  rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-[100%]"
                  >
                    <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                      Talk to our experts
                    </div>
                  </Link>
                </div>
              </div>
              <div>
                <div id="mobildeve" className="section" ref={produc}>
                  <Cloudops />
                </div>
                <div id="progressive" className="section" ref={appdeve}>
                  <CloudCM />
                </div>
                <div id="sass" className="section" ref={consult}>
                  <Security />
                </div>
                <div id="apidev" className="section" ref={ecommerce}>
                  <Test />
                </div>
                <div id="legacy" className="section" ref={gservice}>
                  <Manage />
                </div>
              </div>
            </div>
            <div className="right sticky max-xl:hidden h-[600px] top-28 mt-0  max-xl:w-full bg-white max-xl:h-[300px] max-xl:top-10  max-md:h-[400px] pr-[50px]">
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
                <div className=" w-[222px] widescreen:w-[300px] h-[463px] relative left-[0px] max-xl:h-[200px] max-xl:w-full">
                  <div className="w-[180px] widescreen:w-full overview h-[35px] p-2 top-0 absolute rounded-lg justify-center items-center gap-2 inline-flex max-xl:flex-wrap ">
                    <div
                      className={
                        activeSection >= 1
                          ? "active text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight"
                          : " text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight p-3"
                      }
                    >
                      Cloud Engineering{" "}
                    </div>
                  </div>
                  <div className=" widescreen:w-full stick_list w-[197px] h-[412px] left-[25px] top-[51px] absolute flex-col justify-start items-start gap-[4px] inline-flex max-xl:flex-row max-xl:flex-wrap  max-xl:w-full  max-xl:h-[200px]  max-lg:relative max-lg:left-[0]">
                    <Link
                      scroll={false}
                      href="#cloud-ops"
                      onClick={scrollToMobileGameu}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 2
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[137.52px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px] widescreen:leading-[120%] widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-full">
                        Cloud Ops{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#cloud-consulting-&-migration"
                      onClick={scrollTodesktopgame}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 3
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[137.52px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px] widescreen:leading-[120%] widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-full">
                        Cloud Consulting & Migration{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#cloud-security"
                      onClick={scrollTounreal}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 4
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[137.52px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px] widescreen:leading-[120%] widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-full">
                        Cloud Security{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#cloud-app-testing-&-implementation"
                      onClick={scrollTounity}
                      className={
                        activeSection === 5
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[137.52px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px] widescreen:leading-[120%] widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-full">
                        Cloud App Testing & Implementation{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#cloud-managed-services"
                      onClick={scrollTogservice}
                      className={
                        activeSection === 6
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[137.52px] opacity-80 text-blac text-[14px] font-normal font-['Graphik'] leading-[16.80px] widescreen:leading-[120%] widescreen:text-[20px] widestscreen:text-[24px] widescreen:w-full">
                        Cloud Managed Services{" "}
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

export default Cloudservice;
