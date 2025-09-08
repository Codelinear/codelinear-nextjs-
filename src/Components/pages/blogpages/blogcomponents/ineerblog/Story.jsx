"use client";
import React from "react";
import Image from "next/image";
import img from "../../blogassets/Blog Inner page Banner02.jpg";
import arrow from "../../blogassets/arrow.svg";
import Link from "next/link";
import img1 from "../../blogassets/Blogs Animation Thumbnail02.jpg";
import img2 from "../../blogassets/Blogs Animation Thumbnail09.jpg";
import img3 from "../../blogassets/Blogs Animation Thumbnail04.jpg";
import Explore from "../../../production/Explore";
import { useEffect, useRef, useState } from "react";
import { Linear, gsap } from "gsap";
// import Head from "next/head";
import axios from "axios";
import Footer from "../../../../Footer/Footer";
import muheeb from "../../blogassets/muheeb.jpeg";
import Head from "next/head";

const Story = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  const render = useRef(null);
  const [lastRow, setLastRow] = useState(null);
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
        header1:
          "Are You Telling Stories? A Vital X Factor In Your Marketing Efforts",
        para1:
          'A relatively new player pulled off a potentially risky storytelling marketing campaign in the late 2000s. Today, the campaign is a case study for marketing enthusiasts across all sectors because of its ‘X’ factor.\n\nIn 2009, UK-based BGL Group’s insurance price comparison website - Compare The Market - began telling humorous stories from the perspective of an animated anthropomorphic Russian species meerkat. The meerkat was named Aleksandr Orlov as the sophisticated founder of the website comparethemeerkat.com. Many advertisements appeared on YouTube, television, and other video platforms about Orlov’s frustration over the confusion caused to his website by another website called comparethemarket.com.\n\nEach of those stories told in the adverts was funny, and managed to send across the message that "everybody was logging on to comparethemarket.com, but his website was comparethemeerkat.com - a dating, and socializing website for meerkats." Each story ended with Orlov explaining the difference, and ending his dialogue with "simples”.\n\nThe company managed to generate a strong buzz about its brand through humorous storytelling, while creating the impression that they were already famous. As a result, the website became the fourth most visited insurance website in the UK in 2009, while their sales doubled at the end of the campaign.\n',
        date: "15/05/2023",
        writer: "Muheeb Syed Saif",
        back: "Go Back",
        title1: "Now Reading",
        cont1: "Storytelling in Marketing",
        title2: "Also Read",
        cont2: "Empathy in UX",
        cont3: "Listening To Your Customers",
        header2: "How Does Storytelling In Marketing Work?",
        subhead1: "1. Evokes the right feelings",
        subpara1:
          "Customers don’t buy products or services, they buy the feeling that the said product or service evokes within them. Harvard Business School professor Gerald Zaltman, in his book, quotes a study that claims 75% of purchase decisions are subconscious, and therefore, customers are more likely to convert through emotion-driven campaigns. The emotions that the above company evoked were FOMO (fear of missing out), and many people logged on to their website out of curiosity.\n",
        subhead2: "2. Shows the ‘how’",
        subpara2:
          "Of course, every marketing rep knows the importance of 'how'. But when the ‘how’ is presented in the form of a story, it has better retention, and can provoke action. In the case of content marketing, it takes the customer closer to a purchase decision.\n",
        subhead3: "3. Does not feel like marketing",
        subpara3:
          "You are now dealing with possibly the most aware set of customers with dwindling attention spans. They are discrete about the time and energy that they spend, and so in-your-face marketing naturally repels them. The one factor that still has the power to hold their attention is a good brand story that does not feel like marketing.\n",
        header3: "How To Tell Great Brand Stories That Work?",
        subhead4: "1. Reward the customer",
        subpara4:
          "As we discussed above, the ‘how’ factor is everything in telling a brand story. But that ‘how’ needs to show what the customer will receive. A principle that all great storytellers follow is this - reward the reader/viewer/audience.\nYour target customers should feel rewarded at the end of the story in the form of -\n- a satisfactory solution, or\n- the value the product or service brings, or\n- a discount code, or\n- a loyalty program, or\n- an exclusive access\n\n",
        subhead5: "2. Pack an emotional punch",
        subpara5:
          "There’s no telling a story without emotion. Consciously list down the feelings that you would want your customers to get while watching the story.\nGet ideas from some of these ‘high-impact’ emotional motivators -\n- compare before and after using the product or service\n- evoke a sense of freedom\n- create a sense of well-being\n- tie the brand story to a social cause that affects your target customers, such as climate change, cleanliness, the environment, etc\n- infuse the self-improvement factor into the story\n- infuse the feeling of being special among customers, etc.\n- create humour",
        subhead6: "3. The truth factor",
        subpara6:
          "The story that you create may be fictional or a case study, but it should still tell the truth in terms of its message. Try not to not claim things your marketing team cannot pull off later. Be truthful to your brand, and the value it brings. Follow this principle in all your branding or digital marketing campaigns.\n",
        subhead7: "4. Connect with the audience",
        subpara7:
          "A Harvard Business Review study revealed that across a sample of nine industry categories, fully connected customers turned out to be 52% more valuable than those who were just satisfied with the product.\nThis is how you can do that -\n- create the personas of your target customers\n- create a detailed persona for the protagonist of your brand story\n- identify core values relevant to your customers. For example, luxury brands target feelings of status, confidence, first impressions, etc.\n- speak their language, slang, or dialect\n- call them to act (urgently, and now)\n",
        header4: "Final Thoughts",
        para4:
          'In his New York Times bestseller ‘The Confident Speaker," Harrison Monarth has stated: "A story can go where quantitative analysis is denied admission: our hearts. Data can persuade people, but it doesn’t inspire them to act; to do that, you need to wrap your vision in a story that fires the imagination and stirs the soul."\n\n\nIf you wish to infuse this ‘X’ factor into your digital marketing campaigns, do talk to us.\n\n',
      },
    ];
    const lastrow = lastData[0];
    setLastRow(lastrow);
    setPara2(lastrow.subpara1);
    setPara1(lastrow.para1);
    setPara3(lastrow.subpara2);
    setPara4(lastrow.subpara3);
    setPara5(lastrow.subpara4);
    setPara6(lastrow.subpara5);
    setPara7(lastrow.subpara6);
    setPara8(lastrow.subpara7);
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
        <title>Insights - Storytelling In Marketing</title>
        <meta
          name="description"
          content="Explore the power of storytelling in marketing and its impact on brand engagement. Learn how effective storytelling techniques can connect with audiences, evoke emotions, and drive action. Stay informed with insights from Codelinear."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/insights/storytelling-in-marketing"
        />
        <meta
          name="keywords"
          content="storytelling in marketing, brand engagement, storytelling techniques, brand storytelling, marketing strategies, emotional marketing, brand narrative"
        />
      </Head>
      {lastRow && (
        <>
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
                  alt=""
                />
              </Link>
              <div className="opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                {lastRow.back}{" "}
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
                  alt="Are You Telling Stories? A Vital X Factor In Your Marketing Efforts"
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
                            {lastRow.cont1}{" "}
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
                            {lastRow.cont2}{" "}
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
                            {lastRow.cont3}{" "}
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
                    className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                  ></textarea>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-[28px] max-md:w-full widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                      {lastRow.header2}
                    </div>
                    <div className="text-black text-xl max-md:w-full widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                      {lastRow.subhead1}
                    </div>
                    <textarea
                      type="text"
                      value={para2}
                      disabled
                      ref={textareaRef2}
                      className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-xl max-md:w-full widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                      {lastRow.subhead2}
                    </div>
                    <textarea
                      type="text"
                      value={para3}
                      disabled
                      ref={textareaRef3}
                      className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="flex-col widescreen:w-full max-md:w-full justify-start items-start gap-2 flex">
                      <div className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] text-black text-xl  widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                        {lastRow.subhead3}
                      </div>
                      <textarea
                        type="text"
                        value={para4}
                        disabled
                        ref={textareaRef4}
                        className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-[28px] max-md:w-full widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                      {lastRow.header3}
                    </div>
                    <div className="text-black text-xl max-md:w-full widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                      {lastRow.subhead4}
                    </div>
                    <textarea
                      type="text"
                      value={para5}
                      disabled
                      ref={textareaRef5}
                      className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="text-black text-xl max-md:w-full widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                      {lastRow.subhead5}
                    </div>
                    <textarea
                      type="text"
                      value={para6}
                      disabled
                      ref={textareaRef6}
                      className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="flex-col widescreen:w-full max-md:w-full justify-start items-start gap-2 flex">
                      <div className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] text-black text-xl  widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                        {lastRow.subhead6}
                      </div>
                      <textarea
                        type="text"
                        value={para7}
                        disabled
                        ref={textareaRef7}
                        className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="flex-col widescreen:w-full max-md:w-full justify-start items-start gap-2 flex">
                      <div className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] text-black text-xl  widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                        {lastRow.subhead7}
                      </div>
                      <textarea
                        type="text"
                        value={para8}
                        disabled
                        ref={textareaRef8}
                        className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-5 flex w-full">
                    <div className="flex-col widescreen:w-full max-md:w-full justify-start items-start gap-2 flex">
                      <div className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] text-black text-xl  widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                        {lastRow.header4}
                      </div>
                      <textarea
                        type="text"
                        value={para9}
                        disabled
                        ref={textareaRef9}
                        className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <Explore />
            </div>
          </div>{" "}
        </>
      )}
      {/* <Footer /> */}
    </>
  );
};

export default Story;
