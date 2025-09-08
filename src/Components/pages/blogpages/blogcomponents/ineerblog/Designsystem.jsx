"use client";
import React from "react";
import Image from "next/image";
import img from "../../blogassets/Blog Inner page Banner12.jpg";
import arrow from "../../blogassets/arrow.svg";
import Link from "next/link";
import img1 from "../../blogassets/Blogs Animation Thumbnail06.jpg";
import img2 from "../../blogassets/Blogs Animation Thumbnail03.jpg";
import img3 from "../../blogassets/Blogs Animation Thumbnail04.jpg";
import Explore from "../../../production/Explore";
// import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Linear, gsap } from "gsap";
import axios from "axios";
import Footer from "../../../../Footer/Footer";
import muheeb from "../../blogassets/muheeb.jpeg";
import Head from "next/head";

const Designsystem = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  const render = useRef(null);
  const [lastRow, setLastRow] = useState(null);
  const [image2, setImage2] = useState(null);
  const [para2, setPara2] = useState(null);
  const [para1, setPara1] = useState(null);
  const [para3, setPara3] = useState(null);
  const [para4, setPara4] = useState(null);
  const [para5, setPara5] = useState(null);
  const [para6, setPara6] = useState(null);
  const [para7, setPara7] = useState(null);
  const [para8, setPara8] = useState(null);
  const [para9, setPara9] = useState(null);
  const [para10, setPara10] = useState(null);
  const [para11, setPara11] = useState(null);

  useEffect(() => {
    const lastData = [
      {
        header1: "How To Build A Design System That Will Last Beyond 2023?",
        para1:
          "Late Steve Jobs loved his childhood home for its simple design. He lived in working-class subdivision homes between San Francisco and San Jose. These were the postwar suburban homes with floor-to-ceiling glass walls, exposed post-and-beam construction with concrete slab floors and lots of sliding glass doors. These urban homes were developed by Joseph Eichler and his imitators in the 1950s.\n\nIn Jobs’ words, “His (Eichler’s) houses were smart and cheap and good. They brought clean design and simple taste to lower-income people.” It was this simplicity that formed the basis of Jobs’ passion for making sharply designed products for the mass market. “It was the original vision for Apple. That’s what we tried to do with the first Mac. That’s what we did with the iPod,” Jobs stated later.\n\nJobs’ vision for Apple did not just reflect in its products, but also in its design philosophy and eventually in its design system. The legacy of Steve Jobs would have never carried forward if it were not translated in an organized design system.",
        date: "13/03/2023",
        writer: "Muheeb Syed Saif",
        back: "Go Back",
        title1: "Now Reading",
        cont1: "Design System",
        title2: "Also Read",
        cont2: "Gestalt Psychology",
        cont3: "Listening to Your Customer",
        header2: "What Is A Design System?",
        para2:
          "A design system is a guide or a standard structure with parameters for design and code along with design components that will unify both. For instance, Apple built Human Interface Guidelines - a design system - that has pattern libraries, downloadable templates, the iOS UI Kit, style guides, and visual guidelines. The system has been built using Steve Jobs' design principles. Its system lists important factors such as -\n- Visual design\n- Visual index\n- App architecture\n- System capabilities\n- Themes, menus, buttons\n- Icons and images\n- Fields and labels\n- App architecture- Window and view\n- Indicators\n- Selectors and extensions\n",
        header3: "What To Include In A Design System?",
        subhead1: "1. Design Principles",
        subpara1:
          "The rules and values that drive your design team are your design principles. Just as we saw in the example of Quartz, you can create some non-negotiable ground rules that the team needs to keep in mind while designing any element of your product or service.\n",
        subhead2: "2. A design pattern library",
        subpara2:
          "Patterns are standard structures of repeated design elements that are used repeatedly in specific work situations. Your design system needs a design pattern library as a central repository of commonly used patterns.\n",
        subhead3: "3. A UI kit",
        subpara3:
          "A UI kit is a component library with a collection of UI-focused elements such as widgets, buttons, etc. This kit helps your teams create UI-friendly designs consistently, and quickly.\n",
        subhead4: "4. Process guidelines",
        subpara4:
          "These guidelines are interpretations of design principles.\n",
        header4: "A Step-By-Step Process To Build A Design System",
        subhead5: "1. Audit the existing product/offering",
        subpara5:
          "What does your product or service stand for? How does it help people? List down the features of your product, service, or application and build a catalog of UI components, visual elements, and visual language. This will become the foundation of your design system.\n",
        subhead6: "2. Create and define your design language",
        subpara6:
          "How will you bring your design principles to life? What do you want your customers to feel? Excited? Curious? How does this feeling align with your branding language? Do you want your brand to come across as premium, friendly, a problem-solver, or a go-getter? Create guidelines about the way you want your customers to feel. Now spell out this feeling in words, and this will be your design language. Based on this language, you can create guides for color palettes, iconography, imagery, and typography.\n\n",
        subhead7: "3. Apply your design pattern library",
        subpara7:
          "Create clear processes to execute the design pattern library that you have created. Remember that there are two main types of patterns - functional and perceptual. Functional patterns will define the day-to-day usage of your product or app, while perceptual patterns will create a visual imprint through colors, typography, spacing, etc.\n",
        subhead8: "4. Document your design system",
        subpara8:
          "You need to draw out a clear plan about when and how to use the design principles and patterns for the teams to follow in future. Document shared practices, use cases and case studies to serve as guidelines and references. This could include things like:\n- Ways of contributing to the system\n- Reporting an issue\n- Maintenance challenges\n- Efficiency parameters\n\n\n\n\n\n",
        header5: "Get Inspired",
        para5:
          "Check out design systems of some of these noted companies across industry verticals. You may get some real-life examples of the elements that would be needed for your design system.\n",
      },
    ];
    const lastrow = lastData[0];
    setLastRow(lastrow);
    setPara2(lastrow.para2);
    setPara1(lastrow.para1);
    setPara3(lastrow.subpara1);
    setPara4(lastrow.subpara2);
    setPara5(lastrow.subpara3);
    setPara6(lastrow.subpara4);
    setPara7(lastrow.subpara5);
    setPara8(lastrow.subpara6);
    setPara9(lastrow.subpara7);
    setPara10(lastrow.subpara8);
    setPara11(lastrow.para5);
  }, []);
  const marquee1 = useRef(null);
  const marquee2 = useRef(null);
  const marquee3 = useRef(null);

  useEffect(() => {
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        marquee1.current,
        4,
        { x: 0 },
        { x: -406, ease: Linear.easeNone }
      );
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        marquee2.current,
        4,
        { x: 0 },
        { x: -406, ease: Linear.easeNone }
      );
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        marquee3.current,
        4,
        { x: 0 },
        { x: -406, ease: Linear.easeNone }
      );
  });
  const textareaRef2 = useRef(null);
  const textareaRef1 = useRef(null);
  const textareaRef3 = useRef(null);
  const textareaRef4 = useRef(null);
  const textareaRef5 = useRef(null);
  const textareaRef6 = useRef(null);
  const textareaRef7 = useRef(null);
  const textareaRef8 = useRef(null);
  const textareaRef9 = useRef(null);
  const textareaRef10 = useRef(null);
  const textareaRef11 = useRef(null);

  const autoAdjustHeight = () => {
    if (textareaRef2.current) {
      textareaRef2.current.style.height = "auto";
      textareaRef2.current.style.height =
        textareaRef2.current.scrollHeight + "px";
    }
    if (textareaRef1.current) {
      textareaRef1.current.style.height = "auto";
      textareaRef1.current.style.height =
        textareaRef1.current.scrollHeight + "px";
    }
    if (textareaRef3.current) {
      textareaRef3.current.style.height = "auto";
      textareaRef3.current.style.height =
        textareaRef3.current.scrollHeight + "px";
    }
    if (textareaRef4.current) {
      textareaRef4.current.style.height = "auto";
      textareaRef4.current.style.height =
        textareaRef4.current.scrollHeight + "px";
    }
    if (textareaRef5.current) {
      textareaRef5.current.style.height = "auto";
      textareaRef5.current.style.height =
        textareaRef5.current.scrollHeight + "px";
    }
    if (textareaRef6.current) {
      textareaRef6.current.style.height = "auto";
      textareaRef6.current.style.height =
        textareaRef6.current.scrollHeight + "px";
    }
    if (textareaRef7.current) {
      textareaRef7.current.style.height = "auto";
      textareaRef7.current.style.height =
        textareaRef7.current.scrollHeight + "px";
    }
    if (textareaRef8.current) {
      textareaRef8.current.style.height = "auto";
      textareaRef8.current.style.height =
        textareaRef8.current.scrollHeight + "px";
    }
    if (textareaRef9.current) {
      textareaRef9.current.style.height = "auto";
      textareaRef9.current.style.height =
        textareaRef9.current.scrollHeight + "px";
    }
    if (textareaRef10.current) {
      textareaRef10.current.style.height = "auto";
      textareaRef10.current.style.height =
        textareaRef10.current.scrollHeight + "px";
    }
    if (textareaRef11.current) {
      textareaRef11.current.style.height = "auto";
      textareaRef11.current.style.height =
        textareaRef11.current.scrollHeight + "px";
    }
  };
  useEffect(() => {
    autoAdjustHeight();
  }, [para2]);
  return (
    <>
      {" "}
      <Head>
        <title>Insights - Design System</title>
        <meta
          name="description"
          content="Explore the concept of design systems and their importance in creating consistent and scalable digital experiences. Learn about the key components, benefits, and best practices for implementing a design system. Stay informed with insights from Codelinear."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/insights/design-system"
        />
        <meta
          name="keywords"
          content="design systems, UI design, UX design, design consistency, design scalability, component-based design, design best practices"
        />
      </Head>
      <div className="innerhero">
        <Link
          href="/insights"
          onClick={scrollToTop}
          className="px-4 py-2 hidden max-sm:flex left-[80px] top-[90px] absolute rounded-[54px] border border-black justify-center items-center gap-2  hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-lg:left-[20px]"
        >
          <Link
            href="/insights"
            onClick={scrollToTop}
            className="w-[31px] h-[21px] relative "
          >
            <Image
              className="origin-top-left rotate45 w-[21.83px] h-[21.83px] left-[1.58px] top-5.20px] absolute"
              src={arrow}
              alt="Back Arrow"
            />
          </Link>
          <div className="opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
            {lastRow && <>{lastRow.back}</>}
          </div>
        </Link>
        <div className="w-full h-full pl-20 pr-[407px] pt-[233.78px] pb-[65.22px] bg-white justify-start items-center inline-flex max-lg:p-10 max-sm:p-0 max-sm:px-[20px] max-sm:mt-[90px]">
          <div className="w-[953px] letter-spacing-2 text-black text-[66px] widescreen:text-[76px] widestscreen:text-[90px] widescreen:w-[80%] font-normal font-['Graphik'] leading-[108%] max-lg:w-full max-sm:text-[50px]">
            {lastRow && <>{lastRow.header1}</>}
          </div>
        </div>
        <div className="text-20  pl-20 max-lg:p-10 max-sm:p-0 max-sm:px-[20px] flex items-center mt-[40px]">
          <Image
            className="w-[60px] h-[60px] object-cover rounded-[100%] relative bg-black bg-opacity-20 flex-col justify-start items-start flex"
            src={muheeb}
            alt="CEO muheeb"
          />
          <h1 className="ml-[20px] widescreen:text-[20px] widescreen:text-[24px]">
            {lastRow && <>{lastRow.writer}</>}
          </h1>
          <p className="ml-[40px] widescreen:text-[20px] widescreen:text-[24px]">
            {lastRow && <>{lastRow.date}</>}
          </p>
        </div>
        <div className="hero-img">
          <div className="w-full h-full px-20 py-[36.50px] bg-white justify-center items-center inline-flex max-md:px-0">
            <Image
              className="w-full h-full relative bg-black bg-opacity-20 flex-col justify-start items-start flex"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
      <div ref={render} className="blog-content">
        <div className="w-full h-full relative bg-white max-xl:h-full">
          <div className="flex gap-40 max-xl:gap-10 max-xl:flex-wrap max-lg:justify-center">
            <div className="h-[600px] sticky top-10 w-[300px] max-lg:relative max-lg:w-full max-sm:absolute max-sm:top-0 max-lg:h-full">
              <Link
                href="/insights"
                onClick={scrollToTop}
                className="px-4 py-2 widescreen:px-8 max-sm:hidden left-[80px] top-[90px] absolute rounded-[54px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-lg:top-[0px] max-lg:left-[20px]"
              >
                <Link
                  href="/insights"
                  onClick={scrollToTop}
                  className="w-[31px] h-[21px] relative "
                >
                  <Image
                    className="origin-top-left rotate45 w-[21.83px] h-[21.83px] left-[1.58px] top-5.20px] absolute"
                    src={arrow}
                    alt="Back Arrow"
                  />
                </Link>
                <div className="opacity-80 text-black widescreen:text-[20px] widescreen:text-[24px] text-base font-normal font-['Graphik'] leading-normal">
                  {lastRow && <>{lastRow.back}</>}
                </div>
              </Link>

              <div className="left-[80px] top-[201.39px] widescreen:text-[24px] widescreen:text-[24px] absolute text-black text-2xl font-normal font-['Graphik'] capitalize max-lg:hidden">
                {lastRow && <>{lastRow.title1}</>}
              </div>
              <div className="left-[80px] top-[352.39px] widescreen:text-[24px] widescreen:text-[24px] absolute text-black text-2xl font-normal font-['Graphik'] capitalize max-lg:hidden">
                {lastRow && <>{lastRow.title2}</>}
              </div>
              <div className="w-[232px] h-[65px] widescreen:w-[300px] left-[81px] top-[242px] absolute border border-black border-opacity-10 max-lg:hidden">
                <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <Image
                    className="w-[68px] h-[65px] object-cover"
                    src={img1}
                    alt="How To Build A Design System That Will Last Beyond 2023"
                  />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px] widescreen:h-[40px] widestscreen:h-[44px] text-black text-base font-normal font-['Graphik'] leading-normal">
                    <div className="overflow-hidden widescreen:w-[230px] w-[163px]">
                      <p
                        ref={marquee1}
                        className="w-[214px] widescreen:text-[20px] widescreen:text-[24px] ml-[163px] whitespace-nowrap"
                      >
                        {lastRow && <>{lastRow.cont1}</>}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                onClick={scrollToTop}
                href="/insights/gestalt-psychology"
                className="w-[232px] h-[65px] widescreen:w-[300px] left-[81px] top-[393px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <Image className="w-[68px] h-[65px]" src={img2} alt="" />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px] widescreen:h-[40px] widestscreen:h-[44px] text-black text-base font-normal font-['Graphik'] leading-normal">
                    <div className="overflow-hidden w-[163px] widescreen:w-[230px]">
                      <p
                        ref={marquee2}
                        className="w-[214px] widescreen:text-[20px] widescreen:text-[24px] ml-[170px] whitespace-nowrap"
                      >
                        {" "}
                        {lastRow && <>{lastRow.cont2}</>}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                onClick={scrollToTop}
                href="/insights/listening-to-your-customer"
                className="w-[232px] h-[65px] left-[81px] widescreen:w-[300px] top-[471px] absolute border border-black border-opacity-10 max-lg:hidden"
              >
                <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                  <Image className="w-[68px] h-[65px]" src={img3} alt="" />
                </div>
                <div className="flex h-full items-center left-[67.31px] absolute justify-center items-center inline-flex">
                  <div className="h-[24px] widescreen:h-[40px] widestscreen:h-[44px] text-black text-base font-normal font-['Graphik'] leading-normal">
                    <div className="overflow-hidden widescreen:w-[230px] w-[163px]">
                      <p
                        ref={marquee3}
                        className="w-[214px] ml-[170px] widescreen:text-[20px] widescreen:text-[24px] whitespace-nowrap"
                      >
                        {lastRow && <>{lastRow.cont3}</>}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="left-[405px] h-full max-md:w-full widescreen:w-[70%] mt-[81.39px]  flex-col max-md:gap-[20px] justify-start items-start gap-14 inline-flex max-md:px-10 max-sm:px-[20px] max-sm:mt-[80px]">
              <textarea
                type="text"
                value={para1}
                disabled
                ref={textareaRef1}
                className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
              ></textarea>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header2}</>}
                </div>
                <textarea
                  type="text"
                  value={para2}
                  disabled
                  ref={textareaRef2}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.header3}</>}
                </div>
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.subhead1}</>}
                </div>
                <textarea
                  type="text"
                  value={para3}
                  disabled
                  ref={textareaRef3}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.subhead2}</>}
                </div>
                <textarea
                  type="text"
                  value={para4}
                  disabled
                  ref={textareaRef4}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>

              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.subhead3}</>}
                </div>
                <textarea
                  type="text"
                  value={para5}
                  disabled
                  ref={textareaRef5}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>

              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.subhead4}</>}
                </div>
                <textarea
                  type="text"
                  value={para6}
                  disabled
                  ref={textareaRef6}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>

              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.header4}</>}
                </div>
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.subhead5}</>}
                </div>
                <textarea
                  type="text"
                  value={para7}
                  disabled
                  ref={textareaRef7}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.subhead6}</>}
                </div>
                <textarea
                  type="text"
                  value={para8}
                  disabled
                  ref={textareaRef8}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.subhead7}</>}
                </div>
                <textarea
                  type="text"
                  value={para9}
                  disabled
                  ref={textareaRef9}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.subhead8}</>}
                </div>
                <textarea
                  type="text"
                  value={para10}
                  disabled
                  ref={textareaRef10}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>

              <br />
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="flex-col widescreen:w-full max-md:w-full justify-start items-start gap-2 flex">
                  <div className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[32px] widescreen:text-[40px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    {lastRow && <>{lastRow.header5}</>}
                  </div>
                  <textarea
                    type="text"
                    value={para11}
                    disabled
                    ref={textareaRef11}
                    className="w-[630px] widescreen:mt-[20px] max-md:w-full widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <Explore />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Designsystem;
