"use client";
import React from "react";
import Image from "next/image";
import img from "../../blogassets/Blog Inner page Banner09.jpg";
import arrow from "../../blogassets/arrow.svg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Linear, gsap } from "gsap";
import img1 from "../../blogassets/Blogs Animation Thumbnail09.jpg";
import img3 from "../../blogassets/Blogs Animation Thumbnail07.jpg";
import img2 from "../../blogassets/Blogs Animation Thumbnail11.jpg";
import Explore from "../../../production/Explore";
import Footer from "../../../../Footer/Footer";
import muheeb from "../../blogassets/muheeb.jpeg";
import Head from "next/head";

const Empathy = () => {
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

  useEffect(() => {
    const lastData = [
      {
        header1: "Empathy In UX\r\n",
        para1:
          "Since 1989, Intuit (maker of Quickbooks, Mint, and TurboTax) has run a “Follow me Home ” program that involves questionnaires, observations, interviews, etc. with the actual users at workplaces where Intuit’s products are being used. The goal of the program is to find out how customers use the product, what they like and don’t, and what challenges they may have.\r\n\r\nAnd what does Intuit do with all these insights? They change, modify, or tweak their products. Not kidding. For instance, the 2006 version of one of their products, Quicken, had 121 customer-recommended improvements. [Source]\r\n\r\nHarley-Davidson has carefully adjusted the voices of its motors to please its customers’ ears. In fact, they have sued competitors who have imitated their motor voices.\r\n\r\nThe ability to get into your customers’ shoes results in user empathy. Intuit and Harley-Davidson are just two of the many companies worldwide that have mastered the art of empathy in User Experience (UX) design.\r\n\r\n\r\n\r\n",
        header2: "What Is Empathy?\r\n",
        para2:
          "Empathy is a foundational principle in the concept of design thinking – a user-based approach to problem-solving that combines hands-on testing of a product or service with the actual users.\r\n\r\nEmpathy is thus a crucial factor in UX design because it involves the usability and function of products, and services in the environment of the users. Empathy allows product design teams to identify which ideas need more testing before they commit to a development or re-design project.\r\n",
        header3: "Why Is Empathy So Important In UX?\r\n",
        para3:
          "The story is told of a local cafe in London that was particularly concerned about the complaints the staff was getting about ‘really bad tea. The first and most obvious conclusion that the cafe owner made was that the chef was only three months old. But he couldn’t afford to fire the new chef. So the owner introduced the concept of MYOT (make your own tea) and put it on the menu. Those who opted for MYOT were given hot water in a teapot, a side of milk, sugar, and three kinds of tea leaves. The customers were also asked to set aside a tiny cup of the tea they made for the staff to taste later.\r\n\r\nAfter many MYOTs, the owner instructed the chef to brew two types of tea leaves, one stronger and one lighter. Interestingly, those who preferred a stronger tea had an Irish background, while those who preferred their tea lighter were mostly London natives.\r\n\r\nIn case we haven’t made it obvious already, empathy is crucial in UX. However, it does not appear to come naturally to designers in general, and especially to UX designers. In fact, 2009 research stated that professionals working in the technology field have lower empathy. When there’s a disconnect between a designer and the end user, the product or application may fail.\r\n\r\n\r\n",
        header4: "Here's Why Empathy Is Essential In UX Design-\r\n",
        header5: "1. User Interactions\r\n",
        para4:
          'When Nielsen Norman Group’s co-founder Don Norman coined the term ‘user experience’ in the 1990s, empathy was at the heart of his definition. Norman said, "User experience encompasses all aspects of the end-user’s interaction with the company, its services, and its products." By interaction Norman meant how a user fits your product into his environment or circumstances, and makes use of it. Empathizing with users involves studying their environment, living conditions, and preferences, among other things. These factors help UX designers get the users’ perspective during application development\r\n\r\n',
        header6: "2. Enhancing UX\r\n",
        para5:
          "UX is really about what users think, and feel. Human beings, by nature, are both emotional and rational. How a user perceives a product is never purely based on its features but also how he or she feels while using it. Empathy enables designers to infuse users’ emotions while enhancing the user experience. Take for instance, the UX of Amazon’s smart devices, which is enhanced by the AI assistant Alexa because of its ability to interact in the users’ language, and gauge emotions. Amazon developers chose the name Alexa because it has a hard consonant with the ‘x’ , a factor that helps people of any language or ethnicity recognize the name with greater precision.\r\n",
        header7: "3. Recognizing the context\r\n",
        para6:
          "You can never understand people’s circumstances unless you have been in similar situations yourself. Empathy pushes designers to go out of their way to understand the context as well as the relevance of the product within a user’s environment.\r\n",
        header8: "4. Changing preferences",
        para7:
          "Ongoing empathy towards users also leads to a deeper connection with users, where UX may be made intuitive based on the changing preferences of users. Just like how we saw it in Intuit’s feedback exercise, regular and active observations about customers' expectations have helped the company anticipate user needs and tweak products.\r\n",
        header9: "Final Thoughts\r\n",
        para8:
          "Users are indeed changing every day. They are evolving with each new product, each new application, and each new feature. Millions of use cases are created unintentionally by users before companies. In this context, it is hard to imagine the user experience without user empathy. Creating user profiles, observing, prototyping, and testing are essential parts of empathetic design. Unless we learn to think and act like users, we cannot build lasting products that will always stay relevant. There’s no UX without empathy.\r\n\r\nAs a leading UI/UX Design Agency, Codelinear delivers well-crafted design services that can bring your ideas to life and make your web/app stand out. If you are looking for empathetic UX/UI design, do call us.\r\n",
        date: "10/10/22",
        writer: "Muheeb Syed Saif",
        title1: "Now Reading",
        cont1: "Empathy In UX",
        title2: "Also Read",
        cont2: "Minimum Viable Product",
        cont3: "Disruptive Brading",
        back: "Go Back",
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
  };
  useEffect(() => {
    autoAdjustHeight();
  }, [para2]);
  return (
    <>
      <Head>
        <title>Insights - Empathy In UX</title>
        <meta
          name="description"
          content="Discover the importance of empathy in UX (User Experience) design and how it contributes to creating more intuitive and user-friendly digital products. Learn about empathy-driven design principles, techniques, and case studies. Stay informed with insights from Codelinear."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/insights/empathy-in-ux"
        />
        <meta
          name="keywords"
          content="empathy in UX, user experience design, empathy-driven design, user-centered design, UX design principles, empathy techniques, UX case studies"
        />
      </Head>
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
              alt="Empathy In UX"
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
              <div className="w-[232px] h-[65px] left-[81px] top-[242px] absolute border border-black border-opacity-10 max-lg:hidden">
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
                href="/insights/the-art-of-disruptive-branding"
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
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header5}</>}
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
                  {lastRow && <>{lastRow.header6}</>}
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
              <div className="flex-col justify-start items-start gap-5 flex w-full">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header8}</>}
                </div>
                <textarea
                  type="text"
                  value={para7}
                  disabled
                  ref={textareaRef7}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>

              <div className=" w-full flex-col justify-start items-start gap-2 flex">
                <div className="w-[630px]  widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-black text-xl font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                  {lastRow && <>{lastRow.header9}</>}
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
          </div>
          <Explore />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Empathy;
