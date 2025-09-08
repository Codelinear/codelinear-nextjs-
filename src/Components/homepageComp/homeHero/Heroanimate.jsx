"use client";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
// import Link from "next/link";;
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "../../pages/production/production.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import img1 from "../../../assets/homeassets/Hero section case study01.jpg";
import img2 from "../../../assets/homeassets/Hero section case study02.jpg";
import img3 from "../../../assets/homeassets/Hero section case study03.jpg";
import img4 from "../../../assets/homeassets/Hero section case study04.jpg";
import img5 from "../../../assets/homeassets/Hero section case study05.jpg";
import Link from "next/link";
import Image from "next/image";

const Homeanimate = () => {
  const progressLine = useRef(null);
  const progressLine1 = useRef(null);
  const progressLine2 = useRef(null);
  const progressLine3 = useRef(null);
  const progressLine4 = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progress === 0) {
      progressLine.current.style.transition = "none";
      progressLine1.current.style.transition = "none";
      progressLine2.current.style.transition = "none";
      progressLine3.current.style.transition = "none";
      progressLine4.current.style.transition = "none";
      progressLine.current.style.width = "0%";
      progressLine1.current.style.width = "0%";
      progressLine2.current.style.width = "0%";
      progressLine3.current.style.width = "0%";
      progressLine4.current.style.width = "0%";
      progressLine.current.style.transition = "width 0s ease";
      progressLine1.current.style.transition = "width 0s ease";
      progressLine2.current.style.transition = "width 0s ease";
      progressLine3.current.style.transition = "width 0s ease";
      progressLine4.current.style.transition = "width 0s ease";
    } else {
      progressLine.current.style.width = `${100 - progress * 100}%`;
      progressLine1.current.style.width = `${100 - progress * 100}%`;
      progressLine2.current.style.width = `${100 - progress * 100}%`;
      progressLine3.current.style.width = `${100 - progress * 100}%`;
      progressLine4.current.style.width = `${100 - progress * 100}%`;
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <div className="flex bigscreen:w-[730px] widestscreen:w-[845px] justify-start w-[630px] max-lg:items-start items-end max-sm:w-full max-sm:px-[20px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 5400,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper float-end maxlg:float-start  mr-0  z-[2] max-lg:mt-20  max-sm:mt-[10px]  max-md:w-full"
      >
        <SwiperSlide>
          <div className="w-[630px] bigscreen:w-[730px] widestscreen:w-[845px] bigscreen:h-[373px] h-[274px] left-[730px] top-[469px]  bg-[#0A41CF] flex max-md:w-full max-sm:flex max-sm:flex-wrap max-sm:h-auto">
            <div className="w-[316.12px] bigscreen:w-[432px] max-mini:min-h-[240px] left-0 top-0  bg-neutral-100 justify-center items-center max-sm:items-start max-sm:justify-start inline-flex max-sm:h-auto max-sm:w-full">
              <Image
                fetchPriority="highest"
                className="w-[316.46px] bigscreen:w-[100%] max-md:h-full max-sm:w-full max-sm:h-auto"
                src={img1}
                alt="Client IKEA"
              />
            </div>
            <div className="flex flex-col  justify-between p-[37.5px] pb-[44.5px] max-sm:h-[274px]">
              <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] max-sm:gap-[12px] inline-flex">
                <div className="text-[#FFCD05] widescreen:text-[24px] text-base opacity-80 font-normal font-['Graphik']">
                  IKEA
                </div>
                <div className="w-[205.63px] widescreen:text-[24px] widestscreen:w-[300px] text-[#FFCD05] text-[20px] leading-[120%] font-normal font-['Graphik']">
                  Changing the way people shop.{" "}
                </div>
              </div>
              <Link onClick={scrollToTop} href={"/case-studies"}>
                <button className="px-[16px] widestscreen:py-[12px] widestscreen:px-[24px] py-[8px] left-[353px] top-[170.50px]  rounded-[30px] border border-[#FFCD05] justify-center items-center gap-2 inline-flex hover:bg-[#FFCD05]  transition-all  hover:border-[#FFCD05]  text-[#FFCD05] hover:text-black">
                  <div className=" text-base font-normal font-['Graphik'] widescreen:text-[24px]">
                    View Case study
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="autoplay-progress max-sm:hidden">
            <div className="progress-bar" ref={progressLine}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[630px] bigscreen:w-[730px] widestscreen:w-[845px] bigscreen:h-[374px] h-[274px] left-[730px] top-[469px]  bg-[#F4ECDE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-auto">
            <div className="w-[316.12px] bigscreen:w-[432px] max-mini:min-h-[240px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full max-sm:h-auto">
              <Image
                className="w-[316.46px] bigscreen:w-full max-md:h-full max-sm:w-full  max-sm:h-auto "
                src={img2}
                fetchPriority="low"
                loading="lazy"
                alt="Client COWBOY"
              />
            </div>
            <div className="flex flex-col justify-between p-[37.5px] pb-[44.5px] max-sm:h-[274px]">
              <div className="left-[352.68px] top-[37.50px] flex-col justify-start items-start gap-[18px] inline-flex max-sm:gap-[12px] ">
                <div className="text-black text-base widescreen:text-[24px] font-normal opacity-80 font-['Graphik']">
                  COWBOY{" "}
                </div>
                <div className="w-[205.63px] widescreen:text-[24px] widestscreen:w-[300px] text-black  text-[20px] leading-[120%] font-normal font-['Graphik']">
                  Helping the world switch to sustainable energy- seamlessly.{" "}
                </div>
              </div>
              <Link onClick={scrollToTop} href={"/case-studies"}>
                <button className="px-[16px] py-[8px] widestscreen:px-[24px] widestscreen:py-[12px] widescreen:text-[24px] left-[353px] top-[170.50px]  rounded-[30px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                  <div className="text- text-base font-normal font-['Graphik']">
                    View Case study
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="autoplay-progress1 max-sm:hidden">
            <div className="progress-bar1" ref={progressLine1}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[630px] bigscreen:w-[730px] widestscreen:w-[845px] bigscreen:h-[374px] h-[274px] left-[730px] top-[469px]  bg-[#F4ECDE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-auto">
            <div className="w-[316.12px] bigscreen:w-[432px] max-mini:min-h-[240px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full max-sm:h-auto">
              <Image
                className="w-[316.46px] bigscreen:w-full max-md:h-full max-sm:w-full  max-sm:h-auto "
                loading="lazy"
                fetchPriority="low"
                src={img3}
                alt="Client SEA"
              />
            </div>
            <div className="flex flex-col  justify-between p-[37.5px] pb-[44.5px] max-sm:h-[274px]">
              <div>
                <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] max-sm:gap-[12px] inline-flex">
                  <div className="text-[#EF5019] text-base widescreen:text-[24px] opacity-80 font-normal font-['Graphik']">
                    SEA{" "}
                  </div>
                  <div className="w-[205.63px] text-[#EF5019] widescreen:text-[24px] widestscreen:w-[300px] text-[20px] leading-[120%] font-normal font-['Graphik']">
                    A Disruptive marketing solution{" "}
                  </div>
                </div>
              </div>
              <Link onClick={scrollToTop} href={"/case-studies"}>
                <button className="px-[16px] py-[8px] left-[353px] widescreen:text-[24px] widestscreen:px-[24px] widestscreen:py-[12px] top-[170.50px]  rounded-[30px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                  <div className="textyellow-400 text-base font-normal font-['Graphik']">
                    View Case study
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="autoplay-progress2 max-sm:hidden">
            <div className="progress-bar2" ref={progressLine2}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[630px] bigscreen:w-[730px] widestscreen:w-[845px] bigscreen:h-[374px] h-[274px] left-[730px] top-[469px]  bg-[#F4ECDE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-auto">
            <div className="w-[316.12px] bigscreen:w-[432px] max-mini:min-h-[240px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full max-sm:h-auto">
              <Image
                className="w-[316.46px] bigscreen:w-full max-md:h-full max-sm:w-full  max-sm:h-auto "
                loading="lazy"
                fetchPriority="low"
                src={img4}
                alt="Client MANGO"
              />
            </div>
            <div className="flex flex-col  justify-between  p-[37.5px] pb-[44.5px] max-sm:h-[274px]">
              <div>
                <div className="left-[352.68px] top-[37.50px] flex-col justify-start items-start gap-[18px] max-sm:gap-[12px] inline-flex">
                  <div className="text-[#06212B] text-base widescreen:text-[24px] opacity-80 font-normal font-['Graphik']">
                    MANGO{" "}
                  </div>
                  <div className="w-[205.63px] text-[#06212B] widescreen:text-[24px] widestscreen:w-[300px] text-[20px] leading-[120%] font-normal font-['Graphik']">
                    Expanding the global reach of a clothing giant.{" "}
                  </div>
                </div>
              </div>
              <Link onClick={scrollToTop} href={"/case-studies"}>
                <button className="px-[16px] py-[8px] widescreen:text-[24px] widestscreen:px-[24px] widestscreen:py-[12px] left-[353px] top-[170.50px]  rounded-[30px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                  <div className="textyellow-400 text-base font-normal font-['Graphik']">
                    View Case study
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="autoplay-progress3 max-sm:hidden">
            <div className="progress-bar3" ref={progressLine3}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[630px] bigscreen:w-[730px] widestscreen:w-[845px] bigscreen:h-[374px] h-[274px] left-[730px] top-[469px]  bg-[#F4ECDE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-auto">
            <div className="w-[316.12px] bigscreen:w-[432px] max-mini:min-h-[240px] left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full max-sm:h-auto">
              <Image
                className="w-[316.46px] bigscreen:w-full max-md:h-full max-sm:w-full  max-sm:h-auto "
                loading="lazy"
                fetchPriority="low"
                src={img5}
                alt="Client DEEL"
              />{" "}
            </div>
            <div className="flex flex-col  justify-between p-[37.5px] pb-[44.5px] max-sm:h-[274px]">
              <div>
                <div className="left-[352.68px] top-[37.50px] flex-col justify-start items-start gap-[18px] max-sm:gap-[12px] inline-flex">
                  <div className="text-[#15357A] text-base opacity-80 widescreen:text-[24px] font-normal font-['Graphik']">
                    DEEL{" "}
                  </div>
                  <div className="w-[205.63px] text-[#15357A] widescreen:text-[24px] widestscreen:w-[300px] text-[20px] leading-[120%] font-normal font-['Graphik']">
                    Making recruiting accessible worldwide{" "}
                  </div>
                </div>
              </div>
              <Link onClick={scrollToTop} href={"/case-studies"}>
                <button className="px-[16px] py-[8px] left-[353px] widescreen:text-[24px] widestscreen:px-[24px] widestscreen:py-[12px] top-[170.50px]  rounded-[30px] border border-[#15357A] justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                  <div className="text-[#15357A] text-base font-normal font-['Graphik']">
                    View Case study
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="autoplay-progress4 max-sm:hidden">
            <div className="progress-bar4" ref={progressLine4}></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Homeanimate;
