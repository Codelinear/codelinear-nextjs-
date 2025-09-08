"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import "./homeservice.scss";
import SP from "../../../../../assets/homeassets/Group 1000001871.svg";
import SC from "../../../../../assets/homeassets/Group.svg";
import AI from "../../../../../assets/homeassets/Group 1000001873.svg";
import arrow from "../../../../../assets/homeassets/3 (1).svg";
import Link from "next/link";
// import Link from "next/link";;
const Homeservice = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  let [width, setWidth] = useState(0);
  useEffect(() => {
    // ✅ This runs only on the client
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Listen to window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {width <= 640 ? (
        <div className="homeserv relative">
          <div className="w-full flex-wrap h-[1808px] px-20 py-[50px] bg-neutral-50 flex-col justify-center items-center inline-flex max-lg:h-full max-lg:p-10 max-md:w-full max-sm:pt-[48px]  max-md:p-4">
            <div className="self-stretch flex-wrap justify-start items-start gap-[19px] inline-flex max-md:w-full">
              <div className="h-[150px] pl-[0px] pr-[89.78px] pt-[30px] pb-[31px] flex-col justify-start items-center inline-flex  w-full  max-lg:p-10  max-lg:  max-md:w-full  max-sm:h-[80px] max-md:p-2">
                <div className="self-stretch flexcol justify-between  items-start gap-10 inline-flex  max-md:flex-wrap">
                  <div className="w-[300.22px] text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-[350px]:w-full  max-sm:text-[32px]">
                    Our Services{" "}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-[18px] max-sm:gap-[12px]">
                <Link
                  href={"/services/product-design-and-innovation"}
                  onClick={scrollToTop}
                  className=" service-cards w-[32px] h-[32px] px-[17px]  py-[21px] bg-white flex-col justify-between items-start inline-flex  transitionall text-black    max-lg:w-full"
                >
                  <div className=" w-[32px] h-[32px] justify-center items-center inline-flex">
                    <div className=" w-[32px] h-[32px] relative flex-col justify-start items-start flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 63 63"
                        fill="none"
                      >
                        <path
                          d="M22.5328 54.9939L2.35669 60.6432L8.00599 40.4672L44.9506 3.70195C45.368 3.2749 45.8671 2.93559 46.4172 2.70394C46.9678 2.47228 47.5592 2.35295 48.1564 2.35295C48.7536 2.35295 49.345 2.47228 49.8955 2.70394C50.4457 2.93559 50.9447 3.2749 51.3621 3.70195L59.298 11.6827C59.7182 12.0995 60.0517 12.5954 60.2795 13.1417C60.5073 13.6881 60.6243 14.2742 60.6243 14.866C60.6243 15.4579 60.5073 16.044 60.2795 16.5903C60.0517 17.1367 59.7182 17.6326 59.298 18.0494L22.5328 54.9939Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-col justify-end items-start gap-6 inline-flex">
                    <div className="w-[340px] flex-col justify-between items-start flex gap-6 max-lg:w-full">
                      <div className="service-heading  text-2xl font-normal font-['Graphik'] leading-[28.80px]">
                        Product Design and Innovation{" "}
                      </div>
                    </div>
                    <div className=" arrow-svg w-[40px] h-[16px] rounded-[54px] border border-black justify-center items-center inline-flex">
                      <div className="w-[40px] h-[16px] relative -rotate-180 flex-col justify-center items-center flex">
                        <Image
                          className=" rotate-180 w-[18px] absolute -top[25px]"
                          src={arrow}
                          alt="Product Design and Innovation"
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href={"/services/app-development-and-modernization"}
                  onClick={scrollToTop}
                  className=" service-cards w-[32px] h-[32px] px-[17px]  py-[21px] bg-white flex-col justify-between items-start inline-flex  transitionall text-black    max-lg:w-full"
                >
                  <div className=" w-[32px] h-[32px] justify-center items-center inline-flex">
                    <div className=" w-[32px] h-[32px] relative flex-col justify-start items-start flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 63 64"
                        fill="none"
                      >
                        <path
                          d="M14.572 27.3395C21.3818 27.3395 26.9021 21.8192 26.9021 15.0094C26.9021 8.19972 21.3818 2.67934 14.572 2.67934C7.76233 2.67934 2.24194 8.19972 2.24194 15.0094C2.24194 21.8192 7.76233 27.3395 14.572 27.3395Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M48.1997 27.3396C55.0095 27.3396 60.5298 21.8192 60.5298 15.0095C60.5298 8.19974 55.0095 2.67935 48.1997 2.67935C41.39 2.67935 35.8696 8.19974 35.8696 15.0095C35.8696 21.8192 41.39 27.3396 48.1997 27.3396Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.572 60.9671C21.3818 60.9671 26.9021 55.4468 26.9021 48.637C26.9021 41.8273 21.3818 36.3069 14.572 36.3069C7.76233 36.3069 2.24194 41.8273 2.24194 48.637C2.24194 55.4468 7.76233 60.9671 14.572 60.9671Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M48.1997 60.9671C55.0095 60.9671 60.5298 55.4468 60.5298 48.637C60.5298 41.8273 55.0095 36.3069 48.1997 36.3069C41.39 36.3069 35.8696 41.8273 35.8696 48.637C35.8696 55.4468 41.39 60.9671 48.1997 60.9671Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-col justify-end items-start gap-6 inline-flex">
                    <div className="w-[340px] flex-col justify-between items-start flex gap-6 max-lg:w-full">
                      <div className="service-heading  text-2xl font-normal font-['Graphik'] leading-[28.80px]">
                        App Development and Modernization{" "}
                      </div>
                    </div>
                    <div className=" arrow-svg w-[40px] h-[16px] rounded-[54px] border border-black justify-center items-center inline-flex">
                      <div className="w-[40px] h-[16px] relative -rotate-180 flex-col justify-center items-center flex">
                        <Image
                          className=" rotate-180 w-[18px] absolute -top[25px]"
                          src={arrow}
                          alt=" App Development and Modernization"
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href={"/services/technology-consulting"}
                  onClick={scrollToTop}
                  className=" service-cards w-[32px] h-[32px] px-[17px]  py-[21px] bg-white flex-col justify-between items-start inline-flex  transitionall text-black    max-lg:w-full"
                >
                  <div className=" w-[32px] h-[32px] justify-center items-center inline-flex">
                    <div className=" w-[32px] h-[32px] relative flex-col justify-start items-start flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 63 63"
                        fill="none"
                      >
                        <path
                          d="M17.7901 43.7702C12.6037 39.7006 9.26904 33.3739 9.26904 26.2692C9.26904 13.9911 19.222 4.03812 31.5001 4.03812C43.7782 4.03812 53.7311 13.9911 53.7311 26.2692C53.7311 33.3739 50.3978 39.7006 45.2101 43.7702C44.828 45.2984 44.4046 46.8159 43.9403 48.3211C43.5388 49.6261 42.4548 50.5742 41.096 50.7168C39.2744 50.9064 36.2026 51.1156 31.5001 51.1156C26.7976 51.1156 23.7258 50.9064 21.9041 50.7168C20.5454 50.5742 19.4613 49.6261 19.0612 48.3197C18.6859 47.0997 18.2112 45.4689 17.7901 43.7702Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.6765 50.6841C21.942 52.3972 22.2179 53.956 22.4481 55.1878C22.775 56.9205 24.0068 58.3119 25.75 58.5748C27.1179 58.7827 29.018 58.9619 31.5 58.9619C33.8604 58.9619 35.7998 58.7997 37.2762 58.6062C39.3476 58.3342 40.7991 56.6106 41.0241 54.534L41.4438 50.6605"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M44.5771 24.9615C44.5771 17.739 38.7225 11.8844 31.5 11.8844"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-col justify-end items-start gap-6 inline-flex">
                    <div className="w-[340px] flex-col justify-between items-start flex gap-14 max-lg:w-full">
                      <div className="service-heading  text-2xl font-normal font-['Graphik'] leading-[28.80px]">
                        Technology Consulting{" "}
                      </div>
                    </div>
                    <div className=" arrow-svg w-[40px] h-[16px] rounded-[54px] border border-black justify-center items-center inline-flex">
                      <div className="w-[40px] h-[16px] relative -rotate-180 flex-col justify-center items-center flex">
                        <Image
                          className=" rotate-180 w-[18px] absolute -top[25px]"
                          src={arrow}
                          alt="Technology Consulting"
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href={"/services/artificial-intelligence-services"}
                  onClick={scrollToTop}
                  className=" service-cards w-[32px] h-[32px] px-[17px]  py-[21px] bg-white flex-col justify-between items-start inline-flex  transitionall text-black    max-lg:w-full"
                >
                  <div className=" w-[32px] h-[32px] justify-center items-center inline-flex">
                    <div className=" w-[32px] h-[32px] relative flex-col justify-start items-start flex">
                      <Image src={AI} alt="" />
                    </div>
                  </div>
                  <div className="flex-col justify-end items-start gap-6 inline-flex">
                    <div className="w-[340px] flex-col justify-between items-start flex gap-6 max-lg:w-full">
                      <div className="service-heading  text-2xl font-normal font-['Graphik'] leading-[28.80px]">
                        Artificial Intelligence (AI) services{" "}
                      </div>
                    </div>
                    <div className=" arrow-svg w-[40px] h-[16px] rounded-[54px] border border-black justify-center items-center inline-flex">
                      <div className="w-[40px] h-[16px] relative -rotate-180 flex-col justify-center items-center flex">
                        <Image
                          className=" rotate-180 w-[18px] absolute -top[25px]"
                          src={arrow}
                          alt="Artificial Intelligence (AI) services"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/services/ecommerce-marketplace-development"}
                  onClick={scrollToTop}
                  className=" service-cards w-[32px] h-[32px] px-[17px]  py-[21px] bg-white flex-col justify-between items-start inline-flex  transitionall text-black    max-lg:w-full"
                >
                  <div className=" w-[32px] h-[32px] justify-center items-center inline-flex">
                    <div className=" w-[32px] h-[32px] relative flex-col justify-start items-start flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 63 63"
                        fill="none"
                      >
                        <path
                          d="M2.27563 2.24179H13.2253L17.126 41.0247C17.2881 42.0938 17.8312 43.0683 18.6551 43.7686C19.479 44.469 20.5283 44.8478 21.6096 44.8357H49.8561C50.8339 44.8868 51.8015 44.6163 52.6108 44.0658C53.4205 43.5153 54.0276 42.7149 54.3396 41.7869L60.3028 23.8526C60.5252 23.1784 60.5844 22.4609 60.475 21.7594C60.366 21.0579 60.0916 20.3923 59.6751 19.8174C59.2411 19.2062 58.6605 18.7136 57.987 18.3846C57.3136 18.0556 56.568 17.9008 55.8192 17.9343H14.7945"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M49.0938 60.5282C47.8559 60.5282 46.8521 59.5243 46.8521 58.2864C46.8521 57.0485 47.8559 56.0446 49.0938 56.0446C50.3317 56.0446 51.3356 57.0485 51.3356 58.2864C51.3356 59.5243 50.3317 60.5282 49.0938 60.5282Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.9508 60.5282C18.7126 60.5282 17.709 59.5243 17.709 58.2864C17.709 57.0485 18.7126 56.0446 19.9508 56.0446C21.1889 56.0446 22.1926 57.0485 22.1926 58.2864C22.1926 59.5243 21.1889 60.5282 19.9508 60.5282Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-col justify-end items-start gap-6 inline-flex">
                    <div className="w-[340px] flex-col justify-between items-start flex gap-6 max-lg:w-full">
                      <div className="service-heading  text-2xl font-normal font-['Graphik'] leading-[28.80px]">
                        Ecommerce Marketplace Development{" "}
                      </div>
                    </div>
                    <div className=" arrow-svg w-[40px] h-[16px] rounded-[54px] border border-black justify-center items-center inline-flex">
                      <div className="w-[40px] h-[16px] relative -rotate-180 flex-col justify-center items-center flex">
                        <Image
                          className=" rotate-180 w-[18px] absolute -top[25px]"
                          src={arrow}
                          alt="Ecommerce Marketplace Development"
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href={"/services/cloud-engineering"}
                  onClick={scrollToTop}
                  className=" service-cards w-[32px] h-[32px] px-[17px]  py-[21px] bg-white flex-col justify-between items-start inline-flex  transitionall text-black    max-lg:w-full"
                >
                  <div className=" w-[32px] h-[32px] justify-center items-center inline-flex">
                    <div className=" w-[32px] h-[32px] relative flex-col justify-start items-start flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 63 63"
                        fill="none"
                      >
                        <path
                          d="M49.3192 29.1432C46.8945 29.1464 44.5356 29.9327 42.5938 31.385C42.5938 27.3946 41.4105 23.4937 39.1936 20.1758C36.9766 16.8578 33.8255 14.2718 30.1388 12.7447C26.4521 11.2177 22.3954 10.8181 18.4816 11.5966C14.5678 12.3751 10.9728 14.2967 8.15114 17.1184C5.32949 19.9401 3.40788 23.5351 2.62938 27.4489C1.85089 31.3626 2.25044 35.4194 3.77752 39.1061C5.30461 42.7927 7.8906 45.9436 11.2086 48.1607C14.5265 50.3779 18.4273 51.5611 22.4178 51.5611H49.3192C52.2918 51.5611 55.1429 50.3801 57.2453 48.2782C59.3472 46.1759 60.5281 43.3249 60.5281 40.3521C60.5281 37.3794 59.3472 34.5283 57.2453 32.4262C55.1429 30.3241 52.2918 29.1432 49.3192 29.1432Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-col justify-end items-start gap-6 inline-flex">
                    <div className="w-[340px] flex-col justify-between items-start flex gap-16 max-lg:w-full">
                      <div className="service-heading  text-2xl font-normal font-['Graphik'] leading-[28.80px]">
                        Cloud Engineering{" "}
                      </div>
                    </div>
                    <div className=" arrow-svg w-[40px] h-[16px] rounded-[54px] border border-black justify-center items-center inline-flex">
                      <div className="w-[40px] h-[16px] relative -rotate-180 flex-col justify-center items-center flex">
                        <Image
                          className=" rotate-180 w-[18px] absolute -top[25px]"
                          src={arrow}
                          alt="Cloud Engineering"
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href={"/services/game-development"}
                  onClick={scrollToTop}
                  className=" service-cards w-[32px] h-[32px] px-[17px]  py-[21px] bg-white flex-col justify-between items-start inline-flex  transitionall text-black    max-lg:w-full"
                >
                  <div className=" w-[32px] h-[32px] justify-center items-center inline-flex">
                    <div className=" w-[32px] h-[32px] relative flex-col justify-start items-start flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 63 63"
                        fill="none"
                      >
                        <path
                          d="M19.729 22.5043V32.8654"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M24.9097 27.6852H14.5486"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.6331 23.368L3.78501 40.0008C3.11132 46.0642 7.85749 51.3669 13.958 51.3669C17.835 51.3669 21.3792 49.1762 23.113 45.7087L24.7244 42.4859H38.0458L39.6572 45.7087C41.3911 49.1762 44.9354 51.3669 48.8123 51.3669C54.9127 51.3669 59.659 46.0642 58.9851 40.0008L57.137 23.368C56.3801 16.5561 50.6223 11.4026 43.7687 11.4026H19.0015C12.1478 11.4026 6.38997 16.5561 5.6331 23.368Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M46.9266 24.7246C46.3137 24.7246 45.8169 24.2275 45.8169 23.6144C45.8169 23.0013 46.3137 22.5043 46.9266 22.5043"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M46.9265 24.7246C47.5399 24.7246 48.0366 24.2275 48.0366 23.6144C48.0366 23.0013 47.5399 22.5043 46.9265 22.5043"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M39.156 30.2752C39.156 29.6621 39.653 29.1651 40.2661 29.1651C40.8792 29.1651 41.3762 29.6621 41.3762 30.2752"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M39.1565 30.2748C39.1565 30.888 39.6535 31.385 40.2666 31.385C40.8797 31.385 41.3767 30.888 41.3767 30.2748"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-col justify-end items-start gap-6 inline-flex">
                    <div className="w-[340px] flex-col justify-between items-start flex gap-16 max-lg:w-full">
                      <div className="service-heading  text-2xl font-normal font-['Graphik'] leading-[28.80px]">
                        Game Development{" "}
                      </div>
                    </div>
                    <div className=" arrow-svg w-[40px] h-[16px] rounded-[54px] border border-black justify-center items-center inline-flex">
                      <div className="w-[40px] h-[16px] relative -rotate-180 flex-col justify-center items-center flex">
                        <Image
                          className=" rotate-180 w-[18px] absolute -top[25px]"
                          src={arrow}
                          alt="Game Development"
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href={"/services/ar-vr-services"}
                  onClick={scrollToTop}
                  className=" service-cards w-[32px] h-[32px] px-[17px]  py-[21px] bg-white flex-col justify-between items-start inline-flex  transitionall text-black    max-lg:w-full"
                >
                  <div className=" w-[32px] h-[32px] justify-center items-center inline-flex">
                    <div className=" w-[32px] h-[32px] relative flex-col justify-start items-start flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 63 63"
                        fill="none"
                      >
                        <path
                          d="M14.7316 60.5282V48.8597C7.26514 44.5405 2.2417 36.4677 2.2417 27.2217C2.2417 13.4256 13.4256 2.24176 27.2216 2.24176C36.4677 2.24176 44.5405 7.2652 48.8596 14.7317"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M39.7117 60.5286V50.1205H48.0382C50.3378 50.1205 52.2016 48.2566 52.2016 45.957V35.5489"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M25.136 25.1401H2.32324"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M25.1401 25.1397C25.1401 19.3913 29.8001 14.7314 35.5484 14.7314H56.0446C58.5209 14.7314 60.5282 16.7388 60.5282 19.215V31.0644C60.5282 33.5406 58.5209 35.548 56.0446 35.548H35.5484C29.8001 35.548 25.1401 30.888 25.1401 25.1397Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M41.7932 14.7314V35.548"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-col justify-end items-start gap-6 inline-flex">
                    <div className="w-[340px] flex-col justify-between items-start flex gap-6 max-lg:w-full">
                      <div className="service-heading  text-2xl font-normal font-['Graphik'] leading-[28.80px]">
                        AR/VR Services{" "}
                      </div>
                    </div>
                    <div className=" arrow-svg w-[40px] h-[16px] rounded-[54px] border border-black justify-center items-center inline-flex">
                      <div className="w-[40px] h-[16px] relative -rotate-180 flex-col justify-center items-center flex">
                        <Image
                          className=" rotate-180 w-[18px] absolute -top[25px]"
                          src={arrow}
                          alt="AR/VR Services"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/services/low-code-and-no-code"}
                  onClick={scrollToTop}
                  className=" service-cards w-[32px] h-[32px] px-[17px]  py-[21px] bg-white flex-col justify-between items-start inline-flex  transitionall text-black    max-lg:w-full"
                >
                  <div className=" w-[32px] h-[32px] justify-center items-center inline-flex">
                    <div className=" w-[32px] h-[32px] relative flex-col justify-start items-start flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 63 63"
                        fill="none"
                      >
                        <path
                          d="M22.5076 15.6268H6.81511C5.62598 15.6268 4.48559 16.0992 3.64475 16.94C2.80391 17.7808 2.33154 18.9213 2.33154 20.1103V55.9791C2.33154 57.1682 2.80391 58.3084 3.64475 59.1495C4.48559 59.9901 5.62598 60.4627 6.81511 60.4627H47.1672C49.6434 60.4627 51.6507 58.455 51.6507 55.9791V38.0446"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.33154 26.8357H31.4748"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5405 49.2538L20.2659 42.5282L13.5405 35.8029"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M26.9912 49.2538H33.7166"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M33.1605 17.7038C31.5871 17.4301 31.5871 15.1713 33.1605 14.8976C38.8608 13.9059 43.3945 9.56419 44.6318 3.9122L44.7266 3.47895C45.0671 1.9239 47.281 1.91423 47.6353 3.46624L47.7505 3.97114C49.0332 9.59647 53.5684 13.9016 59.2526 14.8904C60.834 15.1656 60.834 17.4358 59.2526 17.7109C53.5684 18.6999 49.0332 23.005 47.7505 28.6303L47.6353 29.1352C47.281 30.6872 45.0671 30.6775 44.7266 29.1225L44.6318 28.6892C43.3945 23.0372 38.8608 18.6955 33.1605 17.7038Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-col justify-end items-start gap-6 inline-flex">
                    <div className="w-[340px] flex-col justify-between items-start flex gap-6 max-lg:w-full">
                      <div className="service-heading  text-2xl font-normal font-['Graphik'] leading-[28.80px]">
                        Low-code and No-code{" "}
                      </div>
                    </div>
                    <div className=" arrow-svg w-[40px] h-[16px] rounded-[54px] border border-black justify-center items-center inline-flex">
                      <div className="w-[40px] h-[16px] relative -rotate-180 flex-col justify-center items-center flex">
                        <Image
                          className=" rotate-180 w-[18px] absolute -top[25px]"
                          src={arrow}
                          alt="Low-code and No-code"
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href={"/services/salesforce-services"}
                  onClick={scrollToTop}
                  className=" service-cards w-[32px] h-[32px] px-[17px]  py-[21px] bg-white flex-col justify-between items-start inline-flex  transitionall text-black    max-lg:w-full"
                >
                  <div className=" w-[32px] h-[32px] justify-center items-center inline-flex">
                    <div className=" w-[32px] h-[32px] relative flex-col justify-start items-start flex">
                      <Image src={SC} alt="" />
                    </div>
                  </div>
                  <div className="flex-col justify-end items-start gap-6 inline-flex">
                    <div className="w-[340px] flex-col justify-between items-start flex gap-6 max-lg:w-full">
                      <div className="service-heading  text-2xl font-normal font-['Graphik'] leading-[28.80px]">
                        Salesforce Services{" "}
                      </div>
                    </div>
                    <div className=" arrow-svg w-[40px] h-[16px] rounded-[54px] border border-black justify-center items-center inline-flex">
                      <div className="w-[40px] h-[16px] relative -rotate-180 flex-col justify-center items-center flex">
                        <Image
                          className=" rotate-180 w-[18px] absolute -top[25px]"
                          src={arrow}
                          alt="Salesforce Services"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/services/microsoft-sharepoint-services"}
                  onClick={scrollToTop}
                  className=" service-cards w-[32px] h-[32px] px-[17px]  py-[21px] bg-white flex-col justify-between items-start inline-flex  transitionall text-black    max-lg:w-full"
                >
                  <div className=" w-[32px] h-[32px] justify-center items-center inline-flex">
                    <div className=" w-[32px] h-[32px] relative flex-col justify-start items-start flex">
                      <Image src={SP} alt="Microsoft SharePoint services" />
                    </div>
                  </div>
                  <div className="flex-col justify-end items-start gap-6 inline-flex">
                    <div className="w-[340px] flex-col justify-between items-start flex gap-6 max-lg:w-full">
                      <div className="service-heading  text-2xl font-normal font-['Graphik'] leading-[28.80px]">
                        Microsoft SharePoint services{" "}
                      </div>
                    </div>
                    <div className=" arrow-svg w-[40px] h-[16px] rounded-[54px] border border-black justify-center items-center inline-flex">
                      <div className="w-[40px] h-[16px] relative -rotate-180 flex-col justify-center items-center flex">
                        <Image
                          className=" rotate-180 w-[18px] absolute -top[25px]"
                          src={arrow}
                          alt="Microsoft SharePoint services"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/services/quality-assurance"}
                  onClick={scrollToTop}
                  className=" service-cards w-[32px] h-[32px] px-[17px]  py-[21px] bg-white flex-col justify-between items-start inline-flex  transitionall text-black    max-lg:w-full"
                >
                  <div className=" w-[32px] h-[32px] justify-center items-center inline-flex">
                    <div className=" w-[32px] h-[32px] relative flex-col justify-start items-start flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 63 63"
                        fill="none"
                      >
                        <path
                          d="M60.5281 37.9975V47.0775C60.5281 47.672 60.2918 48.2424 59.8717 48.6629C59.4512 49.083 58.8809 49.3193 58.2863 49.3193H4.48348C3.88893 49.3193 3.31872 49.083 2.8983 48.6629C2.47788 48.2424 2.2417 47.672 2.2417 47.0775V11.2089C2.2417 10.6144 2.47788 10.0442 2.8983 9.62378C3.31872 9.20336 3.88893 8.96716 4.48348 8.96716H20.3597"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M26.9013 49.3193L22.4177 60.5282"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M35.8684 49.3193L40.352 60.5282"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17.9341 60.5282H44.8355"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M46.057 2.92891L49.8049 10.4682C49.8887 10.6589 50.0214 10.8239 50.19 10.9464C50.3581 11.0689 50.5563 11.1445 50.7634 11.1655L59.0872 12.4293C59.3253 12.4602 59.5495 12.5583 59.7337 12.7121C59.918 12.8658 60.0548 13.0688 60.1278 13.2974C60.2009 13.5259 60.2076 13.7706 60.1467 14.0027C60.0861 14.2349 59.9602 14.4449 59.7844 14.6083L53.6397 20.4479C53.5482 20.6228 53.5002 20.8172 53.5002 21.0145C53.5002 21.2119 53.5482 21.4063 53.6397 21.581L54.8166 29.8612C54.8668 30.1005 54.8462 30.3493 54.7579 30.5773C54.6695 30.8053 54.5171 31.0028 54.3185 31.1458C54.1203 31.2888 53.8845 31.3712 53.6406 31.383C53.3962 31.3948 53.1536 31.3354 52.9425 31.2121L45.5338 27.29C45.3424 27.2033 45.1343 27.1586 44.924 27.1586C44.7135 27.1586 44.5055 27.2033 44.3137 27.29L36.9052 31.2121C36.694 31.3354 36.4515 31.3948 36.2073 31.383C35.963 31.3712 35.7274 31.2888 35.529 31.1458C35.3307 31.0028 35.1781 30.8053 35.0897 30.5773C35.0014 30.3493 34.9811 30.1005 35.0312 29.8612L36.4258 21.581C36.4857 21.3889 36.4973 21.1848 36.4592 20.9871C36.4212 20.7894 36.3349 20.6042 36.2079 20.4479L30.0632 14.5647C29.9002 14.3996 29.7858 14.1928 29.7325 13.967C29.6792 13.7412 29.6891 13.5051 29.7611 13.2845C29.8332 13.064 29.9645 12.8675 30.1408 12.7167C30.317 12.5658 30.5314 12.4664 30.7604 12.4293L39.0841 11.2091C39.2914 11.1881 39.4893 11.1125 39.6578 10.99C39.8262 10.8675 39.9591 10.7025 40.0429 10.5118L43.7908 2.97249C43.891 2.75907 44.049 2.57796 44.2469 2.44964C44.4447 2.32133 44.6745 2.25092 44.9101 2.24639C45.146 2.24185 45.3782 2.30337 45.5809 2.42399C45.7835 2.5446 45.9485 2.7195 46.057 2.92891Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-col justify-end items-start gap-6 inline-flex">
                    <div className="w-[340px] flex-col justify-between items-start flex gap-6 max-lg:w-full">
                      <div className="service-heading  text-2xl font-normal font-['Graphik'] leading-[28.80px]">
                        Quality Assurance{" "}
                      </div>
                    </div>
                    <div className=" arrow-svg w-[40px] h-[16px] rounded-[54px] border border-black justify-center items-center inline-flex">
                      <div className="w-[40px] h-[16px] relative -rotate-180 flex-col justify-center items-center flex">
                        <Image
                          className=" rotate-180 w-[18px] absolute -top[25px]"
                          src={arrow}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/services"
                  onClick={scrollToTop}
                  className="px-8 py-4 mt-[20px] rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-full mb-10"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    Explore all services
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="homeserv relative">
          <div className="w-full flex-wrap px-20 py-[80px] bg-neutral-50 flex-col justify-center items-center inline-flex max-lg:h-full max-lg:p-10 max-md:w-full   max-">
            <div className="flex-wrap items-start justify-between inline-flex max-md:w-full max-[1320px]:justify-center max-[1320px]:gap-[20px]">
              <div className="h-[150px] pl-[0px] pr-[] pt-[30px] pb-[31px] flex-col justify-start items-center inline-flex  w-full  max-lg:px-0  max-lg:  max-md:w-full  max-[376px]:h-[400px] max-md:p-2">
                <div className="self-stretch flexcol justify-between  items-start gap-10 inline-flex  max-md:flex-wrap">
                  <div className="w-[300.22px] letter-spacing-2 text-black text-[48px] font-normal font-['Graphik'] leading-[120%] max-[350px]:w-full">
                    Our Services{" "}
                  </div>

                  <Link
                    href="/services"
                    onClick={scrollToTop}
                    className="px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                  >
                    <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                      Explore all services
                    </div>
                  </Link>
                </div>
              </div>

              <Link
                href={"/services/product-design-and-innovation"}
                onClick={scrollToTop}
                className="mb-[17px] service-cards w-[32.451%] h-[392px] widestscreen:h-[500px] pl-[30px] pr-[30px] py-[45px] bg-white flex-col items-start gap-[46.12px] inline-flex  transitionall text-black"
              >
                <div className="justify-center items-center inline-flex">
                  <div className="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 63 63"
                      fill="none"
                    >
                      <path
                        d="M22.5328 54.9939L2.35669 60.6432L8.00599 40.4672L44.9506 3.70195C45.368 3.2749 45.8671 2.93559 46.4172 2.70394C46.9678 2.47228 47.5592 2.35295 48.1564 2.35295C48.7536 2.35295 49.345 2.47228 49.8955 2.70394C50.4457 2.93559 50.9447 3.2749 51.3621 3.70195L59.298 11.6827C59.7182 12.0995 60.0517 12.5954 60.2795 13.1417C60.5073 13.6881 60.6243 14.2742 60.6243 14.866C60.6243 15.4579 60.5073 16.044 60.2795 16.5903C60.0517 17.1367 59.7182 17.6326 59.298 18.0494L22.5328 54.9939Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between">
                  <div className="w-[340px] widescreen:w-full h-[143px] flex-col justify-between items-start flex max-[800px]:h-[174px] widescreen:h-[210px] max-[1310px]:w-full">
                    <div className="service-heading widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] letter-spacing-4 text-[24px] font-normal font-['Graphik'] leading-[28.80px]">
                      Product Design and Innovation{" "}
                    </div>
                    <div className="w-[340px] bigscreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px]  leading-[150%] opacity-80  text-base font-normal font-['Graphik'] leading-normal  max-[1310px]:w-full">
                      Sculpt digital products that stand out from the crowd,
                      spark emotions, and redefine what's possible.{" "}
                    </div>
                  </div>
                  <div className=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex">
                    <div className="w-[31px] h-[21px] relative  flex-col justify-start items-start flex">
                      <Image className="w-[31px] h-[21px]" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href={"/services/app-development-and-modernization"}
                onClick={scrollToTop}
                className="mb-[17px] service-cards w-[32.4451%] h-[392px] widestscreen:h-[500px] pl-[30px] pr-[30px] py-[45px] bg-white flex-col items-start gap-[46.12px] inline-flex  transitionall text-black"
              >
                <div className="justify-center items-center inline-flex">
                  <div className="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="63"
                      height="64"
                      viewBox="0 0 63 64"
                      fill="none"
                    >
                      <path
                        d="M14.572 27.3395C21.3818 27.3395 26.9021 21.8192 26.9021 15.0094C26.9021 8.19972 21.3818 2.67934 14.572 2.67934C7.76233 2.67934 2.24194 8.19972 2.24194 15.0094C2.24194 21.8192 7.76233 27.3395 14.572 27.3395Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M48.1997 27.3396C55.0095 27.3396 60.5298 21.8192 60.5298 15.0095C60.5298 8.19974 55.0095 2.67935 48.1997 2.67935C41.39 2.67935 35.8696 8.19974 35.8696 15.0095C35.8696 21.8192 41.39 27.3396 48.1997 27.3396Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.572 60.9671C21.3818 60.9671 26.9021 55.4468 26.9021 48.637C26.9021 41.8273 21.3818 36.3069 14.572 36.3069C7.76233 36.3069 2.24194 41.8273 2.24194 48.637C2.24194 55.4468 7.76233 60.9671 14.572 60.9671Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M48.1997 60.9671C55.0095 60.9671 60.5298 55.4468 60.5298 48.637C60.5298 41.8273 55.0095 36.3069 48.1997 36.3069C41.39 36.3069 35.8696 41.8273 35.8696 48.637C35.8696 55.4468 41.39 60.9671 48.1997 60.9671Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between">
                  <div className="w-[340px] widescreen:w-full h-[143px] flex-col justify-between items-start flex max-[800px]:h-[174px] widescreen:h-[210px] max-[1025px]:w-full">
                    <div className="service-heading widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] letter-spacing-4  text-[24px] font-normal font-['Graphik'] leading-[28.80px]">
                      {" "}
                      App Development and Modernization{" "}
                    </div>
                    <div className="w-[340px] leading-[150%] opacity-80 widescreen:text-[20px] widestscreen:text-[24px]  w-[80%] text-base font-normal font-['Graphik'] leading-normal  max-[1025px]:w-full">
                      Build enduring app experiences that captivate users, drive
                      growth, and leave a lasting impact.{" "}
                    </div>
                  </div>
                  <div className=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex">
                    <div className="w-[31px] h-[21px] relative  flex-col justify-start items-start flex">
                      <Image className="w-[31px] h-[21px]" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href={"/services/technology-consulting"}
                onClick={scrollToTop}
                className="mb-[17px] service-cards w-[32.4451%] h-[392px] widestscreen:h-[500px] pl-[30px] pr-[30px] py-[45px] bg-white flex-col items-start gap-[46.12px] inline-flex  transitionall text-black"
              >
                <div className="justify-center items-center inline-flex">
                  <div className="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="63"
                      height="63"
                      viewBox="0 0 63 63"
                      fill="none"
                    >
                      <path
                        d="M17.7901 43.7702C12.6037 39.7006 9.26904 33.3739 9.26904 26.2692C9.26904 13.9911 19.222 4.03812 31.5001 4.03812C43.7782 4.03812 53.7311 13.9911 53.7311 26.2692C53.7311 33.3739 50.3978 39.7006 45.2101 43.7702C44.828 45.2984 44.4046 46.8159 43.9403 48.3211C43.5388 49.6261 42.4548 50.5742 41.096 50.7168C39.2744 50.9064 36.2026 51.1156 31.5001 51.1156C26.7976 51.1156 23.7258 50.9064 21.9041 50.7168C20.5454 50.5742 19.4613 49.6261 19.0612 48.3197C18.6859 47.0997 18.2112 45.4689 17.7901 43.7702Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.6765 50.6841C21.942 52.3972 22.2179 53.956 22.4481 55.1878C22.775 56.9205 24.0068 58.3119 25.75 58.5748C27.1179 58.7827 29.018 58.9619 31.5 58.9619C33.8604 58.9619 35.7998 58.7997 37.2762 58.6062C39.3476 58.3342 40.7991 56.6106 41.0241 54.534L41.4438 50.6605"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M44.5771 24.9615C44.5771 17.739 38.7225 11.8844 31.5 11.8844"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between">
                  <div className="w-[340px] widescreen:w-full h-[143px] flex-col justify-between items-start flex max-[800px]:h-[174px] widescreen:h-[210px] max-[1025px]:w-full">
                    <div className="service-heading letter-spacing-4 widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-[24px] font-normal font-['Graphik'] leading-[28.80px]">
                      Technology Consulting{" "}
                    </div>
                    <div className="w-[340px] leading-[150%] widescreen:text-[20px] widestscreen:text-[24px]  widescreen:w-[80%] widestscreen:text-[24px] widestscreen:mt-[15px] opacity-80  text-base font-normal font-['Graphik'] leading-normal  max-[1025px]:w-full">
                      Our seasoned consultants bring a universal perspective to
                      your unique challenges, offering insights that redefine
                      possibilities.{" "}
                    </div>
                  </div>
                  <div className=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex">
                    <div className="w-[31px] h-[21px] relative  flex-col justify-start items-start flex">
                      <Image className="w-[31px] h-[21px]" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href={"/services/artificial-intelligence-services"}
                onClick={scrollToTop}
                className="mb-[17px] service-cards w-[32.4451%] h-[392px] widestscreen:h-[500px] pl-[30px] pr-[30px] py-[45px] bg-white flex-col items-start gap-[46.12px] inline-flex  transitionall text-black  "
              >
                <div className="justify-center items-center inline-flex">
                  <div className="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                    <Image src={AI} alt="" />
                  </div>
                </div>
                <div className="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between">
                  <div className="w-[340px] widescreen:w-full h-[143px] max-[800px]:h-[174px] widescreen:h-[210px] flex-col justify-between items-start flex max-[1025px]:w-full max-[800px]:gap-[20px]">
                    <div className="service-heading letter-spacing-4 widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-[24px] font-normal font-['Graphik'] leading-[28.80px]">
                      Artificial Intelligence (AI) services{" "}
                    </div>
                    <div className="w-[340px] leading-[150%] opacity-80 widescreen:text-[20px] widestscreen:text-[24px]  widescreen:w-[80%] widestscreen:text-[24px] widestscreen:mt-[15px] text-base font-normal font-['Graphik'] leading-normal  max-[1025px]:w-full">
                      Drive business transformation with our cutting-edge
                      Artificial Intelligence services for enhanced efficiency
                      and innovation.{" "}
                    </div>
                  </div>
                  <div className=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex">
                    <div className="w-[31px] h-[21px] relative  flex-col justify-start items-start flex">
                      <Image className="w-[31px] h-[21px]" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={"/services/ecommerce-marketplace-development"}
                onClick={scrollToTop}
                className="mb-[17px] service-cards w-[32.4451%] h-[392px] widestscreen:h-[500px] pl-[30px] pr-[30px] py-[45px] bg-white flex-col items-start gap-[46.12px] inline-flex  transitionall text-black "
              >
                <div className="justify-center items-center inline-flex">
                  <div className="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="63"
                      height="63"
                      viewBox="0 0 63 63"
                      fill="none"
                    >
                      <path
                        d="M2.27563 2.24179H13.2253L17.126 41.0247C17.2881 42.0938 17.8312 43.0683 18.6551 43.7686C19.479 44.469 20.5283 44.8478 21.6096 44.8357H49.8561C50.8339 44.8868 51.8015 44.6163 52.6108 44.0658C53.4205 43.5153 54.0276 42.7149 54.3396 41.7869L60.3028 23.8526C60.5252 23.1784 60.5844 22.4609 60.475 21.7594C60.366 21.0579 60.0916 20.3923 59.6751 19.8174C59.2411 19.2062 58.6605 18.7136 57.987 18.3846C57.3136 18.0556 56.568 17.9008 55.8192 17.9343H14.7945"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M49.0938 60.5282C47.8559 60.5282 46.8521 59.5243 46.8521 58.2864C46.8521 57.0485 47.8559 56.0446 49.0938 56.0446C50.3317 56.0446 51.3356 57.0485 51.3356 58.2864C51.3356 59.5243 50.3317 60.5282 49.0938 60.5282Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.9508 60.5282C18.7126 60.5282 17.709 59.5243 17.709 58.2864C17.709 57.0485 18.7126 56.0446 19.9508 56.0446C21.1889 56.0446 22.1926 57.0485 22.1926 58.2864C22.1926 59.5243 21.1889 60.5282 19.9508 60.5282Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between">
                  <div className="w-[340px] h-[143px] widescreen:w-full flex-col justify-between items-start flex  max-[800px]:h-[174px] widescreen:h-[210px] max-[1025px]:w-full">
                    <div className="service-heading letter-spacing-4 widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] widescreen:w-full w-[280px]  text-[24px] font-normal font-['Graphik'] leading-[28.80px]">
                      Ecommerce Marketplace Development{" "}
                    </div>
                    <div className="w-[340px] leading-[150%] opacity-80 widescreen:text-[20px] widestscreen:text-[24px]  widescreen:w-[80%] widestscreen:text-[24px] widestscreen:mt-[15px] text-base font-normal font-['Graphik'] leading-normal  max-[1025px]:w-full">
                      Elevate your business to new heights with our cutting-edge
                      marketplace development services.{" "}
                    </div>
                  </div>
                  <div className=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex">
                    <div className="w-[31px] h-[21px] relative  flex-col justify-start items-start flex">
                      <Image className="w-[31px] h-[21px]" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href={"/services/cloud-engineering"}
                onClick={scrollToTop}
                className="mb-[17px] service-cards w-[32.4451%] h-[392px] widestscreen:h-[500px] pl-[30px] pr-[30px] py-[45px] bg-white flex-col items-start gap-[46.12px] inline-flex  transitionall text-black "
              >
                <div className="justify-center items-center inline-flex">
                  <div className="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="63"
                      height="63"
                      viewBox="0 0 63 63"
                      fill="none"
                    >
                      <path
                        d="M49.3192 29.1432C46.8945 29.1464 44.5356 29.9327 42.5938 31.385C42.5938 27.3946 41.4105 23.4937 39.1936 20.1758C36.9766 16.8578 33.8255 14.2718 30.1388 12.7447C26.4521 11.2177 22.3954 10.8181 18.4816 11.5966C14.5678 12.3751 10.9728 14.2967 8.15114 17.1184C5.32949 19.9401 3.40788 23.5351 2.62938 27.4489C1.85089 31.3626 2.25044 35.4194 3.77752 39.1061C5.30461 42.7927 7.8906 45.9436 11.2086 48.1607C14.5265 50.3779 18.4273 51.5611 22.4178 51.5611H49.3192C52.2918 51.5611 55.1429 50.3801 57.2453 48.2782C59.3472 46.1759 60.5281 43.3249 60.5281 40.3521C60.5281 37.3794 59.3472 34.5283 57.2453 32.4262C55.1429 30.3241 52.2918 29.1432 49.3192 29.1432Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between">
                  <div className="w-[340px] h-[143px] widescreen:w-full flex-col max-[800px]:h-[174px] widescreen:h-[210px] justify-between items-start flex max-[1025px]:w-full">
                    <div className="service-heading widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] letter-spacing-4  text-[24px] font-normal font-['Graphik'] leading-[28.80px]">
                      Cloud Engineering{" "}
                    </div>
                    <div className="w-[340px] leading-[150%] opacity-80 w-[80%] widescreen:text-[20px] widestscreen:text-[24px] text-base font-normal font-['Graphik'] leading-normal  max-[1025px]:w-full">
                      Engineered to meet the unique needs of your business,
                      empower your business to thrive in the face of evolving
                      challenges.{" "}
                    </div>
                  </div>
                  <div className=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex">
                    <div className="w-[31px] h-[21px] relative  flex-col justify-start items-start flex">
                      <Image className="w-[31px] h-[21px]" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href={"/services/game-development"}
                onClick={scrollToTop}
                className="mb-[17px] service-cards w-[32.4451%] h-[392px] widestscreen:h-[500px] pl-[30px] pr-[30px] py-[45px] bg-white flex-col items-start gap-[46.12px] inline-flex  transitionall text-black   "
              >
                <div className="justify-center items-center inline-flex">
                  <div className="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="63"
                      height="63"
                      viewBox="0 0 63 63"
                      fill="none"
                    >
                      <path
                        d="M19.729 22.5043V32.8654"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24.9097 27.6852H14.5486"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.6331 23.368L3.78501 40.0008C3.11132 46.0642 7.85749 51.3669 13.958 51.3669C17.835 51.3669 21.3792 49.1762 23.113 45.7087L24.7244 42.4859H38.0458L39.6572 45.7087C41.3911 49.1762 44.9354 51.3669 48.8123 51.3669C54.9127 51.3669 59.659 46.0642 58.9851 40.0008L57.137 23.368C56.3801 16.5561 50.6223 11.4026 43.7687 11.4026H19.0015C12.1478 11.4026 6.38997 16.5561 5.6331 23.368Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M46.9266 24.7246C46.3137 24.7246 45.8169 24.2275 45.8169 23.6144C45.8169 23.0013 46.3137 22.5043 46.9266 22.5043"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M46.9265 24.7246C47.5399 24.7246 48.0366 24.2275 48.0366 23.6144C48.0366 23.0013 47.5399 22.5043 46.9265 22.5043"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M39.156 30.2752C39.156 29.6621 39.653 29.1651 40.2661 29.1651C40.8792 29.1651 41.3762 29.6621 41.3762 30.2752"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M39.1565 30.2748C39.1565 30.888 39.6535 31.385 40.2666 31.385C40.8797 31.385 41.3767 30.888 41.3767 30.2748"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between">
                  <div className="w-[340px] widescreen:w-full h-[143px] flex-col max-[800px]:h-[174px] widescreen:h-[210px] justify-between items-start flex max-[1025px]:w-full">
                    <div className="service-heading widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] letter-spacing-4 text-[24px] font-normal font-['Graphik'] leading-[28.80px]">
                      Game Development{" "}
                    </div>
                    <div className="w-[340px] leading-[150%] widescreen:text-[20px] widestscreen:text-[24px]  widescreen:w-[80%] widestscreen:text-[24px] widestscreen:mt-[15px] opacity-80  text-base font-normal font-['Graphik'] leading-normal  max-[1025px]:w-full">
                      Breathe life into gaming experiences that resonate with
                      players and leave an indelible mark.{" "}
                    </div>
                  </div>
                  <div className=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex">
                    <div className="w-[31px] h-[21px] relative  flex-col justify-start items-start flex">
                      <Image className="w-[31px] h-[21px]" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href={"/services/ar-vr-services"}
                onClick={scrollToTop}
                className="mb-[17px] service-cards w-[32.4451%] h-[392px] widestscreen:h-[500px] pl-[30px] pr-[30px] py-[45px] bg-white flex-col items-start gap-[46.12px] inline-flex  transitionall text-black "
              >
                <div className="justify-center items-center inline-flex">
                  <div className="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="63"
                      height="63"
                      viewBox="0 0 63 63"
                      fill="none"
                    >
                      <path
                        d="M14.7316 60.5282V48.8597C7.26514 44.5405 2.2417 36.4677 2.2417 27.2217C2.2417 13.4256 13.4256 2.24176 27.2216 2.24176C36.4677 2.24176 44.5405 7.2652 48.8596 14.7317"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M39.7117 60.5286V50.1205H48.0382C50.3378 50.1205 52.2016 48.2566 52.2016 45.957V35.5489"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.136 25.1401H2.32324"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.1401 25.1397C25.1401 19.3913 29.8001 14.7314 35.5484 14.7314H56.0446C58.5209 14.7314 60.5282 16.7388 60.5282 19.215V31.0644C60.5282 33.5406 58.5209 35.548 56.0446 35.548H35.5484C29.8001 35.548 25.1401 30.888 25.1401 25.1397Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M41.7932 14.7314V35.548"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between">
                  <div className="w-[340px] h-[143px] widescreen:w-full max-[800px]:h-[174px] widescreen:h-[210px] flex-col justify-between items-start flex max-[1025px]:w-full max-[800px]:gap-[20px]">
                    <div className="service-heading letter-spacing-4 widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-[24px] font-normal font-['Graphik'] leading-[28.80px]">
                      AR/VR Services{" "}
                    </div>
                    <div className="w-[340px] leading-[150%] opacity-80 widescreen:text-[20px] widestscreen:text-[24px]  widescreen:w-[80%] widestscreen:text-[24px] widestscreen:mt-[15px] text-base font-normal font-['Graphik'] leading-normal  max-[1025px]:w-full">
                      Transport users to realms where the extraordinary becomes
                      ordinary, boundaries blur, and possibilities are
                      limitless.{" "}
                    </div>
                  </div>
                  <div className=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex">
                    <div className="w-[31px] h-[21px] relative  flex-col justify-start items-start flex">
                      <Image className="w-[31px] h-[21px]" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href={"/services/low-code-and-no-code"}
                onClick={scrollToTop}
                className="mb-[17px] service-cards w-[32.4451%] h-[392px] widestscreen:h-[500px] pl-[30px] pr-[30px] py-[45px] bg-white flex-col items-start gap-[46.12px] inline-flex  transitionall text-black"
              >
                <div className="justify-center items-center inline-flex">
                  <div className="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="63"
                      height="63"
                      viewBox="0 0 63 63"
                      fill="none"
                    >
                      <path
                        d="M22.5076 15.6268H6.81511C5.62598 15.6268 4.48559 16.0992 3.64475 16.94C2.80391 17.7808 2.33154 18.9213 2.33154 20.1103V55.9791C2.33154 57.1682 2.80391 58.3084 3.64475 59.1495C4.48559 59.9901 5.62598 60.4627 6.81511 60.4627H47.1672C49.6434 60.4627 51.6507 58.455 51.6507 55.9791V38.0446"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.33154 26.8357H31.4748"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.5405 49.2538L20.2659 42.5282L13.5405 35.8029"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.9912 49.2538H33.7166"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33.1605 17.7038C31.5871 17.4301 31.5871 15.1713 33.1605 14.8976C38.8608 13.9059 43.3945 9.56419 44.6318 3.9122L44.7266 3.47895C45.0671 1.9239 47.281 1.91423 47.6353 3.46624L47.7505 3.97114C49.0332 9.59647 53.5684 13.9016 59.2526 14.8904C60.834 15.1656 60.834 17.4358 59.2526 17.7109C53.5684 18.6999 49.0332 23.005 47.7505 28.6303L47.6353 29.1352C47.281 30.6872 45.0671 30.6775 44.7266 29.1225L44.6318 28.6892C43.3945 23.0372 38.8608 18.6955 33.1605 17.7038Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between">
                  <div className="w-[340px] h-[143px] widescreen:w-full max-[800px]:h-[174px] widescreen:h-[210px] flex-col justify-between items-start flex max-[1025px]:w-full max-[800px]:gap-[20px]">
                    <div className="service-heading letter-spacing-4 widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-[24px] font-normal font-['Graphik'] leading-[28.80px]">
                      Low-code and No-code{" "}
                    </div>
                    <div className="w-[340px] leading-[150%] opacity-80 widescreen:text-[20px] widestscreen:text-[24px]  widescreen:w-[80%] widestscreen:text-[24px] widestscreen:mt-[15px] text-base font-normal font-['Graphik'] leading-normal  max-[1025px]:w-full">
                      Creating dynamic applications without diving into complex
                      code. Our Low Code/No Code solutions help liberate your
                      creativity.{" "}
                    </div>
                  </div>
                  <div className=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex">
                    <div className="w-[31px] h-[21px] relative  flex-col justify-start items-start flex">
                      <Image className="w-[31px] h-[21px]" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={"/services/salesforce-services"}
                onClick={scrollToTop}
                className="mb-[17px] service-cards w-[32.4451%] h-[392px] widestscreen:h-[500px] pl-[30px] pr-[30px] py-[45px] bg-white flex-col items-start gap-[46.12px] inline-flex  transitionall text-black  "
              >
                <div className="justify-center items-center inline-flex">
                  <div className="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                    <Image src={SC} alt="" />
                  </div>
                </div>
                <div className="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between">
                  <div className="w-[340px] widescreen:w-full h-[143px] max-[800px]:h-[174px] widescreen:h-[210px] flex-col justify-between items-start flex max-[1025px]:w-full max-[800px]:gap-[20px]">
                    <div className="service-heading letter-spacing-4 widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-[24px] font-normal font-['Graphik'] leading-[28.80px]">
                      Salesforce Services{" "}
                    </div>
                    <div className="w-[340px] leading-[150%] opacity-80 widescreen:w-[80%] widescreen:text-[20px] widestscreen:text-[24px]  text-base font-normal font-['Graphik'] leading-normal  max-[1025px]:w-full">
                      Optimize Salesforce for streamlined operations, improved
                      customer engagement, and scalable business growth
                      solutions.{" "}
                    </div>
                  </div>
                  <div className=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex">
                    <div className="w-[31px] h-[21px] relative  flex-col justify-start items-start flex">
                      <Image className="w-[31px] h-[21px]" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={"/services/microsoft-sharepoint-services"}
                onClick={scrollToTop}
                className="mb-[17px] service-cards w-[32.4451%] h-[392px] widestscreen:h-[500px] pl-[30px] pr-[30px] py-[45px] bg-white flex-col items-start gap-[46.12px] inline-flex  transitionall text-black  "
              >
                <div className="justify-center items-center inline-flex">
                  <div className="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                    <Image src={SP} alt="" />
                  </div>
                </div>
                <div className="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between">
                  <div className="w-[340px] h-[143px] widescreen:w-full max-[800px]:h-[174px] widescreen:h-[210px] flex-col justify-between items-start flex max-[1025px]:w-full max-[800px]:gap-[20px]">
                    <div className="service-heading letter-spacing-4 widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-[24px] font-normal font-['Graphik'] leading-[28.80px]">
                      Microsoft SharePoint services{" "}
                    </div>
                    <div className="w-[340px] leading-[150%] opacity-80 widescreen:text-[20px] widestscreen:text-[24px]  widescreen:w-[80%] widestscreen:text-[24px] widestscreen:mt-[15px] text-base font-normal font-['Graphik'] leading-normal  max-[1025px]:w-full">
                      Enhance collaboration, secure data management, and
                      streamline workflows with Microsoft SharePoint services.{" "}
                    </div>
                  </div>
                  <div className=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex">
                    <div className="w-[31px] h-[21px] relative  flex-col justify-start items-start flex">
                      <Image className="w-[31px] h-[21px]" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={"/services/quality-assurance"}
                onClick={scrollToTop}
                className="mb-[17px] service-cards w-[32.4451%] h-[392px] widestscreen:h-[500px] pl-[30px] pr-[30px] py-[45px] bg-white flex-col items-start gap-[46.12px] inline-flex  transitionall text-black  "
              >
                <div className="justify-center items-center inline-flex">
                  <div className="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="63"
                      height="63"
                      viewBox="0 0 63 63"
                      fill="none"
                    >
                      <path
                        d="M60.5281 37.9975V47.0775C60.5281 47.672 60.2918 48.2424 59.8717 48.6629C59.4512 49.083 58.8809 49.3193 58.2863 49.3193H4.48348C3.88893 49.3193 3.31872 49.083 2.8983 48.6629C2.47788 48.2424 2.2417 47.672 2.2417 47.0775V11.2089C2.2417 10.6144 2.47788 10.0442 2.8983 9.62378C3.31872 9.20336 3.88893 8.96716 4.48348 8.96716H20.3597"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.9013 49.3193L22.4177 60.5282"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35.8684 49.3193L40.352 60.5282"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.9341 60.5282H44.8355"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M46.057 2.92891L49.8049 10.4682C49.8887 10.6589 50.0214 10.8239 50.19 10.9464C50.3581 11.0689 50.5563 11.1445 50.7634 11.1655L59.0872 12.4293C59.3253 12.4602 59.5495 12.5583 59.7337 12.7121C59.918 12.8658 60.0548 13.0688 60.1278 13.2974C60.2009 13.5259 60.2076 13.7706 60.1467 14.0027C60.0861 14.2349 59.9602 14.4449 59.7844 14.6083L53.6397 20.4479C53.5482 20.6228 53.5002 20.8172 53.5002 21.0145C53.5002 21.2119 53.5482 21.4063 53.6397 21.581L54.8166 29.8612C54.8668 30.1005 54.8462 30.3493 54.7579 30.5773C54.6695 30.8053 54.5171 31.0028 54.3185 31.1458C54.1203 31.2888 53.8845 31.3712 53.6406 31.383C53.3962 31.3948 53.1536 31.3354 52.9425 31.2121L45.5338 27.29C45.3424 27.2033 45.1343 27.1586 44.924 27.1586C44.7135 27.1586 44.5055 27.2033 44.3137 27.29L36.9052 31.2121C36.694 31.3354 36.4515 31.3948 36.2073 31.383C35.963 31.3712 35.7274 31.2888 35.529 31.1458C35.3307 31.0028 35.1781 30.8053 35.0897 30.5773C35.0014 30.3493 34.9811 30.1005 35.0312 29.8612L36.4258 21.581C36.4857 21.3889 36.4973 21.1848 36.4592 20.9871C36.4212 20.7894 36.3349 20.6042 36.2079 20.4479L30.0632 14.5647C29.9002 14.3996 29.7858 14.1928 29.7325 13.967C29.6792 13.7412 29.6891 13.5051 29.7611 13.2845C29.8332 13.064 29.9645 12.8675 30.1408 12.7167C30.317 12.5658 30.5314 12.4664 30.7604 12.4293L39.0841 11.2091C39.2914 11.1881 39.4893 11.1125 39.6578 10.99C39.8262 10.8675 39.9591 10.7025 40.0429 10.5118L43.7908 2.97249C43.891 2.75907 44.049 2.57796 44.2469 2.44964C44.4447 2.32133 44.6745 2.25092 44.9101 2.24639C45.146 2.24185 45.3782 2.30337 45.5809 2.42399C45.7835 2.5446 45.9485 2.7195 46.057 2.92891Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between">
                  <div className="w-[340px] h-[143px] widescreen:w-full max-[800px]:h-[174px] widescreen:h-[210px] flex-col justify-between items-start flex max-[1025px]:w-full max-[800px]:gap-[20px]">
                    <div className="service-heading letter-spacing-4 widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-[24px] font-normal font-['Graphik'] leading-[28.80px]">
                      Quality Assurance
                    </div>
                    <div className="w-[340px] leading-[150%] opacity-80 widescreen:text-[20px] widestscreen:text-[24px]  widescreen:w-[80%] widestscreen:text-[24px] widestscreen:mt-[15px] text-base font-normal font-['Graphik'] leading-normal  max-[1025px]:w-full">
                      Partner with a team that understands the universal
                      standards of quality, and aligns seamlessly with your
                      digital vision.{" "}
                    </div>
                  </div>
                  <div className=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex">
                    <div className="w-[31px] h-[21px] relative  flex-col justify-start items-start flex">
                      <Image className="w-[31px] h-[21px]" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homeservice;
