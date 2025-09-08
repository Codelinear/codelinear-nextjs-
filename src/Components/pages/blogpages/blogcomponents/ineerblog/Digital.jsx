"use client";
import React from "react";
import Image from "next/image";
import img from "../../blogassets/Blog Inner page Banner10.jpg";
import arrow from "../../blogassets/arrow.svg";
import Link from "next/link";
import img1 from "../../blogassets/Blogs Animation Thumbnail10.jpg";
import img2 from "../../blogassets/Blogs Animation Thumbnail09.jpg";
import { useEffect, useRef, useState } from "react";
import { Linear, gsap } from "gsap";
import img3 from "../../blogassets/Blogs Animation Thumbnail02.jpg";
import Explore from "../../../production/Explore";

import axios from "axios";
import Footer from "../../../../Footer/Footer";
import muheeb from "../../blogassets/muheeb.jpeg";
import Head from "next/head";

const Digital = () => {
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
        header1: "Digital Marketing",
        para1:
          "An interesting study published by Think With Google described how Domino's and Diageo tackled ‘unintended bias’ in 2022. A significant observation that the study made was about how brands miss out on potential audiences on YouTube, and other channels by over-excluding certain keywords.\n\nFor instance, some brands stay away from words that the LGBTQ community relates to in order to avoid hate speech online. However, since YouTube has been actively taking steps against any kind of specific audience, such exclusions block such brands from reaching out to many potential buyers.\n\nThe study then elaborated on how Domino’s and Diageo partnered with YouTube to actively fight against such bias, and engage as diverse an audience as possible.\n\nWhile YouTube is notorious for constantly changing algorithms, digital marketing in general has also continually evolved. Businesses often find themselves on edge, catching up to what’s changed and what remains in online marketing.\n\nWe have compiled a list of digital marketing trends that may assist you in staying on top of your marketing game.\n\n\n\n",
        header2: "Customer Experience Over Keywords",
        para2:
          "This trend became a reality in 2022 when businesses saw Google’s AI search becoming more and more humane. As a result, content that really helped users or searchers began trending instead of keyword-heavy content. This will mature in 2023 as search engines evolve, and become more customer/user-oriented. It may be time you stop pleasing Google, and start pleasing your customers online.\n\nAs a business, focus on optimizing the experience of your online visitors. Some things you can do -\n- easily-navigable website/mobile application\n- ease of inquiries, order placement\n- personalizing every touch point of purchase journey\n- informing customers through content bites\n\n",
        header3: "Short Videos",
        para3:
          "\n\nVideos are not just about vertical or horizontal formats anymore. They are about getting more information in less time. Instagram Reels is just one of the many channels where your relevant customers are. Reels say a lot about your customers. Let’s see -\n\n- your customers want information or entertainment, but they don’t have a lot of time\n- they are most likely to watch your content while waiting for something or someone, or while traveling\n- they are more likely to watch your content on a mobile device\nMake 2023 the year you start producing short-form video content. Begin with personalized content such as your team activities, your inner workings, and your business routine, and eventually switch to your value propositions.\n\n\n",
        header4: "The Metaverse",
        para4:
          "\n\nSince some of the biggest brands, such as Starbucks and Nike, have jumped on the bandwagon of the metaverse, this may become a huge trend in 2023. Metaverse is like a parallel virtual world where people and brands interact with each other, albeit more immersively. It is slowly becoming a place where a lot of customers want to be. However, most businesses do not have a practical use case. Just as it happened with augmented reality and virtual reality applications back in 2018, the metaverse may or may not find relevance in all business sectors.\n\nA wise step would be to study the metaverse as a user in 2023, interact with other users, and find out relevant areas for your business. It is okay if you don’t use the metaverse at all for digital marketing in 2023. However, this should be the year of collecting as many use cases for your business as possible.\n\n\n",
        header5: "Information As Bites",
        para5:
          "f short-videos are any indication, the attention span of your customers is getting worse by the day. Users today consume information like snacks - it needs to provide instant gratification and satisfy their hunger for knowledge or information. While long-form content will never lose its significance, you must experiment with bite-sized and easily digestible content in 2023, especially to lure your online customers.\n\nAs a leading UI/UX Design Agency, Codelinear delivers well-crafted design services that can bring your ideas to life and make your web/app stand out. If you are looking for empathetic UX/UI design, do call us.\n\nSome things to consider -\n- repurpose existing content into bite-sized information\n- simplify difficult concepts of your business/product or service\n- leverage social media channels to relay this information\n\n\n",
        header6: "Influencers Aren’t Going Anywhere",
        para6:
          "\nThis trend of businesses leveraging expert individuals to create brand advocacy has been going on for nearly five years.2023 is not going to be an exception. In fact, influencer marketing will continue to trend widely, with some of the world’s biggest brands, and movie makers using influencers to sell products, and entertainment.\n\nHere’s what you can do -\n\n- research opportunities to reach out to your audience first\n- short-list influencers who share the same values\n- start with a barter relationship with influencers instead of spending money upfront\n\n",
        header7: "Linked-In Is A Thought Influencer In B2B",
        para7:
          "\nThere’s no better advocacy for B2B companies than to reach out and influence relevant audiences on Linked-in. And 2023 will be the same. There’s a certain credibility attached to the thought leadership opportunities that Linked-in offers that B2B audiences are looking for. In fact, a study has stated that Linked-in may capture nearly 25% of US B2B advertising spending by 2024. Even as the platform evolves, businesses should leverage the time to build relevant followers who will eventually become their brand advocates.\n\nSome things to do in 2023 -\n- use Linkedin’s new features for thought leadership\n- create credible Linked-in profiles for your founders.\n- post useful content about your industry\n- build relationships with competitors\n\n\n",
        header8: "Not Every Trend Is For Your Business",
        para8:
          "Just like we mentioned about metaverse, not every digital marketing trend is for you. While it is crucial to know beforehand what’s going on in the market, it is all the more significant to contextualize trends for your business. Let your customers be your guiding light about which trends to follow, and you will eventually find the right mix.\n\n",
        header9: "Keep Focusing On Your Foundation",
        para9:
          "A trend that would never go out of fashion is to focus on your foundations, such as -\n\n- a good and easy-to-navigate website\n- a scalable mobile application\n- decent presence on social media\n- a clear brand voices - clarity of communication\n- consistency in messaging\n- SEO best practises\n\nCodelinear believes that it is the foundations that will propel your company forward.We have helped many businesses get the right brand voice through a robust and easily navigable website and/or mobile application, design voice, and digital marketing. If you are looking for something that lasts, we should talk.\nWanna Know A Secret?\nLet's Talk\n\n\n",
        date: "14/11/2022",
        writer: "Muheeb Syed Saif",
        back: "Go Back",
        title1: "Now Reading",
        cont1: "Digital Marketing",
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
    setPara8(lastrow.para8);
    setPara9(lastrow.para9);
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
        <title>Insights - Digital Marketing</title>
        <meta
          name="description"
          content="Explore the latest digital marketing trends expected to shape the landscape in 2023. Learn about emerging strategies, technologies, and consumer behaviors that will impact digital marketing efforts. Stay ahead of the curve with insights from Codelinear."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/insights/digital-marketing-trends-in-2023"
        />
        <meta
          name="keywords"
          content="digital marketing trends 2023, digital marketing strategies, emerging technologies, consumer behavior, online advertising, content marketing, social media marketing"
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
              alt="Digital Marketing"
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
                        {lastRow && <>{lastRow.cont2}</>}
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
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header3}</>}
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <textarea
                  type="text"
                  value={para3}
                  disabled
                  ref={textareaRef3}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
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
              <div className="w-full flex-col justify-start items-start gap-5 flex">
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
              <div className="w-full flex-col justify-start items-start gap-5 flex">
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
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
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
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header8}</>}
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
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header9}</>}
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
          <Explore />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Digital;
