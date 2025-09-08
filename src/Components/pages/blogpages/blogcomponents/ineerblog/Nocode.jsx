"use client";
import React from "react";
import Image from "next/image";
import img from "../../blogassets/Blog Inner page Banner14.jpg";
import img1 from "../../blogassets/Blogs Animation Thumbnail14.jpg";
import arrow from "../../blogassets/arrow.svg";
import Link from "next/link";
import muheeb from "../../blogassets/muheeb.jpeg";
import img2 from "../../blogassets/Blogs Animation Thumbnail10.jpg";
import { useEffect, useRef, useState } from "react";
import { Linear, gsap } from "gsap";
import img3 from "../../blogassets/Blogs Animation Thumbnail11.jpg";
import Explore from "../../../production/Explore";
import Footer from "../../../../Footer/Footer";
import Head from "next/head";

const Nocode = () => {
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
  const [para10, setPara10] = useState(null);
  const [para11, setPara11] = useState(null);
  useEffect(() => {
    const lastData = [
      {
        header1: "No-Code Revolution: 5 Platforms To Keep An Eye On In 2023",
        back: "Go Back",
        title1: "Now Reading",
        cont1: "No-Code Revolution",
        title2: "Also Read",
        cont2: "Digital Marketing",
        cont3: "Gestalt Psychology",
        para1:
          "When Ole Kirk Christiansen went out of business back in the 1930s, little did he know that the scraps from his furniture factory would help build a whole new business during the world recession. Ole along with his son Godtfred founded Lego (meaning ‘put together’ in Latin) - a company that sold toys made of fine wood.\n\nHowever, after a decade of selling those toys while braving the Great Depression and the Second World War, Godtfred felt this business model wasn’t quite right. Lego was not the only toy-producing company. Meanwhile his father Ole couldn’t get his mind off of a brick-like toy made of plastic, that he had seen many years ago in a business exhibition. Both the men put together the idea and created what Lego is today - a set of building blocks that allows children to put their imagination to work.\n\nThe no-code creation in a website and application development is perhaps moving in the Lego direction. A kind of app development that allows creative freedom to build apps without much technical knowledge.\n\nThe No-code revolution is indicative that modern businessmen and women want to keep creative control in their own hands when it comes to developing websites or mobile applications. No-code is really for the businesses who wish to personalize their product or service branding, and it does not mean that no-code platforms can only produce simple apps.",
        header2: "A No-Code Revolution Is Brewing",
        para2:
          "Forbes reported in 2021 that “60% of all custom apps were being developed outside of the IT department while 40% of these users worked in a professional setting.” Many businesses today are opting for no-code creation for several reasons, one of them being faster time to market.\n\n",
        header3: "What Are No-Code Platforms?",
        para3:
          "No-code tools or platforms are basically programming styles and methodologies that do not require coding. Instead, these platforms use GUI (Graphical User Interface) tools to create websites or mobile applications. A user does not need to be either a coder or a developer but someone who knows the basics of using keyboard tools such as click, drag, drop, and scroll.\n\n\n",
        header4: "Benefits Of No-Code",
        subhead1: "1. Better allocation of IT/engineer hours :",
        subpara1:
          "-Since no-code platforms are more like drag-and-drop tools, business users need not employ coders and engineers in the website and application development. This technical workforce then can be applied towards mission-critical work.",
        subhead2: "2. Faster time to market :",
        subpara2:
          "When it comes to developing a business website or a mobile application, a business needs to go through several rounds of approvals and iterations. With no-code platforms, the task can be allotted only to a few employees after approvals from the upper management. This reduces the approval and development time, and your product or service may come out in the market in much less time.\n",
        subhead3: "3. Cost reduction :",
        subpara3:
          "Through no-code environments, you can create more applications in less time and resources, which leads to lower costs. It also reduces the costs of hiring since coders or developers are not needed for launching web or mobile apps.\n",
        header5: "Some Of The Best No-Code Platforms To Watch Out In 2023",
        suhead4: "1. Appy Pie",
        subpara4:
          "This is a no-code mobile and software application development platform that involves the creation of chat boxes, websites, intelligent workflows, and automation. It allows users to connect 300+ apps to simplify further development work.\n\nPros\n- User friendly\n- Quick customer support\n- Automates tasks\n- Can build and launch chatbots\n- Custom mobile app development\n\nCons\n- No webview button on the main menu\n",
        subhead5: "2. Webflow",
        subpara5:
          "The platform has been around for quite some time and has evolved to be more than just a website builder. It allows users to create responsive software and websites with absolute web design freedom. Compared to traditional website development platforms such as Wix or WordPress, Webflow offers more customization options.\n\nPros\n- Allows building of custom databases for CMS and e-commerce stores\n- Hassle-free hosting network\n- 999.9% uptime\n- Zero maintenance\n\nCons\n- Compared to other web builders, it is difficult to use\n- Expensive for small businesses\n- No live chat or phone support",
        subhead6: "3. Bubble.io",
        subpara6:
          "Bubble allows for easy custom web application development offering a wide range of features including databases, APIs, and e-commerce. Bubble is the most suitable web application builder for SaaS entrepreneurs who are testing a prototype or businesses intending to launch tools/apps quickly.\n\nPros\n- User-friendly\n- Free version has enough features\n- Paid subscription gives access to a wide range of features\n- Thriving user community of 300,000 people\n\nCons\n- Cannot test plugins before buying",
        subhead7: "4. Bildr",
        subpara7:
          "Non-technical startup entrepreneurs use Bildr to create functional and stunning websites for testing prototypes or for reiteration of ideas. You can create web applications or SaaS products using Bildr.\n\nPros\n- Precoded building blocks\n- Functional APIs to retrieve data\n- Real-time collaboration with integrated apps\n\nCons\n- May require some coding knowledge\n- Best only for simple Web3 decentralised applications",
        subhead8: "5. Thunkable",
        subpara8:
          "Thunkable is a drag-and-drop no-code application builder that’s designed specifically for building native mobile applications. It offers a wide variety of options for customizing the look and feel of your iOS or Android app. That’s because it provides a blank canvas to build the applications from blocks, modules, and integrations with other platforms. You can put together your user interface (UI), and advanced logic modules, and handle the functionality of your app.\n\nPros\n- Assistance with publishing your app on App Store and Google Play\n- Perfect for native apps building\n- Advanced logic workflow builder\n\nCons\n- Advanced features building takes technical skills\n- Hard to detect bugs\n",
        date: "02/01/2023",
        writer: "Muheeb Syed Saif",
      },
      {
        header1: "No-Code Revolution: 5 Platforms To Keep An Eye On In 2023",
        back: "Go Back",
        title1: "Now Reading",
        cont1: "No-Code Revolution",
        title2: "Also Read",
        cont2: "Digital Marketing",
        cont3: "Gestalt Psychology",
        para1:
          "When Ole Kirk Christiansen went out of business back in the 1930s, little did he know that the scraps from his furniture factory would help build a whole new business during the world recession. Ole along with his son Godtfred founded Lego (meaning ‘put together’ in Latin) - a company that sold toys made of fine wood.\n\nHowever, after a decade of selling those toys while braving the Great Depression and the Second World War, Godtfred felt this business model wasn’t quite right. Lego was not the only toy-producing company. Meanwhile his father Ole couldn’t get his mind off of a brick-like toy made of plastic, that he had seen many years ago in a business exhibition. Both the men put together the idea and created what Lego is today - a set of building blocks that allows children to put their imagination to work.\n\nThe no-code creation in a website and application development is perhaps moving in the Lego direction. A kind of app development that allows creative freedom to build apps without much technical knowledge.\n\nThe No-code revolution is indicative that modern businessmen and women want to keep creative control in their own hands when it comes to developing websites or mobile applications. No-code is really for the businesses who wish to personalize their product or service branding, and it does not mean that no-code platforms can only produce simple apps.",
        header2: "A No-Code Revolution Is Brewing",
        para2:
          "Forbes reported in 2021 that “60% of all custom apps were being developed outside of the IT department while 40% of these users worked in a professional setting.” Many businesses today are opting for no-code creation for several reasons, one of them being faster time to market.\n\n",
        header3: "What Are No-Code Platforms?",
        para3:
          "No-code tools or platforms are basically programming styles and methodologies that do not require coding. Instead, these platforms use GUI (Graphical User Interface) tools to create websites or mobile applications. A user does not need to be either a coder or a developer but someone who knows the basics of using keyboard tools such as click, drag, drop, and scroll.\n\n\n",
        header4: "Benefits Of No-Code",
        subhead1: "1. Better allocation of IT/engineer hours :",
        subpara1:
          "-Since no-code platforms are more like drag-and-drop tools, business users need not employ coders and engineers in the website and application development. This technical workforce then can be applied towards mission-critical work.",
        subhead2: "2. Faster time to market :",
        subpara2:
          "When it comes to developing a business website or a mobile application, a business needs to go through several rounds of approvals and iterations. With no-code platforms, the task can be allotted only to a few employees after approvals from the upper management. This reduces the approval and development time, and your product or service may come out in the market in much less time.\n",
        subhead3: "3. Cost reduction :",
        subpara3:
          "Through no-code environments, you can create more applications in less time and resources, which leads to lower costs. It also reduces the costs of hiring since coders or developers are not needed for launching web or mobile apps.\n",
        header5: "Some Of The Best No-Code Platforms To Watch Out In 2023",
        suhead4: "1. Appy Pie",
        subpara4:
          "This is a no-code mobile and software application development platform that involves the creation of chat boxes, websites, intelligent workflows, and automation. It allows users to connect 300+ apps to simplify further development work.\n\nPros\n- User friendly\n- Quick customer support\n- Automates tasks\n- Can build and launch chatbots\n- Custom mobile app development\n\nCons\n- No webview button on the main menu\n",
        subhead5: "2. Webflow",
        subpara5:
          "The platform has been around for quite some time and has evolved to be more than just a website builder. It allows users to create responsive software and websites with absolute web design freedom. Compared to traditional website development platforms such as Wix or WordPress, Webflow offers more customization options.\n\nPros\n- Allows building of custom databases for CMS and e-commerce stores\n- Hassle-free hosting network\n- 999.9% uptime\n- Zero maintenance\n\nCons\n- Compared to other web builders, it is difficult to use\n- Expensive for small businesses\n- No live chat or phone support",
        subhead6: "3. Bubble.io",
        subpara6:
          "Bubble allows for easy custom web application development offering a wide range of features including databases, APIs, and e-commerce. Bubble is the most suitable web application builder for SaaS entrepreneurs who are testing a prototype or businesses intending to launch tools/apps quickly.\n\nPros\n- User-friendly\n- Free version has enough features\n- Paid subscription gives access to a wide range of features\n- Thriving user community of 300,000 people\n\nCons\n- Cannot test plugins before buying",
        subhead7: "4. Bildr",
        subpara7:
          "Non-technical startup entrepreneurs use Bildr to create functional and stunning websites for testing prototypes or for reiteration of ideas. You can create web applications or SaaS products using Bildr.\n\nPros\n- Precoded building blocks\n- Functional APIs to retrieve data\n- Real-time collaboration with integrated apps\n\nCons\n- May require some coding knowledge\n- Best only for simple Web3 decentralised applications",
        subhead8: "5. Thunkable",
        subpara8:
          "Thunkable is a drag-and-drop no-code application builder that’s designed specifically for building native mobile applications. It offers a wide variety of options for customizing the look and feel of your iOS or Android app. That’s because it provides a blank canvas to build the applications from blocks, modules, and integrations with other platforms. You can put together your user interface (UI), and advanced logic modules, and handle the functionality of your app.\n\nPros\n- Assistance with publishing your app on App Store and Google Play\n- Perfect for native apps building\n- Advanced logic workflow builder\n\nCons\n- Advanced features building takes technical skills\n- Hard to detect bugs\n",
        date: "02/01/2023",
        writer: "Muheeb Syed Saif",
      },
    ];
    const lastRow = lastData[0];

    setLastRow(lastRow);
    setPara1(lastRow.para1);
    setPara2(lastRow.para2);
    setPara3(lastRow.para3);
    setPara4(lastRow.subpara1);
    setPara5(lastRow.subpara2);
    setPara6(lastRow.subpara3);
    setPara7(lastRow.subpara4);
    setPara8(lastRow.subpara5);
    setPara9(lastRow.subpara6);
    setPara10(lastRow.subpara7);
    setPara11(lastRow.subpara8);
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
      <Head>
        <title>Insights - No-code Revolution</title>
        <meta
          name="description"
          content="Explore the no-code revolution and its impact on software development. Learn about the rise of no-code platforms, their benefits, and their potential to democratize software creation. Stay informed with insights from Codelinear."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/insights/no-code-revolution"
        />
        <meta
          name="keywords"
          content="no-code revolution, no-code platforms, software development, app development, no-code tools, low-code development, democratization of software"
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
              alt="No-Code Revolution: 5 Platforms To Keep An Eye On In 2023"
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
                        {" "}
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
                className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
              ></textarea>
              <div className="flex-col widescreen:w-full justify-start items-start gap-5 flex max-md:w-full">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header2}</>}
                </div>
                <textarea
                  type="text"
                  value={para2}
                  disabled
                  ref={textareaRef2}
                  className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="flex-col widescreen:w-full max-md:w-full justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] max-md:w-full widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.header3}</>}
                </div>
                <textarea
                  type="text"
                  value={para3}
                  disabled
                  ref={textareaRef3}
                  className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="flex-col widescreen:w-full max-md:w-full justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.header4}</>}
                </div>
                <div className="flex-col justify-start items-start gap-2 flex w-full">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    {lastRow && <>{lastRow.subhead1}</>}
                  </div>
                  <textarea
                    type="text"
                    value={para4}
                    disabled
                    ref={textareaRef4}
                    className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                  ></textarea>
                </div>
                <div className="flex-col widescreen:w-full justify-start items-start gap-2 flex w-full">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    {lastRow && <>{lastRow.subhead2}</>}
                  </div>
                  <textarea
                    type="text"
                    value={para5}
                    disabled
                    ref={textareaRef5}
                    className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                  ></textarea>
                </div>
                <div className="flex-col widescreen:w-full justify-start items-start gap-2 flex w-full">
                  <div className="w-[630px] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                    {lastRow && <>{lastRow.subhead3}</>}
                  </div>
                  <textarea
                    type="text"
                    value={para6}
                    disabled
                    ref={textareaRef6}
                    className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                  ></textarea>
                </div>
              </div>
              <div className="flex-col widescreen:w-full justify-start items-start gap-5 flex max-md:w-full">
                <div className="w-[627.31px] text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header5}</>}
                </div>
                <div className="flex-col widescreen:w-full max-md:w-full justify-start items-start gap-7 flex">
                  <div className="flex-col justify-start items-start gap-2 flex w-full">
                    <div className="w-[630px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                      {lastRow && <>{lastRow.suhead4}</>}
                    </div>
                    <textarea
                      type="text"
                      value={para7}
                      disabled
                      ref={textareaRef7}
                      className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                  <div className="flex-col widescreen:w-full justify-start items-start gap-2 flex w-full">
                    <div className="w-[630px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                      {lastRow && <>{lastRow.subhead5}</>}
                    </div>
                    <textarea
                      type="text"
                      value={para8}
                      disabled
                      ref={textareaRef8}
                      className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                  <div className="flex-col widescreen:w-full justify-start items-start gap-2 flex w-full">
                    <div className="w-[630px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                      {lastRow && <>{lastRow.subhead6}</>}
                    </div>
                    <textarea
                      type="text"
                      value={para9}
                      disabled
                      ref={textareaRef9}
                      className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                  <div className="flex-col widescreen:w-full justify-start items-start gap-2 flex w-full">
                    <div className="w-[630px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                      {lastRow && <>{lastRow.subhead7}</>}
                    </div>
                    <textarea
                      type="text"
                      value={para10}
                      disabled
                      ref={textareaRef10}
                      className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                  <div className="flex-col widescreen:w-full justify-start items-start gap-2 flex w-full">
                    <div className="w-[630px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                      {lastRow && <>{lastRow.subhead8}</>}
                    </div>
                    <textarea
                      type="text"
                      value={para11}
                      disabled
                      ref={textareaRef11}
                      className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Explore />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Nocode;
