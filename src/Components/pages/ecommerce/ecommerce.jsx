"use client";
import Hero from "./hero/hero";
import gsap from "gsap";
import ESection from "./ecommerceSection/ecommerceSection";
import Explore from "../production/Explore";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Footer from "../../Footer/Footer";
import Head from "next/head";

const Ecommerce = () => {
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
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Services - Ecommerce Marketplace Development</title>
        <meta
          name="description"
          content="Discover Codelinear's Ecommerce marketplace development services, tailored to help businesses create scalable, feature-rich online marketplaces. Learn how we leverage cutting-edge technologies to deliver innovative solutions that drive sales and customer engagement."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/services/ecommerce-marketplace-development"
        />
        <meta
          name="keywords"
          content="eCommerce marketplace development, online marketplaces, eCommerce platforms, digital marketplaces, marketplace solutions, marketplace features, technology solutions, sales growth, customer engagement"
        />
      </Head>
      <div className="flex justify-between">
        <div className="left">
          <div className="section">
            <Hero />
          </div>
          <div className="section" id="produc">
            <ESection />
          </div>
        </div>
        <div className="right sticky max-xl:hidden h-[600px] top-28 mt-[420px]  max-xl:w-full bg-white max-xl:h-[300px] max-xl:top-10  max-md:h-[400px] pr-[80px]">
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
            <div className=" w-[232px] h-[463px] relative widescreen:w-[350px] left-[0px] max-xl:h-[200px] max-xl:w-full">
              <div className="w-[232px] widescreen:w-full overview h-[35px] p-2 top-0 absolute rounded-lg justify-center items-center gap-[4px] inline-flex max-xl:flex-wrap ">
                <div
                  className={
                    activeSection >= 1
                      ? "active text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight"
                      : " text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-tight p-3"
                  }
                >
                  Ecommerce Marketplace Development{" "}
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
export default Ecommerce;
