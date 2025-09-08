import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// import { useLocation } from "react-router-dom";
import gsap from "gsap/gsap-core";
import img1 from "./assets/Desktop - 51.png";
import img2 from "./assets/Desktop - 54.png";
import img3 from "./assets/Desktop - 55.png";
import img4 from "./assets/Desktop - 56.png";
import img5 from "./assets/Desktop - 57.png";
import img6 from "./assets/Desktop - 58.png";
import img7 from "./assets/Desktop - 59.png";
import img8 from "./assets/Desktop - 60.png";
import img9 from "./assets/Desktop - 61.png";
import img10 from "./assets/Desktop - 62.png";
import img11 from "./assets/Desktop - 63.png";
import img12 from "./assets/Desktop - 64.png";
import img13 from "./assets/Desktop - 65.png";
import img14 from "./assets/Desktop - 66.png";
import img15 from "./assets/Desktop - 81 (1).png";
import img16 from "./assets/Desktop - 82 (1).png";
import img17 from "./assets/Desktop - 83.png";
import img18 from "./assets/Desktop - 84 (1).png";
import img19 from "./assets/Desktop - 85 (1).png";
import img20 from "./assets/Desktop - 86 (1).png";
import img21 from "./assets/Desktop - 87 (2).png";
import img22 from "./assets/Desktop - 88 (1).png";
import img23 from "./assets/Desktop - 89 (1).png";
import img24 from "./assets/Desktop - 90.png";
import img25 from "./assets/Desktop - 91.png";
import img26 from "./assets/Desktop - 92 (1).png";
import img27 from "./assets/Desktop - 93 (3).png";
import img28 from "./assets/Desktop - 94.png";
import img29 from "./assets/Desktop - 95.png";
import img30 from "./assets/Desktop - 96.png";
import img31 from "./assets/Desktop - 97.png";
import img32 from "./assets/Desktop - 98.png";
import img33 from "./assets/Desktop - 99.png";
import img34 from "./assets/Desktop - 100.png";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, EffectFade, Mousewheel } from "swiper/modules";
import { usePathname } from "next/navigation";
import Image from "next/image";
const CasestudyCarousal = () => {
  // const path = useLocation();
  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);
  const slide4 = useRef(null);
  const slide5 = useRef(null);
  const slide6 = useRef(null);
  const slide7 = useRef(null);
  const slide8 = useRef(null);
  const slide9 = useRef(null);
  const slide10 = useRef(null);
  const slide11 = useRef(null);
  const slide12 = useRef(null);
  const slide13 = useRef(null);
  const slide14 = useRef(null);
  const slide15 = useRef(null);
  const slide16 = useRef(null);
  const slide17 = useRef(null);
  const slide18 = useRef(null);
  const slide19 = useRef(null);
  const slide20 = useRef(null);
  const slide21 = useRef(null);
  const slide22 = useRef(null);
  const slide23 = useRef(null);
  const slide24 = useRef(null);
  const slide25 = useRef(null);
  const slide26 = useRef(null);
  const slide27 = useRef(null);
  const slide28 = useRef(null);
  const slide29 = useRef(null);
  const slide30 = useRef(null);
  const slide31 = useRef(null);
  const slide32 = useRef(null);
  const slide33 = useRef(null);
  const slide34 = useRef(null);
  // const live = path.pathname;
  const live = usePathname();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  useEffect(() => {
    if (live === "/case-studies/search-engine-amplify") {
      gsap.to(slide1.current, 0, { display: "none" });
    } else if (live === "/case-studies/tradejini") {
      gsap.to(slide2.current, 0, { display: "none" });
    } else if (
      live === "/case-studies/singhvi-dev-and-uni-llp-chartered-accountants"
    ) {
      gsap.to(slide3.current, 0, { display: "none" });
    } else if (live === "/case-studies/vacaystay-406") {
      gsap.to(slide4.current, 0, { display: "none" });
    } else if (live === "/case-studies/contrasted-marketing") {
      gsap.to(slide5.current, 0, { display: "none" });
    } else if (live === "/case-studies/kanbar-digital") {
      gsap.to(slide6.current, 0, { display: "none" });
    } else if (live === "/case-studies/wear-well") {
      gsap.to(slide7.current, 0, { display: "none" });
    } else if (live === "/case-studies/leaf-and-hive") {
      gsap.to(slide8.current, 0, { display: "none" });
    } else if (live === "/case-studies/imapac") {
      gsap.to(slide9.current, 0, { display: "none" });
    } else if (live === "/case-studies/klassen-and-smith") {
      gsap.to(slide10.current, 0, { display: "none" });
    } else if (live === "/case-studies/william-abraham") {
      gsap.to(slide11.current, 0, { display: "none" });
    } else if (live === "/case-studies/vouri") {
      gsap.to(slide12.current, 0, { display: "none" });
    } else if (live === "/case-studies/homes-r-us") {
      gsap.to(slide13.current, 0, { display: "none" });
    } else if (live === "/case-studies/landmark") {
      gsap.to(slide14.current, 0, { display: "none" });
    } else if (live === "/case-studies/klub") {
      gsap.to(slide15.current, 0, { display: "none" });
    } else if (live === "/case-studies/kernel-wealth") {
      gsap.to(slide16.current, 0, { display: "none" });
    } else if (live === "/case-studies/hinge-health") {
      gsap.to(slide17.current, 0, { display: "none" });
    } else if (live === "/case-studies/cowboy") {
      gsap.to(slide18.current, 0, { display: "none" });
    } else if (live === "/case-studies/deel") {
      gsap.to(slide19.current, 0, { display: "none" });
    } else if (live === "/case-studies/convoy") {
      gsap.to(slide20.current, 0, { display: "none" });
    } else if (live === "/case-studies/lyra") {
      gsap.to(slide21.current, 0, { display: "none" });
    } else if (live === "/case-studies/middle") {
      gsap.to(slide22.current, 0, { display: "none" });
    } else if (live === "/case-studies/ikea") {
      gsap.to(slide23.current, 0, { display: "none" });
    } else if (live === "/case-studies/course-hero") {
      gsap.to(slide24.current, 0, { display: "none" });
    } else if (live === "/case-studies/mica-rino") {
      gsap.to(slide25.current, 0, { display: "none" });
    } else if (live === "/case-studies/lit-up-visuals") {
      gsap.to(slide26.current, 0, { display: "none" });
    } else if (live === "/case-studies/booking-factory") {
      gsap.to(slide27.current, 0, { display: "none" });
    } else if (live === "/case-studies/sodashi") {
      gsap.to(slide28.current, 0, { display: "none" });
    } else if (live === "/case-studies/steelcase") {
      gsap.to(slide29.current, 0, { display: "none" });
    } else if (live === "/case-studies/studio-neat") {
      gsap.to(slide30.current, 0, { display: "none" });
    } else if (live === "/case-studies/moveworks") {
      gsap.to(slide31.current, 0, { display: "none" });
    } else if (live === "/case-studies/soch") {
      gsap.to(slide32.current, 0, { display: "none" });
    } else if (live === "/case-studies/mango") {
      gsap.to(slide33.current, 0, { display: "none" });
    } else if (live === "/case-studies/widerness-travel") {
      gsap.to(slide34.current, 0, { display: "none" });
    }
  });
  return (
    <div className="py-[70px] max-sm:py-[24px] max-sm:pb-0">
      <h1 className="text-[48px] max-md:mb-[32px] max-sm:mb-[24px] max-md:text-[24px] leading-[120%] letter-spacing-2 mb-[57px]">
        Read the next case study{" "}
      </h1>
      <div className="container-casestudy">
        <Swiper
          navigation={true}
          allowTouchMove={true}
          loop={true}
          effect={"fade"}
          modules={[Autoplay, Mousewheel, Navigation, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide ref={slide1}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img1}
                alt="Case Study - SEA"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    SEA
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  A Disruptive marketing solution
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] max-sm:w-full mt-[22px] max-xl:w-[90%]">
                  SEA's mission was straightforward: a tool that went beyond the
                  frills, delivering tangible impact in the unpredictable
                  landscape of SEO.
                </p>
                <Link
                  href={"/case-studies/search-engine-amplify"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Fintech
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide2}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img2}
                alt="Case Study - tradejini"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    tradejini
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Transforming the digital presence of a trading giant.
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] max-sm:w-full mt-[22px] max-xl:w-[90%]">
                  TRADEJINI stands at the forefront of stock broking, offering a
                  platform where financial possibilities know no bounds.
                </p>
                <Link
                  href={"/case-studies/tradejini"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Fintech
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide3}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img3}
                alt="Case Study - sdu"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    sdu
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Pioneering Financial Excellence in the Digital Frontier
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Singhvi Dev & Unni LLP (SDU) stands as an unparalleled
                  powerhouse, boasting the distinction of being one of the
                  biggest accounting and finance firm in the country.
                </p>
                <Link
                  href={
                    "/case-studies/singhvi-dev-and-uni-llp-chartered-accountants"
                  }
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Accounting and finance
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide4}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img4}
                alt="Case Study - vacaystay"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    vacaystay
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Enabling vacations in South Montana to the world
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  With an array of properties scattered across the picturesque
                  region, VacayStay 406 needed a digital transformation that
                  mirrored the grandeur of South Montana's landscapes.
                </p>
                <Link
                  href={"/case-studies/vacaystay-406"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Hospitality
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide5}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img5}
                alt="Case Study - contrasted marketing"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    contrasted marketing
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Shifting the presence of an upcoming marketing giant
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Contrasted Marketing, with its prowess in digital campaigns,
                  recognized the need for a digital transformation that mirrored
                  their vibrancy and innovation.
                </p>
                <Link
                  href={"/case-studies/contrasted-marketing"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Marketing
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide6}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img6}
                alt="Case Study - kanbar digital"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    kanbar digital
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Digital marketing strategies made simple
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Our visionary architects of digital experiences were tasked
                  with redefining Kanbar Digital's online presence.
                </p>
                <Link
                  href={"/case-studies/kanbar-digital"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Marketing
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide7}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img7}
                alt="Case Study - wear well"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    wear well
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Redefining the global presence of a leading garment exporter
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Wear Well ensures that each creation is a manifestation of
                  timeless elegance, meticulously curated to resonate with the
                  ever-evolving standards of global fashion. Catering to leading
                  brands like Zara, Massimo Dutti, Mango etc.{" "}
                </p>
                <Link
                  href={"/case-studies/wear-well"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Retail and apparel
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide8}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img8}
                alt="Case Study - leaf and hive"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    leaf and hive
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Making an innovative beverage more accessible
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Leaf & Hive, known for pushing the boundaries of brewing,
                  sought a digital presence that mirrored the sophistication of
                  their Jun creations.
                </p>
                <Link
                  href={"/case-studies/leaf-and-hive"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Food & beverages
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide9}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img9}
                alt="Case Study - imapac"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    imapac
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Actionable insights to aid biopharma businesses in making big
                  decisions
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  IMAPAC is the global biopharmaceutical industry's one-stop
                  shop for business connections and biopharma data.
                </p>
                <Link
                  href={"/case-studies/imapac"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Biopharmaceutical
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide10}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img10}
                alt="Case Study - klassen and smith"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    klassen and smith
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  A modern solution to traditional craftsmanship
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Klassen and Smith, a leader in the US construction industry.
                  They are renowned for blending traditional craftsmanship with
                  cutting-edge technology to produce top-quality outcomes.
                </p>
                <Link
                  href={"/case-studies/klassen-and-smith"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Construction
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide11}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img11}
                alt="Case Study - william abraham"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    william abraham
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Elevating luxurious men’s socks digital platform
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  William Abraham, a visionary in the world of men's fashion,
                  they are popular for introducing luxury into men’s socks.
                </p>
                <Link
                  href={"/case-studies/william-abraham"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Clothing
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide12}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img12}
                alt="Case Study - Vouri"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    Vouri
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Shifting the pace with performance apparel
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Vuori is the leading Performance Apparel brand in California.
                  They blend art and sport to create jaw dropping apparels that
                  inspire people to live healthy lives.{" "}
                </p>
                <Link
                  href={"/case-studies/vouri"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Retail and apparel
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide13}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img13}
                alt="Case Study - Homes r us"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    Homes r us
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Innovating a home-grown furnishing brand’s reach
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Homes r Us, the UAE's premier home furnishing and décor brand,
                  has long been synonymous with exquisite style and a deep
                  understanding of local aesthetics.
                </p>
                <Link
                  href={"/case-studies/homes-r-us"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Retail
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide14}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img14}
                alt="Case Study - Landmark"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    Landmark
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Refining the way surveys are done{" "}
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Landmark is one of the leading land surveying and zoning
                  companies in the US. Our alliance with this bastion of
                  precision marks a pivotal chapter in the digital
                  transformation of the land surveying industry.
                </p>
                <Link
                  href={"/case-studies/landmark"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Construction
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide15}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img15}
                alt="Case Study - klub"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    klub
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Ensuring investments in startups are more secure
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Klub is an ambitious investment app that wanted to
                  revolutionize the way people invest in startups, treasury, and
                  cryptocurrency.
                </p>
                <Link
                  href={"/case-studies/klub"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Fintech
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide16}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img16}
                alt="Case Study - Kernel wealth"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    Kernel wealth
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Redefining the way people manage finances
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Kernel wealth is the #1 upcoming wealth management company in
                  the New Zealand.
                </p>
                <Link
                  href={"/case-studies/kernel-wealth"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Fintech
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide17}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img17}
                alt="Case Study - Hinge Health"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    Hinge Health
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Revolutionary healthcare now at your fingertips
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Hinge health is a digital clinic for joint and muscle care
                  that aims to eliminate long waiting times, convoluted
                  appointment scheduling, and a lack of personalized care.
                </p>
                <Link
                  href={"/case-studies/hinge-health"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Healthcare
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide18}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img18}
                alt="Case Study - cowboy"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    cowboy
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Helping the world switch to sustainable energy- seamlessly
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Cowboy aims to offer a seamless and enjoyable riding
                  experience, combining technology, design, and functionality to
                  meet the needs of urban commuters.
                </p>
                <Link
                  href={"/case-studies/cowboy"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Electric Bikes
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide19}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img19}
                alt="Case Study - deel"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    deel
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Making recruiting accessible worldwide
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Deel is a global payroll and compliance platform designed to
                  simplify and streamline the process of hiring and paying
                  remote team members or international contractors
                </p>
                <Link
                  href={"/case-studies/deel"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Technology
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide20}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img20}
                alt="Case Study - convoy"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    convoy
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Supply Chain, logistics made seamless
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Convoy is a tech company that focuses on streamlining
                  logistics. They bridge the gap between carriers and brokers.
                </p>
                <Link
                  href={"/case-studies/convoy"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Supply chain, logistics
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide21}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img21}
                alt="Case Study - lyra"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    lyra
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Driving business growth with revolutionary mental healthcare
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Lyra is making mental healthcare a reality, not a privilege.
                  They connect people with top-notch therapists using smart
                  tech, all while keeping quality care at the heart of
                  everything they do.
                </p>
                <Link
                  href={"/case-studies/lyra"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Healthcare
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide22}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img22}
                alt="Case Study - middle"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    middle
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Easing the conversation between clients and brokers
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Middle streamlines the process of getting home loan advice by
                  allowing users to securely share everything your broker needs
                  in minutes.
                </p>
                <Link
                  href={"/case-studies/middle"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Fintech
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide23}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img23}
                alt="Case Study - ikea"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    ikea
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Changing the way people shop.
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Founded in 1943 in Sweden, IKEA has evolved into a global
                  household name, synonymous with stylish, functional, and
                  affordable furniture and home accessories.
                </p>
                <Link
                  href={"/case-studies/ikea"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Technology
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide24}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img24}
                alt="Case Study - Course hero"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    Course hero
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Empowering students across the world through aI
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Course Hero empowers students with a massive library of
                  learning materials. From practice problems to study guides,
                  students can access millions of resources to conquer their
                  courses.
                </p>
                <Link
                  href={"/case-studies/course-hero"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  EdTech
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide25}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img25}
                alt="Case Study - mica rino"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    mica rino
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Reimagining neighborhoods and residences
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Mica Rino is an apartment rental agency that is known for
                  blending sharp industrial styling with earthy materials and
                  artistic details for a truly distinctive edge.
                </p>
                <Link
                  href={"/case-studies/mica-rino"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Real Estate
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide26}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img26}
                alt="Case Study - lit up visuals"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    lit up visuals
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Visualizing architecture made easy
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Lit Up Visuals is a visual studio that specializes in bringing
                  sustainable architecture, renewable energy, and interior
                  projects to life through 3D modeling and rendering.
                </p>
                <Link
                  href={"/case-studies/lit-up-visuals"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Visualization-Real Estate
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide27}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img27}
                alt="Case Study - Booking factory"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    Booking factory
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Bettering the experience of a hotel management system
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Booking Factory is a cloud-based property management system
                  designed specifically for hotels and similar hospitality
                  businesses.
                </p>
                <Link
                  href={"/case-studies/booking-factory"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Technology
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide28}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img28}
                alt="Case Study - sodashi"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    sodashi
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Helping vegan, hand-crafted skincare go worldwide
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Sodashi is a skincare brand that helps people embrace mind,
                  body, and spirit rather than just treating the skin.
                </p>
                <Link
                  href={"/case-studies/sodashi"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Skincare
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide29}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img29}
                alt="Case Study - steelcase"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    steelcase
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Helping a thought leader in bettering workplaces
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Steelcase is a global design and thought leader in the world
                  of work. They design and manufacture innovative furnishings
                  and solutions to help people do their best work in the many
                  places where work happens.
                </p>
                <Link
                  href={"/case-studies/steelcase"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Furnishing
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide30}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img30}
                alt="Case Study - studio neat"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    studio neat
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Empowering designers to make simple products that solve
                  problems
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Studio Neat is a Texas-based design company founded in 2010 by
                  Tom Gerhardt and Dan Provost. They specialize in creating
                  simple, well-designed products that solve everyday problems.
                </p>
                <Link
                  href={"/case-studies/studio-neat"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Products
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide31}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img31}
                alt="Case Study - moveworks"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    moveworks
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Automating tasks so businesses can focus on what matters
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Moveworks is an American company that develops an artificial
                  intelligence (AI) platform designed to streamline employee
                  support in large enterprises
                </p>
                <Link
                  href={"/case-studies/moveworks"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Technology
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide32}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img32}
                alt="Case Study - soch"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    soch
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Uplifting pioneers in ethnic wear
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  A popular Indian fashion brand, Soch specializes in ethnic
                  wear for women, known for its vibrant colors, intricate
                  designs, and blend of traditional and contemporary styles
                </p>
                <Link
                  href={"/case-studies/soch"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Retail and apparel
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide33}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img33}
                alt="Case Study - Mango"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    Mango
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  Expanding the global reach of a clothing giant.
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Mango is recognized for its on-trend and fashion-forward
                  designs. The brand embraces a modern and sophisticated
                  aesthetic across its clothing and accessory collections.
                </p>
                <Link
                  href={"/case-studies/mango"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Retail
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide ref={slide34}>
            <div className="w-full max-2md:flex-col max-sm:gap-[20px] flex justify-between bg-white gap-[50px] max-xl:gap-[50px] max-2lg:gap-[30px]">
              <Image
                src={img34}
                alt="Case Study - wilderness travel"
                className="w-[50%] max-2md:w-full"
              />
              <div className="w-[50%] max-[1200px]:h-[435px] max-md:h-[310px] max-1sm:h-[380px] max-lg:h-[345px] max-2md:w-full">
                <div className="max-sm:m-0 w-[521px] max-xl:w-[100%] justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
                  <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
                    wilderness travel
                  </div>
                  <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
                </div>
                <h1 className="text-[32px] max-sm:text-[24px] max-sm:mt-[20px] leading-[120%] max-2lg:mt-[22px] mt-[30px]">
                  A Breath-taking digital presence for a Breath-taking tour
                  agency
                </h1>
                <p className="text-base opacity-80 max-sm:mt-[20px] w-[477px] mt-[22px] max-sm:w-full max-xl:w-[90%]">
                  Wilderness Travel is an award-winning adventure travel company
                  that offers trips to many exciting destinations around the
                  world .They design itineraries that are both adventurous and
                  culturally immersive.
                </p>
                <Link
                  href={"/case-studies/wilderness-travel"}
                  onClick={scrollToTop}
                  className="px-8 py-4 hover:bg-yellow-400 max-sm:mt-[42px] max-lg:mt-0 max-lg:absolute max-lg:bottom-0 max-lg:mt-[58px] max-[1200px]:mt-[20px]  mt-[42px]  transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex max-sm:w-[100%]"
                >
                  <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                    View case study
                  </div>
                </Link>
                <div className="bg-[#F7F7F7] max-lg:hidden absolute bottom-0 text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal">
                  Travel
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default CasestudyCarousal;
