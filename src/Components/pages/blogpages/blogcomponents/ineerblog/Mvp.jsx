"use client";
import React from "react";
import Image from "next/image";
import img from "../../blogassets/Blog Inner page Banner11.jpg";
import arrow from "../../blogassets/arrow.svg";
import Link from "next/link";
import img1 from "../../blogassets/Blogs Animation Thumbnail11.jpg";
import img3 from "../../blogassets/Blogs Animation Thumbnail02.jpg";
import img2 from "../../blogassets/Blogs Animation Thumbnail07.jpg";
import Explore from "../../../production/Explore";
import { useEffect, useRef, useState } from "react";
import { Linear, gsap } from "gsap";
// import Head from "next/head";
import axios from "axios";
import Footer from "../../../../Footer/Footer";
import muheeb from "../../blogassets/muheeb.jpeg";
import Head from "next/head";

const Mvp = () => {
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
        header1: "An MVP Is As Good As It Sells",
        para1:
          "g in Marketing\n\nOnly a few months ago, would you have ever imagined that Twitter would be bought by SpaceX and Tesla founder Elon Musk? But the real story is not written by Musk but was written by a group of people back in 2006. Former Google employees Evan Williams and Biz Stones alongwith mastermind Noah Williams began a podcasting platform called Odeo, but then Apple launched its podcasting platform (through iTunes) before they did.\n\nSo along with another team member Jack Dorsey, the three friends decided to launch Twitter - an SMS service platform. But the investors did not like their MVP, and the team had to test the prototype among a small group of users to finally launch it at the right time. If Musk's recent poll (Should he continue as the Twitter CEO?) is any indication, Twitter has continued the culture of testing a new idea, or a feature among the users first before the launch.\n\nWhat's the morale of the story? Testing a product is important. But should that product be complete or barely functional? Here's where your MVP (minimum viable product) becomes crucial. That is easier said than done. Building an MVP that attracts investors enough to fund it is indeed a magic potion that is not complete without the right spells.\nThere are three important principles of MVP building -\n1. Viability Testing\n2. Quick Development\n3. Cost Efficienc\n\nThe bigger idea behind building an MVP is to test your assumptions. That takes us to the next important segment - how to build an MVP that raises money?\n\nOnce you have identified the problem, done your research, you need to get into the business of building an MVP.\n\nHere are some important considerations while building an MVP that makes money -\n",
        date: "19/12/2022",
        writer: "Muheeb Syed Saif",
        back: "Go Back",
        title1: "Now Reading",
        cont1: "Minimum Viable Product",
        title2: "Also Read",
        cont2: "Disruptive Branding",
        cont3: "Storytelling in Marketing",
        header2: "1. Create user profiles",
        para2:
          "While building an MVP, it is crucial to create user profiles based on which your product may be tested among the actual set of users.\n\nHere are some things you may need to create these profiles -\n- Who is my user? Male, female, binary?\n- What are his/her/their likes and dislikes?\n- What do my target users do professionally?\n- What do they do in their free time?\n- Their income, their spending ability\n- Their culture, language, age group\n",
        header3: "2. Make a list of key features",
        para3:
          "Based on the user’s persona, market research, and the problem to be solved, you will now have enough data to list key features of your product, service, or mobile application. Focus on the most essential features of your product. Think of it as a segregation of necessities, comforts, and luxuries. The most important features are those that will solve the most pressing part of the problem.\n\nFor instance, for a taxi aggregator app, the most important features would be locating destinations, calling service, and listing registered drivers to drive taxis. The least important features would be add-ons such as a parcel delivery service or a profile photo of the users, etc.\n",
        header4: "3. Create your MVP",
        para4:
          "Instead of hiring expensive talent, teams, or resources, build a strong framework for your product or service first. And then train your existing team to build upon that framework. Once your team knows your vision, the target audience, and the solution, they will follow the process of MVP development in a more organized way. Create an agile development process based on constant user feedback, and learn as you go. Pay a lot of attention to the ease of use - be it an offline service or product, an app-based service or product - user experience and interface are the most crucial factors.\n",
        header5: "4. Create a marketing strategy",
        para5:
          "Identifying and building an important solution is one thing, marketing the same is quite another.\nFor instance, the whole concept of carpooling has existed in the United States for a long time. But when Lyft was launched, it did not sell its service based on things like cost-saving, or time-saving features but on the concept of ‘ride sharing’. Even though the company was solving those problems, it marketed itself in a way to make carpooling an exciting experience to lure customers.\n\nHere are some things you can do -\n- list features with the most humane appeal\n- create a content strategy around those features\n- identify the best platforms to create a buzz around the product\n- identify product advocates who will testify\n- inquire with friends/employees about what they like best about the product.\n- create clear messaging around the above feedback",
        header6: "5. Launch the product",
        para6:
          "First, focus on delighting your customers instead of sales. It is important that a positive buzz be created around your product or service. Create a feedback loop to help you get consistent feedback on the product.Encourage your early users to rate your service or product or provide feedback for improvement. Actively seek suggestions, and analyze the feedback. The whole point of building an MVP is to learn and improve as you go. This initial feedback will help you course-correct sooner, so your MVP will be ready to show to the investors.\n",
        header7: "Final Thoughts",
        para7:
          "Remember that a product that’s well thought-out, has a solid framework in terms of business and usage, and solves a real-world problem will always find buyers.\nIf you need help building a bestselling MVP, talk to us.\n",
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
        <title>Insights - Minimum Viable Product</title>
        <meta
          name="description"
          content="Learn about the concept of Minimum Viable Product (MVP) and its significance in product development. Explore how building a minimum viable product allows startups and businesses to validate their ideas, gather feedback, and iterate efficiently. Stay informed with insights from Codelinear."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/insights/minimum-viable-product"
        />
        <meta
          name="keywords"
          content="Minimum Viable Product, MVP, product development, startup, agile methodology, lean startup, product validation, iterative development"
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
              alt="An MVP Is As Good As It Sells"
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
                href="/insights/the-art-of-disruptive-branding"
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
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
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
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.header5}</>}
                </div>
                <div className="flex-col justify-start items-start gap-2 flex w-full">
                  <textarea
                    type="text"
                    value={para5}
                    disabled
                    ref={textareaRef5}
                    className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                  ></textarea>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex w-full">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px]">
                  {lastRow && <>{lastRow.header6}</>}
                </div>
                <div className="flex-col justify-start items-start gap-2 flex w-full">
                  <textarea
                    type="text"
                    value={para6}
                    disabled
                    ref={textareaRef6}
                    className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                  ></textarea>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex w-full">
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

export default Mvp;
