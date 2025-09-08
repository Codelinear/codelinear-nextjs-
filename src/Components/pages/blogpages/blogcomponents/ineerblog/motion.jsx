"use client";
import React from "react";
import Image from "next/image";
import img from "../../blogassets/Blog Inner page Banner08.jpg";
import arrow from "../../blogassets/arrow.svg";
import Link from "next/link";
import img1 from "../../blogassets//Blogs Animation Thumbnail08.jpg";
import img2 from "../../blogassets/Blogs Animation Thumbnail09.jpg";
import { useEffect, useRef, useState } from "react";
import { Linear, gsap } from "gsap";
import img3 from "../../blogassets/Blogs Animation Thumbnail02.jpg";
import Explore from "../../../production/Explore";
import Head from "next/head";
import axios from "axios";
import Footer from "../../../../Footer/Footer";
import rohith from "../../blogassets/rohith.jpeg";
import motion from "../../blogassets/Slide 16_9 - 1 (1).png";
import { last } from "lodash";

const Workshop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  const render = useRef(null);
  const [lastRow, setLastRow] = useState(null);
  useEffect(() => {
    const lastData = [
      {
        header1: "The Secret Power of Motion: Why Animation Enhances UX",
        para1:
          "We all know that good design makes a product easier and more enjoyable to use. But what if I told you there's a secret weapon lurking within the realm of UX design: motion? \n\nYes, animation isn't just about bells and whistles; it's a powerful tool that taps into our psychology to create a more intuitive and engaging user experience.\n",
        header2: "Hooked on Movement",
        para2:
          "Think about it: from the moment we're born, we're wired to notice movement. It's a primal instinct, a leftover survival tactic that helped our ancestors identify potential threats or opportunities. This fascination with motion translates to the digital world as well.  Studies show that well-crafted motion graphics can grab our attention and hold it hostage (in a good way!). This is especially crucial in today's information-overload era, where users are bombarded with stimuli. By using animation strategically, UX designers can ensure their message cuts through the noise and resonates with users.\n",
        header3: "Beyond Visual Candy",
        para3:
          "Motion in UX goes way beyond creating a flashy interface. Here's how animation can truly better the user experience:\n",
        header4: "Guiding the Eye:",
        para4:
          " Subtle animations can highlight interactive elements, like buttons or menus, guiding users effortlessly through the interface. Imagine a progress bar that smoothly fills up as you complete a task, providing a satisfying sense of accomplishment.\n",
        header5: "Building Trust & Feedback:",
        para5:
          " Animations can acknowledge user actions, like providing a quick confirmation animation after clicking a button. This subtle feedback loop builds trust and reinforces the user's feeling of being in control.",
        header6: "Enhancing Learnability:",
        para6:
          " Complex processes can be broken down and explained through well-timed animations. Think of an animated tutorial that demonstrates how to use a new feature, making it easier for users to grasp the functionality.",
        header7: "Humanizing the Experience:",
        para7:
          " A touch of personality can be injected through delightful micro-animations. Imagine a character that subtly reacts to user input, adding a layer of charm and making the interaction more enjoyable.",
        header8: "The art of subtlety",
        para8:
          "While motion can be a powerful tool, it’s important to remember that less is often more. Bombarding users with excessive animation can be distracting and overwhelming. The key lies in using motion strategically, with a clear purpose and a focus on improving user experience. \n\n\nSo, the next time you’re designing a product, consider the power of motion. By understanding how animation influences our psychology, you can craft a user experience that’s not just functional, but also captivating and intuitive.\n",
        date: "14/03/2024",
        writer: "Rohith Narasimhan",
        back: "Go Back",
        title1: "Now Reading",
        cont1: "Power of Motion",
        title2: "Also Read",
        cont2: "Empathy In UX",
        cont3: "Storytellng In Marketing",
      },
    ];
    const lastrow = lastData[0];
    setLastRow(lastrow);
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
        { x: -360, ease: Linear.easeNone }
      );
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        marquee2.current,
        4,
        { x: 0 },
        { x: -360, ease: Linear.easeNone }
      );
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        marquee3.current,
        4,
        { x: 0 },
        { x: -360, ease: Linear.easeNone }
      );
  });
  return (
    <>
      <Head>
        <title>Insights - The Secret Power of Motion</title>
        <meta
          name="description"
          content="Unlock the secret power of motion in design and user experience (UX). Explore how motion design can enhance user engagement, communicate information effectively, and create delightful digital experiences. Stay informed with insights from Codelinear."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/insights/the-secret-power-of-motion"
        />
        <meta
          name="keywords"
          content="motion design, animation in design, UI animation, UX animation, user engagement, motion graphics, digital experiences"
        />
      </Head>
      {lastRow && (
        <>
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
                  alt=""
                />
              </Link>
              <div className="opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                {lastRow.back}
              </div>
            </Link>
            <div className="w-full h-full pl-20 pr-[407px] pt-[233.78px] pb-[65.22px] bg-white justify-start items-center inline-flex max-lg:p-10 max-sm:p-0 max-sm:px-[20px] max-sm:mt-[90px]">
              <div className="w-[953px] letter-spacing-2 text-black text-[66px] widescreen:text-[76px] widestscreen:text-[90px] widescreen:w-[80%] font-normal font-['Graphik'] leading-[108%] max-lg:w-full max-sm:text-[50px]">
                {lastRow && <>{lastRow.header1}</>}
              </div>
            </div>
            <div className="text-20  pl-20 max-lg:p-10 max-sm:p-0 max-sm:px-[20px] flex items-center mt-[40px]">
              <Image
                className="w-[60px] h-[60px] rounded-[100%] relative bg-black bg-opacity-20 flex-col justify-start items-start flex"
                src={rohith}
                alt=""
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
                  className="w-full h-full object-cover relative bg-black bg-opacity-20 flex-col justify-start items-start flex"
                  src={motion}
                  alt="The Secret Power of Motion: Why Animation Enhances UX"
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
                        alt=""
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
                    <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                      <Image
                        className="w-[68px] h-[65px] object-cover"
                        src={motion}
                        alt=""
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
                    href="/insights/empathy-in-ux"
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
                            {lastRow.cont2}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    onClick={scrollToTop}
                    href="/insights/storytelling-in-marketing"
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
                            {lastRow.cont3}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="left-[405px] h-full max-md:w-full widescreen:w-[70%] mt-[81.39px]  flex-col max-md:gap-[20px] justify-start items-start gap-14 inline-flex max-md:px-10 max-sm:px-[20px] max-sm:mt-[80px]">
                  <div className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                    {lastRow.para1}
                    <br />
                    <br />
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                      {lastRow.header2}
                    </div>
                    <div className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                      {lastRow.para2}
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                      {lastRow.header3}
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                      {lastRow.para3}
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                      {lastRow.header4}
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                      {lastRow.para4}
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                      {lastRow.header5}
                    </div>
                    <div className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                      {lastRow.para5}
                      <br />
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                      {lastRow.header6}
                    </div>
                    <div className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                      {lastRow.para6}
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                      {lastRow.header7}
                    </div>
                    <div className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full  max-sm:text-justify">
                      {lastRow.para7}

                      <br />
                      <br />
                    </div>
                  </div>

                  <div className="flex-col w-full justify-start items-start gap-2 flex">
                    <div className="w-[630px] text-black widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%]   text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                      {lastRow.header8}
                    </div>

                    <div className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify">
                      {lastRow.para8}
                    </div>
                  </div>
                </div>
              </div>
              <Explore />
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default Workshop;
