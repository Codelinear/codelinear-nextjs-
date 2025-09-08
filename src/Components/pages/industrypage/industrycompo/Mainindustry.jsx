"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import img from "../assets/Industries02.jpg";
import img2 from "../assets/Industries05.jpg";
import img3 from "../assets/Industries06.jpg";
import img4 from "../assets/Industries03.jpg";
import img5 from "../assets/Industries09.jpg";
import img6 from "../assets/Industries07.jpg";
import img7 from "../assets/Industries04.jpg";
import img8 from "../assets/Industries10.jpg";
import img9 from "../assets//Industries08.jpg";
import img10 from "../assets/Industries01.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Mainindustry = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="industry-main">
        <div className="flex flex-wrap">
          <div className="w-full px-[132px] max-[1440px]:px-[80px] max-lg:px-[40px] max-lg:gap-[49px] max-sm:px-[20px] pb-[98px] bg-white justify-center gap-[110px] items-start inline-flex flex-wrap max-sm:gap-[72px] max-lg:flex-wrap max-lg:p-5 max-lg:justify-center max-lg:items-center max-lg:h-full">
            <div className="self-stretch w-[308px] widescreen:w-[25%] flex-col justify-start items-start gap-8 inline-flex max-lg:justify-center max-lg:items-center max-lg:h-full">
              <div className="flex-col justify-start items-center flex">
                <Image
                  className="widescreen:w-full widescreen:h-auto w-[319.63px] h-[365.63px]"
                  loading="lazy"
                  src={img9}
                  alt="Fintech"
                />
              </div>
              <div className="self-stretch h-[149px] max-lg:h-auto flex-col justify-start items-start gap-6 flex widescreen:h-[200px]">
                <div className="self-stretch justify-start items-center gap-[13.42px] inline-flex w-[100%]">
                  <div className="w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M20.8102 10.7828C20.6448 10.3146 20.3895 9.88894 20.065 9.52639C19.3748 8.75528 18.3719 8.27002 17.2556 8.27002H14.3381C12.48 8.27002 10.9736 9.77635 10.9736 11.6345C10.9736 13.2156 12.0746 14.5834 13.6191 14.9213L18.061 15.8929C19.7914 16.2714 21.0247 17.8048 21.0247 19.5761C21.0247 21.6578 19.3372 23.3467 17.2556 23.3467H14.7428C13.1017 23.3467 11.7055 22.2978 11.1881 20.8339"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 8.26916V4.5"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 27.1155V23.3462"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <div className="self-stretch h-[93px] max-lg:h-[140px] max-sm:h-auto flex-col justify-start items-start gap-4 flex widescreen:h-[140px]">
                  <div className="self-stretch text-black text-2xl font-normal font-['Graphik'] capitalize letter-spacing-4 leading-[120%] widescreen:text-[30px] widestscreen:text-[35px]">
                    Fintech{" "}
                  </div>
                  <div className="self-stretch opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    Revolutionize finance with our Fintech Solutions, delivering
                    secure, efficient, and user-friendly financial services for
                    modern consumers and businesses.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch  w-[308px] widescreen:w-[25%] flex-col justify-start items-start gap-8 inline-flex max-lg:justify-center max-lg:items-center max-lg:h-full">
              <div className="flex-col justify-end items-center flex">
                <Image
                  className="widescreen:w-full widescreen:h-auto w-[316.90px] h-[364.89px]"
                  loading="lazy"
                  src={img5}
                  alt="Technology"
                />
              </div>
              <div className="self-stretch h-[149px] max-lg:h-auto flex-col justify-start items-start gap-6 flex widescreen:h-[200px]">
                <div className="self-stretch justify-start items-center gap-[13.42px] inline-flex  w-[100%]">
                  <div className="w-8 h-8 relative">
                    <div className="w-[17.70px] left-[7.15px] top-[3.22px] absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M24.8506 12.1274C24.8616 10.5476 24.4494 8.99365 23.657 7.62688C22.8645 6.26013 21.7207 5.1304 20.3442 4.35498C18.9677 3.57956 17.4088 3.18671 15.8292 3.21723C14.2496 3.24774 12.707 3.7005 11.3615 4.52851C10.016 5.35651 8.91664 6.52958 8.17757 7.92591C7.43851 9.32227 7.08667 10.891 7.15859 12.4692C7.2305 14.0474 7.72356 15.5776 8.58655 16.901C9.44955 18.2243 10.651 19.2925 12.0663 19.9948V22.945C12.0663 23.2058 12.1699 23.456 12.3543 23.6403C12.5387 23.8248 12.7889 23.9285 13.0497 23.9285H18.9502C19.211 23.9285 19.4611 23.8248 19.6456 23.6403C19.83 23.456 19.9336 23.2058 19.9336 22.945V19.9948C21.4038 19.2704 22.6429 18.1504 23.5114 16.7606C24.38 15.3708 24.8437 13.7663 24.8506 12.1274Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.0664 28.7842H19.9337"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <div className="self-stretch h-[93px]  max-lg:h-[140px] max-sm:h-auto flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch text-black text-2xl font-normal font-['Graphik'] capitalize letter-spacing-4 leading-[120%] widescreen:text-[30px] widestscreen:text-[35px]">
                    Technology{" "}
                  </div>
                  <div className="self-stretch opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    Elevate operations with our Technology Solutions,
                    integrating cutting-edge technology, and strategic expertise
                    for business excellence.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch  w-[308px] widescreen:w-[25%] flex-col justify-start items-start gap-8 inline-flex max-lg:justify-center max-lg:items-center max-lg:h-full">
              <div className="h-[353px] pl-[0.27px] flex-col justify-end items-center flex">
                <Image
                  className="widescreen:w-full widescreen:h-auto w-[307.73px] h-[361.26px]"
                  src={img8}
                  loading="lazy"
                  alt="Ecommerce"
                />
              </div>
              <div className="self-stretch h-[149px] max-lg:h-auto flex-col justify-start items-start gap-6 flex widescreen:h-[200px]">
                <div className="self-stretch justify-start items-center gap-[13.42px] inline-flex  w-[100%]">
                  <div className="w-8 h-8 relative">
                    <div className="w-[24.49px] h-[24.51px] left-[3.76px] top-[3.75px] absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M3.7627 3.74707H8.36629L10.0063 20.0527C10.0744 20.5022 10.3028 20.9119 10.6492 21.2063C10.9956 21.5008 11.4367 21.66 11.8913 21.655H23.7671C24.1782 21.6764 24.585 21.5627 24.9252 21.3313C25.2657 21.0998 25.5209 20.7633 25.6521 20.3731L28.1592 12.833C28.2527 12.5495 28.2776 12.2478 28.2316 11.9529C28.1858 11.658 28.0704 11.3781 27.8953 11.1364C27.7128 10.8795 27.4687 10.6723 27.1856 10.534C26.9024 10.3957 26.589 10.3306 26.2742 10.3447H9.02605"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23.4464 28.2527C22.926 28.2527 22.5039 27.8307 22.5039 27.3102C22.5039 26.7897 22.926 26.3677 23.4464 26.3677C23.9669 26.3677 24.3889 26.7897 24.3889 27.3102C24.3889 27.8307 23.9669 28.2527 23.4464 28.2527Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.1935 28.2527C10.6729 28.2527 10.251 27.8307 10.251 27.3102C10.251 26.7897 10.6729 26.3677 11.1935 26.3677C11.714 26.3677 12.136 26.7897 12.136 27.3102C12.136 27.8307 11.714 28.2527 11.1935 28.2527Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <div className="self-stretch h-[93px] max-lg:h-[140px] max-sm:h-auto flex-col justify-start items-start gap-4 flex widescreen:h-[140px]">
                  <div className="self-stretch text-black text-2xl font-normal font-['Graphik'] capitalize letter-spacing-4 leading-[120%] widescreen:text-[30px] widestscreen:text-[35px]">
                    Ecommerce{" "}
                  </div>
                  <div className="self-stretch opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    Our E-commerce Solutions merge technology, personalization,
                    and seamless experiences for optimal engagement and
                    conversions.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch  w-[308px] widescreen:w-[25%] flex-col justify-start items-start gap-8 inline-flex max-lg:justify-center max-lg:items-center max-lg:h-full">
              <div className="h-[353px] flex-col justify-start items-center flex">
                <Image
                  className="widescreen:w-full widescreen:h-auto w-[319.63px] h-[365.63px]"
                  loading="lazy"
                  src={img2}
                  alt="Manufacturing"
                />
              </div>
              <div className="self-stretch h-[149px] max-lg:h-auto flex-col justify-start items-start gap-6 flex widescreen:h-[200px]">
                <div className="self-stretch justify-start items-center gap-[13.42px] inline-flex  w-[100%]">
                  <div className="w-8 h-8 relative">
                    <div className="w-[10.05px] left-[10.97px] top-[4.50px] absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M27.8754 15.8903C27.8772 15.6368 27.8261 15.3856 27.7254 15.1528C27.6248 14.92 27.4768 14.7108 27.2908 14.5383L15.9998 4.12427L4.70871 14.5383C4.52277 14.7108 4.37476 14.92 4.2741 15.1528C4.17344 15.3856 4.12235 15.6368 4.12407 15.8903V26.0486C4.12407 26.5332 4.31656 26.998 4.65919 27.3405C5.00182 27.6831 5.46654 27.8757 5.95109 27.8757H26.0484C26.5329 27.8757 26.9977 27.6831 27.3403 27.3405C27.683 26.998 27.8754 26.5332 27.8754 26.0486V15.8903Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.4568 21.4829H21.936C21.936 21.4829 22.3928 21.4829 22.3928 21.9397V27.4189C22.3928 27.4189 22.3928 27.8757 21.936 27.8757H16.4568C16.4568 27.8757 16 27.8757 16 27.4189V21.9397C16 21.9397 16 21.4829 16.4568 21.4829Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.2595 15.0884H18.7388C18.7388 15.0884 19.1955 15.0884 19.1955 15.5451V21.0244C19.1955 21.0244 19.1955 21.4812 18.7388 21.4812H13.2595C13.2595 21.4812 12.8027 21.4812 12.8027 21.0244V15.5451C12.8027 15.5451 12.8027 15.0884 13.2595 15.0884Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.0632 21.4829H15.5425C15.5425 21.4829 15.9992 21.4829 15.9992 21.9397V27.4189C15.9992 27.4189 15.9992 27.8757 15.5425 27.8757H10.0632C10.0632 27.8757 9.60645 27.8757 9.60645 27.4189V21.9397C9.60645 21.9397 9.60645 21.4829 10.0632 21.4829Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <div className="self-stretch h-[93px] max-lg:h-[140px] max-sm:h-auto flex-col justify-start items-start gap-4 flex widescreen:h-[140px]">
                  <div className="self-stretch text-black text-2xl font-normal font-['Graphik'] capitalize letter-spacing-4 leading-[120%] widescreen:text-[30px] widestscreen:text-[35px]">
                    Manufacturing{" "}
                  </div>
                  <div className="self-stretch opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    We ensure that your manufacturing solutions not only meet
                    current demands but also anticipate future needs for
                    sustained success.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-[308px] widescreen:w-[25%] flex-col justify-start items-start gap-8 inline-flex max-lg:justify-center max-lg:items-center max-lg:h-full">
              <div className="flex-col justify-end items-center flex">
                <Image
                  className="widescreen:w-full widescreen:h-auto w-[316.90px] h-[364.89px]"
                  loading="lazy"
                  src={img3}
                  alt="Supply chain and logistics"
                />
              </div>
              <div className="self-stretch h-[149px] max-lg:h-auto flex-col justify-start items-start gap-6 flex widescreen:h-[200px]">
                <div className="self-stretch justify-start items-center gap-[13.42px] inline-flex  w-[100%]">
                  <div className="w-8 h-8 relative">
                    <div className="w-[17.70px] left-[7.15px] top-[3.22px] absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M18.9795 13.4695H24.9386C25.9922 13.4695 27.0026 13.888 27.7477 14.6331C28.4928 15.3781 28.9113 16.3886 28.9113 17.4422V25.3877H25.9318"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.07524 25.3878H3.08887V11.4832C3.08887 10.9564 3.29815 10.4511 3.67066 10.0786C4.04318 9.70611 4.54841 9.49683 5.07524 9.49683H16.9935C17.5203 9.49683 18.0255 9.70611 18.398 10.0786C18.7706 10.4511 18.9798 10.9564 18.9798 11.4832V25.3878"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17.9874 25.3877H13.0215"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22.4556 29.3605C20.5358 29.3605 18.9795 27.8042 18.9795 25.8844C18.9795 23.9645 20.5358 22.4082 22.4556 22.4082C24.3755 22.4082 25.9318 23.9645 25.9318 25.8844C25.9318 27.8042 24.3755 29.3605 22.4556 29.3605Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.04841 29.3605C7.12859 29.3605 5.57227 27.8042 5.57227 25.8844C5.57227 23.9645 7.12859 22.4082 9.04841 22.4082C10.9682 22.4082 12.5246 23.9645 12.5246 25.8844C12.5246 27.8042 10.9682 29.3605 9.04841 29.3605Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <div className="self-stretch h-[93px] max-lg:h-[140px] max-sm:h-auto flex-col justify-start items-start gap-4 flex widescreen:h-[140px]">
                  <div className="self-stretch text-black text-2xl font-normal font-['Graphik'] capitalize letter-spacing-4 leading-[120%] widescreen:text-[30px] widestscreen:text-[35px]">
                    Supply chain and logistics{" "}
                  </div>
                  <div className="self-stretch opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    Streamline the supply chain with our integration solutions,
                    enhance visibility, reduce lead times, and ensure seamless
                    collaboration between stakeholders.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch  w-[308px] widescreen:w-[25%] flex-col justify-start items-start gap-8 inline-flex max-lg:justify-center max-lg:items-center max-lg:h-full">
              <div className="h-[353px] pl-[0.27px] flex-col justify-end items-center flex">
                <Image
                  className="widescreen:w-full widescreen:h-auto w-[307.73px] h-[361.26px]"
                  src={img6}
                  alt="Healthcare"
                />
              </div>
              <div className="self-stretch h-[149px] max-lg:h-auto flex-col justify-start items-start gap-6 flex widescreen:h-[200px]">
                <div className="self-stretch justify-start items-center gap-[13.42px] inline-flex  w-[100%]">
                  <div className="w-8 h-8 relative">
                    <div className="w-[24.49px] h-[24.51px] left-[3.76px] top-[3.75px] absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M15.9845 26.4057L5.5688 16.7713C-0.107766 11.0687 8.17271 0.0280366 15.9845 8.95949C23.7963 0.0540833 32.1548 11.0947 26.4002 16.7713L15.9845 26.4057Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.30078 15.5262H12.2442L14.2266 11.7417L17.2301 18.7099L19.8132 15.5262H22.6966"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <div className="self-stretch h-[93px] max-lg:h-[140px] max-sm:h-auto flex-col justify-start items-start gap-4 flex widescreen:h-[140px]">
                  <div className="self-stretch text-black text-2xl font-normal font-['Graphik'] capitalize letter-spacing-4 leading-[120%] widescreen:text-[30px] widestscreen:text-[35px]">
                    Healthcare{" "}
                  </div>
                  <div className="self-stretch opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    Seamlessly blend design brilliance, cutting-edge technology,
                    and strategic expertise to revolutionize healthcare
                    delivery.{" "}
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="self-stretch w-[308px] widescreen:w-[25%] flex-col  justify-start items-start gap-8 inline-flex max-lg:justify-center max-lg:items-center max-lg:h-full">
              <div className="h-[353px] flex-col justify-start items-center flex">
                <Image
                  className="widescreen:w-full widescreen:h-auto w-[319.63px] h-[365.63px]"
                  loading="lazy"
                  src={img}
                  alt=""
                />
              </div>
              <div className="self-stretch h-[149px] max-lg:h-auto flex-col justify-start items-start gap-6 flex widescreen:h-[200px]">
                <div className="self-stretch justify-start items-center gap-[13.42px] inline-flex  w-[100%]">
                  <div className="w-8 h-8 relative">
                    <div className="w-[10.05px] left-[10.97px] top-[4.50px] absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M18.5684 27.1239V4.87585C25.4139 8.29863 26.2696 17.7113 26.2696 21.134H18.5684"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.0107 4.87585V27.1239"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.2894 4.87585V9.15432C14.2894 9.71617 14.1787 10.2725 13.9637 10.7916C13.7487 11.3107 13.4335 11.7824 13.0362 12.1797C12.6389 12.5769 12.1673 12.8921 11.6482 13.1071C11.1291 13.3221 10.5727 13.4328 10.0109 13.4328C8.87617 13.4328 7.78792 12.982 6.98555 12.1797C6.18318 11.3773 5.73242 10.289 5.73242 9.15432V4.87585"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <div className="self-stretch h-[93px] max-lg:h-[140px] max-sm:h-auto flex-col justify-start items-start gap-4 flex widescreen:h-[140px]">
                  <div className="self-stretch text-black text-2xl font-normal font-['Graphik'] capitalize letter-spacing-4 leading-[120%] widescreen:text-[30px] widestscreen:text-[35px]">
                    Food and beverages{" "}
                  </div>
                  <div className="self-stretch opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    Food and beverages solutions that are future-proof,
                    anticipating industry trends and technological advancements
                    to keep your business agile and resilient.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-[308px] widescreen:w-[25%] flex-col justify-start items-start gap-8 inline-flex max-lg:justify-center max-lg:items-center max-lg:h-full">
              <div className="flex-col justify-end items-center flex">
                <Image
                  className="widescreen:w-full widescreen:h-auto w-[316.90px] h-[364.89px]"
                  loading="lazy"
                  src={img4}
                  alt="Food and beverages"
                />
              </div>
              <div className="self-stretch h-[149px] max-lg:h-auto flex-col justify-start items-start gap-6 flex widescreen:h-[200px]">
                <div className="self-stretch justify-start items-center gap-[13.42px] inline-flex  w-[100%] ">
                  <div className="w-8 h-8 relative">
                    <div className="w-[17.70px] left-[7.15px] top-[3.22px] absolute">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M25.8994 22.2993H6.10156C5.10755 22.2993 4.30176 23.1051 4.30176 24.0991V25.8989C4.30176 26.8929 5.10755 27.6987 6.10156 27.6987H25.8994C26.8934 27.6987 27.6992 26.8929 27.6992 25.8989V24.0991C27.6992 23.1051 26.8934 22.2993 25.8994 22.2993Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.10156 22.2994V16.9C6.10156 14.2746 7.14447 11.7568 9.00088 9.90041C10.8573 8.04401 13.3751 7.0011 16.0005 7.0011C18.6258 7.0011 21.1436 8.04401 23.0001 9.90041C24.8564 11.7568 25.8994 14.2746 25.8994 16.9V22.2994"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 7.00109V4.30139"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <div className="self-stretch h-[93px] max-lg:h-[140px] max-sm:h-auto flex-col justify-start items-start gap-4 flex widescreen:h-[140px]">
                  <div className="self-stretch text-black text-2xl font-normal font-['Graphik'] capitalize letter-spacing-4 leading-[120%] widescreen:text-[30px] widestscreen:text-[35px]">
                    Hospitality{" "}
                  </div>
                  <div className="self-stretch opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    Elevate guest experiences with our Hospitality Solutions,
                    seamlessly merging technology innovation for unparalleled
                    service.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-[308px] widescreen:w-[25%] flex-col justify-start items-start gap-8 inline-flex max-lg:justify-center max-lg:items-center max-lg:h-full">
              <div className="h-[353px] pl-[0.27px] flex-col justify-end items-center flex">
                <Image
                  className="widescreen:w-full widescreen:h-auto w-[307.73px] h-[361.26px]"
                  src={img7}
                  loading="lazy"
                  alt="Real estate"
                />
              </div>
              <div className="self-stretch h-[149px] max-lg:h-auto flex-col justify-start items-start gap-6 flex widescreen:h-[200px]">
                <div className="self-stretch justify-start items-center gap-[13.42px] inline-flex  w-[100%]">
                  <div className="w-8 h-8 relative">
                    <div className="w-[24.49px] h-[24.51px] left-[3.76px] top-[3.75px] absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M18.715 27.7615H4.23926V10.5716L11.4771 4.23853L18.715 10.5716V27.7615Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.7148 27.7616H27.7622V15.0953H18.7148"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.4775 27.7615V24.1426"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.7627 18.7142H14.1911"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.7627 13.2859H14.1911"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <div className="self-stretch h-[93px] max-lg:h-[140px] max-sm:h-auto flex-col justify-start items-start gap-4 flex widescreen:h-[140px]">
                  <div className="self-stretch text-black text-2xl font-normal font-['Graphik'] capitalize letter-spacing-4 leading-[120%] widescreen:text-[30px] widestscreen:text-[35px]">
                    Real estate{" "}
                  </div>
                  <div className="self-stretch opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    Transform property ventures with our Real Estate Solutions,
                    integrating tech innovation for optimal efficiency and
                    success.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch mb-{30px} w-[308px] widescreen:w-[25%] flex-col justify-start items-start gap-8 inline-flex max-lg:justify-center max-lg:items-center">
              <div className="h-[353px] flex-col justify-end items-center flex ">
                <Image
                  className="widescreen:w-full widescreen:h-auto w-[321.78px] h-[402.39px] max-lg:w-full"
                  src={img10}
                  alt="Sustainable energy"
                  loading="lazy"
                />
              </div>
              <div className="self-stretch h-[149px] max-lg:h-auto flex-col justify-start items-start gap-6 flex ">
                <div className="self-stretch justify-start items-center gap-[13.42px] inline-flex  w-[100%]">
                  <div className="w-8 h-8 relative">
                    <div className="w-[19.51px] h-[25.36px] left-[6.25px] top-[3.32px] absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M11.1242 17.8264C10.1487 21.1186 9.17285 25.2649 9.17285 28.6794H22.8275C22.8275 25.3057 21.875 21.2177 20.9112 17.9449"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 13.074V3.32068H16.9753C19.13 3.32068 20.8767 5.06737 20.8767 7.22201V9.17268C20.8767 11.3273 19.13 13.074 16.9753 13.074H16Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.123 18.926V16.9753C11.123 14.8207 12.8697 13.074 15.0244 13.074H15.9997V22.8273H15.0244C12.8697 22.8273 11.123 21.0806 11.123 18.926Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M25.7533 13.074H16V14.0493C16 16.204 17.7467 17.9506 19.9013 17.9506H21.852C24.0067 17.9506 25.7533 16.204 25.7533 14.0493V13.074Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.9994 12.0987V13.0741H6.24609V12.0987C6.24609 9.94407 7.99278 8.19739 10.1474 8.19739H12.0981C14.2527 8.19739 15.9994 9.94407 15.9994 12.0987Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <div className="self-stretch h-[93px] max-lg:h-[140px] max-sm:h-auto flex-col justify-start items-start gap-4 flex widescreen:h-[140px]">
                  <div className="self-stretch text-black text-2xl font-normal font-['Graphik'] capitalize letter-spacing-4 leading-[120%] widescreen:text-[30px] widestscreen:text-[35px]">
                    Sustainable energy{" "}
                  </div>
                  <div className="self-stretch opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                    Power a greener future, integrating innovative technology
                    for eco-friendly and efficient solutions.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[740px] widescreen:w-[calc(50%+126px)] self-stretch pl-20 pr-[163.58px] pt-[89.41px] pb-[84px] bg-neutral-50 flex-col justify-end items-start gap-[176.59px] inline-flex max-lg:w-full max-sm:w-[308px] max-sm:h-[519px] max-sm:px-[21px] max-sm:py-[49px] max-lg:p-5 max-sm:gap-[133px] max-lg:gap-5 ">
              <div className="w-[551.45px] text-black text-5xl font-normal font-['Graphik']  letter-spacing-2 leading-[120%] max-lg:w-full">
                Need help in making the next big thing?{" "}
              </div>
              <Link
                href={"/contact-us"}
                className="max-sm:w-full"
                onClick={scrollToTop}
              >
                <button className="px-8 py-4 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400">
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    Talk to our experts
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainindustry;
