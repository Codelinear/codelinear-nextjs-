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
import axios from "axios";
import Footer from "../../../../Footer/Footer";
import muheeb from "../../blogassets/muheeb.jpeg";
import Head from "next/head";

const Workshop = () => {
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
        header1: "Discovery Workshop: Why Do You Need One?\r\n",
        para1:
          "A noted health insurance company recognized the need to improve its member portal to provide a better user experience. To achieve this, the company engaged a web application development company to conduct a discovery workshop to understand the needs and preferences of its users.\r\n\r\nDuring the discovery workshop, the agency worked closely with insurance company’s stakeholders to define the project's objectives and identify key user groups. They also conducted research to understand the users' needs and preferences, which helped to inform the design and development of the new member portal.\r\n\r\nAs a result, the company was able to launch a member portal that exceeded their users' expectations. The new portal provided a personalized experience for each user, with relevant information and services easily accessible. The portal also had improved navigation, making it more user-friendly and intuitive.\r\n\r\n\r\n",
        header2: "What Is A Discovery Workshop?",
        para2:
          "A discovery workshop is a crucial part of the website or application development process. It is an opportunity for stakeholders, including clients, developers, designers, and project managers, to come together to establish the goals, requirements, and scope of the project. Skipping this crucial step can result in costly mistakes, missed opportunities, and a suboptimal end product. In this article, we will examine the benefits of conducting a discovery workshop and the risks of skipping it, using a real-world case study to illustrate its importance.\r\n\r\nBenefits of conducting a discovery Workshop\r\n\r\n",
        header3:
          "Clearer understanding of the project's goals and objectives\r\n",
        header4: "Better understanding of user needs and requirements\r\n",
        para3:
          "One of the primary benefits of a discovery workshop is that it provides an opportunity for stakeholders to discuss and analyze user needs and requirements. By understanding the needs and requirements of the target audience, the project team can design and develop a website or application that meets the user's needs and expectations. This helps to ensure that the end product is user-friendly and effective.\r\n",
        header5: "Improved communication and collaboration\r\n",
        para4:
          "A discovery workshop provides an opportunity for stakeholders to come together to discuss the project's requirements, goals, and objectives. This improves communication and collaboration between stakeholders and helps to ensure that everyone involved in the project is on the same page. Improved communication and collaboration can result in a better end product and a more efficient development process.\r\n",
        header6: "Identification of potential challenges and risks\r\n",
        para5:
          "A discovery workshop provides an opportunity for stakeholders to identify potential challenges and risks that may arise during the development process. This allows the project team to prepare for these challenges and develop strategies to mitigate them. By identifying potential challenges and risks early on, the project team can save time and money in the long run.\r\n",
        header7: "Saves time and money\r\n",
        para6:
          "Conducting a discovery workshop may seem like an additional cost, but it can actually save time and money in the long run. By identifying potential challenges and risks early on, the project team can develop strategies to mitigate them. This can save time and money that would otherwise be spent trying to fix issues after the development process has begun.\r\nSkipping a discovery workshop can lead to several risks, including: 1. Lack of understanding : The primary purpose of a discovery workshop is to gain a deep understanding of the project's goals, requirements, and constraints. Skipping this workshop may result in a lack of understanding of these critical aspects, leading to misunderstandings and miscommunication throughout the project.\r\n\r\n2. Misaligned expectations :Without a discovery workshop, there is a higher risk of misaligned expectations between the project team and stakeholders. The stakeholders may have different expectations, which may not align with the project team's vision and goals, leading to conflicts.\r\n\r\n3. Inefficient use of resources :Skipping a discovery workshop can result in a project that does not align with the organization's goals and requirements, leading to inefficient use of resources, including time, money, and manpower.\r\n\r\n4. Missed opportunities : A discovery workshop provides a forum for stakeholders to share their ideas and concerns. Skipping this workshop can result in missed opportunities for innovation and creative problem-solving.\r\n\r\n5. Poor project outcomes :Without a thorough understanding of the project's goals, requirements, and constraints, there is a higher risk of poor project outcomes, including missed deadlines, poor quality deliverables, and cost overruns.\r\n\r\n\r\n",
        header8: "Final Thoughts\r\n",
        para7:
          "Alright, so let's wrap this up! AI design tools are basically like the creative Swiss Army knives of the digital world. These tools aim to streamline and enhance the design workflow by automating tasks, generating design elements, and providing suggestions based on algorithms and data analysis. By doing so, AI design tools can potentially increase efficiency and free up designers to focus on higher-level creative decisions.\r\n\r\nThe impact of AI on design is an ongoing topic of discussion, with both potential benefits and ethical considerations being debated within the design community and beyond.\r\n",
        date: "06/11/2023",
        writer: "Muheeb Syed Saif",
        back: "Go Back",
        title1: "Now Reading",
        cont1: "Discovery Workshop",
        title2: "Also Read",
        cont2: "Empathy in UX",
        cont3: "Storytelling in Marketing",
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
        <title>Insights - Discovery Workshop</title>
        <meta
          name="description"
          content="Explore the concept of a discovery workshop in project management and its benefits. Learn how discovery workshops facilitate collaboration, idea generation, and project alignment among stakeholders. Stay informed with insights from Codelinear."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/insights/discovery-workshop"
        />
        <meta
          name="keywords"
          content="discovery workshop, project management, collaboration, idea generation, project alignment, stakeholder engagement"
        />
      </Head>
      {lastRow && (
        <>
          <div className="innerhero">
            <Link
              href="/insights"
              onClick={scrollToTop}
              className="px-4 py-2 hidden max-sm:flex left-[80px] top-[90px] absolute rounded-[54px] border border-black justify-center items-center gap-2 hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-lg:left-[20px]"
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
                className="w-[60px] h-[60px] object-cover rounded-[100%] relative bg-black bg-opacity-20 flex-col justify-start items-start flex"
                src={muheeb}
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
                  className="w-full h-full relative bg-black bg-opacity-20 flex-col justify-start items-start flex"
                  src={img}
                  alt="Discovery Workshop: Why Do You Need One?"
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
                  <div className="w-[232px] h-[65px] widescreen:w-[300px] left-[81px] top-[242px] absolute border border-black border-opacity-10 max-lg:hidden">
                    <div className="w-[68px] h-[65px] left-0 top-[-1.39px] absolute bg-black bg-opacity-20">
                      <Image
                        className="w-[68px] h-[65px] object-cover"
                        src={img1}
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
                            {lastRow.cont1}
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
                  <textarea
                    type="text"
                    value={para1}
                    disabled
                    ref={textareaRef1}
                    className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                  ></textarea>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                      {lastRow.header2}
                    </div>
                    <textarea
                      type="text"
                      value={para2}
                      disabled
                      ref={textareaRef2}
                      className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                      {lastRow.header3}
                    </div>
                    <div className="w-[630px] opacity-80 text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-normal max-md:w-full">
                      {lastRow.header4}
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <textarea
                      type="text"
                      value={para3}
                      disabled
                      ref={textareaRef3}
                      className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                      {lastRow.header5}
                    </div>
                    <textarea
                      type="text"
                      value={para4}
                      disabled
                      ref={textareaRef4}
                      className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                      {lastRow.header6}
                    </div>
                    <textarea
                      type="text"
                      value={para5}
                      disabled
                      ref={textareaRef5}
                      className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                      {lastRow.header7}
                    </div>
                    <textarea
                      type="text"
                      value={para6}
                      disabled
                      ref={textareaRef6}
                      className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>

                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <div className="w-[630px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                      {lastRow.header8}
                    </div>
                    <textarea
                      type="text"
                      value={para7}
                      disabled
                      ref={textareaRef7}
                      className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                </div>
              </div>
              <Explore />
            </div>
          </div>
        </>
      )}
      {/* <Footer /> */}
    </>
  );
};

export default Workshop;
