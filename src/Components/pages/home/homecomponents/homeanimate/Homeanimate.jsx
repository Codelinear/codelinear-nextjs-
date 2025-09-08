"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "./homeanimate.scss";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  Mousewheel,
} from "swiper/modules";
import img from "../../../../../assets/homeassets/case study ikea.webp";
import img2 from "../../../../../assets/homeassets/case study cowboy.webp";
import img3 from "../../../../../assets/homeassets/case study sea.webp";
import img4 from "../../../../../assets/homeassets/case study mango.webp";
import img5 from "../../../../../assets/homeassets/case study deel.webp";

const Homeanimate = () => {
  const [width, setWidth] = useState(0); // Don't use window.innerWidth here

  useEffect(() => {
    // Now we're in the browser, so window is safe to use
    const handleResize = () => setWidth(window.innerWidth);

    // Set initial width
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };
  return (
    <>
      {width <= 1024 ? (
        <>
          <h1 className="max-sm:block hidden mb-[31px] mt-[81px] ml-[20px] text-[24px] leading-[120%]">
            Work we are proud of
          </h1>
          <div className="hero-animate absolute right-[80px] bottom-[40px] max-lg:relative max-lg:right-0 max-lg:bottom-0 flex max-lg:justify-center max-lg:w-[100%]  max-sm:mt-[0px]  max-sm:w-[100%] max-sm:justify-center max-lg:mt-20 ">
            <div className="flex maxlg:w-full justify-start w-full max-lg:items-start items-end max-sm:w-full max-sm:px-[0px]">
              <Swiper
                centeredSlides={true}
                slidesPerView={1.2}
                spaceBetween={20}
                navigation={false}
                modules={[Pagination, Navigation, EffectFade]}
                breakpoints={{
                  440: {
                    slidesPerView: 1.5,
                    spaceBetween: 40,
                  },
                  640: {
                    slidesPerView: 1.1,
                    spaceBetween: 30,
                  },
                }}
                className="mySwiper float-end maxlg:float-start  mr-0  z-[2] max-lg:mt-20  max-sm:mt-[10px]  max-md:w-full"
              >
                <SwiperSlide>
                  <div className="w-full h-full left-[730px] top-[469px]  bg-[#0A41CF] flex max-md:w-full max-sm:flex max-sm:flex-wrap max-sm:h-auto">
                    <div className="w-full left-0 top-0  bg-neutral-100 justify-center items-center max-sm:items-start max-sm:justify-start inline-flex max-sm:h-auto max-sm:w-full">
                      <Image
                        className="w-full max-md:h-full max-sm:w-full max-sm:h-auto"
                        loading="lazy"
                        src={img}
                        alt="Client - IKEA"
                      />
                    </div>
                    <div className="flex flex-col w-[100%]  justify-between p-[37.5px] pb-[44.5px] max-sm:h-[274px] max-sm:w-full">
                      <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] max-sm:gap-[12px] inline-flex">
                        <div className="text-[#FFCD05] text-base opacity-80 font-normal font-['Graphik'] widescreen:text-[20px] widest-screen:text-[24px]">
                          IKEA{" "}
                        </div>
                        <div className="w-[205.63px] text-[#FFCD05] text-[20px] leading-[120%] font-normal font-['Graphik']">
                          Changing the way people shop.{" "}
                        </div>
                      </div>
                      <Link onClick={scrollToTop} href={"/case-studies"}>
                        <button className="px-[16px] py-[8px] left-[353px] top-[170.50px] max-sm:w-full rounded-[30px] border border-[#FFCD05] justify-center items-center gap-2 inline-flex hover:bg-[#FFCD05]  transition-all  hover:border-[#FFCD05]  text-[#FFCD05] hover:text-black">
                          <div className=" widescreen:text-[24px] text-base font-normal font-['Graphik']">
                            View Case study
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-auto left-[730px] top-[469px]  bg-[#F4ECDE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-auto">
                    <div className="w-full left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full max-sm:h-auto">
                      <Image
                        className="w-full  max-md:h-full max-sm:w-full  max-sm:h-auto "
                        loading="lazy"
                        src={img2}
                        alt="Client - COWBOY"
                      />
                    </div>
                    <div className="flex flex-col w-[100%]  justify-between  p-[37.5px] pb-[44.5px] max-sm:h-[274px] max-sm:w-full">
                      <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] inline-flex max-sm:gap-[12px] ">
                        <div className="text-black text-base font-normal opacity-80 font-['Graphik']">
                          COWBOY{" "}
                        </div>
                        <div className="w-[205.63px] text-black  text-[20px] leading-[120%] font-normal font-['Graphik']">
                          Helping the world switch to sustainable energy-
                          seamlessly{" "}
                        </div>
                      </div>
                      <Link onClick={scrollToTop} href={"/case-studies"}>
                        <button className="px-[16px] py-[8px] max-sm:w-full left-[353px] top-[170.50px]  rounded-[30px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                          <div className="text- widescreen:text-[24px] text-base font-normal font-['Graphik']">
                            View Case study
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-auto left-[730px] top-[469px]  bg-[#D1EBFE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-auto">
                    <div className="w-full left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full">
                      <Image
                        className="w-full h-auto"
                        loading="lazy"
                        src={img3}
                        alt="Client - SEA"
                      />
                    </div>
                    <div className="flex flex-col w-[100%]  justify-between  p-[37.5px] pb-[44.5px] max-sm:h-[274px] max-sm:w-full">
                      <div>
                        <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] max-sm:gap-[12px] inline-flex">
                          <div className="text-[#EF5019] text-base opacity-80 font-normal font-['Graphik'] widescreen:text-[20px] widest-screen:text-[24px]">
                            SEA{" "}
                          </div>
                          <div className="w-[205.63px] text-[#EF5019]  text-[20px] leading-[120%] font-normal font-['Graphik']">
                            A Disruptive marketing solution{" "}
                          </div>
                        </div>
                      </div>
                      <Link onClick={scrollToTop} href={"/case-studies"}>
                        <button className="px-[16px] py-[8px] left-[353px] top-[170.50px] max-sm:w-full rounded-[30px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                          <div className="textyellow-400 widescreen:text-[24px] text-base font-normal font-['Graphik']">
                            View Case study
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-auto left-[730px] top-[469px]  bg-[#F1F1F1] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-auto">
                    <div className="w-full left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full">
                      <Image
                        className="w-full  max-md:h-full  max-sm:w-full max-sm:h-auto"
                        loading="lazy"
                        src={img4}
                        alt="Client - mango"
                      />
                    </div>
                    <div className="flex flex-col w-[100%] justify-between  p-[37.5px] pb-[44.5px] max-sm:h-[274px] max-sm:w-full">
                      <div>
                        <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] max-sm:gap-[12px] inline-flex">
                          <div className="text-[#06212B] text-base opacity-80 font-normal font-['Graphik'] widescreen:text-[20px] widest-screen:text-[24px]">
                            mango{" "}
                          </div>
                          <div className="w-[205.63px] text-[#06212B]  text-[20px] leading-[120%] font-normal font-['Graphik']">
                            Expanding the global reach of a clothing giant.{" "}
                          </div>
                        </div>
                      </div>
                      <Link onClick={scrollToTop} href={"/case-studies"}>
                        <button className="px-[16px] max-sm:w-full py-[8px] left-[353px] top-[170.50px]  rounded-[30px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                          <div className="textyellow-400 widescreen:text-[24px] text-base font-normal font-['Graphik']">
                            View Case study
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-auto left-[730px] top-[469px]  bg-[#EBF5FE] flex max-md:w-full  max-sm:flex max-sm:flex-wrap max-sm:h-auto">
                    <div className="w-full left-0 top-0  bg-neutral-100 justify-center items-center inline-flex max-sm:w-full">
                      <Image
                        className="w-full  max-md:h-full  max-sm:w-full max-sm:h-auto"
                        loading="lazy"
                        src={img5}
                        alt="Client - deel"
                      />
                    </div>
                    <div className="flex w-[100%] flex-col max-sm:w-full  justify-between p-[37.5px] pb-[44.5px] max-sm:h-[274px]">
                      <div>
                        <div className="left-[352.68px] top-[37.50px]  flex-col justify-start items-start gap-[18px] max-sm:gap-[12px] inline-flex">
                          <div className="text-[#15357A] text-base opacity-80 font-normal font-['Graphik'] widescreen:text-[20px] widest-screen:text-[24px]">
                            deel{" "}
                          </div>
                          <div className="w-[205.63px] text-[#15357A]  text-[20px] leading-[120%] font-normal font-['Graphik']">
                            Making recruiting accessible worldwide{" "}
                          </div>
                        </div>
                      </div>
                      <Link onClick={scrollToTop} href={"/case-studies"}>
                        <button className="px-[16px] max-sm:w-full py-[8px] left-[353px] top-[170.50px]  rounded-[30px] border border-[#15357A] justify-center items-center gap-2 inline-flex hover:bg-yellow-400  transition-all  hover:border-yellow-400  text-black hover:text-black">
                          <div className="text-[#15357A] widescreen:text-[24px] text-base font-normal font-['Graphik']">
                            View Case study
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </>
      ) : (
        <div className="home-container max-lg:hidden">
          <Swiper
            navigation={true}
            allowTouchMove={false}
            loop={true}
            effect={"fade"}
            modules={[Autoplay, Mousewheel, Navigation, EffectFade]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full h-auto  bg-[#0A41CF] justify-start items-center gap-[80.78px] max-2lg:gap-[40px] inline-flex">
                <div className="w-[50%] bg-neutral-100 justify-end items-center inline-flex">
                  <Image
                    className="w-full h-auto"
                    loading="lazy"
                    src={img}
                    alt="Client - IKEA"
                  />
                </div>
                <div className="h-[515.38px] max-1xl:h-[430px] widescreen:h-[700px] widestscreen:h-[920px] widescreen:w-[40%] max-1lg:h-[380px] max-3lg:h-[350px] flex-col justify-between items-start inline-flex">
                  <div className="w-full flex-col justify-between items-start gap-20 max-1xl:gap-[60px] max1lg:gap-[40px] max-3lg:gap-[20px] flex">
                    <div className="flex-col justify-start items-start gap-8 flex">
                      <div className="opacity-80 text-[#FFCD05] text-xl font-normal font-['Graphik'] widescreen:text-[24px] widescreen:text-[24px]">
                        IKEA{" "}
                      </div>
                      <div className="h-[115.2px] w-[414px] text-[#FFCD05] text-[32px] font-normal font-['Graphik'] leading-[38.40px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] widestscreen:w-[100%]">
                        Changing the way people shop.{" "}
                      </div>
                    </div>
                    <Link onClick={scrollToTop} href={"/case-studies"}>
                      <div className="px-8 absolue top-[326px] hover:bg-[#FFCD05] widescreen:px-[35px] transition-all  hover:border-[#FFCD05] py-4 bg-white rounded-[31px] justify-center items-center gap-2 inline-flex">
                        <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[24px]">
                          View Case study
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex-col w-[100%]  justify-between items-start gap-[38px] flex widescreen:relative">
                    <div className="w-[100%] justify-between items-center inline-flex widescreen:relative">
                      <div className="text-[#FFCD05] widescreen:text-[24px] text-base font-normal font-['Graphik']">
                        01 / 05
                      </div>
                      <div className="justify-start widescreen:scale-[1.5] items-start gap-[15px] flex"></div>
                    </div>
                    <div className="w-full h-[10.38px] rounded-[9px] relative bg-[#F5F5F5]">
                      <div className="w-[20%] h-[10.38px] rounded-[9px] relative bg-[#FFCD05]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-auto  bg-[#F4ECDE] justify-start items-center gap-[80.78px] max-2lg:gap-[40px] inline-flex">
                <div className="w-[50%] bg-neutral-100 justify-end items-center inline-flex">
                  <Image
                    className="w-full h-auto"
                    loading="lazy"
                    src={img2}
                    alt="Client - COWBOY"
                  />
                </div>
                <div className="h-[515.38px] max-1xl:h-[430px] widescreen:h-[700px] widestscreen:h-[920px] widescreen:w-[40%] max-1lg:h-[380px] max-3lg:h-[350px] flex-col justify-between items-start inline-flex">
                  <div className="w-full flex-col justify-between items-start gap-20 max-1xl:gap-[60px] max1lg:gap-[40px] max-3lg:gap-[20px] flex">
                    <div className="flex-col justify-start items-start gap-8 flex">
                      <div className="opacity-80 text-[#000000] text-xl font-normal font-['Graphik'] widescreen:text-[24px] widescreen:text-[24px]">
                        COWBOY{" "}
                      </div>
                      <div className="h-[115.2px] w-[414px] text-[#000000] text-[32px] font-normal font-['Graphik'] leading-[38.40px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] widestscreen:w-[100%]">
                        Helping the world switch to sustainable energy-
                        seamlessly{" "}
                      </div>
                    </div>
                    <Link onClick={scrollToTop} href={"/case-studies"}>
                      <div className="px-8 absolue top-[326px] hover:bg-[#FFCD05] widescreen:px-[35px] transition-all  hover:border-[#FFCD05] py-4 bg-white rounded-[31px] justify-center items-center gap-2 inline-flex">
                        <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[24px]">
                          View Case study
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex-col w-[100%]  justify-between items-start gap-[38px] flex widescreen:relative">
                    <div className="w-[100%] justify-between items-center inline-flex widescreen:relative">
                      <div className="text-[#000000] widescreen:text-[24px] text-base font-normal font-['Graphik']">
                        02 / 05
                      </div>
                      <div className="justify-start items-start gap-[15px] flex"></div>
                    </div>
                    <div className="w-full h-[10.38px] rounded-[9px] relative bg-[#FFF]">
                      <div className="w-[40%] h-[10.38px] rounded-[9px] relative bg-[#DFC18B]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-auto  bg-[#D1EBFE] justify-start items-center gap-[80.78px] max-2lg:gap-[40px] inline-flex">
                <div className="w-[50%] bg-neutral-100 justify-end items-center inline-flex">
                  <Image
                    className="w-full h-auto"
                    src={img3}
                    loading="lazy"
                    alt="Client - SEA"
                  />
                </div>
                <div className="h-[515.38px] max-1xl:h-[430px] widescreen:h-[700px] widestscreen:h-[920px] widescreen:w-[40%] max-1lg:h-[380px] max-3lg:h-[350px] flex-col justify-between items-start inline-flex">
                  <div className="w-full flex-col justify-between items-start gap-20 max-1xl:gap-[60px] max1lg:gap-[40px] max-3lg:gap-[20px] flex">
                    <div className="flex-col justify-start items-start gap-8 flex">
                      <div className="opacity-80 text-[#EF5019] text-xl font-normal font-['Graphik'] widescreen:text-[24px] widescreen:text-[24px]">
                        SEA{" "}
                      </div>
                      <div className="h-[115.2px] w-[414px] text-[#EF5019] text-[32px] font-normal font-['Graphik'] leading-[38.40px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] widestscreen:w-[100%]">
                        A Disruptive marketing solution{" "}
                      </div>
                    </div>
                    <Link onClick={scrollToTop} href={"/case-studies"}>
                      <div className="px-8 absolue top-[326px] hover:bg-[#FFCD05] widescreen:px-[35px] transition-all  hover:border-[#FFCD05] py-4 bg-white rounded-[31px] justify-center items-center gap-2 inline-flex">
                        <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[24px]">
                          View Case study
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex-col w-[100%]  justify-between items-start gap-[38px] flex widescreen:relative">
                    <div className="w-[100%] justify-between items-center inline-flex widescreen:relative">
                      <div className="text-[#EF5019] widescreen:text-[24px] text-base font-normal font-['Graphik']">
                        03 / 05
                      </div>
                      <div className="justify-start items-start gap-[15px] flex"></div>
                    </div>
                    <div className="w-full h-[10.38px] rounded-[9px] relative bg-[#ffffff]">
                      <div className="w-[60%] h-[10.38px] rounded-[9px] relative bg-[#EF5019]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-auto  bg-[#F1F1F1] justify-start items-center gap-[80.78px] max-2lg:gap-[40px] inline-flex">
                <div className="w-[50%] bg-neutral-100 justify-end items-center inline-flex">
                  <Image
                    className="w-full h-auto"
                    src={img4}
                    loading="lazy"
                    alt="Client - mango"
                  />
                </div>
                <div className="h-[515.38px] max-1xl:h-[430px] widescreen:h-[700px] widestscreen:h-[920px] widescreen:w-[40%] max-1lg:h-[380px] max-3lg:h-[350px] flex-col justify-between items-start inline-flex">
                  <div className="w-full flex-col justify-between items-start gap-20 max-1xl:gap-[60px] max1lg:gap-[40px] max-3lg:gap-[20px] flex">
                    <div className="flex-col justify-start items-start gap-8 flex">
                      <div className="opacity-80 text-[#06212B] text-xl font-normal font-['Graphik'] widescreen:text-[24px] widescreen:text-[24px]">
                        mango{" "}
                      </div>
                      <div className="h-[115.2px] w-[414px] text-[#06212B] text-[32px] font-normal font-['Graphik'] leading-[38.40px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] widestscreen:w-[100%]">
                        Expanding the global reach of a clothing giant.{" "}
                      </div>
                    </div>
                    <Link onClick={scrollToTop} href={"/case-studies"}>
                      <div className="px-8 absolue top-[326px] hover:bg-[#FFCD05] widescreen:px-[35px] transition-all  hover:border-[#FFCD05] py-4 bg-white rounded-[31px] justify-center items-center gap-2 inline-flex">
                        <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[24px]">
                          View Case study
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex-col w-[100%]  justify-between items-start gap-[38px] flex widescreen:relative">
                    <div className="w-[100%] justify-between items-center inline-flex widescreen:relative">
                      <div className="text-[#06212B] widescreen:text-[24px] text-base font-normal font-['Graphik']">
                        04 / 05
                      </div>
                      <div className="justify-start items-start gap-[15px] flex"></div>
                    </div>
                    <div className="w-full h-[10.38px] rounded-[9px] relative bg-[#FFFFFF]">
                      <div className="w-[80%] h-[10.38px] rounded-[9px] relative bg-[#06212B]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-auto  bg-[#EBF5FE] justify-start items-center gap-[80.78px] max-2lg:gap-[40px] inline-flex">
                <div className="w-[50%] bg-neutral-100 justify-end items-center inline-flex">
                  <Image
                    className="w-full h-auto"
                    src={img5}
                    loading="lazy"
                    alt="Client - deel"
                  />
                </div>
                <div className="h-[515.38px] max-1xl:h-[430px] widescreen:h-[700px] widestscreen:h-[920px] widescreen:w-[40%] max-1lg:h-[380px] max-3lg:h-[350px] flex-col justify-between items-start inline-flex">
                  <div className="w-full flex-col justify-between items-start gap-20 max-1xl:gap-[60px] max1lg:gap-[40px] max-3lg:gap-[20px] flex">
                    <div className="flex-col justify-start items-start gap-8 flex">
                      <div className="opacity-80 text-[#15357A] text-xl font-normal font-['Graphik'] widescreen:text-[24px] widescreen:text-[24px]">
                        deel{" "}
                      </div>
                      <div className="h-[115.2px] w-[414px] text-[#15357A] text-[32px] font-normal font-['Graphik'] leading-[38.40px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] widestscreen:w-[100%]">
                        Making recruiting accessible worldwide{" "}
                      </div>
                    </div>
                    <Link onClick={scrollToTop} href={"/case-studies"}>
                      <div className="px-8 absolue top-[326px] hover:bg-[#FFCD05] widescreen:px-[35px] transition-all  hover:border-[#FFCD05] py-4 bg-white rounded-[31px] justify-center items-center gap-2 inline-flex">
                        <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[24px]">
                          View Case study
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex-col w-[100%]  justify-between items-start gap-[38px] flex widescreen:relative">
                    <div className="w-[100%] justify-between items-center inline-flex widescreen:relative">
                      <div className="text-[#15357A] widescreen:text-[24px] text-base font-normal font-['Graphik']">
                        05 / 05
                      </div>
                      <div className="justify-start items-start gap-[15px] flex"></div>
                    </div>
                    <div className="w-full h-[10.38px] rounded-[9px] relative bg-[#F5F5F5]">
                      <div className="w-[100%] h-[10.38px] rounded-[9px] relative bg-[#15357A]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Homeanimate;
