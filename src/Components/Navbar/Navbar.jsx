"use client";
import React, { useEffect, useState, useRef } from "react";
// import { useLocation } from "react-router-dom";
// import Link from "next/link";;
// import sparkle from "../pages/AI-studio/assets/sparkle.svg";
import "./nav.scss";
import img from "./ham.svg";
import arrow from "./Frame 1000002996.svg";
import navBar from "./nav bar.json";
import Lottie from "lottie-react";
import gsap from "gsap";
// import x from "./assets/akar-icons_x-fill.svg";
import SP from "/public/homeassets/Group 1000001871.svg";
import SF from "/public/homeassets/Group.svg";
import AI from "/public/homeassets/Group 1000001873.svg";
import Link, { useLinkStatus } from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  let [width, setWidth] = useState(0);
  const menu = useRef(null);
  const premenu = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [aipage, setaipage] = useState(true);
  const location = usePathname();
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.body.classList.remove("stop-scrolling");
  };
  const toggleService = () => {
    setDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }
  };
  const toggleServicenew = () => {
    setDropdownOpen(false);
    document.body.classList.remove("stop-scrolling");
  };
  const toggleother = () => {
    setDropdownOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.body.classList.remove("stop-scrolling");
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  const scrollToTopmenu = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    gsap.to(menu.current, 0, { display: "none" });
    gsap.to(premenu.current, 0, { display: "flex" });
  };
  const hamburger = () => {
    gsap.to(menu.current, 0, { display: "block" });
    gsap.to(premenu.current, 0, { display: "none" });
  };
  const hamburger2 = () => {
    gsap.to(menu.current, 0, { display: "none" });
    gsap.to(premenu.current, 0, { display: "flex" });
  };
  let [heightscreen, setHeight] = useState(1400);
  const cont = useRef(null);
  const container = useRef(null);
  const cont1 = useRef(null);
  const cont2 = useRef(null);
  const cont3 = useRef(null);
  const cont4 = useRef(null);
  const cont5 = useRef(null);
  const cont6 = useRef(null);
  const cont7 = useRef(null);
  const cont8 = useRef(null);
  const cont9 = useRef(null);
  const cont10 = useRef(null);
  const cont11 = useRef(null);
  const cont12 = useRef(null);
  const menutop = useRef(null);
  const menubottom = useRef(null);
  const svg1 = useRef(null);
  const svg2 = useRef(null);
  const svg3 = useRef(null);
  const svg4 = useRef(null);
  const svg5 = useRef(null);
  const svg6 = useRef(null);
  const svg7 = useRef(null);
  const svg8 = useRef(null);
  const svg9 = useRef(null);
  const svg10 = useRef(null);
  const svg11 = useRef(null);
  const svg12 = useRef(null);
  const serv = useRef(null);
  const homemenu = useRef(null);

  useEffect(() => {
    const live = location;
    if (live === "/ai-studio") {
      setaipage(true);
    } else {
      setaipage(false);
    }
  });
  useEffect(() => {
    window.addEventListener("resize", () => setHeight(window.innerHeight));
    if (heightscreen <= 690) {
      gsap.to(cont.current, 0, { fontSize: "24px", width: "220px" });
      gsap.to(container.current, 0, { height: "auto" });
      gsap.to(cont1.current, 0, { fontSize: "14px", height: "30px" });
      gsap.to(cont2.current, 0, { fontSize: "14px", height: "30px" });
      gsap.to(cont3.current, 0, { fontSize: "14px", height: "30px" });
      gsap.to(cont4.current, 0, { fontSize: "14px", height: "30px" });
      gsap.to(cont5.current, 0, { fontSize: "14px", height: "30px" });
      gsap.to(cont6.current, 0, { fontSize: "14px", height: "30px" });
      gsap.to(cont7.current, 0, { fontSize: "14px", height: "30px" });
      gsap.to(cont8.current, 0, { fontSize: "14px", height: "30px" });
      gsap.to(cont9.current, 0, { fontSize: "14px", height: "30px" });
      gsap.to(cont10.current, 0, { fontSize: "14px", height: "30px" });
      gsap.to(cont11.current, 0, { fontSize: "14px", height: "30px" });
      gsap.to(cont12.current, 0, { fontSize: "14px", height: "30px" });
    }
    if (heightscreen <= 680) {
      gsap.to(menutop.current, 0, { top: "14px" });
    }
    if (heightscreen <= 610) {
      gsap.to(menubottom.current, 0, { bottom: "14px" });
      gsap.to(menutop.current, 0, { gap: "5px" });
    }
    if (heightscreen <= 500) {
      gsap.to(svg1.current, 0, { width: "20px", height: "20px" });
      gsap.to(svg2.current, 0, { width: "20px", height: "20px" });
      gsap.to(svg3.current, 0, { width: "20px", height: "20px" });
      gsap.to(svg4.current, 0, { width: "20px", height: "20px" });
      gsap.to(svg5.current, 0, { width: "20px", height: "20px" });
      gsap.to(svg6.current, 0, { width: "20px", height: "20px" });
      gsap.to(svg7.current, 0, { width: "20px", height: "20px" });
      gsap.to(svg8.current, 0, { width: "20px", height: "20px" });
      gsap.to(svg9.current, 0, { width: "20px", height: "20px" });
      gsap.to(svg10.current, 0, { width: "20px", height: "20px" });
      gsap.to(svg11.current, 0, { width: "20px", height: "20px" });
      gsap.to(svg12.current, 0, { width: "20px", height: "20px" });
    }
    if (heightscreen <= 510) {
      gsap.to(menubottom.current, 0, { display: "none" });
      gsap.to(menutop.current, 0, { top: "44px" });
      gsap.to(svg1.current, 0, { display: "none" });
      gsap.to(svg2.current, 0, { display: "none" });
      gsap.to(svg3.current, 0, { display: "none" });
      gsap.to(svg4.current, 0, { display: "none" });
      gsap.to(svg5.current, 0, { display: "none" });
      gsap.to(svg6.current, 0, { display: "none" });
      gsap.to(svg7.current, 0, { display: "none" });
      gsap.to(svg8.current, 0, { display: "none" });
      gsap.to(svg9.current, 0, { display: "none" });
      gsap.to(svg10.current, 0, { display: "none" });
      gsap.to(svg11.current, 0, { display: "none" });
      gsap.to(svg12.current, 0, { display: "none" });
      gsap.to(container.current, 0, { rowGap: "20px" });
    }
    if (heightscreen <= 440) {
      gsap.to(menutop.current, 0, { top: "14px" });
      gsap.to(container.current, 0, { rowGap: "0px" });
      gsap.to(cont.current, 0, { fontSize: "20px" });
      gsap.to(serv.current, 0, { gap: "0px", height: "200px" });
    }
  });
  return (
    <>
      {width <= 900 ? (
        <>
          <div
            ref={premenu}
            className="w-full z-[99999999999999] hx] px-10 pl-[32px] bg-white flex-col justify-end items-center gap-2.5 inline-flex sticky top-0 max-sm:px-[20px] max-sm:pl-[15px]"
          >
            <div className="self-stretch pt-[15px] pb-2.5 justify-between items-center inline-flex sticky top-10 ">
              <div className="w-[123px] mt-[8px] pr-[6.40px]  flex-col justify-center items-start gap-[14.69px] inline-flex">
                <div className="origin-top-left text-black text-xl font-normal font-['Graphik']">
                  <Link href="/" onClick={scrollToTop}>
                    <Lottie
                      animationData={navBar}
                      loop={false}
                      autoplay={false}
                    />{" "}
                  </Link>
                </div>
              </div>

              <div className="flex" onClick={hamburger}>
                <Image src={img} alt="Hamburger icon" />
              </div>
            </div>
          </div>
          <div
            className={`lists flex items-center justify-between flex-col`}
            ref={menu}
          >
            <div className="w-[100%] h-[100vh] z-[99999990099799999999] sticky top-0 relative bg-white ">
              <div className="w-[100%] px-5 pt-3 left-0 top-0 absolute justify-between items-center inline-flex">
                <div className="w-[101.29px] h-[42px] pr-[5.27px] pt-[13.48px] flex-col justify-end items-start gap-[12.10px] inline-flex">
                  <div className="w-24 h-4 relative flex-col justify-start items-start flex">
                    <div className="h-4 relative"></div>
                    <div className="w-[22.06px] h-4 relative"></div>
                    <div className="w-[0.18px] h-[1.79px] bg-black bg-opacity-0" />
                  </div>
                  <div className="origin-top-left rotate-[6.29deg] text-black text-opacity-0 text-base font-normal font-['Graphik']">
                    Codelinear
                  </div>
                </div>
                <div className="w-[65px] h-[42px] relative">
                  <div
                    className="w-[23.83px] h-[23.83px] right-[20px] top-[24.08px] absolute "
                    onClick={hamburger2}
                  >
                    <div className="w-[33.70px] h-[0px] left-0 top-0 absolute origin-top-left rotate-45 border border-black"></div>
                    <div className="w-[33.70px] h-[0px] left-[23.83px] top-0 absolute origin-top-left rotate-[134.99deg] border border-black"></div>
                  </div>
                </div>
              </div>
              <div
                ref={menutop}
                className="left-[20.04px] top-[85px] absolute flex-col justify-start items-start gap-3 inline-flex"
              >
                <Link
                  href="/"
                  onClick={scrollToTopmenu}
                  className="w-80 text-black text-4xl font-normal font-['Graphik'] underlin leading-[43.20px]"
                >
                  Home
                </Link>
                <Link
                  href={"/ai-studio"}
                  onClick={scrollToTopmenu}
                  className="w-80 text-black text-4xl font-normal flex gap-[8px] font-['Graphik'] leading-[43.20px]"
                >
                  AI Studio
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.62439 16.5292C8.79343 16.6486 8.98691 16.7289 9.19081 16.7642C9.39471 16.7996 9.60393 16.7892 9.8033 16.7337C10.0027 16.6783 10.1872 16.5791 10.3436 16.4436C10.4999 16.308 10.6241 16.1393 10.7072 15.9498L11.3672 13.9441C11.5278 13.4615 11.7985 13.023 12.1579 12.6632C12.5174 12.3035 12.9557 12.0324 13.4381 11.8715L15.3564 11.2484C15.629 11.1535 15.8648 10.975 16.0301 10.7384C16.1577 10.5589 16.2409 10.3517 16.2726 10.1338C16.3044 9.91594 16.2839 9.69362 16.2128 9.48522C16.1417 9.27681 16.0221 9.0883 15.8638 8.93524C15.7055 8.78219 15.5131 8.66897 15.3024 8.60494L13.4038 7.98779C12.9211 7.82768 12.4824 7.55733 12.1223 7.19817C11.7623 6.83902 11.4908 6.40094 11.3295 5.91865L10.7064 4.00122C10.6106 3.72955 10.4326 3.49441 10.1972 3.32836C9.96044 3.16508 9.6796 3.07764 9.39196 3.07764C9.10432 3.07764 8.82347 3.16508 8.58667 3.32836C8.34763 3.49741 8.16774 3.73727 8.07239 4.01408L7.44153 5.95551C7.2806 6.42527 7.01493 6.85228 6.66462 7.20422C6.31431 7.55616 5.88854 7.82382 5.41953 7.98694L3.49953 8.60922C3.22632 8.7058 2.99001 8.88513 2.82347 9.12227C2.65694 9.35941 2.56846 9.64256 2.57034 9.93232C2.57223 10.2221 2.66439 10.5041 2.834 10.739C3.00361 10.974 3.24223 11.1502 3.51667 11.2432L5.4161 11.8604C6.03191 12.067 6.57327 12.4504 6.97267 12.9627C7.20067 13.2566 7.37639 13.5867 7.4921 13.9398L8.1161 15.8546C8.2121 16.1272 8.39039 16.3629 8.6261 16.5292M16.9781 21.7407C17.1526 21.8639 17.3611 21.9298 17.5747 21.9292C17.7868 21.9299 17.994 21.8649 18.1678 21.7432C18.3468 21.6169 18.4807 21.4367 18.5501 21.2289L18.869 20.2492C18.9364 20.0458 19.0503 19.8609 19.2016 19.7092C19.3529 19.5574 19.5375 19.443 19.7407 19.3749L20.7401 19.0509C20.9417 18.9793 21.1161 18.8472 21.2397 18.6726C21.3632 18.4979 21.4297 18.2894 21.4301 18.0755C21.4301 17.856 21.3599 17.6423 21.2297 17.4655C21.0996 17.2888 20.9163 17.1583 20.7067 17.0932L19.7261 16.7761C19.5226 16.7086 19.3376 16.5945 19.1859 16.4431C19.0341 16.2916 18.9197 16.1069 18.8518 15.9035L18.5261 14.9067C18.4559 14.7032 18.3236 14.5269 18.1478 14.4026C17.9721 14.2783 17.7618 14.2123 17.5466 14.2138C17.3314 14.2153 17.122 14.2843 16.9481 14.411C16.7741 14.5378 16.6443 14.7159 16.577 14.9204L16.2564 15.9026C16.1907 16.1034 16.0798 16.2864 15.9322 16.4375C15.7847 16.5887 15.6044 16.7039 15.4052 16.7744L14.4058 17.0984C14.2038 17.1697 14.0288 17.3019 13.905 17.4767C13.7811 17.6515 13.7144 17.8604 13.7141 18.0746C13.7143 18.2907 13.7826 18.5013 13.9092 18.6763C14.0358 18.8514 14.2144 18.9822 14.4195 19.0501L15.4001 19.3689C15.6044 19.4363 15.79 19.5508 15.9418 19.7031C16.0937 19.8554 16.2076 20.0413 16.2744 20.2458L16.5992 21.2427C16.6701 21.444 16.8019 21.6184 16.9764 21.7415"
                      fill="url(#paint0_linear_5372_17173)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_5372_17173"
                        x1="12.0002"
                        y1="3.07764"
                        x2="12.0002"
                        y2="21.9292"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFCD05" />
                        <stop offset="1" stopColor="#EB6E14" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* <Image
                    src={sparkle}
                    alt=""
                    className="w-[36px] h-[36px]"
                    srcSet=""
                  /> */}
                </Link>
                <Link
                  href="/about-us"
                  onClick={scrollToTopmenu}
                  className="w-80 text-black text-4xl font-normal font-['Graphik'] leading-[43.20px]"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  onClick={scrollToTopmenu}
                  className="w-80 text-black text-4xl font-normal font-['Graphik'] leading-[43.20px]"
                >
                  Services
                </Link>
                <Link
                  href="/case-studies"
                  onClick={scrollToTopmenu}
                  className="w-80 text-black text-4xl font-normal font-['Graphik'] leading-[43.20px]"
                >
                  Case Studies
                </Link>
                <Link
                  href="insights"
                  onClick={scrollToTopmenu}
                  className="w-80 text-black text-4xl font-normal font-['Graphik'] leading-[43.20px]"
                >
                  Insights
                </Link>
                <Link
                  href="/industries"
                  onClick={scrollToTopmenu}
                  className="w-80 text-black text-4xl font-normal font-['Graphik'] leading-[43.20px]"
                >
                  Industries
                </Link>
                <Link
                  href="/contact-us"
                  onClick={scrollToTopmenu}
                  className="justify-start items-start gap-2 inline-flex"
                >
                  <div className="w-[166.88px] text-black text-4xl font-normal font-['Graphik'] leading-[43.20px]">
                    Let’s Talk
                  </div>
                  <div className="w-[43.87px] h-[43.87px] relative justify-center items-center inline-flex">
                    <div className="w-[43.87px] h-[43.87px] left-0 top-0 absolute bg-yellow-400 rounded-full" />
                    <div className="">
                      <div className=" relative flex-col justify-start items-start flex">
                        <div className="origin-top-left rotate[-135deg] w-[15.09px] relative">
                          <Image src={arrow} alt="Right Arrow" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div
                ref={menubottom}
                className="left-[20.04px] bottom-[60px] absolute flex-col justify-start items-start gap-6 inline-flex"
              >
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="opacity-80 text-black text-base font-normal font-['Graphik'] underline leading-normal">
                    <a href="mailto:info@codelinear.com">info@codelinear.com</a>
                  </div>
                  <div className="opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                    <a href="tel:+1 415 523 5957">+1 415 523 5957</a>
                  </div>
                </div>
                <div className="justify-start items-center gap-[19.84px] inline-flex">
                  <div className="w-6 h-6 relative">
                    <a
                      target="_blank"
                      href="https://in.linkedin.com/company/codelinear"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M19.041 3.00049C19.5714 3.00049 20.0801 3.21119 20.4552 3.58625C20.8302 3.9613 21.0409 4.46998 21.0409 5.00039V18.9997C21.0409 19.5301 20.8302 20.0388 20.4552 20.4139C20.0801 20.7889 19.5714 20.9996 19.041 20.9996H5.04171C4.51131 20.9996 4.00262 20.7889 3.62757 20.4139C3.25251 20.0388 3.04181 19.5301 3.04181 18.9997V5.00039C3.04181 4.46998 3.25251 3.9613 3.62757 3.58625C4.00262 3.21119 4.51131 3.00049 5.04171 3.00049H19.041ZM18.5411 18.4997V13.2C18.5411 12.3354 18.1976 11.5063 17.5863 10.8949C16.9749 10.2836 16.1458 9.94016 15.2812 9.94016C14.4313 9.94016 13.4413 10.4601 12.9613 11.2401V10.1301H10.1715V18.4997H12.9613V13.57C12.9613 12.8 13.5813 12.17 14.3513 12.17C14.7226 12.17 15.0786 12.3175 15.3412 12.5801C15.6037 12.8426 15.7512 13.1987 15.7512 13.57V18.4997H18.5411ZM6.92162 8.56022C7.36717 8.56022 7.79446 8.38323 8.10951 8.06818C8.42455 7.75314 8.60154 7.32584 8.60154 6.8803C8.60154 5.95035 7.85158 5.19038 6.92162 5.19038C6.47343 5.19038 6.04359 5.36843 5.72667 5.68535C5.40975 6.00227 5.2317 6.43211 5.2317 6.8803C5.2317 7.81026 5.99167 8.56022 6.92162 8.56022ZM8.31156 18.4997V10.1301H5.54169V18.4997H8.31156Z"
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
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M22.8855 12.0005C22.8855 6.48049 18.4055 2.00049 12.8855 2.00049C7.3655 2.00049 2.8855 6.48049 2.8855 12.0005C2.8855 16.8405 6.3255 20.8705 10.8855 21.8005V15.0005H8.8855V12.0005H10.8855V9.50049C10.8855 7.57049 12.4555 6.00049 14.3855 6.00049H16.8855V9.00049H14.8855C14.3355 9.00049 13.8855 9.45049 13.8855 10.0005V12.0005H16.8855V15.0005H13.8855V21.9505C18.9355 21.4505 22.8855 17.1905 22.8855 12.0005Z"
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
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M8.53041 2.00049H16.9304C20.1304 2.00049 22.7304 4.60049 22.7304 7.80049V16.2005C22.7304 17.7387 22.1193 19.214 21.0316 20.3017C19.9439 21.3894 18.4687 22.0005 16.9304 22.0005H8.53041C5.33041 22.0005 2.73041 19.4005 2.73041 16.2005V7.80049C2.73041 6.26223 3.34148 4.78698 4.42919 3.69927C5.5169 2.61156 6.99215 2.00049 8.53041 2.00049ZM8.33041 4.00049C7.37563 4.00049 6.45995 4.37977 5.78482 5.0549C5.10969 5.73003 4.73041 6.64571 4.73041 7.60049V16.4005C4.73041 18.3905 6.34041 20.0005 8.33041 20.0005H17.1304C18.0852 20.0005 19.0009 19.6212 19.676 18.9461C20.3511 18.2709 20.7304 17.3553 20.7304 16.4005V7.60049C20.7304 5.61049 19.1204 4.00049 17.1304 4.00049H8.33041ZM17.9804 5.50049C18.3119 5.50049 18.6299 5.63218 18.8643 5.8666C19.0987 6.10102 19.2304 6.41897 19.2304 6.75049C19.2304 7.08201 19.0987 7.39995 18.8643 7.63437C18.6299 7.86879 18.3119 8.00049 17.9804 8.00049C17.6489 8.00049 17.3309 7.86879 17.0965 7.63437C16.8621 7.39995 16.7304 7.08201 16.7304 6.75049C16.7304 6.41897 16.8621 6.10102 17.0965 5.8666C17.3309 5.63218 17.6489 5.50049 17.9804 5.50049ZM12.7304 7.00049C14.0565 7.00049 15.3283 7.52727 16.2659 8.46495C17.2036 9.40264 17.7304 10.6744 17.7304 12.0005C17.7304 13.3266 17.2036 14.5983 16.2659 15.536C15.3283 16.4737 14.0565 17.0005 12.7304 17.0005C11.4043 17.0005 10.1326 16.4737 9.19487 15.536C8.25719 14.5983 7.73041 13.3266 7.73041 12.0005C7.73041 10.6744 8.25719 9.40264 9.19487 8.46495C10.1326 7.52727 11.4043 7.00049 12.7304 7.00049ZM12.7304 9.00049C11.9348 9.00049 11.1717 9.31656 10.6091 9.87917C10.0465 10.4418 9.73041 11.2048 9.73041 12.0005C9.73041 12.7961 10.0465 13.5592 10.6091 14.1218C11.1717 14.6844 11.9348 15.0005 12.7304 15.0005C13.5261 15.0005 14.2891 14.6844 14.8517 14.1218C15.4143 13.5592 15.7304 12.7961 15.7304 12.0005C15.7304 11.2048 15.4143 10.4418 14.8517 9.87917C14.2891 9.31656 13.5261 9.00049 12.7304 9.00049Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="w-6 h-6 relative">
                    <a target="_blank" href="https://medium.com/@codelinear_">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1663_7264)">
                          <path
                            d="M14.1126 11.9999C14.1126 15.7274 11.0826 18.7499 7.34314 18.7499C6.45554 18.7511 5.5764 18.5774 4.75592 18.2388C3.93543 17.9003 3.18967 17.4034 2.56121 16.7766C1.93274 16.1498 1.43389 15.4054 1.09313 14.5858C0.752371 13.7662 0.576376 12.8875 0.575195 11.9999C0.575195 8.27098 3.60517 5.25001 7.34314 5.25001C8.23086 5.24863 9.11016 5.42214 9.93082 5.76063C10.7515 6.09911 11.4974 6.59595 12.126 7.22276C12.7547 7.84957 13.2536 8.59407 13.5945 9.41375C13.9354 10.2334 14.1114 11.1122 14.1126 11.9999ZM21.5375 11.9999C21.5375 15.5099 20.0225 18.3539 18.1535 18.3539C16.2846 18.3539 14.7696 15.5084 14.7696 11.9999C14.7696 8.48998 16.2846 5.646 18.1535 5.646C20.0225 5.646 21.5375 8.49148 21.5375 11.9999ZM24.575 11.9999C24.575 15.1439 24.0425 17.6924 23.384 17.6924C22.727 17.6924 22.1945 15.1424 22.1945 11.9999C22.1945 8.85598 22.727 6.3075 23.3855 6.3075C24.0425 6.3075 24.575 8.85598 24.575 11.9999Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1663_7264">
                            <rect
                              width="23.9998"
                              height="23.9998"
                              fill="white"
                              transform="translate(0.575195)"
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
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M10.4198 15L15.6098 12L10.4198 9V15ZM21.9798 7.17C22.1098 7.64 22.1998 8.27 22.2598 9.07C22.3298 9.87 22.3598 10.56 22.3598 11.16L22.4198 12C22.4198 14.19 22.2598 15.8 21.9798 16.83C21.7298 17.73 21.1498 18.31 20.2498 18.56C19.7798 18.69 18.9198 18.78 17.5998 18.84C16.2998 18.91 15.1098 18.94 14.0098 18.94L12.4198 19C8.2298 19 5.6198 18.84 4.5898 18.56C3.6898 18.31 3.1098 17.73 2.8598 16.83C2.7298 16.36 2.6398 15.73 2.5798 14.93C2.5098 14.13 2.4798 13.44 2.4798 12.84L2.4198 12C2.4198 9.81 2.5798 8.2 2.8598 7.17C3.1098 6.27 3.6898 5.69 4.5898 5.44C5.0598 5.31 5.9198 5.22 7.2398 5.16C8.5398 5.09 9.7298 5.06 10.8298 5.06L12.4198 5C16.6098 5 19.2198 5.16 20.2498 5.44C21.1498 5.69 21.7298 6.27 21.9798 7.17Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="w-6 h-6 relative">
                    <a target="_blank" href="https://twitter.com/Codelinear_">
                      {/* <Image src={x} alt="" /> */}
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.7445 10.469L21.8165 2H20.1405L13.9985 9.353L9.09452 2H3.43652L10.8545 13.12L3.43652 22H5.11252L11.5985 14.235L16.7785 22H22.4365L14.7445 10.469ZM12.4485 13.217L11.6965 12.11L5.71652 3.3H8.29152L13.1175 10.41L13.8685 11.517L20.1415 20.759H17.5675L12.4485 13.217Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              transform: visible ? "translate(0)" : "translateY(-130px)",
              transition: "transform 0.3s ease-in-out",
            }}
            ref={homemenu}
            className={
              aipage
                ? isDropdownOpen
                  ? "w-full max-hamburger:hidden max-lg:px-[40px] max-lg:pl-[32px] z-[9999999999] h-[91px] widescreen:h-[124px] px-20 pl-[70px] bg-[white] flex-col justify-end items-center gap-2.5 inline-flex sticky top-0"
                  : "w-full max-hamburger:hidden max-lg:px-[40px] max-lg:pl-[32px] z-[99999999999] h-[91px] widescreen:h-[124px] px-20 pl-[70px] bg-[transparent] flex-col justify-end items-center gap-2.5 inline-flex sticky top-0"
                : "w-full max-hamburger:hidden max-lg:px-[40px] max-lg:pl-[32px] z-[99999999999] h-[91px] widescreen:h-[124px] px-20 pl-[70px] bg-white bg-opacity-70 backdrop-blur-[110.60px] flex-col justify-end items-center gap-2.5 inline-flex sticky top-0"
            }
          >
            <div className="self-stretch pt-[10px] pb-2.5 justify-between items-center inline-flex sticky top-10 ">
              <div className="w-[123px] widescreen:w-[224px] widescreen:h-[99.65px] pr-[6.40px] pt-[16.37px] flex-col justify-center items-start gap-[14.69px] inline-flex">
                <div className="origin-top-left text-black text-xl font-normal font-['Graphik']">
                  <Link href="/" onClick={toggleother} className="hover-logo">
                    <Lottie
                      loop={true}
                      animationData={navBar}
                      autoplay={true}
                      className="absolute w-[120px] widescreen:w-[224px] bottom-0 index-hover"
                    />
                    <Lottie
                      loop={true}
                      animationData={navBar}
                      autoplay={false}
                      className="absolute w-[120px] widescreen:w-[224px] bottom-0 index-hover2"
                    />
                  </Link>
                </div>
              </div>
              <div className="w-[745px] widescreen:w-[1224px] widescreen:w-[1224px] justify-end items-center gap-[45px] max-lg:w-auto flex max-lg:gap-[28px]">
                <div className="w-[601px] justify-start widescreen:w-[854px] items-start gap-[28px] max-lg:w-auto max-lg:gap-[18px] flex">
                  <div className="text-black  whitespace-nowrap text-base font-normal font-['Graphik']">
                    <Link
                      href={"/ai-studio"}
                      className="flex gap-[4px] widescreen:text-[20px] widescreen:text-[24px]"
                      onClick={toggleother}
                    >
                      {/* <Image
                        src={sparkle}
                        alt=""
                        className="w-[24px] h-[24px]"
                        srcSet=""
                      /> */}
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.62439 16.5292C8.79343 16.6486 8.98691 16.7289 9.19081 16.7642C9.39471 16.7996 9.60393 16.7892 9.8033 16.7337C10.0027 16.6783 10.1872 16.5791 10.3436 16.4436C10.4999 16.308 10.6241 16.1393 10.7072 15.9498L11.3672 13.9441C11.5278 13.4615 11.7985 13.023 12.1579 12.6632C12.5174 12.3035 12.9557 12.0324 13.4381 11.8715L15.3564 11.2484C15.629 11.1535 15.8648 10.975 16.0301 10.7384C16.1577 10.5589 16.2409 10.3517 16.2726 10.1338C16.3044 9.91594 16.2839 9.69362 16.2128 9.48522C16.1417 9.27681 16.0221 9.0883 15.8638 8.93524C15.7055 8.78219 15.5131 8.66897 15.3024 8.60494L13.4038 7.98779C12.9211 7.82768 12.4824 7.55733 12.1223 7.19817C11.7623 6.83902 11.4908 6.40094 11.3295 5.91865L10.7064 4.00122C10.6106 3.72955 10.4326 3.49441 10.1972 3.32836C9.96044 3.16508 9.6796 3.07764 9.39196 3.07764C9.10432 3.07764 8.82347 3.16508 8.58667 3.32836C8.34763 3.49741 8.16774 3.73727 8.07239 4.01408L7.44153 5.95551C7.2806 6.42527 7.01493 6.85228 6.66462 7.20422C6.31431 7.55616 5.88854 7.82382 5.41953 7.98694L3.49953 8.60922C3.22632 8.7058 2.99001 8.88513 2.82347 9.12227C2.65694 9.35941 2.56846 9.64256 2.57034 9.93232C2.57223 10.2221 2.66439 10.5041 2.834 10.739C3.00361 10.974 3.24223 11.1502 3.51667 11.2432L5.4161 11.8604C6.03191 12.067 6.57327 12.4504 6.97267 12.9627C7.20067 13.2566 7.37639 13.5867 7.4921 13.9398L8.1161 15.8546C8.2121 16.1272 8.39039 16.3629 8.6261 16.5292M16.9781 21.7407C17.1526 21.8639 17.3611 21.9298 17.5747 21.9292C17.7868 21.9299 17.994 21.8649 18.1678 21.7432C18.3468 21.6169 18.4807 21.4367 18.5501 21.2289L18.869 20.2492C18.9364 20.0458 19.0503 19.8609 19.2016 19.7092C19.3529 19.5574 19.5375 19.443 19.7407 19.3749L20.7401 19.0509C20.9417 18.9793 21.1161 18.8472 21.2397 18.6726C21.3632 18.4979 21.4297 18.2894 21.4301 18.0755C21.4301 17.856 21.3599 17.6423 21.2297 17.4655C21.0996 17.2888 20.9163 17.1583 20.7067 17.0932L19.7261 16.7761C19.5226 16.7086 19.3376 16.5945 19.1859 16.4431C19.0341 16.2916 18.9197 16.1069 18.8518 15.9035L18.5261 14.9067C18.4559 14.7032 18.3236 14.5269 18.1478 14.4026C17.9721 14.2783 17.7618 14.2123 17.5466 14.2138C17.3314 14.2153 17.122 14.2843 16.9481 14.411C16.7741 14.5378 16.6443 14.7159 16.577 14.9204L16.2564 15.9026C16.1907 16.1034 16.0798 16.2864 15.9322 16.4375C15.7847 16.5887 15.6044 16.7039 15.4052 16.7744L14.4058 17.0984C14.2038 17.1697 14.0288 17.3019 13.905 17.4767C13.7811 17.6515 13.7144 17.8604 13.7141 18.0746C13.7143 18.2907 13.7826 18.5013 13.9092 18.6763C14.0358 18.8514 14.2144 18.9822 14.4195 19.0501L15.4001 19.3689C15.6044 19.4363 15.79 19.5508 15.9418 19.7031C16.0937 19.8554 16.2076 20.0413 16.2744 20.2458L16.5992 21.2427C16.6701 21.444 16.8019 21.6184 16.9764 21.7415"
                          fill="url(#paint0_linear_5372_17173)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_5372_17173"
                            x1="12.0002"
                            y1="3.07764"
                            x2="12.0002"
                            y2="21.9292"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFCD05" />
                            <stop offset="1" stopColor="#EB6E14" />
                          </linearGradient>
                        </defs>
                      </svg>
                      AI Studio
                    </Link>
                  </div>
                  <div className="text-black text-base font-normal widescreen:text-[20px] widescreen:text-[24px] font-['Graphik']">
                    <Link href={"/services"} onMouseEnter={toggleService}>
                      Services
                    </Link>
                    {isDropdownOpen && (
                      <>
                        <div
                          onMouseLeave={toggleServicenew}
                          className="bg-[white] fixed top-[91px] widescreen:top-[124px] left-0 z-[9999999999999] w-full"
                        >
                          <div className="w-full h-[100vh] overflow-y-scroll pl-20 max-1xl:px-[40px] max-[1250px]:gap-[20px] max-xl:gap-[40px] pr-[80px] pt-[22px] pb-[68px] justify-between items-start gap-[66.08px] inline-flex">
                            <div
                              ref={serv}
                              className="self-stretch h-[265px] flex-col justify-between items-start gap-12 inline-flex "
                            >
                              <div className="flex-col justify-start items-start gap-[26px] flex">
                                <div className="self-stretch justify-start items-center gap-[26px] inline-flex">
                                  <div className="opacity-60 widescreen:text-[24px] text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                                    Our services
                                  </div>
                                  <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                                </div>
                                <div className="flex-col justify-start items-start gap-[17px] flex">
                                  <div
                                    ref={cont}
                                    className="w-[366.92px] widescreen:w-[524px] max-[1230px]:w-[250px] text-black text-[32px] font-normal font-['Graphik'] leading-[120%] letter-spacing-2"
                                  >
                                    We help you do amazing things through
                                    cutting-edge technology.
                                  </div>
                                </div>
                              </div>
                              <Link
                                onClick={toggleDropdown}
                                href="/services"
                                className="px-8 py-4 rounded-[31px] widescreen:rounded-[50px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                              >
                                <div className="text-black widescreen:text-[24px] text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
                                  Explore all services
                                </div>
                              </Link>
                            </div>
                            <div
                              ref={container}
                              className=" justify-start w-[840px] widescreen:w-[calc(100%-650px)] h-[612px] widescreen:h-auto max-xl:w-[765px] overflow-scroll items-start inline-flex flex-wrap"
                            >
                              <Link
                                href={"/services/product-design-and-innovation"}
                                onClick={toggleDropdown}
                                className="max-[1230px]:w-[33%] widescreen:w-[33%] nav-card border-b-[2px] max-1xl:p-[10px] max-2xl:border-0 max-2xl:px-[10px] border-r-[2px] pt-[24.36px] pr-[18px] pl-[24.5px] pb-[31px] gap-[16px] rounded flex-col justify-between items-start inline-flex"
                              >
                                <div ref={svg1} className="w-[32px] h-[32px] ">
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
                                <div
                                  ref={cont1}
                                  className="w-[234px] max-[1230px]:w-full widestscreen:w-[100%] max-[1230px]:h-[60px] h-[48px] widestscreen:h-[80px] text-black text-xl font-normal font-['Graphik'] leading-[120%] widesceen:text-[24px] widestscreen:text-[32px]"
                                >
                                  Product Design and Innovation
                                </div>
                              </Link>
                              <Link
                                href="/services/app-development-and-modernization"
                                onClick={toggleDropdown}
                                className="max-[1230px]:w-[33%] widescreen:w-[33%] nav-card border-b-[2px] max-1xl:p-[10px] max-2xl:border-0 max-2xl:px-[10px] border-r-[2px] pt-[24.36px] pr-[18px] pl-[24.5px] pb-[31px] gap-[16px] rounded flex-col justify-between items-start inline-flex"
                              >
                                <div ref={svg2} className="w-[32px] h-[32px] ">
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
                                <div
                                  ref={cont2}
                                  className="w-[234px] max-[1230px]:w-full widestscreen:w-[100%] max-[1230px]:h-[60px] h-[48px] widestscreen:h-[80px] text-black text-xl font-normal font-['Graphik'] leading-[120%] widesceen:text-[24px] widestscreen:text-[32px]"
                                >
                                  App Development and Modernization
                                </div>
                              </Link>
                              <Link
                                href="/services/technology-consulting"
                                onClick={toggleDropdown}
                                className="max-[1230px]:w-[33%] widescreen:w-[33%] nav-card border-b-[2px] max-1xl:p-[10px] max-2xl:border-0 max-2xl:px-[10px] bor-[2px] pt-[24.36px] pr-[18px] pl-[24.5px] pb-[31px] gap-[16px] rounded flex-col justify-between items-start inline-flex"
                              >
                                <div ref={svg3} className="w-[32px] h-[32px] ">
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
                                <div
                                  ref={cont3}
                                  className="w-[234px] max-[1230px]:w-full widestscreen:w-[100%] max-[1230px]:h-[60px] h-[48px] widestscreen:h-[80px] text-black text-xl font-normal font-['Graphik'] leading-[120%] widesceen:text-[24px] widestscreen:text-[32px]"
                                >
                                  Technology Consulting
                                </div>
                              </Link>
                              <Link
                                href="/services/ecommerce-marketplace-development"
                                onClick={toggleDropdown}
                                className="max-[1230px]:w-[33%] widescreen:w-[33%] nav-card border-b-[2px] max-1xl:p-[10px] max-2xl:border-0 max-2xl:px-[10px] border-r-[2px] pt-[24.36px] pr-[18px] pl-[24.5px] pb-[31px] gap-[16px] rounded flex-col justify-between items-start inline-flex"
                              >
                                <div ref={svg4} className="w-[32px] h-[32px] ">
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
                                <div
                                  ref={cont4}
                                  className="w-[234px] max-[1230px]:w-full widestscreen:w-[100%] max-[1230px]:h-[60px] h-[48px] widestscreen:h-[80px] text-black text-xl font-normal font-['Graphik'] leading-[120%] widesceen:text-[24px] widestscreen:text-[32px]"
                                >
                                  Ecommerce Marketplace Development
                                </div>
                              </Link>
                              <Link
                                href={"/services/cloud-engineering"}
                                onClick={toggleDropdown}
                                className="max-[1230px]:w-[33%] widescreen:w-[33%] nav-card border-b-[2px] max-1xl:p-[10px] max-2xl:border-0 max-2xl:px-[10px] border-r-[2px] pt-[24.36px] pr-[18px] pl-[24.5px] pb-[31px] gap-[16px] rounded flex-col justify-between items-start inline-flex"
                              >
                                <div ref={svg5} className="w-[32px] h-[32px] ">
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
                                <div
                                  ref={cont5}
                                  className="w-[234px] max-[1230px]:w-full widestscreen:w-[100%] max-[1230px]:h-[60px] h-[48px] widestscreen:h-[80px] text-black text-xl font-normal font-['Graphik'] leading-[120%] widesceen:text-[24px] widestscreen:text-[32px]"
                                >
                                  Cloud Engineering
                                </div>
                              </Link>
                              <Link
                                href="/services/game-development"
                                onClick={toggleDropdown}
                                className="max-[1230px]:w-[33%] widescreen:w-[33%] nav-card border-b-[2px] max-1xl:p-[10px] max-2xl:border-0 max-2xl:px-[10px] -[2px] pt-[24.36px] pr-[18px] pl-[24.5px] pb-[31px] gap-[16px] rounded flex-col justify-between items-start inline-flex"
                              >
                                <div ref={svg6} className="w-[32px] h-[32px] ">
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
                                <div
                                  ref={cont6}
                                  className="w-[234px] max-[1230px]:w-full widestscreen:w-[100%] max-[1230px]:h-[60px] h-[48px] widestscreen:h-[80px] text-black text-xl font-normal font-['Graphik'] leading-[120%] widesceen:text-[24px] widestscreen:text-[32px]"
                                >
                                  Game Development
                                </div>
                              </Link>
                              <Link
                                href="/services/ar-vr-services"
                                onClick={toggleDropdown}
                                className="max-[1230px]:w-[33%] widescreen:w-[33%] nav-card border-b-[2px] max-1xl:p-[10px] max-2xl:border-0 max-2xl:px-[10px] border-r-[2px] pt-[24.36px] pr-[18px] pl-[24.5px] pb-[31px] gap-[16px] rounded flex-col justify-between items-start inline-flex"
                              >
                                <div ref={svg7} className="w-[32px] h-[32px] ">
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
                                <div
                                  ref={cont7}
                                  className="w-[234px] max-[1230px]:w-full widestscreen:w-[100%] max-[1230px]:h-[60px] h-[48px] widestscreen:h-[80px] text-black text-xl font-normal font-['Graphik'] leading-[120%] widesceen:text-[24px] widestscreen:text-[32px]"
                                >
                                  AR/VR Services
                                </div>
                              </Link>
                              <Link
                                href={
                                  "/services/artificial-intelligence-services"
                                }
                                onClick={toggleDropdown}
                                className="max-[1230px]:w-[33%] widescreen:w-[33%] nav-card border-b-[2px] max-1xl:p-[10px] max-2xl:border-0 max-2xl:px-[10px] border-r-[2px] pt-[24.36px] pr-[18px] pl-[24.5px] pb-[31px] gap-[16px] rounded flex-col justify-between items-start inline-flex"
                              >
                                <div ref={svg8} className="w-[32px] h-[32px] ">
                                  <Image src={AI} alt="Dropdown icon" />
                                </div>
                                <div
                                  ref={cont8}
                                  className="w-[234px] max-[1230px]:w-full widestscreen:w-[100%] max-[1230px]:h-[60px] h-[48px] widestscreen:h-[80px] text-black text-xl font-normal font-['Graphik'] leading-[120%] widesceen:text-[24px] widestscreen:text-[32px]"
                                >
                                  Artificial Intelligence (AI) Services{" "}
                                </div>
                              </Link>
                              <Link
                                href={"/services/low-code-and-no-code"}
                                onClick={toggleDropdown}
                                className="max-[1230px]:w-[33%] widescreen:w-[33%] nav-card border-b-[2px] max-1xl:p-[10px] max-2xl:border-0 max-2xl:px-[10px] bor-[2px] pt-[24.36px] pr-[18px] pl-[24.5px] pb-[31px] gap-[16px] rounded flex-col justify-between items-start inline-flex"
                              >
                                <div ref={svg9} className="w-[32px] h-[32px] ">
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
                                <div
                                  ref={cont9}
                                  className="w-[234px] max-[1230px]:w-full widestscreen:w-[100%] max-[1230px]:h-[60px] h-[48px] widestscreen:h-[80px] text-black text-xl font-normal font-['Graphik'] leading-[120%] widesceen:text-[24px] widestscreen:text-[32px]"
                                >
                                  Low-code and No-code
                                </div>
                              </Link>
                              <Link
                                href={"/services/salesforce-services"}
                                onClick={toggleDropdown}
                                className="max-[1230px]:w-[33%] widescreen:w-[33%] nav-card bor-[2px] max-1xl:p-[10px] max-2xl:border-0 max-2xl:px-[10px] border-r-[2px] pt-[24.36px] pr-[18px] pl-[24.5px] pb-[31px] gap-[16px] rounded flex-col justify-between items-start inline-flex"
                              >
                                <div ref={svg10} className="w-[32px] h-[32px] ">
                                  <Image src={SF} alt="Dropdown icon" />
                                </div>
                                <div
                                  ref={cont10}
                                  className="w-[234px] max-[1230px]:w-full widestscreen:w-[100%] max-[1230px]:h-[60px] h-[48px] widestscreen:h-[80px] text-black text-xl font-normal font-['Graphik'] leading-[120%] widesceen:text-[24px] widestscreen:text-[32px]"
                                >
                                  Salesforce Services
                                </div>
                              </Link>
                              <Link
                                href={"/services/microsoft-sharepoint-services"}
                                onClick={toggleDropdown}
                                className="max-[1230px]:w-[33%] widescreen:w-[33%] nav-card bo-[2px] max-1xl:p-[10px] max-2xl:border-0 max-2xl:px-[10px] border-r-[2px] pt-[24.36px] pr-[18px] pl-[24.5px] pb-[31px] gap-[16px] rounded flex-col justify-between items-start inline-flex"
                              >
                                <div ref={svg11} className="w-[32px] h-[32px] ">
                                  <Image src={SP} alt="Dropdown icon" />
                                </div>
                                <div
                                  ref={cont11}
                                  className="w-[234px] max-[1230px]:w-full widestscreen:w-[100%] max-[1230px]:h-[60px] h-[48px] widestscreen:h-[80px] text-black text-xl font-normal font-['Graphik'] leading-[120%] widesceen:text-[24px] widestscreen:text-[32px]"
                                >
                                  Microsoft SharePoint Services{" "}
                                </div>
                              </Link>
                              <Link
                                href={"/services/quality-assurance"}
                                onClick={toggleDropdown}
                                className="max-[1230px]:w-[33%] widescreen:w-[33%] nav-card bor-[2px] max-1xl:p-[10px] max-2xl:border-0 max-2xl:px-[10px] bor[2px] pt-[24.36px] pr-[18px] pl-[24.5px] pb-[31px] gap-[16px] rounded flex-col justify-between items-start inline-flex"
                              >
                                <div ref={svg12} className="w-[32px] h-[32px] ">
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
                                <div
                                  ref={cont12}
                                  className="w-[234px] max-[1230px]:w-full widestscreen:w-[100%] max-[1230px]:h-[60px] h-[48px] widestscreen:h-[80px] text-black text-xl font-normal font-['Graphik'] leading-[120%] widesceen:text-[24px] widestscreen:text-[32px]"
                                >
                                  Quality Assurance
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="text-black widescreen:text-[20px] widescreen:text-[24px] whitespace-nowrap text-base font-normal font-['Graphik']">
                    <Link href={"/about-us"} onClick={toggleother}>
                      About us
                    </Link>
                  </div>
                  <div className="text-black widescreen:text-[20px] widescreen:text-[24px] whitespace-nowrap text-base font-normal font-['Graphik']">
                    <Link href={"/case-studies"} onClick={toggleother}>
                      Case studies
                    </Link>
                  </div>
                  <div className="text-black widescreen:text-[20px] widescreen:text-[24px] whitespace-nowrap text-base font-normal font-['Graphik']">
                    <Link href={"/insights"} onClick={toggleother}>
                      Insights
                    </Link>
                  </div>
                  <div className="text-black widescreen:text-[20px] widescreen:text-[24px] whitespace-nowrap text-base font-normal font-['Graphik']">
                    <Link href={"/industries"} onClick={toggleother}>
                      Industries
                    </Link>
                  </div>
                </div>
                <Link
                  href={"/contact-us"}
                  onClick={toggleother}
                  className="w-[99px] whitespace-nowrap widescreen:w-[150px] widestscreen:w-[174px] widescreen:py-[12px] widestscreen:py-[16px] talk-btn px-[16px] py-[8px] bg-neutral-100 rounded-[30px] justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik']">
                    Let’s Talk
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
