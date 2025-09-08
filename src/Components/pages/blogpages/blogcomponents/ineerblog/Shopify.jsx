"use client";
import React from "react";
import Image from "next/image";
import img from "../../blogassets/Blog Inner page Banner13.jpg";
import arrow from "../../blogassets/arrow.svg";
import Link from "next/link";
import img1 from "../../blogassets/Blogs Animation Thumbnail13.jpg";
import img2 from "../../blogassets/Blogs Animation Thumbnail09.jpg";
import { useEffect, useRef, useState } from "react";
import { Linear, gsap } from "gsap";
import img3 from "../../blogassets/Blogs Animation Thumbnail02.jpg";
import Explore from "../../../production/Explore";
import Footer from "../../../../Footer/Footer";
import muheeb from "../../blogassets/muheeb.jpeg";
import Head from "next/head";

const Shopify = () => {
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
  useEffect(() => {
    const lastData = [
      {
        header1: "Shopify Vs Magento: What Is New?",
        back: "Go Back",
        title1: "Now Reading",
        cont1: "Shopify Vs Magento",
        title2: "Also Read",
        cont2: "Empathy in UX",
        cont3: "Storytelling in Marketing",
        date: "20/02/2023",
        writer: "Muheeb Syed Saif",
        para1:
          "If you're a business owner of any kind, you've probably heard of Shopify and Magento.Today, Shopify and Magento are two of the most popular ecommerce platforms for businesses and entrepreneurs.\n\nShopify, with more than 4.1 million online stores, is a user-friendly content management system (CMS) to build and maintain online or e-commerce stores. Users need to pay a monthly fee, and businesses of any size can use the platform.\n\nMagento, which powers over 2.3% of e-commerce stores worldwide, is an open-source platform that is free to install on any computer. However, users have to pay for web hosting, security, and extensions (that work like different applications).\n",
        header2: "What’s New In Shopify?",
        para2:
          "\nIn June 2022, Shopify rolled out a set of new features. Among them are:\n\n\n- Shopify Audiences - a new app that offers insights to identify buyers searching for your products.\n- Shop Cash - a facility that provides buyers with Shop Cash bonuses in millions of dollars as an incentive.\n- Twitter Shopping - Merchants can now sell products directly from their Twitter profiles.\n- B2B on Shopify - Shopify Admin now has wholesale capabilities built right in to allow sellers to run their entire business on the platform.\n- Shopify Point of Sale (POS) - a POS software that allows payments from an iPhone and sells anywhere there is Shopify POS hardware.\n- Linkpop - is a free link-in bio tool designed for commerce through social media and powered by a fast and secure checkout. You can put this shoppable link on your blog, social media handles, playlists, podcasts, etc.\n",
        header3: "What’s New In Magento?",
        para3:
          "A new version of Magento 2.4.5 was released in August 2022. Some of its features are -\n\n\n- Access Control List (ACL)\nPlatform enhancements - Composer 2.2 support has been added to Magento open-source.There are improvements in Magento B2B commerce catalogs while Duplicate SKU data from shared catalogs has been removed. Accessibility improvements - Keyword accessibility and keyboard contrast have been improved, while now screen readers will be informed of every new page load. Payment upgrades - Apple Pay and PayPal Later options have been added. GTag - Google Tags will now aid in smarter Search Engine Optimization (SEO).\n\n",
        header4: "Shopify Or Magento: Which Should You Choose?",
        para4:
          "First up, the decision to choose Shopify or Magento or to switch from one to another should not be based purely on the new or old features. The basis of your decision should be your current business goals, the scalability of your business operations, and your 2023 targets.\n\nAlthough pricing will be an important factor, it is vital to note that while Shopify’s monthly subscription costs less, its add-on features will amount to the equivalent of the extra costs of hosting and security features that Magento charges for.\n\nHere’s a comparison of the two platforms -\n\n",
        header5: "Shopify",
        para5:
          "The big idea behind Shopify is to give business owners the key features to set up an online store in exchange for a monthly subscription. When you buy more Shopify apps, you can go further in terms of customization.\nThis is a no-code mobile and software application development platform that involves the creation of chat boxes, websites, intelligent workflows, and automation. It allows users to connect 300+ apps to simplify further development work.\n\nPros\n- Offers 11 free and 95 premium fully responsive themes\n- Easy drag-and-drop editor to custom, switch, add, remove, and resize elements\n- Multi-channel integration\n- 100+ payment gateways\n- 1200+ apps\n- No coding knowledge is required.\n- Round-the-clock customer support\n- Good for beginners as well as larger stores\n\nCons\n- The editing tool is not as intuitive, and takes some learning curve\n- Overly reliant on paid apps\n- Except for Shopify payments, the transaction fee is expensive\n- The use of apps may hike up monthly costing for retailers\n\n",
        header6: "Magento",
        para6:
          "Being a free open-source platform, Magento allows for changing of the code that allows for customization of templates and functionality. Here are some pros and cons.\nThis is a no-code mobile and software application development platform that involves the creation of chat boxes, websites, intelligent workflows, and automation. It allows users to connect 300+ apps to simplify further development work.\n\nPros\n- A wide range of features allow for multiple stores, multiple locations, languages, pricing, and currencies.\n- Mobile-friendly, and allows for easy creation of a mobile site\n- High scalability, it can support upto 500,000 users and thousands of transactions per hour\n- Great security features\n-Highly flexible\n\nCons\n- Can become time-consuming due to coding requirements or customization\n- You need a dedicated server to host Magento.\n- Product support is expensive\n- May need coding\n\n",
        header7: "Final thoughts",
        para7:
          "While Shopify offers a no-coding and user-friendly platform that can help you run an online shop in no time, Magento’s flexibility may help you scale faster. We suggest you make a decision based on the size of your business, and your future goals. For more information on building an online store that clicks with your customers, feel free to call us.\n",
      },
    ];
    const lastrow = lastData[0];
    setLastRow(lastrow);
    setPara1(lastrow.para1);
    setPara2(lastrow.para2);
    setPara3(lastrow.para4);
    setPara4(lastrow.para5);
    setPara5(lastrow.para6);
    setPara6(lastrow.para7);
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
  };
  useEffect(() => {
    autoAdjustHeight();
  }, [para2]);
  return (
    <>
      <Head>
        <title>Insights - Shopify Vs Magento</title>
        <meta
          name="description"
          content="Compare Shopify and Magento for e-commerce platform selection. Learn about their features, customization options, scalability, and suitability for different business needs. Stay informed with insights from Codelinear."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/insights/shopify-vs-magento"
        />
        <meta
          name="keywords"
          content="Shopify vs Magento, e-commerce platforms, online stores, Shopify features, Magento features, e-commerce scalability, e-commerce customization"
        />
      </Head>
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
              alt="Shopify Vs Magento: What Is New?"
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
                className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
              ></textarea>
              <div className="flex-col justify-start max-md:w-full items-start gap-5 flex w-full">
                <div className="text-black text-[28px] max-md:w-full widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header2}</>}
                </div>
                <textarea
                  type="text"
                  value={para2}
                  disabled
                  ref={textareaRef2}
                  className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="flex-col justify-start max-md:w-full items-start gap-5 flex w-full">
                <div className="text-black text-[28px] max-md:w-full widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header3}</>}
                </div>
              </div>
              <textarea
                type="text"
                value={para3}
                disabled
                ref={textareaRef3}
                className="w-[630px] widescreen:w-full max-md:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
              ></textarea>
              <div className="flex-col max-md:w-full widescreen:w-full justify-start items-start gap-5 flex w-full">
                <div className="text-black text-[28px] max-md:w-full widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.header5}</>}
                </div>
                <textarea
                  type="text"
                  value={para4}
                  disabled
                  ref={textareaRef4}
                  className="w-[630px] max-md:w-full widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="flex-col max-md:w-full widescreen:w-full justify-start items-start gap-5 flex w-full">
                <div className="text-black max-md:w-full text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.header6}</>}
                </div>
                <div className="flex-col max-md:w-full widescreen:w-full justify-start items-start gap-2 flex">
                  <textarea
                    type="text"
                    value={para5}
                    disabled
                    ref={textareaRef5}
                    className="w-[630px] max-md:w-full widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                  ></textarea>
                </div>
              </div>
              <div className="flex-col max-md:w-full widescreen:w-full justify-start items-start gap-5 flex w-full">
                <div className="text-black max-md:w-full text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.header7}</>}
                </div>
                <textarea
                  type="text"
                  value={para6}
                  disabled
                  ref={textareaRef6}
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

export default Shopify;
