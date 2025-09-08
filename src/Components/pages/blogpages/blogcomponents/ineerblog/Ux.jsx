"use client";
import React from "react";
import Image from "next/image";
import img from "../../blogassets/Blog Inner page Banner01.jpg";
import arrow from "../../blogassets/arrow.svg";
import Link from "next/link";
import img1 from "../../blogassets/Blogs Animation Thumbnail01.jpg";
import { useEffect, useRef, useState } from "react";
import { Linear, gsap } from "gsap";
import img2 from "../../blogassets/Blogs Animation Thumbnail09.jpg";
import img3 from "../../blogassets/Blogs Animation Thumbnail02.jpg";
import Explore from "../../../production/Explore";
import axios from "axios";
import Footer from "../../../../Footer/Footer";
import muheeb from "../../blogassets/muheeb.jpeg";
import Head from "next/head";

const Ux = () => {
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
  useEffect(() => {
    const lastData = [
      {
        header1: "How UX Design Can Add Value To The Growth Of SMEs?\r\n",
        para1:
          "Once upon a 2008, when a 28-year-old Londoner named Richard Pierson quit his job, and felt burned out even as a freelancer, he turned to a Buddhist monk named Andy Puddicombe. While Puddicombe taught Pierson a 2,500-year-old meditation technique, the latter had a business idea. Both turned meditation into a successful local business in 2010.\r\n\r\nHowever, it was only when they converted this business into a meditation and wellness app that things really began to get global. Today, the app that the world knows as Headspace, has 11 million downloads, and around 400,000 paying subscribers.\r\n\r\nQuestion - Did switching from offline to online do the trick for the two local businessmen? Not at all.\r\n\r\nHeadspace has a smooth user experience that instantly instills confidence. Mental health and wellness are not things that people easily trust. Headspace constantly gamifies the steps of meditation, offers tips and tricks, and helps users follow through on their goals. As a result, most users find themselves practicing meditation every single day, inspiring them to become paid subscribers for deeper transformation.\r\n",
        date: "30/06/2023",
        writer: "Muheeb Syed Saif",
        title1: "Now Reading",
        cont1: "UX Design Benefits",
        title2: "Also Read",
        cont2: "Empathy in UX",
        cont3: "Storytelling in Marketing",
        back: "Go Back",
        header2: "What Is UX Design?\r\n",
        para2:
          "This trend became a reality in 2022 when businesses saw Google’s AI search becoming more and more humane. As a result, content that really helped users or searchers began trending instead of keyword-heavy content. This will mature in 2023 as search engines evolve, and become more customer/user-oriented. It may be time you stop pleasing Google, and start pleasing your customers online.\r\nUser Experience Design, or UX Design, is a term that is used to define, and design how users will navigate an application, product, or service. There was a time when UX design only meant the technical experience of users on a mobile application or a website. Today, UX design is carefully crafted when designing even physical products, or service experiences.We will keep our scope of discussion here for mobile, and web applications. UX involves bringing together the needs of the customers, and matching them with the technical aspects of any application.\r\n",
        header3: "How Does UX Design Impact The Growth Of SMEs?\r\n",
        subhead1: "1. UX design increases conversions\r\n",
        subpara1:
          "For SMEs, the initial buzz around their product, or service helps them scale faster while also bringing them investment. Today, most customers will visit a business’ website or a service’s application to gain initial confidence. A good UX design will make them comfortable, and they will be inclined to buy that product or service. A significant challenge faced by Headspace UX designers initially was in onboarding more clients. They used relatable graphics that showed users doing meditation in their own zones such as workplace, kitchen, hobbies etc - a factor that significantly improved sales.\r\n",
        subhead2: "2. UX design impacts brand loyalty\r\n",
        subpara2:
          "User experience speaks to the emotions of the users. When a business pays attention to the UX of their digital applications, users feel connected. This impacts their (users) subconscious minds and keeps them for a longer time. Retained customers become an annuity to a small business, and become its brand ambassadors.\r\n",
        subhead3: "3. Saves run-up development costs\r\n",
        subpara3:
          'When SMEs focus on UX in the beginning of their product or service launch, they can practically save redesign and re-development costs considerably. Remember, it will cost you less to create a great user experience from scratch than it will to fix a poor UX.\r\n\r\n\r\n"For every dollar spent to resolve a problem during product design. 10 dollars will be spent on the same problem during development. and multiply it by 100 dollars or more if the problem had to be solved after the product’s release." Robert Pressmen("Software Engineering: A Practitioner’s Approach")',
        subhead4: "4. UX design lowers support cost\r\n",
        subpara4:
          "The reason why good website or mobile application development companies stress building a great UX design is because it ultimately saves support costs in the long run. When users are easily able to find what they are looking for, without getting distracted or overwhelmed by the design of the web or mobile application, they understand your product or service more quickly. This decreases the number of support tickets or calls that your executives will need to handle to answer users’ questions.\r\n",
        subhead5: "5. Leads to right messaging, and Google ranking\r\n",
        subpara5:
          "Very few SMEs realize the importance of their site or mobile app's Google ranking, and the kind of messaging that their app has. A smooth UX design helps put the most important messages or goals of your product in the right place. This also paves the way for best SEO practices that your website or mobile app may need, resulting in a better reach for your business on Google.\r\n",
        subhead6: "6. Better understanding of your users\r\n",
        subpara6:
          "Headspace designers consciously put in graphics, details, interface, and content language during UX design that normalized meditation for people. For instance, the team experimented with making the sign-up process easier; instead of a demo video, they simplified the usage of the app by using Gifs showcasing steps to use the app; and even added ‘Choose your own adventure’ option allowing users to choose how they wished to sign up. These small experiments in UX design at beta stage led to better understanding of users. Since the discipline of UX design begins with creating user profiles, and adding the right touch points for user purchases, this sends so much user data onto your dashboard to extract valuable insights for SMEs to benefit from.\r\n",
        header4:
          "You Need A Wise UX Design Strategy, And UX Design Partners\r\n",
        para4:
          "UX design does not happen by accident or by instinct. It is a practice that needs thoughtfulness, a smart strategy, and trusted design partners. If you are trying to figure out how you can make your digital business experience memorable for your customers, do talk to us.\r\n",
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
    setPara9(lastrow.para4);
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
        { x: -286, ease: Linear.easeNone }
      );
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        marquee2.current,
        4,
        { x: 0 },
        { x: -286, ease: Linear.easeNone }
      );
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        marquee3.current,
        4,
        { x: 0 },
        { x: -286, ease: Linear.easeNone }
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
  };
  useEffect(() => {
    autoAdjustHeight();
  }, [para2]);
  return (
    <>
      <Head>
        <title>Insights - UX Design Benefits SMEs!</title>
        <meta
          name="description"
          content="Discover the benefits of UX design for small and medium-sized enterprises (SMEs). Learn how investing in UX design can improve user satisfaction, increase customer loyalty, and drive business growth. Stay informed with insights from Codelinear."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/insights/ux-design-benefits-smes"
        />
        <meta
          name="keywords"
          content="UX design, SMEs, small and medium-sized enterprises, user experience design, user satisfaction, customer loyalty, business growth"
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
                  alt="How UX Design Can Add Value To The Growth Of SMEs?"
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
                    className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
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
                      className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-xl widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-[28px] font-['Graphik'] leading-[34.16px]">
                      {lastRow.header3}
                    </div>

                    <div className="w-[630px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                      {lastRow.subhead1}
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
                    <div className="flex-col widescreen:w-full justify-start items-start gap-2 flex">
                      <div className="w-[630px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                        {lastRow.subhead2}
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

                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="flex-col widescreen:w-full justify-start items-start gap-2 flex">
                      <div className="w-[630px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                        {lastRow.subhead3}
                      </div>
                      <textarea
                        type="text"
                        value={para5}
                        disabled
                        ref={textareaRef5}
                        className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex-col widescreen:w-full justify-start items-start gap-5 flex w-full">
                    <div className="w-[630px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                      {lastRow.subhead4}
                    </div>
                    <textarea
                      type="text"
                      value={para6}
                      disabled
                      ref={textareaRef6}
                      className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="w-[630px] widescreen:w-full widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                      {lastRow.subhead5}
                    </div>
                    <textarea
                      type="text"
                      value={para7}
                      disabled
                      ref={textareaRef7}
                      className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="flex-col widescreen:w-full justify-start items-start gap-2 flex">
                      <div className="w-[630px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                        {lastRow.subhead6}
                      </div>
                      <textarea
                        type="text"
                        value={para8}
                        disabled
                        ref={textareaRef8}
                        className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="flex-col widescreen:w-full justify-start items-start gap-2 flex">
                      <div className="w-[630px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                        {lastRow.header4}
                      </div>
                      <textarea
                        type="text"
                        value={para9}
                        disabled
                        ref={textareaRef9}
                        className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                      ></textarea>
                    </div>
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

export default Ux;
