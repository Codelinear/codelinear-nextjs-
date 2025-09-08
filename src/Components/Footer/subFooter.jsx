"use client";
"use client";
import React from "react";
import Image from "next/image";
import "./footer.scss";
import Link from "next/link";
import x from "../../assets/homeassets/akar-icons_x-fill.svg";
import sparkle from "../pages/AI-studio/assets/sparkle.svg";
import Scrolltop from "./Scrolltop";

const SubFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <>
      <div className="down-footer relative pt-[125.27px]">
        <Scrolltop />
        <div className="text-black max-xl:top-[36px] max-md:hidden absolute top-[106.36px] z-10 right-[380px] whitespace-nowrap text-base font-normal font-['Graphik']">
          <Link
            href={"/ai-studio"}
            onClick={scrollToTop}
            className="bg-[#FCEBC0] widescreen:text-[20px] widestscreen:text-[32px] widescreen:w-[170px] widescreen:h-[48px] widestscreen:h-[54px] widestscreen:w-[210px] w-[113px] h-[36px] rounded-[25px] items-center justify-center flex gap-[4px]"
          >
            <Image
              src={sparkle}
              alt="Sparkle Icon"
              className="w-[24px] h-[24px]"
              srcSet="AI Studio"
            />
            AI Studio
          </Link>
        </div>
        <div className="w-full pb-[20px] max-sm:p-0 relative bg-white max-lg:h-full">
          <div className="flex gap-[126px] pl-[80px]  max-xl:flex-wrap max-lg:ml-0 max-[1340px]:gap-[32px] max-sm:p-5  max-lg:p-10 max-sm:gap-10 max-lg:gap-10">
            <div className="flex flex-col gap-[83px] max-lg:gap-[32px] max-[350px]:w-full">
              <div className="flex flex-col gap-[36px] max-lg:gap-[32px] max-[350px]:w-full">
                <div className="w-[262.25px] h-[262.25px] max-sm:p-0 max-sm:w-[106px] max-sm:h-[106px] px-[17.98px] py-[47.08px] left-[80.59px] top-[92.14px]  justify-center items-center inline-flex">
                  <div className="w-[226.29px] h-[168.09px] max-sm:w-[106px] max-sm:h-[106px] relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="227"
                      height="169"
                      viewBox="0 0 227 169"
                      fill="none"
                      className=" max-sm:w-[106px] max-sm:h-[106px]"
                    >
                      <ellipse
                        cx="117.917"
                        cy="84.2675"
                        rx="83.8566"
                        ry="84.0429"
                        fill="#FFCD05"
                      />
                      <path
                        d="M34.0659 112.482C50.5504 112.482 62.4559 101.468 63.895 86.6514H53.8211C52.6437 97.7966 43.8781 103.435 34.1967 103.435C20.9829 103.435 11.8248 94.5186 11.8248 77.7352V76.6862C11.8248 60.5584 21.3754 50.5932 33.8042 50.5932C43.2239 50.5932 51.0737 54.658 52.7745 65.541H63.5025C61.4093 48.102 48.0646 41.5459 33.8042 41.5459C15.4881 41.5459 0.573486 55.7069 0.573486 76.6862V77.7352C0.573486 98.9767 14.9647 112.482 34.0659 112.482Z"
                        fill="black"
                      />
                      <path
                        d="M123.285 103.435C109.417 103.435 100.913 93.2074 100.913 77.6041V76.5551C100.913 60.8206 109.548 50.5932 123.285 50.5932C136.892 50.5932 145.657 60.8206 145.657 76.6862V77.6041C145.657 93.0763 137.022 103.435 123.285 103.435ZM123.154 112.482C142.648 112.482 156.908 98.19 156.908 77.4729V76.424C156.908 55.8381 142.648 41.5459 123.285 41.5459C103.922 41.5459 89.6621 55.9692 89.6621 76.5551V77.6041C89.6621 97.6655 103.661 112.482 123.154 112.482Z"
                        fill="black"
                      />
                      <path
                        d="M197.507 101.506C185.399 101.506 177.975 92.0257 177.975 77.5628V76.5905C177.975 62.0061 185.514 52.5262 197.507 52.5262C209.386 52.5262 217.039 62.0061 217.039 76.712V77.5628C217.039 91.9041 209.5 101.506 197.507 101.506ZM197.393 109.892C214.412 109.892 226.862 96.6441 226.862 77.4412V76.4689C226.862 57.3877 214.412 44.1401 197.507 44.1401C180.602 44.1401 168.152 57.5092 168.152 76.5905V77.5628C168.152 96.1579 180.374 109.892 197.393 109.892Z"
                        fill="black"
                      />
                      <rect
                        x="152.352"
                        y="74.8257"
                        width="17.282"
                        height="10.5427"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div className="left-[80px] top-[401.50px]  flex-col justify-start items-start  gap-[20px] inline-flex max-[350px]:w-full">
                  <div className="text-black widescreen:text-[20px] widestscreen:text-[32px] text-xl font-normal font-['Graphik'] leading-[120%]">
                    Codelinear Software Solutions.{" "}
                  </div>
                  <div className="w-[305px] widescreen:w-[390px] opacity-80 widescreen:text-[20px] widestscreen:text-[24px] max-sm:opacity-100 text-black text-base font-normal font-['Graphik'] leading-normal max-lg:w-full">
                    Transforming businesses through design-led product
                    engineering.{" "}
                  </div>
                </div>
                <div className="left-[80px] top-[586.39px] max-lg:gap-[140px] max-sm:gap-[32px] justify-start items-start gap-[57px] inline-flex max-[350px]:w-full max-sm:flex-wrap">
                  <div className="flex-col justify-start items-start  gap-[20px] inline-flex">
                    <div className="text-black text-xl widescreen:text-[20px] widestscreen:text-[32px] font-normal font-['Graphik'] leading-[30px]">
                      Reach out to us
                    </div>
                    <div className="opacity-80 max-sm:opacity-100 widescreen:text-[20px] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] underline leading-normal">
                      <a href="mailto:info@codelinear.com">
                        info@codelinear.com{" "}
                      </a>
                    </div>
                    <div className="opacity-80 max-sm:opacity-100 widescreen:text-[20px] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                      <a href="tel:+1 415 523 5957">+1 415 523 5957 </a>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start  gap-[20px] inline-flex">
                    <div className="text-black text-xl widescreen:text-[20px] widestscreen:text-[32px] font-normal font-['Graphik'] leading-[30px]">
                      Follow us
                    </div>
                    <div className="justify-start items-center w-[163px] flex-wrap max-sm:w-full gap-[19.84px] inline-flex">
                      <div className="w-6 h-6 relative">
                        <a
                          target="_blank"
                          href="https://in.linkedin.com/company/codelinear"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M18.9992 3.33838C19.5296 3.33838 20.0383 3.54908 20.4134 3.92414C20.7884 4.29919 20.9991 4.80788 20.9991 5.33828V19.3376C20.9991 19.868 20.7884 20.3767 20.4134 20.7518C20.0383 21.1268 19.5296 21.3375 18.9992 21.3375H4.9999C4.4695 21.3375 3.96081 21.1268 3.58576 20.7518C3.2107 20.3767 3 19.868 3 19.3376V5.33828C3 4.80788 3.2107 4.29919 3.58576 3.92414C3.96081 3.54908 4.4695 3.33838 4.9999 3.33838H18.9992ZM18.4993 18.8376V13.5379C18.4993 12.6733 18.1558 11.8442 17.5445 11.2328C16.9331 10.6215 16.104 10.278 15.2394 10.278C14.3895 10.278 13.3995 10.798 12.9195 11.578V10.468H10.1297V18.8376H12.9195V13.9079C12.9195 13.1379 13.5395 12.5079 14.3095 12.5079C14.6807 12.5079 15.0368 12.6554 15.2994 12.918C15.5619 13.1805 15.7094 13.5366 15.7094 13.9079V18.8376H18.4993ZM6.87981 8.89811C7.32536 8.89811 7.75265 8.72112 8.0677 8.40608C8.38274 8.09103 8.55973 7.66374 8.55973 7.21819C8.55973 6.28824 7.80977 5.52827 6.87981 5.52827C6.43162 5.52827 6.00178 5.70632 5.68486 6.02324C5.36794 6.34016 5.18989 6.77 5.18989 7.21819C5.18989 8.14815 5.94986 8.89811 6.87981 8.89811ZM8.26975 18.8376V10.468H5.49988V18.8376H8.26975Z"
                              fill="black"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="w-6 h-6 relative">
                        <a
                          target="_blank"
                          href="https://www.facebook.com/Codelinear/"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                          >
                            <path
                              d="M22.8438 12.3384C22.8438 6.81838 18.3638 2.33838 12.8438 2.33838C7.32375 2.33838 2.84375 6.81838 2.84375 12.3384C2.84375 17.1784 6.28375 21.2084 10.8438 22.1384V15.3384H8.84375V12.3384H10.8438V9.83838C10.8438 7.90838 12.4137 6.33838 14.3438 6.33838H16.8438V9.33838H14.8438C14.2937 9.33838 13.8438 9.78838 13.8438 10.3384V12.3384H16.8438V15.3384H13.8438V22.2884C18.8937 21.7884 22.8438 17.5284 22.8438 12.3384Z"
                              fill="black"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="w-6 h-6 relative">
                        <a
                          target="_blank"
                          href="https://www.instagram.com/codelinear_/"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                          >
                            <path
                              d="M8.48848 2.33838H16.8885C20.0885 2.33838 22.6885 4.93838 22.6885 8.13838V16.5384C22.6885 18.0766 22.0774 19.5519 20.9897 20.6396C19.902 21.7273 18.4267 22.3384 16.8885 22.3384H8.48848C5.28848 22.3384 2.68848 19.7384 2.68848 16.5384V8.13838C2.68848 6.60012 3.29955 5.12487 4.38726 4.03716C5.47497 2.94945 6.95022 2.33838 8.48848 2.33838ZM8.28848 4.33838C7.3337 4.33838 6.41802 4.71766 5.74289 5.39279C5.06776 6.06793 4.68848 6.9836 4.68848 7.93838V16.7384C4.68848 18.7284 6.29848 20.3384 8.28848 20.3384H17.0885C18.0433 20.3384 18.9589 19.9591 19.6341 19.284C20.3092 18.6088 20.6885 17.6932 20.6885 16.7384V7.93838C20.6885 5.94838 19.0785 4.33838 17.0885 4.33838H8.28848ZM17.9385 5.83838C18.27 5.83838 18.5879 5.97007 18.8224 6.20449C19.0568 6.43892 19.1885 6.75686 19.1885 7.08838C19.1885 7.4199 19.0568 7.73784 18.8224 7.97226C18.5879 8.20668 18.27 8.33838 17.9385 8.33838C17.607 8.33838 17.289 8.20668 17.0546 7.97226C16.8202 7.73784 16.6885 7.4199 16.6885 7.08838C16.6885 6.75686 16.8202 6.43892 17.0546 6.20449C17.289 5.97007 17.607 5.83838 17.9385 5.83838ZM12.6885 7.33838C14.0146 7.33838 15.2863 7.86516 16.224 8.80284C17.1617 9.74053 17.6885 11.0123 17.6885 12.3384C17.6885 13.6645 17.1617 14.9362 16.224 15.8739C15.2863 16.8116 14.0146 17.3384 12.6885 17.3384C11.3624 17.3384 10.0906 16.8116 9.15294 15.8739C8.21526 14.9362 7.68848 13.6645 7.68848 12.3384C7.68848 11.0123 8.21526 9.74053 9.15294 8.80284C10.0906 7.86516 11.3624 7.33838 12.6885 7.33838ZM12.6885 9.33838C11.8928 9.33838 11.1298 9.65445 10.5672 10.2171C10.0045 10.7797 9.68848 11.5427 9.68848 12.3384C9.68848 13.134 10.0045 13.8971 10.5672 14.4597C11.1298 15.0223 11.8928 15.3384 12.6885 15.3384C13.4841 15.3384 14.2472 15.0223 14.8098 14.4597C15.3724 13.8971 15.6885 13.134 15.6885 12.3384C15.6885 11.5427 15.3724 10.7797 14.8098 10.2171C14.2472 9.65445 13.4841 9.33838 12.6885 9.33838Z"
                              fill="black"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="w-6 h-6 relative">
                        <a
                          target="_blank"
                          href="https://medium.com/@codelinear_"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_1581_609)">
                              <path
                                d="M14.0706 12.3378C14.0706 16.0653 11.0406 19.0878 7.30114 19.0878C6.41355 19.089 5.53441 18.9153 4.71392 18.5767C3.89344 18.2382 3.14768 17.7413 2.51921 17.1145C1.89075 16.4877 1.3919 15.7433 1.05114 14.9237C0.710379 14.1041 0.534384 13.2254 0.533203 12.3378C0.533203 8.60887 3.56318 5.5879 7.30114 5.5879C8.18887 5.58652 9.06817 5.76003 9.88883 6.09852C10.7095 6.437 11.4554 6.93384 12.084 7.56065C12.7127 8.18746 13.2117 8.93196 13.5525 9.75164C13.8934 10.5713 14.0694 11.4501 14.0706 12.3378ZM21.4955 12.3378C21.4955 15.8478 19.9805 18.6918 18.1116 18.6918C16.2426 18.6918 14.7276 15.8463 14.7276 12.3378C14.7276 8.82787 16.2426 5.9839 18.1116 5.9839C19.9805 5.9839 21.4955 8.82937 21.4955 12.3378ZM24.533 12.3378C24.533 15.4818 24.0005 18.0303 23.342 18.0303C22.685 18.0303 22.1525 15.4803 22.1525 12.3378C22.1525 9.19387 22.685 6.64539 23.3435 6.64539C24.0005 6.64539 24.533 9.19387 24.533 12.3378Z"
                                fill="black"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1581_609">
                                <rect
                                  width="23.9998"
                                  height="23.9998"
                                  fill="white"
                                  transform="translate(0.533203 0.337891)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </div>

                      <div className="w-6 h-6 relative">
                        <a
                          target="_blank"
                          href="https://www.youtube.com/channel/UCFsBmCBzxSX8fS8HxCHOYtA"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                          >
                            <path
                              d="M10.3777 15.3379L15.5677 12.3379L10.3777 9.33789V15.3379ZM21.9377 7.50789C22.0677 7.97789 22.1577 8.60789 22.2177 9.40789C22.2877 10.2079 22.3177 10.8979 22.3177 11.4979L22.3777 12.3379C22.3777 14.5279 22.2177 16.1379 21.9377 17.1679C21.6877 18.0679 21.1077 18.6479 20.2077 18.8979C19.7377 19.0279 18.8777 19.1179 17.5577 19.1779C16.2577 19.2479 15.0677 19.2779 13.9677 19.2779L12.3777 19.3379C8.18769 19.3379 5.57769 19.1779 4.54769 18.8979C3.64769 18.6479 3.06769 18.0679 2.81769 17.1679C2.68769 16.6979 2.59769 16.0679 2.53769 15.2679C2.46769 14.4679 2.43769 13.7779 2.43769 13.1779L2.37769 12.3379C2.37769 10.1479 2.53769 8.53789 2.81769 7.50789C3.06769 6.60789 3.64769 6.02789 4.54769 5.77789C5.01769 5.64789 5.87769 5.55789 7.19769 5.49789C8.49769 5.42789 9.68769 5.39789 10.7877 5.39789L12.3777 5.33789C16.5677 5.33789 19.1777 5.49789 20.2077 5.77789C21.1077 6.02789 21.6877 6.60789 21.9377 7.50789Z"
                              fill="black"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="w-5 h-5 relative">
                        <a
                          target="_blank"
                          href="https://twitter.com/Codelinear_"
                        >
                          <Image src={x} alt="Twitter Logo" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" max-lg:flex max-1sm:flex-col max-1sm:h-auto hidden max-2lg:gap-[40px] flex gap-[80px] max-2xl:gap-[40px] max-1lg:gap-[80px] pt-20 max-2lg:gap-[40px] max-xl:pt-[0] h-[150px] max-sm:h-[120px]">
                <div className="w-[239.64px] max-1sm:w-full max-1sm:h-auto h-[116px] flex-col justify-start items-start  gap-[10px] inline-flex">
                  <div className="text-black text-xl widescreen:text-[20px] widestscreen:text-[32px] font-normal font-['Graphik'] leading-normal">
                    India{" "}
                  </div>
                  <div className="w-[239.64px] max-1sm:w-full opacity-80 max-sm:opacity-100 text-black text-base font-normal font-['Graphik'] leading-normal">
                    Redwood, D3 Block, Manyata Embassy Business Park, Bangalore
                    - 560045
                  </div>
                </div>
                <div className="w-60 max-1sm:w-full max-1sm:h-auto  max-2lg:w-48 h-[92px] flex-col justify-start items-start gap-[20px] inline-flex">
                  <div className="text-black text-xl font-normal font-['Graphik'] leading-normal">
                    USA{" "}
                  </div>
                  <div className="w-60 max-1sm:w-full  max-2lg:w-48 opacity-80 max-sm:opacity-100 text-black text-base font-normal font-['Graphik'] leading-normal">
                    600 B Street, Suite 300, San Diego, CA 92101{" "}
                  </div>
                </div>
              </div>
              <div className="w-[390px] max-sm:opacity-100 widescreen:text-[20px] widestscreen:text-[24px] max-[1422px]:whitespace-normal whitespace-nowrap max-2md:hidden left-[80px] top-[723.50px] max-sm:w-[90%]  opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-[350px]:w-full">
                Copyright © Codelinear Software Solutions Pvt Ltd. All Rights
                Reserved.{" "}
              </div>
            </div>
            <div className="flex max-lg:items-end max-2md:items-start  max-sm:flex-col-reverse flex-wrap gap-20 max-2xl:gap-[40px] max-1lg:gap-[80px] max-2lg:gap-[40px]  max-1lg:gap-y-[40px] max-xl:gap-y-[64px] max-sm:gap-8 max-xl:gap-y-[82px] w-[55%] max-2lg:w-[40%] max-lg:w-[40%] max-2md:w-full max-lg:p-0  max-md:w-full max-sm:flex-wrapreverse">
              <div className="max-lg:hidden flex gap-[10px] pt-20 max-xl:pt-[0] h-[150px] max-sm:h-[400px]">
                <div className="w-[309.64px] widescreen:w-[424px] widestscreen:w-[494px] max-2lg:w-[269px] h-[116px] flex-col justify-start items-start  gap-[20px] inline-flex">
                  <div className="text-black text-xl widescreen:text-[20px] widestscreen:text-[32px] font-normal font-['Graphik'] leading-normal">
                    India{" "}
                  </div>
                  <div className="w-[309.64px] widescreen:w-full max-2lg:w-[269px] widescreen:text-[20px] widestscreen:text-[24px] opacity-80 max-sm:opacity-100 text-black text-base font-normal font-['Graphik'] leading-normal">
                    Redwood, D3 Block, Manyata Embassy Business Park, Bangalore
                    - 560045
                  </div>
                </div>
                <div className="w-60 widescreen:w-[424px] widestscreen:w-[474px] max-2lg:w-48 h-[92px] flex-col justify-start items-start gap-[20px] inline-flex">
                  <div className="text-black text-xl widescreen:text-[20px] widestscreen:text-[32px] font-normal font-['Graphik'] leading-normal">
                    USA{" "}
                  </div>
                  <div className="w-60  max-2lg:w-48 widescreen:w-full opacity-80 widescreen:text-[20px] widestscreen:text-[24px] max-sm:opacity-100 text-black text-base font-normal font-['Graphik'] leading-normal">
                    600 B Street, Suite 300, San Diego, CA 92101{" "}
                  </div>
                </div>
              </div>
              <div className="w-[390px] hidden max-sm:block hidden left-[80px] top-[723.50px] max-sm:w-[90%]  opacity-80 max-sm:opacity-100 text-black text-base font-normal font-['Graphik'] leading-normal max-[350px]:w-full">
                Copyright © Codelinear Software Solutions Pvt Ltd. All Rights
                Reserved.{" "}
              </div>
              <div className="flex max-lg:h-[500px] max-md:gap-0 max-md:flex-col max-2md:h-auto flex-row gap-[80px] max-2xl:gap-[40px] max-2md:flex-row max-2md:gap-[40px] max-1lg:flex-col max-1lg:gap-0">
                <div className="left-[622px] widescreen:w-[350px] widestscreen:w-[424px] w-[240px] max-xl:pt-0  pt-5 top-[201.89px]  flex-col justify-start items-start max-sm:gap-[16px] gap-[20px] inline-flex max-md:w-full">
                  <div className="text-black text-xl widescreen:text-[20px] widestscreen:text-[32px] font-normal font-['Graphik'] leading-[30px]">
                    <Link href={"/services"} onClick={scrollToTop}>
                      Services
                    </Link>
                  </div>
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="opacity-80 max-sm:opacity-100 w-60 widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                      <Link
                        href={"/services/product-design-and-innovation"}
                        onClick={scrollToTop}
                      >
                        Product Design and Innovation
                      </Link>
                    </div>
                    <div className="opacity-80 max-sm:opacity-100 w-60 widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                      <Link
                        href={"/services/app-development-and-modernization"}
                        onClick={scrollToTop}
                      >
                        {" "}
                        App Development and Modernization
                      </Link>
                    </div>
                    <div className="opacity-80 max-sm:opacity-100 w-60 widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                      <Link
                        href={"/services/technology-consulting"}
                        onClick={scrollToTop}
                      >
                        Technology Consulting
                      </Link>
                    </div>
                    <div className="opacity-80 max-sm:opacity-100 w-60 widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                      <Link
                        href={"/services/artificial-intelligence-services"}
                        onClick={scrollToTop}
                      >
                        Artificial Intelligence (AI) Services{" "}
                      </Link>
                    </div>
                    <div className="opacity-80 max-sm:opacity-100 w-60 widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                      <Link
                        href={"/services/ecommerce-marketplace-development"}
                        onClick={scrollToTop}
                      >
                        Ecommerce Marketplace Development
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="left-[1056px widescreen:w-[350px] widestscreen:w-[424px] w-[240px] max-1lg:pt-0 max-sm:ml-0 pt-5 max-xl:pt-0 top-[201.89px]  flex-col  justify-start items-start gap-[20px] inline-flex max-md:flex-wrap max-md:w-full">
                  <div className="text-black opacity-0 max-md:hidden cursor-default max-2md:block max-1lg:hidden text-xl font-normal font-['Graphik'] leading-[30px]">
                    Services
                  </div>
                  <div className="flex-col max-1lg:mt-2 max-2md:mt-0 max-md:mt-2 justify-start items-start gap-2 flex">
                    <div className="opacity-80 max-sm:opacity-100 w-60 widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                      <Link
                        href={"/services/cloud-engineering"}
                        onClick={scrollToTop}
                      >
                        Cloud Engineering
                      </Link>
                    </div>
                    <div className="opacity-80 max-sm:opacity-100 w-60 widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                      <Link
                        href={"/services/game-development"}
                        onClick={scrollToTop}
                      >
                        Game Development
                      </Link>
                    </div>
                    <div className="opacity-80 max-sm:opacity-100 w-60 widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                      <Link
                        href={"/services/ar-vr-services"}
                        onClick={scrollToTop}
                      >
                        AR/VR Services
                      </Link>
                    </div>
                    <div className="opacity-80 max-sm:opacity-100 w-60 widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                      <Link
                        href={"/services/low-code-and-no-code"}
                        onClick={scrollToTop}
                      >
                        Low-code and No-code
                      </Link>
                    </div>
                    <div className="opacity-80 max-sm:opacity-100 w-60 widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                      <Link
                        href={"/services/salesforce-services"}
                        onClick={scrollToTop}
                      >
                        Salesforce Services
                      </Link>
                    </div>
                    <div className="opacity-80 max-sm:opacity-100 w-60 widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                      <Link
                        href={"/services/microsoft-sharepoint-services"}
                        onClick={scrollToTop}
                      >
                        Microsoft SharePoint services{" "}
                      </Link>
                    </div>
                    <div className="opacity-80 max-sm:opacity-100 w-60 widescreen:w-full widescreen:text-[20px] widestscreen:text-[24px] text-black text-base font-normal font-['Graphik'] leading-normal">
                      <Link
                        href={"/services/quality-assurance"}
                        onClick={scrollToTop}
                      >
                        Quality Assurance
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[88px] widescreen:w-[150px] max-2md:h-auto max-lg:h-[500px] h-[266px] flex-col pt-5 max-xl:pt-[0] justify-start items-start gap-[20px] inline-flex max-sm:order-1">
                <div className="text-black text-xl widescreen:text-[20px] widestscreen:text-[32px] font-normal font-['Graphik'] leading-[30px]">
                  Sitemap
                </div>
                <div className="w-full justify-start widescreen:w-full items-start gap-[35px] inline-flex">
                  <div className="flex-col widescreen:w-full max-lg:w-28 justify-start items-start gap-2 inline-flex">
                    <Link
                      onClick={scrollToTop}
                      href="/services"
                      className="opacity-80 max-sm:opacity-100 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widestscreen:text-[24px]"
                    >
                      Services
                    </Link>
                    <Link
                      onClick={scrollToTop}
                      href={"/about-us"}
                      className="opacity-80 max-sm:opacity-100 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widestscreen:text-[24px]"
                    >
                      About Us
                    </Link>
                    <Link
                      onClick={scrollToTop}
                      href="/insights"
                      className="opacity-80 max-sm:opacity-100 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widestscreen:text-[24px]"
                    >
                      Insights
                    </Link>
                    <Link
                      onClick={scrollToTop}
                      href="/case-studies"
                      className="w-[98px] widescreen:w-full opacity-80 max-sm:opacity-100 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widestscreen:text-[24px]"
                    >
                      Case Studies
                    </Link>
                    <Link
                      onClick={scrollToTop}
                      href="/industries"
                      className="opacity-80 max-sm:opacity-100 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widestscreen:text-[24px]"
                    >
                      Industries
                    </Link>
                    <Link
                      onClick={scrollToTop}
                      href="/careers"
                      className="opacity-80 max-sm:opacity-100 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widestscreen:text-[24px]"
                    >
                      Careers
                    </Link>
                    <Link
                      onClick={scrollToTop}
                      href="/contact-us"
                      className="opacity-80 max-sm:opacity-100 text-black text-base font-normal font-['Graphik'] leading-normal widescreen:text-[20px] widestscreen:text-[24px]"
                    >
                      Contact Us
                    </Link>
                    <div className="opacity-80 hidden max-md:block max-sm:opacity-100 text-black text-base font-normal font-['Graphik'] leading-normal">
                      <Link
                        href={"/ai-studio"}
                        onClick={scrollToTop}
                        className="bg-[#FCEBC0] w-[113px] h-[36px] rounded-[25px] items-center justify-center flex gap-[4px]"
                      >
                        <Image
                          src={sparkle}
                          alt="sparkle Icon"
                          className="w-[24px] h-[24px]"
                          srcSet=""
                        />
                        AI Studio
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[390px] hidden max-sm:hidden max-2md:block hidden left-[80px] top-[723.50px] max-sm:w-[90%]  opacity-80 max-sm:opacity-100 text-black text-base font-normal font-['Graphik'] leading-normal max-[350px]:w-full">
                Copyright © Codelinear Software Solutions Pvt Ltd. All Rights
                Reserved.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SubFooter;
