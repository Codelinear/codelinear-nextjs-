"use client";
import Hero from "./hero/hero";
import VR1 from "./VRsections/VR1";
import VR2 from "./VRsections/VR2";
import VR3 from "./VRsections/VR3";
import VR4 from "./VRsections/VR4";
import VR5 from "./VRsections/VR5";
import VR6 from "./VRsections/VR6";
import Explore from "../production/Explore";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import axios from "axios";
import Footer from "../../Footer/Footer";
import Head from "next/head";

const VR = () => {
  const vr1 = useRef(null);
  const vr2 = useRef(null);
  const vr3 = useRef(null);
  const vr4 = useRef(null);
  const vr5 = useRef(null);
  const vr6 = useRef(null);

  const scrollToMobileGameu = () => {
    if (vr1.current) {
      vr1.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTodesktopgame = () => {
    if (vr2.current) {
      vr2.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTounreal = () => {
    if (vr3.current) {
      vr3.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTovr4 = () => {
    if (vr4.current) {
      vr4.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTovr5 = () => {
    if (vr5.current) {
      vr5.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTovr6 = () => {
    if (vr6.current) {
      vr6.current.scrollIntoView({ behavior: "smooth" });
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
      <Head>
        <title>Services - AR/VR services</title>
        <meta
          name="description"
          content="Discover Codelinear's AR/VR services, offering expertise in augmented reality (AR) and virtual reality (VR) development. Learn how we help businesses leverage AR and VR technologies to create immersive experiences, enhance training programs, and drive customer engagement."
        />
        <meta
          name="keywords"
          content="AR/VR services, augmented reality, virtual reality, AR development, VR development, immersive experiences, training programs, customer engagement, technology solutions"
        />
        <link
          rel="canonical"
          href="https://codelinear.com/services/ar-vr-services"
        />
      </Head>
      <div className="flex justify-between">
        <div className="left max-xl:w-full">
          <div className="section">
            <Hero />
          </div>
          <div id="vr1" className="section" ref={vr1}>
            <div id="vr1" className="section">
              <VR1 />
            </div>
          </div>
          <div id="vr2" className="section" ref={vr2}>
            <VR5 />
          </div>
          <div id="vr3" className="section" ref={vr3}>
            <VR2 />
          </div>
          <div id="vr4" className="section" ref={vr4}>
            <VR3 />
          </div>
          <div id="vr5" className="section" ref={vr5}>
            <VR6 />
          </div>
          <div id="vr6" className="section" ref={vr6}>
            <VR4 />
          </div>
        </div>
        <div className="right sticky max-xl:hidden h-[600px] top-28 mt-[450px]  max-xl:w-full bg-white max-xl:h-[300px] max-xl:top-10  max-md:h-[400px] pr-[80px]">
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
              <div className="w-[160px] overview h-[35px] widescreen:w-full p-2 top-0 absolute rounded-lg justify-center items-center gap-2 inline-flex max-xl:flex-wrap ">
                <div
                  className={
                    activeSection >= 1
                      ? "active text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight"
                      : " text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight p-3"
                  }
                >
                  AR/VR Services{" "}
                </div>
              </div>
              <div className=" stick_list widescreen:w-full w-[197px] h-[412px] left-[55px] top-[51px] absolute flex-col justify-start items-start gap-[4px] inline-flex max-xl:flex-row max-xl:flex-wrap  max-xl:w-full  max-xl:h-[200px]  max-lg:relative max-lg:left-[0]">
                <Link
                  scroll={false}
                  href="#immersive-experiences"
                  onClick={scrollToMobileGameu}
                  className={
                    activeSection === 2
                      ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  }
                >
                  <div className="w-[153.widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[120%] 52px] widescreen:w-full opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                    Immersive Experiences{" "}
                  </div>
                </Link>
                <Link
                  scroll={false}
                  href="#ar-vr-app-development"
                  onClick={scrollTodesktopgame}
                  className={
                    activeSection === 3
                      ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  }
                >
                  <div className="widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[120%] w-[153.52px] widescreen:w-full opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                    AR/VR App Development{" "}
                  </div>
                </Link>
                <Link
                  scroll={false}
                  href="#vr-product-prototyping"
                  onClick={scrollTounreal}
                  // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  className={
                    activeSection === 4
                      ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  }
                >
                  <div className="widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[120%] w-[153.52px] widescreen:w-full opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                    VR Product Prototyping{" "}
                  </div>
                </Link>
                <Link
                  scroll={false}
                  href="#web-ar-vr-integration"
                  onClick={scrollTovr4}
                  // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  className={
                    activeSection === 5
                      ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  }
                >
                  <div className="wwidescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[120%] -[153.52px] widescreen:w-full opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                    Web AR/VR Integration{" "}
                  </div>
                </Link>
                <Link
                  scroll={false}
                  href="#ar-for-ecommerce"
                  onClick={scrollTovr5}
                  // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  className={
                    activeSection === 6
                      ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  }
                >
                  <div className="widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[120%] w-[153.52px] widescreen:w-full opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                    AR for E-commerce{" "}
                  </div>
                </Link>
                <Link
                  scroll={false}
                  href="#ar-navigation-solutions"
                  onClick={scrollTovr6}
                  // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  className={
                    activeSection === 7
                      ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  }
                >
                  <div className="widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[120%] w-[153.52px] widescreen:w-full opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                    AR Navigation Solutions{" "}
                  </div>
                </Link>
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
export default VR;
