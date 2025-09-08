"use client";
import React from "react";
import Image from "next/image";
import img from "../../blogassets/Blog Inner page Banner03.jpg";
import arrow from "../../blogassets/arrow.svg";
import Link from "next/link";
import img1 from "../../blogassets/Blogs Animation Thumbnail14.jpg";
import img2 from "../../blogassets/Frame 1000001793.png";
import img3 from "../../blogassets/Frame 4.svg";
import { useEffect, useRef, useState } from "react";
import { Linear, gsap } from "gsap";
import Explore from "../../../production/Explore";
// import Head from "next/head";
import axios from "axios";
import Footer from "../../../../Footer/Footer";
import muheeb from "../../blogassets/muheeb.jpeg";
import Head from "next/head";

const Gestalt = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  const render = useRef(null);
  const [lastRow, setLastRow] = useState(null);
  const [para2, setPara2] = useState(null);
  const [para1, setPara1] = useState(null);
  const [para3, setPara3] = useState(null);

  useEffect(() => {
    const lastData = [
      {
        header1: "How Can Gestalt Psychology Change Your UX Design Game?",
        para1:
          "The website redesign of the restaurant chain, Chili's, is a great case study in UX design using Gestalt Psychology. The company wanted to create a more modern and user-friendly website that would make it easier for customers to find information about their menu, locations, and promotions.\n\nThe redesign incorporated several Gestalt psychology principles, including proximity, similarity, and closure. The menu items were grouped together based on their category, such as appetizers, entrees, and desserts, using the principle of proximity. The use of consistent fonts, colors, and layouts throughout the website provided a sense of similarity, making it easier for users to recognize and remember important information. The use of visual cues, such as icons and images, helped to provide closure and guide users through their journey on the website.\n\nIn addition, the website's homepage featured a large image of Chili's famous Baby Back Ribs, which utilized the principle of figure-ground relationship by making the main content stand out against the background. The design also incorporated the principle of continuity by using a horizontal scroll to display featured promotions, allowing users to easily navigate through the content.\n\nThe result of the website redesign and development was a more visually appealing and user-friendly website that made it easier for customers to find information and navigate through the site. With the incorporation of Gestalt psychology in website redesign, Chili’s experienced an increase in online orders from 25% to 55%, apart from an increase in customer engagement. wood.",
        date: "09/10/2023",
        writer: "Muheeb Syed Saif",
        title1: "Now Reading",
        cont1: "Gestalt Psychology",
        title2: "Also Read",
        cont2: "React vs Flutter",
        cont3: "AI Powered Design",
        back: "Go Back",
        header2: "What Is Gestalt Psychology?",
        para2:
          'As UX designers at Codelinear, our primary goal is to create a user-friendly and intuitive experience for the users of our clients. One way to achieve this goal is by using Gestalt psychology principles in UX design.\n\n\n1. Figure-Ground Relationship The Gestalt principle of figure-ground relationship explains how our brain separates the visual elements in a design into foreground and background. This principle in UX design helps the user to identify and differentiate between the main content and the surrounding elements. As a UX designer, you can use this principle to create a clear visual hierarchy on your webpage or application, making it easier for users to navigate and find the information they need.\n\n2. Proximity : Proximity explains visual elements that are close to each other as related. In UX design, this principle can help you to group related elements together, making it easier for users to understand their relationship. For instance, you can group related options or actions together, such as placing all the editing tools close to each other in a photo editing app. In the case of Chilis, the menu items were regrouped based on category.\n\n3. Similarity : The principle of similarity, as the name suggests, is about perceiving elements that share similar attributes, such as color, shape, or size, as related. As a UX designer, you can use this principle to create consistency in your design by using similar colors, shapes, or sizes for related elements. For instance, you can use the same color for all the buttons that have the same function, such as the "Add to Cart" buttons in an e-commerce app.\n\n4. Closure: The closure principle explains how we see visual elements that are incomplete as complete. This principle helps you to simplify complex information by using visual cues that suggest completion. For instance, you can use a progress bar to show the user how much of a task is completed, giving them a sense of closure and a clear indication of how much work is left.\n\n5. Continuity The continuity principle describes how users perceive factors that are arranged in a continuous line or curve as related. This principle is helpful in creating a smooth and effortless user experience by using visual cues that guide the user\'s eye from one element to another. For instance, Chili’s used a horizontal line to separate different sections of a webpage or an application, making it easier for users to navigate.\n\n6. Symmetry The symmetry principle is about how we perceive symmetrical elements as related. This principle helps designers to create a sense of balance and harmony in the design by using symmetrical shapes and layouts. For instance, you can use a symmetrical layout for your website or application, creating a sense of order and simplicity that is pleasing to the eye.\n\n\n',
        header3: "The Take-Away",
        para3:
          "Gestalt psychology principles can inform your UX design choices by providing you with a deeper understanding of how users perceive visual elements as a whole. By using these principles in your design choices, you can create a user-friendly and intuitive experience for your users, making it easier for them to navigate and find the information they need. As a UX designer, it is important to keep these principles in mind when creating your designs, as they can have a significant impact on the user experience.\n",
      },
    ];
    const lastrow = lastData[0];
    setLastRow(lastrow);
    setPara2(lastrow.para2);
    setPara1(lastrow.para1);
    setPara3(lastrow.para3);
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
  const textareaRef = useRef(null);
  const textareaRef1 = useRef(null);
  const textareaRef3 = useRef(null);

  const autoAdjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
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
  };
  useEffect(() => {
    autoAdjustHeight();
  }, [para1]);
  return (
    <>
      <Head>
        <title>Insights - Gestalt Psychology</title>
        <meta
          name="description"
          content="Explore the principles of Gestalt psychology and their applications in design, particularly in user interface (UI) and user experience (UX) design. Learn how Gestalt principles such as proximity, similarity, closure, and continuity influence visual perception and enhance design effectiveness. Stay informed with insights from Codelinear."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/insights/gestalt-psychology"
        />
        <meta
          name="keywords"
          content="Gestalt psychology, Gestalt principles, UI design, UX design, visual perception, design principles, proximity, similarity, closure, continuity"
        />
      </Head>
      <div className="innerhero">
        <Link
          href="/insights"
          onClick={scrollToTop}
          className="px-4 py-2 hidden max-sm:flex left-[80px] top-[90px] absolute rounded-[54px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-lg:left-[20px]"
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
              alt="How Can Gestalt Psychology Change Your UX Design Game?"
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
              <div className="w-[232px] h-[65px] left-[81px] top-[242px] absolute border border-black border-opacity-10 max-lg:hidden">
                <div className="w-[68px] h-[65px] left-0 top-[-1px] absolute bg-black bg-opacity-20">
                  <Image className="w-[68px] h-[65px]" src={img1} alt="" />
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
                href="/insights/react-native-vs-flutter"
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
                        {lastRow && <>{lastRow.cont2}</>}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                onClick={scrollToTop}
                href="/insights/ai-powered-design-tools"
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
              <div className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                <textarea
                  type="text"
                  value={para1}
                  disabled
                  ref={textareaRef1}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="w-full flex-col max-md:w-full justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header2}</>}
                </div>
                <textarea
                  type="text"
                  value={para2}
                  disabled
                  ref={textareaRef}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>

              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="flex-col widescreen:w-full max-md:w-full justify-start items-start gap-2 flex">
                  <div className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    {lastRow && <>{lastRow.header3}</>}
                  </div>
                  <textarea
                    type="text"
                    value={para3}
                    disabled
                    ref={textareaRef3}
                    className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
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

export default Gestalt;
