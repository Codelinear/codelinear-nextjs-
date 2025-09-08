"use client";
import React from "react";
import Image from "next/image";
import img from "../../blogassets/Blog Inner page Banner07.jpg";
import arrow from "../../blogassets/arrow.svg";
import Link from "next/link";
import img1 from "../../blogassets/Blogs Animation Thumbnail07.jpg";
import { useEffect, useRef, useState } from "react";
import { Linear, gsap } from "gsap";
import axios from "axios";
import Footer from "../../../../Footer/Footer";
import img2 from "../../blogassets/Blogs Animation Thumbnail11.jpg";
import img3 from "../../blogassets/Blogs Animation Thumbnail01.jpg";
import Explore from "../../../production/Explore";
import muheeb from "../../blogassets/muheeb.jpeg";
import Head from "next/head";

const Branding = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  const render = useRef(null);
  const [lastRow, setLastRow] = useState(null);
  const [para2, setPara2] = useState(null);
  const [para1, setPara1] = useState(null);
  const [para3, setPara3] = useState(null);
  const [para4, setPara4] = useState(null);

  useEffect(() => {
    const lastData = [
      {
        header1: "Branded Environments: The Art Of Disruptive Branding",
        para1:
          "Ever walked into Nike's flagship store in New York City? The store is designed to be a \"shrine\" to the brand's values and products, with interactive displays, cutting-edge technology, and immersive experiences. One of the store's most iconic features is the \"Sneaker Bar,\" where customers can customize their shoes and see them come to life on a large video screen. The store's design and features create a powerful emotional connection with consumers, making them feel part of the Nike brand.\n\nIf you are thinking, how's that walk-in store relevant in a post-pandemic world where virtual experiences are more conveniently available, then consider why a conglomerate like Apple takes the pains of opening Apple Stores around the world. Apple has revolutionized the retail experience by creating spaces that are minimalist, elegant, and focused on the user experience design. The stores feature interactive displays, knowledgeable staff, and an open layout that encourages customers to explore and engage with the brand's products. By creating a space that is both functional and emotionally engaging, Apple has disrupted the traditional retail model and established itself as a leader in the industry. This makes Apple all the more relevant as it has married the virtual and the real effortlessly in its experience stores, that are a form of what’s termed as ‘branded environments’, apart from replicating such environments on its website.\n\n",
        date: "08/01/2024",
        writer: "Muheeb Syed Saif",
        back: "Go Back",
        title1: "Now Reading",
        cont1: "Disruptive Branding",
        title2: "Also Read",
        cont2: "Minimum Viable Product",
        cont3: "UX Design Benefits",
        header2: "What Are Branded Environments?",
        para2:
          "Branded environments are physical spaces that are designed to immerse consumers in a brand's story, values, and personality. These spaces can range from retail stores and showrooms to corporate offices, and event spaces. The goal is to create an environment that reinforces a brand's identity and creates an emotional connection with consumers. This may be created via physical stores or online experiences such as a website or a mobile application.\n",
        header3: "The Art Of Disruptive Branding",
        para3:
          "\nBranded environments are not just for large corporations with huge budgets. Any business can create a branded environment that engages and captivates consumers. Here are a few key takeaways for businesses looking to implement a branded environment strategy:\n\n1. Know your brand : Before you can create a branded environment, you need to have a clear understanding of your brand's values, personality, and identity. This will help you design a space like the Nike flagship store that reinforces your brand and creates an emotional connection with consumers.\n\n2. Think outside the box : Branded environments should be unexpected and memorable. Don't be afraid to push the boundaries of traditional branding and create experiences that are disruptive and emotionally impactful.\n\n3. Engage all the senses : Branded environments should engage all the senses, not just sight. Consider how sound, touch, smell, and taste can be used to reinforce your brand's identity and create a memorable experience.\n\n4. Be authentic : Branded environments should be authentic and true to your brand's values and personality. Don't create an experience that is out of sync with your brand, as this can create confusion and undermine the emotional connection with consumers.Even virtually, Apple has managed to create an aura that just by engaging with the brand online, its consumers find the experience fulfilling.\n\n5. Measure your success : Branded environments should be designed with specific goals and metrics in mind. Be sure to measure the success of your branded environment strategy and make adjustments as needed.\n\n\n",
        header4: "Final Thoughts",
        para4:
          "A branded environment is a powerful tool for disruptive branding that can help companies stand out from the competition and create emotional connections with consumers. An integral part of creating such environments is through UX design, both physically and virtually. If you are looking for an agency that can create immersive branded environments apart from website or mobile application development, do give us a call.\n",
      },
    ];
    const lastrow = lastData[0];

    setLastRow(lastrow);
    setPara2(lastrow.para2);
    setPara1(lastrow.para1);
    setPara3(lastrow.para3);
    setPara4(lastrow.para4);
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
  };
  useEffect(() => {
    autoAdjustHeight();
  }, [para2]);
  return (
    <>
      {" "}
      <Head>
        <title>Insights - The Art Of Disruptive Branding</title>
        <meta
          name="description"
          content="Learn about the art of disruptive branding and how it can help businesses stand out in competitive markets. Explore strategies, case studies, and insights on creating memorable and impactful brands. Stay ahead with Codelinear's expert perspectives."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/insights/the-art-of-disruptive-branding"
        />
        <meta
          name="keywords"
          content="disruptive branding, brand strategy, branding, brand identity, brand innovation, brand differentiation, brand positioning"
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
          <div className="w-[953px]widescreen:text-[76px] widestscreen:text-[90px] widescreen:w-[80%] letter-spacing-2 text-black text-[66px] font-normal font-['Graphik'] leading-[108%] max-lg:w-full max-sm:text-[50px]">
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
                href="/insights/minimum-viable-product"
                className="w-[232px] widescreen:w-[300px] h-[65px] left-[81px] top-[393px] absolute border border-black border-opacity-10 max-lg:hidden"
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
                href="/insights/ux-design-benefits-smes"
                className="w-[232px] widescreen:w-[300px] h-[65px] left-[81px] top-[471px] absolute border border-black border-opacity-10 max-lg:hidden"
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
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] letter-spacing-3 font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
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
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] letter-spacing-3 font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header3}</>}
                </div>
                <textarea
                  type="text"
                  value={para3}
                  disabled
                  ref={textareaRef3}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>

              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <div className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                  {lastRow && <>{lastRow.header4}</>}
                </div>
                <textarea
                  type="text"
                  value={para4}
                  disabled
                  ref={textareaRef4}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
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

export default Branding;
