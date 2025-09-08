"use client";
import React from "react";
import Image from "next/image";
import img from "../../blogassets/Frame 1000001793.png";
import arrow from "../../blogassets/arrow.svg";
import Link from "next/link";
import img2 from "../../blogassets/Blogs Animation Thumbnail03.jpg";
import img3 from "../../blogassets/Blogs Animation Thumbnail06.jpg";
import { useEffect, useState, useRef } from "react";
import { Linear, gsap } from "gsap";
import Explore from "../../../production/Explore";
import muheeb from "../../blogassets/muheeb.jpeg";
import Head from "next/head";

const Ai = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  const render = useRef(null);
  const marquee1 = useRef(null);
  const marquee2 = useRef(null);
  const marquee3 = useRef(null);

  const [lastRow, setLastRow] = useState(null);
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
        header1: "AI-Powered Design Tools\r\n",
        para1:
          "So, AI finally became a thing. It is wildly different from its dystopian counterpart in sci-fi movies. It was supposed to control and destroy humanity. Surprisingly, it is creating things, which was thought to be not possible just a few years ago..\r\n\r\nActually, no. The previous statement is flawed. AI by itself cannot create anything. It still needs humans to give prompts, to guide it. AI at this stage is just a mere tool. Something that aids us with the completion of a task. There are speculations that AI one day might take over people’s jobs. Well if it does, who cares? A global poll conducted by Gallup says that 85% of the world's one billion full-time workers are unhappy at their jobs.\r\n\r\nSome might say the chaos AI is causing in many disciplines is similar to what mathematicians felt when the digital calculator was introduced (yes, a very bad analogy. But it gets the point through). Can it be of any use without the person using it? No. Did it replace mathematicians? Absolutely not. Did it help them solve complex problems? Yes.\r\n\r\nWell, that went on a tangent. Instead of worrying about who loses their job and who doesn’t, here are a few AI tools hand-picked by yours truly to help you stay ahead of the competition and keep your job.\r\n\r\n\r\n",
        header2: "Khroma\r\n",
        para2:
          "This is an AI color pair generation tool. You have to select 50 (yes 50) colors from pre-existing colors while getting started. This trains the AI model and after a few minutes, you will have infinite color pairs available for you to choose from. Khroma also has a “bias” system where you get to control the percentage of color pairs that are the ones you picked vs color pairs that are added by the AI model. What makes this tool stand out is- you can choose to generate color palettes and gradients from the chosen and suggested colors. And you can always go back and change the 50 colors.\r\n\r\n",
        header3: "Fontjoy\r\n",
        para3:
          "The story is told of a local cafe in London that was Fontjoy is pretty straightforward. No signing up, no getting started just straight to generating fresh and interesting font pairs. You get a slider to select the amount of contrast between the fonts. On top of this, if you already have some fonts in mind and want to see how they pair up, you can select them manually. Here’s where its drawback comes to light. Unfortunately, you can only select fonts from Google Fonts. But look at the bright side, while Google Fonts can be limiting, it has a collection of over 1,400 fonts so I’m sure you will come across something interesting.\r\n",
        header4: "Autodraw\r\n",
        para4:
          "Autodraw is more like MS Paint with AI. It is very easy to use and is quick at predicting what you are trying to draw. You can create vector-like artwork quickly, but that's the only thing you can create. The artwork from the database will pretty much remain the same and won’t change based on the look you are going for. For example, no matter how stylistic you want to show a smiley, the AI will recognize it as a smiley and give you 3 smiley faces to pick from. These 3 will remain the same for the smiley section. So, it can get repetitive. But for someone who is looking to create some nice vector line art quickly, this might just be a goldmine.\r\n\r\n",
        header5: "Art Breeder\r\n",
        para5:
          "Art Breeder is a powerhouse when it comes to artwork generation, manipulation. It uses GANs (Generative Adversarial Networks) to generate artwork. There are many features to explore. What stood out the most is a feature called “Director”. You get an AI assistant that writes prompts for you and generates the artwork and all of this is free of credits.\r\n\r\nThe Mixer feature is also very powerful. It uses already existing images (from your device or its ever-growing community) as a “visual” version of a prompt to generate artwork out of the elements present in the images. This can be a major help for those struggling with prompts and cannot generate the artwork which they have in mind.\r\n\r\n",
        header6: "Framer\r\n",
        para6:
          "Using Framer you can build a homepage in less than 2 minutes. It also allows you to change the color palette and the font post-generation. You can also edit individual sections manually. Though the art direction cannot be interpreted exactly and you might get results different than the one you had in mind, it's a great starting point. You can also choose from their extensive templates if AI doesn’t work out for you. Overall, Framer is a great tool to build and publish websites quickly (especially if it's a single page).\r\n\r\n",
        header7: "Final Thoughts\r\n",
        para7:
          "Alright, so let's wrap this up! AI design tools are basically like the creative Swiss Army knives of the digital world. These tools aim to streamline and enhance the design workflow by automating tasks, generating design elements, and providing suggestions based on algorithms and data analysis. By doing so, AI design tools can potentially increase efficiency and free up designers to focus on higher-level creative decisions.\r\n\r\nThe impact of AI on design is an ongoing topic of discussion, with both potential benefits and ethical considerations being debated within the design community and beyond.\r\n\r\n",
        date: "21/02/2024",
        writer: "Muheeb Syed Saif",
        back: "Go Back",
        title1: "Now Reading",
        cont1: "AI-Powered Design Tools\r\n",
        title2: "Also Read",
        cont2: "Gestalt Psychology",
        cont3: "The Changing Nature of SEO",
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
  const textareaRef = useRef(null);
  const textareaRef1 = useRef(null);
  const textareaRef2 = useRef(null);
  const textareaRef3 = useRef(null);
  const textareaRef4 = useRef(null);
  const textareaRef5 = useRef(null);
  const textareaRef6 = useRef(null);

  const autoAdjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
    if (textareaRef1.current) {
      textareaRef1.current.style.height = "auto";
      textareaRef1.current.style.height =
        textareaRef1.current.scrollHeight + "px";
    }
    if (textareaRef2.current) {
      textareaRef2.current.style.height = "auto";
      textareaRef2.current.style.height =
        textareaRef2.current.scrollHeight + "px";
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
        <title>Insights - AI-Powered Design Tools</title>
        <meta
          name="keywords"
          content="artificial intellegence, ai services, blog, insights, ai blog, ai insights, ai design, design tools, Codelinear"
        />
        <link
          rel="canonical"
          href="https://codelinear.com/insights/ai-powered-design-tools"
        />
        <meta
          name="description"
          content="Discover how AI-powered design tools revolutionize the creative process. Learn about the latest advancements in artificial intelligence applied to design, including automated layout generation, image recognition, and content creation. Stay updated with insights from Codelinear."
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
            alt="CEO Muheeb"
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
              alt=""
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
                href="/insights/gestalt-psychology"
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
                        {" "}
                        {lastRow && <>{lastRow.cont2}</>}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                onClick={scrollToTop}
                href="/insights/the-changing-nature-of-seo"
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
                ref={textareaRef}
                className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
              ></textarea>
              <div className="flex-col w-full justify-start items-start gap-5 flex">
                <div className="text-black widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] text-[28px] letter-spacing-3 font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header2}</>}
                </div>{" "}
                <textarea
                  type="text"
                  value={para2}
                  disabled
                  ref={textareaRef1}
                  className="w-[630px] widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] resize-none opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="flex-col w-full justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] letter-spacing-3 font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header3}</>}
                </div>
                <textarea
                  type="text"
                  value={para3}
                  disabled
                  ref={textareaRef2}
                  className="w-[630px] resize-none widescreen:w-full widescreen:text-[20px] widescreen:text-[24px] opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="flex-col w-full justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] letter-spacing-3 font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header4}</>}
                </div>
                <textarea
                  type="text"
                  value={para4}
                  disabled
                  ref={textareaRef3}
                  className="w-[630px] resize-none widescreen:text-[20px] widescreen:text-[24px] widescreen:w-full opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="flex-col w-full justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] letter-spacing-3 font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header5}</>}
                </div>
                <textarea
                  type="text"
                  value={para5}
                  disabled
                  ref={textareaRef4}
                  className="w-[630px] resize-none opacity-80 widescreen:text-[20px] widescreen:text-[24px] widescreen:w-full text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
              <div className="flex-col w-full justify-start items-start gap-5 flex">
                <div className="text-black text-[28px] widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] letter-spacing-3 font-normal font-['Graphik'] leading-[34.16px] max-md:w-full">
                  {lastRow && <>{lastRow.header6}</>}
                </div>
                <textarea
                  type="text"
                  value={para6}
                  disabled
                  ref={textareaRef5}
                  className="w-[630px] resize-none widescreen:text-[20px] widescreen:text-[24px] widescreen:w-full opacity-80 text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>

              <div className="flex-col justify-start items-start gap-2 flex w-full">
                <div className="w-[630px] text-black text-xl widescreen:text-[32px] widestscreen:text-[40px] widescreen:leading-[120%] font-normal font-['Graphik'] leading-[30px] max-md:w-full">
                  {lastRow && <>{lastRow.header7}</>}
                </div>
                <textarea
                  type="text"
                  value={para7}
                  disabled
                  ref={textareaRef6}
                  className="w-[630px] resize-none opacity-80 widescreen:text-[20px] widescreen:text-[24px] widescreen:w-full text-black bg-white text-base font-normal font-['Graphik'] leading-normal max-md:w-full max-sm:text-justify"
                ></textarea>
              </div>
            </div>
          </div>
          <Explore />
        </div>
      </div>
    </>
  );
};

export default Ai;
