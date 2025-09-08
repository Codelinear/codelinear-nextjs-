"use client";
import React, { useRef, useEffect, useState } from "react";
import Mobilegame from "./maingameservices/Mobilegame";

import Desktopgame from "./maingameservices/Desktopgame";
import Unreal from "./maingameservices/Unreal";
import Unity from "./maingameservices/Unity";
import ArVr from "./maingameservices/ArVr";
import Link from "next/link";
import img from "../gameassets//Game development03.jpg";
import axios from "axios";
import Image from "next/image";

const Gameservices = () => {
  const mobileGameRefu = useRef(null);
  const desktopgame = useRef(null);
  const unreal = useRef(null);
  const unity = useRef(null);
  const arvr = useRef(null);

  const scrollToMobileGameu = () => {
    if (mobileGameRefu.current) {
      mobileGameRefu.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTodesktopgame = () => {
    if (desktopgame.current) {
      desktopgame.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTounreal = () => {
    if (unreal.current) {
      unreal.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTounity = () => {
    if (unity.current) {
      unity.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToarvr = () => {
    if (arvr.current) {
      arvr.current.scrollIntoView({ behavior: "smooth" });
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
        scrollPosition - 100 >= sectionTop &&
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="game-service">
        <div className="w-full hfull mt-[40px]  max-sm:mt-[8px] bg-white">
          <div className="w-full h-full relative bg-white flex justify-between">
            <div className="leftt">
              <div className="max-lg:w-full widescreen:w-full">
                <div className="flex widescreen:w-full gap-[103px] max-lg:w-full pr-[10px] max-lg:p-0 max-sm:mb-20 max-xl:pr-[80px] mb-[101px] w-full">
                  <div className="flex max-lg:w-full widescreen:w-[30%] flex-col gap-[436px] max-lg:gap-[40px]">
                    <p className="section w-[305px] ml-[80px] widescreen:w-full widestscreen:text-[24px] widescreen:text-[20px]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-lg:ml-[40px] max-sm:ml-[20px]">
                      Immerse players in visually stunning landscapes. Our
                      design-centric approach ensures games that are not just
                      playable but also a visual feast for users.{" "}
                    </p>
                    <Image
                      className="w-full h-full hidden max-lg:block px-[40px] max-sm:px-[20px]"
                      src={img}
                      alt="players in visually stunning"
                    />
                    <div className="ml-[80px] top-[607.30px]  flex-col justify-start items-start gap-[25px] inline-flex max-lg:ml-[40px] max-sm:px-[20px] max-sm:ml-[0px]">
                      <p className="w-[305px] max-sm:text-[24px] widescreen:w-full widestscreen:text-[30px] widescreen:text-[40px] letter-spacing-4 text-black text-xl font-normal font-['Graphik']">
                        Have an idea and want to get started?{" "}
                      </p>
                      <Link
                        onClick={scrollToTop}
                        className=" max-sm:w-full"
                        href={"/contact-us"}
                      >
                        <button className="section talk-btn  max-sm:w-full hover:bg-yellow-400 transition-all px-8 py-4 rounded-[31px]  hover:border-yellow-400  border border-black justify-center items-center gap-2 inline-flex">
                          <div className="text-black  max-sm:w-full text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                            Talk To Our Experts
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="max-lg:hidden widescreen:w-[50%]">
                    <Image
                      className="w-[556.98px] widescreen:w-full widestscreen:h-auto h-[696.22px] left-[498.02px] top-[40.08px] "
                      src={img}
                      alt="players in visually stunning"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div id="mobilegameu" className="section" ref={mobileGameRefu}>
                  <Mobilegame />
                </div>
                <div id="desktopgame" className="section" ref={desktopgame}>
                  <Desktopgame />
                </div>
                <div id="unreal" className="section" ref={unreal}>
                  <Unreal />
                </div>
                <div id="unity" className="section" ref={unity}>
                  <Unity />
                </div>
                <div id="arvr" className="section" ref={arvr}>
                  <ArVr />
                </div>
              </div>
            </div>

            <div className="right sticky max-xl:hidden h-[600px] top-28 mt-10  max-xl:w-full bg-white max-xl:h-[300px] max-xl:top-10  max-md:h-[400px] pr-[80px]">
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
                <div className=" w-[190px] widescreen:w-[300px] h-[463px] relative left-[0px] max-xl:h-[200px] max-xl:w-full">
                  <div className="w-[190px] widescreen:w-full overview h-[35px] p-2 top-0 absolute rounded-lg justify-center items-center gap-2 inline-flex max-xl:flex-wrap ">
                    <div
                      className={
                        activeSection >= 1
                          ? "active text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight"
                          : " text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight p-3"
                      }
                    >
                      Game development services{" "}
                    </div>
                  </div>
                  <div className=" stick_list widescreen:w-full w-[197px] h-[412px] p-[8px] left-[25px] top-[51px] absolute flex-col justify-start items-start gap-[4px] inline-flex max-xl:flex-row max-xl:flex-wrap  max-xl:w-full  max-xl:h-[200px]  max-lg:relative max-lg:left-[0]">
                    <Link
                      scroll={false}
                      href="#Mobile-game-development"
                      onClick={scrollToMobileGameu}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 2
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[130.52px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[120%] widescreen:w-full opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        Mobile Game Development{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#desktop-game-development"
                      onClick={scrollTodesktopgame}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 3
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[130.52px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[120%] widescreen:w-full opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        Desktop Game Development{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#unreal-game-development"
                      onClick={scrollTounreal}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 4
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[130.52px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[120%] widescreen:w-full opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        Unreal Game Development{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#unity-game-development"
                      onClick={scrollTounity}
                      className={
                        activeSection === 5
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[130.72px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[120%] widescreen:w-full opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        Unity Game Development{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#ar-vr-game-development"
                      onClick={scrollToarvr}
                      className={
                        activeSection === 6
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[130.01px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[120%] widescreen:w-full opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        AR/VR Game Development{" "}
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

export default Gameservices;
