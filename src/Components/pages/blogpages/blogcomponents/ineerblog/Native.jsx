"use client";
import React from "react";
import Image from "next/image";
import img from "../../blogassets/Frame 4.svg";
import arrow from "../../blogassets/arrow.svg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Linear, gsap } from "gsap";
import img2 from "../../blogassets/Blogs Animation Thumbnail10.jpg";
import img3 from "../../blogassets/Blogs Animation Thumbnail14.jpg";
import Explore from "../../../production/Explore";
// import Head from "next/head";
import axios from "axios";
import Footer from "../../../../Footer/Footer";
import muheeb from "../../blogassets/muheeb.jpeg";
import Head from "next/head";

const Native = () => {
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
  useEffect(() => {
    const lastData = [
      {
        header1: "React Native V/S Flutter- What’s Better For You?\r\n",
        para1:
          "Only a decade ago, it was hard to imagine life without mobile apps. They now make our lives easier, with some even assisting us with our daily chores. Statista reports that mobile apps are expected to generate $935 billion in revenue globally in 2023.\r\n\r\nBusinesses today need mobile apps faster, and they want apps that perform equally well across all the platforms. But do all businesses have the time and resources for the same?\r\n\r\nEnter React Native and Flutter - two of the most popular cross-platform mobile app development platforms.\r\n\r\n\r\n",
        header2: "How Did React And Flutter Enter The Mobile Universe?\r\n",
        para2:
          "Facebook launched its open-source framework, called React Native back in 2015. It was the company’s attempt at equipping developers with a JavaScript-based framework for the development of cross-platform apps. React eliminates the need for compiling other technology stacks for mobile app development. Companies such as Uber Eats, Instagram, and Skype have since used React Native for their mobile app development needs.\r\n\r\nIn 2017, Google launched an open-source User Interface (UI) framework that was targeted at aiding developers to design cross-platform apps to run on mobile, Windows, macOS, and Linux. Flutter’s framework is built upon Dart.\r\n\r\nSoon after, many big companies such as Philips Hue, Hamilton, Alibaba, etc began developing mobile apps using Flutter. Ever since, Google has frequently provided updates for Flutter, improving its performance with each update.\r\n\r\n",
        header3: "Why Are React And Flutter So Popular?\r\n",
        para3:
          "While native apps work better on mobile phones, developing native apps for each platform is quite a waste of time. As a result, businesses are always looking for technologies that would help them build cross-platform apps that would run as well, if not better, than native apps. Both React and Flutter offer open-source frameworks that solve this problem. Both the frameworks offer many tools and features, such as code reusability and Hot Reload with its ability to make changes on the fly etc - a freedom that makes mobile app development faster.\r\n\r\n\r\n",
        header4: "React Native\r\n",
        para4:
          "Based on React.JS, React Native uses JavaScript to create mobile applications for iOS and Android. It also allows developers to develop apps using one codebase. React offers fast mobile application development and allows access to some third-party UI libraries with ready-to-use components. React also enables the delivery of new functionalities to supported platforms immediately.\r\n\r\nPros of React Native\r\n- One codebase to build apps for two or more platforms\r\n- Uses JavaScript that makes mobile app development smoother\r\n- Has a faster learning curve for developers\r\n- It saves upto 50% time on the testing\r\n- Growing and active community of developers\r\n\r\nCons of React Native\r\n- Has limited components\r\n- The user interface is easily broken\r\n- Apps are larger than native ones\r\n\r\n\r\n",
        header5: "Flutter\r\n",
        para5:
          "Flutter helps create cross-platform applications using a single codebase. So you don’t have to develop separate apps for mobile, web, and desktop. Being an open-source platform, any business owner can download it and get started. Apps built using Flutter are intuitive and easier to navigate.\r\n\r\nA wise step would be to study the metaverse as a user in 2023, interact with other users, and find out relevant areas for your business. It is okay if you don’t use the metaverse at all for digital marketing in 2023. However, this should be the year of collecting as many use cases for your business as possible.\r\n\r\nPros of Flutter - Offers a rich library of widgets\r\n- Well-structured documentation\r\n- Apps are fast and easy to navigate, and they require less testing\r\n- Flutter helps to create the same UI for older devices\r\n- Flutter 2 helps in web app development\r\n- Has rapidly growing community\r\n- Offers Hot Reload feature\r\n\r\nCons of Flutter\r\n- Apps built on it are larger than native apps\r\n- Limited set of tools and libraries\r\n\r\n\r\n",
        header6: "How To Choose Between The Two?\r\n",
        para6:
          "Performance : React uses JavaScript while Flutter uses the Dart programming language, which has a higher compilation rate than JS. As a result, Flutter’s apps deliver high performance by default. So if performance is one of your chief goals, you should choose Flutter.\r\n\r\nLearning curve : According to Statista, only 6.54% of developers use Dart that makes it harder to find Dart developers or for developers to learn the language. React has a shorter learning curve.\r\n\r\nTesting : For testing a React Native app, you will need a third-party testing framework such as Detox. If that’s a challenge, then it is better to choose Flutter because it is enriched with integrated testing features.\r\n\r\n\r\n",
        header7: "Final Thoughts\r\n",
        para7:
          "Statista states that 38% of developers used React Native in 2021, whereas 42% used Flutter for development. However, you should make a decision based on your overall goals in terms of your cross-platform mobile app development needs. If you need help or advice on what’s best for you, do give us a call.\r\n",
        date: "17/04/2023",
        writer: "Muheeb Syed Saif",
        back: "Go Back",
        title1: "Now Reading",
        cont1: "React Native V/S Flutter",
        title2: "Also Read",
        cont2: "Digital Marketing",
        cont3: "Gestalt Psychology",
      },
    ];
    const lastrow = lastData[0];
    setLastRow(lastrow);
    setPara2(lastrow.para2);
    setPara1(lastrow.para1);
    setPara3(lastrow.para3);
    setPara4(lastrow.para4);
    setPara5(lastrow.para5);
    setPara6(lastrow.para6);
    setPara7(lastrow.para7);
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
  };
  useEffect(() => {
    autoAdjustHeight();
  }, [para2]);
  return (
    <>
      <Head>
        <title>Insights - React Native Vs Flutter</title>
        <meta
          name="description"
          content="Explore the comparison between React Native and Flutter for cross-platform mobile app development. Learn about their features, performance, community support, and suitability for different project requirements. Stay informed with insights from Codelinear."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/insights/react-native-vs-flutter"
        />
        <meta
          name="keywords"
          content="React Native vs Flutter, cross-platform mobile app development, mobile app frameworks, mobile app performance, React Native features, Flutter features, mobile app development tools"
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
              alt="React Native V/S Flutter- What’s Better For You?"
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
                    src={img}
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
                href="/insights/digital-marketing-trends-in-2023"
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
                href="/insights/gestalt-psychology"
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
              <div className="flex-col justify-start items-start gap-5 flex w-full">
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
              <div className="flex-col justify-start items-start gap-5 flex w-full">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
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
              <div className="flex-col justify-start items-start gap-5 flex w-full">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
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
              <div className="flex-col justify-start items-start gap-5 flex w-full">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header5}</>}
                </div>
                <textarea
                  type="text"
                  value={para5}
                  disabled
                  ref={textareaRef5}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex w-full">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header6}</>}
                </div>
                <textarea
                  type="text"
                  value={para6}
                  disabled
                  ref={textareaRef6}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>

              <div className="flex-col w-full justify-start items-start gap-2 flex">
                <div className="w-[630px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                  {lastRow && <>{lastRow.header7}</>}
                </div>
                <textarea
                  type="text"
                  value={para7}
                  disabled
                  ref={textareaRef7}
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

export default Native;
