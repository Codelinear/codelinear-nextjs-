"use client";
import React, { useRef, useState, useEffect } from "react";
import img from "../../blogassets/Frame 566.png";
import img2 from "../../blogassets/Frame 568.png";
import img3 from "../../blogassets/Blog Page Featured Image.jpg";
import img4 from "../../blogassets/Frame 57.png";
import img5 from "../../blogassets/Frame 60.png";
import img6 from "../../blogassets/Frame 61.png";
import img7 from "../../blogassets/Frame 64.png";
import img8 from "../../blogassets/Blog Feed Images03.jpg";
import img9 from "../../blogassets//Blog Feed Images11.jpg";
import img10 from "../../blogassets/Frame 43.png";
import img11 from "../../blogassets/Frame 44.png";
import img12 from "../../blogassets/Frame 59.png";
import img13 from "../../blogassets/Frame 58.png";
import img15 from "../../blogassets/Frame 63.png";
import img16 from "../../blogassets/Frame 4.svg";
import img17 from "../../blogassets/Frame 1000001793.png";
import imgmotion from "../../blogassets/Slide 16_9 - 1 (1).png";
import Link from "next/link";
import axios from "axios";
import gsap from "gsap";
import Image from "next/image";

const Allblogs = () => {
  const [isSortActive, setIsSortActive] = useState(true);
  const [isSort2Active, setIsSort2Active] = useState(false);
  const [isSort3Active, setIsSort3Active] = useState(false);
  const [isSort4Active, setIsSort4Active] = useState(false);
  const [isSort5Active, setIsSort5Active] = useState(false);
  const [isSort6Active, setIsSort6Active] = useState(false);
  const [isSort7Active, setIsSort7Active] = useState(false);
  const [isSort8Active, setIsSort8Active] = useState(false);
  const [isSort9Active, setIsSort9Active] = useState(false);
  let empathy = useRef(null);
  let db = useRef(null);
  let digitalmarketing = useRef(null);
  let dw = useRef(null);
  let MVP = useRef(null);
  let design = useRef(null);
  let gp = useRef(null);
  let NCR = useRef(null);
  let SVM = useRef(null);
  let Bg = useRef(null);
  let NSEO = useRef(null);
  let Cust = useRef(null);
  let UXi = useRef(null);
  let STM = useRef(null);
  let RVF = useRef(null);
  let all = useRef(null);
  let aii = useRef(null);
  const onClickSort1 = () => {
    gsap.to(digitalmarketing, 0, { display: "flex" });
    gsap.to(dw, 0, { display: "flex" });
    gsap.to(db, 0, { display: "flex" });
    gsap.to(gp, 0, { display: "flex" });
    gsap.to(NCR, 0, { display: "flex" });
    gsap.to(NSEO, 0, { display: "flex" });
    gsap.to(Cust, 0, { display: "flex" });
    gsap.to(UXi, 0, { display: "flex" });
    gsap.to(STM, 0, { display: "flex" });
    gsap.to(empathy, 0, { display: "flex" });
    gsap.to(design, 0, { display: "flex" });
    gsap.to(MVP, 0, { display: "flex" });
    gsap.to(SVM, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "flex" });
    gsap.to(Bg, 0, { display: "flex" });
    gsap.to(aii, 0, { display: "flex" });
    setIsSortActive(true);
    setIsSort2Active(false);
    setIsSort4Active(false);
    setIsSort3Active(false);
    setIsSort5Active(false);
    setIsSort6Active(false);
    setIsSort7Active(false);
    setIsSort8Active(false);
    setIsSort9Active(false);
  };
  const onClickSort2 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "flex" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(STM, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort2Active(true);
    setIsSort4Active(false);
    setIsSort5Active(false);
    setIsSort6Active(false);
    setIsSort7Active(false);
    setIsSort8Active(false);
    setIsSort9Active(false);
    setIsSortActive(false);
  };
  const onClickSort3 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "flex" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "flex" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "flex" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "flex" });
    gsap.to(design, 0, { display: "flex" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "flex" });
    setIsSort3Active(true);
    setIsSortActive(false);
    setIsSort2Active(false);
    setIsSort4Active(false);
    setIsSort5Active(false);
    setIsSort6Active(false);
    setIsSort7Active(false);
    setIsSort8Active(false);
    setIsSort9Active(false);
  };
  const onClickSort4 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "flex" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "flex" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort4Active(true);
    setIsSort3Active(false);
    setIsSortActive(false);
    setIsSort2Active(false);

    setIsSort5Active(false);
    setIsSort6Active(false);
    setIsSort7Active(false);
    setIsSort8Active(false);
    setIsSort9Active(false);
  };
  const onClickSort5 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "flex" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });

    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort5Active(true);
    setIsSort4Active(false);
    setIsSort3Active(false);
    setIsSortActive(false);
    setIsSort2Active(false);
    setIsSort6Active(false);
    setIsSort7Active(false);
    setIsSort8Active(false);
    setIsSort9Active(false);
  };

  const onClickSort6 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "flex" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "flex" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort6Active(true);
    setIsSort5Active(false);
    setIsSort4Active(false);
    setIsSort3Active(false);
    setIsSortActive(false);
    setIsSort2Active(false);
    setIsSort7Active(false);
    setIsSort8Active(false);
    setIsSort9Active(false);
  };

  const onClickSort8 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort8Active(true);
    setIsSort6Active(false);
    setIsSort5Active(false);
    setIsSort4Active(false);
    setIsSort3Active(false);
    setIsSortActive(false);
    setIsSort2Active(false);
    setIsSort7Active(false);
    setIsSort9Active(false);
  };

  const onClickSort7 = () => {
    gsap.to(digitalmarketing, 0, { display: "flex" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort7Active(true);
    setIsSort8Active(false);

    setIsSort6Active(false);
    setIsSort5Active(false);
    setIsSort4Active(false);
    setIsSort3Active(false);
    setIsSortActive(false);
    setIsSort2Active(false);
    setIsSort9Active(false);
  };

  const onClickSort9 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "flex" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort9Active(true);
    setIsSort8Active(false);
    setIsSort6Active(false);
    setIsSort5Active(false);
    setIsSort4Active(false);
    setIsSort3Active(false);
    setIsSortActive(false);
    setIsSort2Active(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <div className="all-blogs">
        <div className="category-section">
          <div className="w-full max-lg:h-full   pl-20 pr-[0px] pt-[67px] pb-[35px] bg-white justify-start items-center inline-flex max-lg:p-5  max-lg:mt-10">
            <div className="self-stretch justify-start items-start gap-5 inline-flex max-sm:w-full max-[1392px]:flex-wrap">
              <div
                ref={(el) => (all = el)}
                onClick={onClickSort1}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex max-lg:minw-[100px] ${
                  isSortActive ? "active" : ""
                }`}
              >
                <div className="textwhite text-xl font-normal font-['Graphik'] leading-[120%] widescreen:text-[24px] widescreen:text-[24px]">
                  Show all
                </div>
              </div>
              <button
                onClick={onClickSort6}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  maxlg:mi-w-[250px] ${
                  isSort6Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[120%] widescreen:text-[24px] widescreen:text-[24px]">
                  Product Development
                </div>
              </button>
              <button
                onClick={onClickSort3}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  maxlg:min-w-[150px] ${
                  isSort3Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[120%] widescreen:text-[24px] widescreen:text-[24px]">
                  UI/UX Design
                </div>
              </button>
              <button
                onClick={onClickSort4}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  max-g:min-w-[80px] ${
                  isSort4Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik']  leading-[120%]">
                  SEO
                </div>
              </button>
              <button
                onClick={onClickSort2}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  maxlg:min-w-[80px]  ${
                  isSort2Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[120%] widescreen:text-[24px] widescreen:text-[24px]">
                  Branding
                </div>
              </button>
              <button
                onClick={onClickSort5}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  max-g:min-w-[200px] ${
                  isSort5Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[120%] widescreen:text-[24px] widescreen:text-[24px]">
                  Social Media
                </div>
              </button>
              <button
                onClick={onClickSort7}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  max-g:min-w-[200px] ${
                  isSort7Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[120%] widescreen:text-[24px] widescreen:text-[24px]">
                  Digital Marketing
                </div>
              </button>
              <button
                onClick={onClickSort8}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  max-g:min-w-[80px] ${
                  isSort8Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[120%] widescreen:text-[24px] widescreen:text-[24px]">
                  eCommerce
                </div>
              </button>
              <button
                onClick={onClickSort9}
                className={`p-2 bg-neutral-100 rounded-[7px] justify-center items-center gap-2 flex  max-g:min-w-[150px] ${
                  isSort9Active ? "active" : ""
                }`}
              >
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[120%] widescreen:text-[24px] widescreen:text-[24px]">
                  No Code
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="main-blog-section mx-[80px] mt-20 max-lg:m-5 max-md:px-5 max-md:mx-0">
          <div className="w-full mb-[100px] max-sm:mb-0 h-full justify-center items-start gap-x-[140px] gap-y-[75px] inline-flex flex-wrap  max-lg:gap-x-[50px] max-lg:justify-center max-lg:items-center max-sm:gap-[72px] max-[1432px]:gap-x-[100px]">
            <Link
              href={"/insights/the-changing-nature-of-seo"}
              onClick={scrollToTop}
              ref={(el) => (NSEO = el)}
              className="flex-col h-[422px] widescreen:h-auto widescreen:w-[25%] max-sm:h-auto max-sm:w-full justify-start items-start gap-9 inline-flex max-md:wfull"
            >
              <Image
                className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full h-[175.55px] widescreen:w-full widescreen:h-auto"
                src={img7}
                alt=" the changing nature of SEO"
              />
              <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full flex-col justify-center items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto max-sm:w-full justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="w-[317px] widescreen:w-full capitalize max-sm:h-auto max-sm:w-full text-black text-2xl widescreen:text-[30px] widestscreen:text-[35px] font-normal font-['Graphik'] leading-[120%] letter-spacing-4 capitalize max-[400px]:w-full">
                    the changing nature of SEO{" "}
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    Search engine optimization (SEO) has been around for over
                    two decades, and it has undergone significant changes....{" "}
                  </div>
                </div>
                <Link
                  onClick={scrollToTop}
                  href="/insights/the-changing-nature-of-seo"
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              href="/insights/no-code-revolution"
              ref={(el) => (NCR = el)}
              onClick={scrollToTop}
              className="flex-col h-[422px] widescreen:h-auto widescreen:w-[25%] max-sm:h-auto max-sm:w-full justify-start items-start gap-9 inline-flex max-md:wfull"
            >
              <Image
                className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full h-[175.55px] widescreen:w-full widescreen:h-auto"
                src={img3}
                alt="No-Code Revolution: 5 Platforms To Keep An"
              />
              <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full flex-col justify-center items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full text-black text-2xl widescreen:text-[30px] widestscreen:text-[35px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize max-[400px]:w-full">
                    No-Code Revolution: 5 Platforms To Keep An....{" "}
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    The No-code revolution is indicative that modern businessmen
                    and women want to keep creative control....
                  </div>
                </div>
                <Link
                  href="/insights/no-code-revolution"
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              href="/insights/shopify-vs-magento"
              ref={(el) => (SVM = el)}
              onClick={scrollToTop}
              className="flex-col h-[422px] widescreen:h-auto widescreen:w-[25%] max-sm:h-auto max-sm:w-full justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <Image
                className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full h-[175.55px] widescreen:w-full widescreen:h-auto"
                src={img2}
                alt="Shopify vs magento"
              />
              <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full flex-col justify-center items-start gap-6 flex">
                <div className="flex-col justify-between max-sm:gap-5 max-sm:h-auto h-[142px] widescreen:h-[180px] items-start  flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full text-black text-2xl widescreen:text-[30px] widestscreen:text-[35px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize max-[400px]:w-full">
                    Shopify vs magento{" "}
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    If you're a business owner of any kind, you've probably
                    heard of Shopify and Magento.Today, Shopify and....
                  </div>
                </div>
                <Link
                  href="/insights/shopify-vs-magento"
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              href="/insights/design-system"
              ref={(el) => (design = el)}
              onClick={scrollToTop}
              className="flex-col h-[422px] widescreen:h-auto widescreen:w-[25%] max-sm:h-auto max-sm:w-full justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <Image
                className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full h-[175.55px] widescreen:w-full widescreen:h-auto"
                src={img}
                alt="design system"
              />

              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="text-black leading-[120%] letter-spacing-4 text-2xl widescreen:text-[30px] widestscreen:text-[35px] font-normal font-['Graphik'] capitalize">
                    design system{" "}
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    A design system is a guide or a standard structure with
                    parameters for design and code along with design
                    components....{" "}
                  </div>
                </div>
                <Link
                  onClick={scrollToTop}
                  href="/insights/design-system"
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              href="/insights/gestalt-psychology"
              ref={(el) => (gp = el)}
              onClick={scrollToTop}
              className="flex-col h-[422px] widescreen:h-auto widescreen:w-[25%] max-sm:h-auto max-sm:w-full justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <Image
                className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full h-[175.55px] widescreen:w-full widescreen:h-auto"
                src={img8}
                alt="Gestalt psychology"
              />

              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="text-black leading-[120%] letter-spacing-4 text-2xl widescreen:text-[30px] widestscreen:text-[35px] font-normal font-['Graphik'] capitalize">
                    Gestalt psychology{" "}
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    The website redesign of the restaurant chain, Chili's, is a
                    great case study in UX design using Gestalt Psychology....{" "}
                  </div>
                </div>
                <Link
                  href="/insights/gestalt-psychology"
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              href="/insights/storytelling-in-marketing"
              onClick={scrollToTop}
              ref={(el) => (STM = el)}
              className="flex-col h-[422px] widescreen:h-auto widescreen:w-[25%] max-sm:h-auto max-sm:w-full justify-start items-start gap-9 inline-flex max-mdw-full"
            >
              <Image
                className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full h-[175.55px] widescreen:w-full widescreen:h-auto"
                src={img5}
                alt="Storytelling in marketing"
              />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full leading-[120%] letter-spacing-4 text-black text-2xl widescreen:text-[30px] widestscreen:text-[35px] font-normal font-['Graphik'] capitalize">
                    Storytelling in marketing{" "}
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    Customers don’t buy products or services, they buy the
                    feeling that the said product or service evokes within
                    them....{" "}
                  </div>
                </div>
                <Link
                  href="/insights/storytelling-in-marketing"
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              href="/insights/minimum-viable-product"
              onClick={scrollToTop}
              ref={(el) => (MVP = el)}
              className="flex-col justify-start max-sm:h-auto max-sm:w-full h-[422px] widescreen:h-auto widescreen:w-[25%] items-start gap-9 inline-flex max-mdw-full"
            >
              <div className="flex-col justify-start max-sm:h-auto max-sm:w-full items-start gap-9 flex">
                <Image
                  className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full h-[175.55px] widescreen:w-full widescreen:h-auto"
                  src={img9}
                  alt="Minimum viable product"
                />
              </div>
              <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full flex-col justify-center items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full leading-[120%] letter-spacing-4 text-black text-2xl widescreen:text-[30px] widestscreen:text-[35px] font-normal font-['Graphik'] capitalize max-[400px]:w-full">
                    Minimum viable product{" "}
                  </div>
                  <div className="flex-col justify-start items-start gap-6 flex">
                    <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal">
                      The bigger idea behind building an MVP is to test your
                      assumptions. That takes us to the next important
                      segment....{" "}
                    </div>
                  </div>
                </div>
                <Link
                  href="/insights/minimum-viable-product"
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              href="/insights/the-art-of-disruptive-branding"
              onClick={scrollToTop}
              ref={(el) => (db = el)}
              className="flex-col justify-start max-sm:h-auto max-sm:w-full h-[422px] widescreen:h-auto widescreen:w-[25%] items-start gap-9 inline-flex max-mdw-full"
            >
              <Image
                className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full h-[175.55px] widescreen:w-full widescreen:h-auto"
                src={img6}
                alt="The art of disruptive branding"
              />

              <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full flex-col justify-center items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full leading-[120%] letter-spacing-4 text-black text-2xl widescreen:text-[30px] widestscreen:text-[35px] font-normal font-['Graphik'] capitalize max-[400px]:w-full">
                    The art of disruptive branding{" "}
                  </div>
                  <div className="flex-col justify-start items-start gap-6 flex">
                    <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal">
                      Branded environments are not just for large corporations
                      with huge budgets. Any business can create a branded....{" "}
                    </div>
                  </div>
                </div>
                <Link
                  href="/insights/the-art-of-disruptive-branding"
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              href="/insights/ux-design-benefits-smes"
              ref={(el) => (UXi = el)}
              onClick={scrollToTop}
              className="flex-col justify-start h-[422px] widescreen:h-auto widescreen:w-[25%] max-sm:h-auto max-sm:w-full items-start gap-9 inline-flex max-mdw-full"
            >
              <Image
                className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full h-[175.55px] widescreen:w-full widescreen:h-auto"
                src={img4}
                alt="UX design Benefits SMEs"
              />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full leading-[120%] letter-spacing-4 text-black text-2xl widescreen:text-[30px] widestscreen:text-[35px] font-normal font-['Graphik'] capitalize">
                    UX design Benefits SMEs!{" "}
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    For SMEs, the initial buzz around their product, or service
                    helps them scale faster while also bringing....{" "}
                  </div>
                </div>
                <Link
                  href="/insights/ux-design-benefits-smes"
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              href="/insights/bing-vs-google"
              ref={(el) => (Bg = el)}
              onClick={scrollToTop}
              className="flex-col justify-start h-[422px] widescreen:h-auto widescreen:w-[25%] max-sm:h-auto max-sm:w-full items-start gap-9 inline-flex max-mdw-full"
            >
              <Image
                className="w-[317px] widescreen:w-full widescreen:h-auto h-[175.55px] max-sm:h-auto max-sm:w-full"
                src={img12}
                alt=" Bing Vs Google"
              />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full leading-[120%] letter-spacing-4 text-black text-2xl widescreen:text-[30px] widestscreen:text-[35px] font-normal font-['Graphik'] capitalize">
                    Bing Vs Google
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    Search engines, there has been a noticeable shift in the
                    market, and Bing is emerging as a strong competitor.....{" "}
                  </div>
                </div>
                <Link
                  ref={(el) => (Bg = el)}
                  href="/insights/bing-vs-google"
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              href="/insights/listening-to-your-customer"
              ref={(el) => (Cust = el)}
              onClick={scrollToTop}
              className="flex-col justify-start h-[422px] widescreen:h-auto widescreen:w-[25%] max-sm:h-auto max-sm:w-full items-start gap-9 inline-flex max-mdw-full"
            >
              <Image
                className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full h-[175.55px] widescreen:w-full widescreen:h-auto"
                src={img15}
                alt="  Listening To Your Customer"
              />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full leading-[120%] letter-spacing-4 text-black text-2xl widescreen:text-[30px] widestscreen:text-[35px] font-normal font-['Graphik'] capitalize">
                    Listening To Your Customer
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    A few years ago, a Fortune 500 company called American
                    Family Insurance (AFI) learned....{" "}
                  </div>
                </div>
                <Link
                  href="/insights/listening-to-your-customer"
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              onClick={scrollToTop}
              href="/insights/react-native-vs-flutter"
              ref={(el) => (RVF = el)}
              className="flex-col justify-start max-sm:h-auto max-sm:w-full h-[422px] widescreen:h-auto widescreen:w-[25%] items-start gap-9 inline-flex max-mdw-full"
            >
              <Image
                className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full h-[175.55px] widescreen:w-full widescreen:h-auto"
                src={img16}
                alt="React Native V/S Flutter"
              />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full leading-[120%] letter-spacing-4 text-black text-2xl widescreen:text-[30px] widestscreen:text-[35px] font-normal font-['Graphik'] capitalize">
                    React Native V/S Flutter
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    Only a decade ago, it was hard to imagine life without
                    mobile apps. They now make our lives easier, with some
                    even....{" "}
                  </div>
                </div>
                <Link
                  onClick={scrollToTop}
                  href="/insights/react-native-vs-flutter"
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              href="/insights/empathy-in-ux"
              ref={(el) => (empathy = el)}
              onClick={scrollToTop}
              className="flex-col justify-start h-[422px] widescreen:h-auto widescreen:w-[25%] max-sm:h-auto max-sm:w-full items-start gap-9 inline-flex max-mdw-full"
            >
              <Image
                className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full h-[175.55px] widescreen:w-full widescreen:h-auto"
                src={img10}
                alt="Empathy In UX"
              />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full leading-[120%] letter-spacing-4 text-black text-2xl widescreen:text-[30px] widestscreen:text-[35px] font-normal font-['Graphik'] capitalize">
                    Empathy In UX
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    Since 1989, Intuit (maker of Quickbooks, Mint, and TurboTax)
                    has run a “Follow me Home ” program that involves{" "}
                  </div>
                </div>
                <Link
                  href="/insights/empathy-in-ux"
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              ref={(el) => (aii = el)}
              href="/insights/ai-powered-design-tools"
              onClick={scrollToTop}
              className="flex-col justify-start max-sm:h-auto max-sm:w-full h-[422px] widescreen:h-auto widescreen:w-[25%] items-start gap-9 inline-flex max-mdw-full"
            >
              <Image
                className="w-[317px] widescreen:w-full widescreen:h-auto max-sm:h-auto max-sm:w-full h-[175.55px]"
                src={img17}
                alt="AI-Powered Design Tools"
              />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full leading-[120%] letter-spacing-4 text-black text-2xl widescreen:text-[30px] widestscreen:text-[35px] font-normal font-['Graphik'] capitalize">
                    AI-Powered Design Tools
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    The impact of AI on design is an ongoing topic of
                    discussion, with both potential benefits and ethical.....{" "}
                  </div>
                </div>
                <Link
                  href="/insights/ai-powered-design-tools"
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              href="/insights/discovery-workshop"
              ref={(el) => (dw = el)}
              onClick={scrollToTop}
              className="flex-col justify-start max-sm:h-auto max-sm:w-full h-[422px] widescreen:h-auto widescreen:w-[25%] items-start gap-9 inline-flex max-mdw-full"
            >
              <Image
                className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full h-[175.55px] widescreen:w-full widescreen:h-auto"
                src={img13}
                alt="Discovery Workshop"
              />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full leading-[120%] letter-spacing-4 text-black text-2xl widescreen:text-[30px] widestscreen:text-[35px] font-normal font-['Graphik'] capitalize">
                    Discovery Workshop
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    A noted health insurance company recognized the need to
                    improve its member portal to provide.....{" "}
                  </div>
                </div>
                <Link
                  href="/insights/discovery-workshop"
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              href="/insights/digital-marketing-trends-in-2023"
              ref={(el) => (digitalmarketing = el)}
              onClick={scrollToTop}
              className="flex-col justify-start max-sm:h-auto max-sm:w-full h-[422px] widescreen:h-auto widescreen:w-[25%] items-start gap-9 inline-flex max-mdw-full"
            >
              <Image
                className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full h-[175.55px] widescreen:w-full widescreen:h-auto"
                src={img11}
                alt="Digital Marketing Trends 2023"
              />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="w-[317px] widescreen:w-full leading-[120%] max-sm:h-auto max-sm:w-full letter-spacing-4 text-black text-2xl widescreen:text-[30px] widestscreen:text-[35px] font-normal font-['Graphik'] capitalize">
                    Digital Marketing Trends 2023
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    An interesting study published by Think With Google
                    described how Domino's and Diageo....{" "}
                  </div>
                </div>
                <Link
                  href="/insights/digital-marketing-trends-in-2023"
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
            <Link
              href="/insights/the-secret-power-of-motion"
              onClick={scrollToTop}
              className="flex-col justify-start max-sm:h-auto max-sm:w-full h-[422px] widescreen:h-auto widescreen:w-[25%] items-start gap-9 inline-flex max-mdw-full"
            >
              <Image
                className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full h-[175.55px] widescreen:w-full widescreen:h-auto"
                src={imgmotion}
                alt="The Secret Power of Motion"
              />
              <div className="flex-col justify-center items-start gap-6 flex">
                <div className="flex-col h-[142px] widescreen:h-[180px] max-sm:gap-5 max-sm:h-auto justify-between items-start flex max-lg:h-[146px] max-lg:justify-between">
                  <div className="w-[317px] widescreen:w-full leading-[120%] max-sm:h-auto max-sm:w-full letter-spacing-4 text-black text-2xl widescreen:text-[30px] widestscreen:text-[35px] font-normal font-['Graphik'] capitalize">
                    The Secret Power of Motion
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:h-auto max-sm:w-full opacity-80 text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] leading-normal max-[500px]:w-full">
                    We all know that good design makes a product easier and more
                    enjoyable to use. But what if...{" "}
                  </div>
                </div>
                <Link
                  href="/insights/the-secret-power-of-motion"
                  onClick={scrollToTop}
                  className="px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
                >
                  <div className="text-black text-base widescreen:text-[20px] widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allblogs;
