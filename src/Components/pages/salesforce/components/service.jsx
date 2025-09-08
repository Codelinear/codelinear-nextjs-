import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import img from "../assets/Frame 1000002801.jpg";
import SFCS from "./sfcs";
import Migrate from "./migrate";
import Workflow from "./workflow";
import Integrate from "./integrate";
import Support from "./support";
import Einsten from "./einsten";
import Image from "next/image";

const Service = () => {
  const produc = useRef(null);
  const appdeve = useRef(null);
  const consult = useRef(null);
  const ecommerce = useRef(null);
  const support = useRef(null);
  const ea = useRef(null);
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
  const scrollTosupport = () => {
    if (support.current) {
      support.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToea = () => {
    if (ea.current) {
      ea.current.scrollIntoView({ behavior: "smooth" });
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="app-devepage mt-[40px]">
        <div className="w-full h-full pl-[80px] pb-[29px] bg-white justify-center items-center gap-[108px] inline-flex max-lg:px-[40px] max-sm:px-[20px]">
          <div className="flex justify-between w-full">
            <div className="left">
              <div>
                <div className="section w-full self-stretch justify-center items-center inline-flex max-lg:justify-start">
                  <Image
                    className="w-[727.57px] widescreen:w-[65%] widestscreen:w-[60%] widescreen:h-auto h-[717.49px] max-lg:w-[100%] max-lg:h-full"
                    src={img}
                    alt="Salesforce Services"
                  />
                </div>
              </div>

              <div>
                <div className="w-full mb-[70px] max-sm:mb-0 relative bg-white section">
                  <div className="w-[670px] letter-spacing-6 mt-[130px] max-sm:mt-[40px]  text-black text-[36px] font-normal font-['Graphik'] leading-[120%] max-lg:w-[100%] max-sm:text-[24px] max-sm:tracking-tight max-sm:mt-[100px]">
                    We're not just about CRM; we're about reimagining
                    possibilities. Our Salesforce services are infused with
                    innovation, ensuring your business stays ahead in a rapidly
                    evolving digital landscape.{" "}
                  </div>
                  <Link
                    scroll={false}
                    href="/contact-us"
                    onClick={scrollToTop}
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
                  <SFCS />
                </div>
                <div id="progressive" className="section" ref={appdeve}>
                  <Migrate />
                </div>
                <div id="progressive" className="section" ref={support}>
                  <Support />
                </div>
                <div id="progressive" className="section" ref={ea}>
                  <Einsten />
                </div>
                <div id="sass" className="section" ref={consult}>
                  <Workflow />
                </div>
                <div id="apidev" className="section" ref={ecommerce}>
                  <Integrate />
                </div>
              </div>
            </div>
            <div className="right sticky max-xl:hidden h-[600px] top-28 mt-0  max-xl:w-full bg-white max-xl:h-[300px] max-xl:top-10  max-md:h-[400px] pr-[80px]">
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
                <div className=" w-[222px] h-[463px] relative left-[30px] max-xl:h-[200px] max-xl:w-full">
                  <div className="w-[200px] overview h-[35px] p-2 top-0 absolute rounded-lg justify-center items-center gap-2 inline-flex max-xl:flex-wrap ">
                    <div
                      className={
                        activeSection >= 1
                          ? "active text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight"
                          : " text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight p-3"
                      }
                    >
                      Salesforce Services{" "}
                    </div>
                  </div>
                  <div className=" stick_list mt-[1px] w-[197px] h-[412px] left-[25px] top-[51px] absolute flex-col justify-start items-start gap-[4px] inline-flex max-xl:flex-row max-xl:flex-wrap  max-xl:w-full  max-xl:h-[200px]  max-lg:relative max-lg:left-[0]">
                    <Link
                      scroll={false}
                      href="#salesforce-consulting-and-strategy"
                      onClick={scrollToMobileGameu}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 2
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[157.52px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        Salesforce Consulting and Strategy{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#upgrades-and-migrations"
                      onClick={scrollTodesktopgame}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 3
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[157.52px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        Upgrades and Migrations{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#salesforce-support"
                      onClick={scrollTosupport}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 4
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[157.52px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        Salesforce support{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#salesforce-einstein-analytics"
                      onClick={scrollToea}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 5
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[157.52px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        Salesforce Einstein Analytics{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#workflow-and-process-automation"
                      onClick={scrollTounreal}
                      // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      className={
                        activeSection === 6
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[157.52px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        Workflow and Process Automation{" "}
                      </div>
                    </Link>
                    <Link
                      scroll={false}
                      href="#integration-service"
                      onClick={scrollTounity}
                      className={
                        activeSection === 7
                          ? "active p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                          : "active1 p-2 rounded-lg widescreen:text-[20px] widestscreen:text-[24px]  justify-center items-center gap-2 inline-flex"
                      }
                    >
                      <div className="w-[157.72px] opacity-80 text-black text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                        Integration Service{" "}
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

export default Service;
