"use client";
import AI1 from "./assets/Component 138.png";
import AI2 from "./assets/Frame 1000003257.png";
import arrow from "../../Navbar/Frame 1000002996.svg";
import Footer from "../../Footer/Footer";
import Aicomponent from "./aicomponent";
import gsap from "gsap";
import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
// import Head from "next/head";
const AboutAistudio = () => {
  const form = useRef(null);
  const image = useRef(null);
  const imagecontainer = useRef(null);
  const handlehover = () => {
    gsap.to(image.current, 0.5, { opacity: 0 });
    gsap.to(imagecontainer.current, 0.5, { background: "#00020C" });
    gsap.to(form.current, 0.5, { opacity: 1 });
  };
  const handleUnhover = () => {
    gsap.to(image.current, 0.3, { opacity: 1 });
    gsap.to(imagecontainer.current, 0.5, { background: "transparent" });
    gsap.to(form.current, 0.3, { opacity: 0 });
  };
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://codelinear.com/ai-studio/about-vacation-ai"
        />
        <title>Codelinear - Vacation AI</title>
      </Head>
      <main className="px-[80px] pt-[77px] max-lg:px-[40px] max-sm:px-[20px]">
        <h1 className="text-[66.23px] max-lg:w-full widescreen:text-[76px] widestscreen:text-[90px] widestscreen:mb-[104px] widescreen:w-[870px] widestscreen:w-[1100px] max-sm:text-[50px] max-sm:leading-[56px] leading-[108%] tracking-[-1.9px] mb-[52px] w-[737.69px]">
          We get it. Most of us don’t like planning.
        </h1>
        <div
          onMouseEnter={handlehover}
          onMouseLeave={handleUnhover}
          className="relative"
        >
          <div
            ref={form}
            className="absolute max-md:bg-white max-md:px-[20px] max-md:top-[-20px] rounded-[13px] justify-center z-[10] max-2md:pt-[20px] max-md:py-[20px] max-md:shadow-lg pt-[168px] max-xl:pt-[80px] opacity-0 w-full flex flex-col items-center"
          >
            <h1 className="w-[502.48px] widescreen:w-[660px] widescreen:w-[800px] widescreen:text-[40px] widescreen:leading-[120%] widestscreen:text-[50px] max-sm:text-[28px] max-sm:leading-[32px] max-sm:tracking-[-0.56px] max-md:w-full max-2md:text-[32px] max-md:text-black max-2md:leading-[36px] text-[#FFFFFF] font['Graphikthin'] tracking-[-0.72px] text-[36.07px] leading-[43.28px] text-center">
              Tell us more about yourself before trying out Vacation.AI.
            </h1>
            <input
              type="text"
              placeholder="Your name"
              className="border-[#B2B2B2] max-xl:mt-[30px] mt-[53.18px] widescreen:w-[500px] widestscreen:w-[600px] widescreen:text-[20px] widescreen:text-[24px] w-[331.07px] h-[64.62px] rounded-[34px] pl-[32.12px] placeholder:text-[#E1FAFF80] max-md:placeholder:text-black max-md:w-full max-md:h-[52px] text-[16px]  border-[0.67px] bg-[#FFFFFF0D]"
            />
            <input
              type="text"
              placeholder="Your email"
              className="border-[#B2B2B2] mt-[19.88px] max-2md:mb-[19.88px] widescreen:w-[500px] widestscreen:w-[600px] widescreen:text-[20px] widescreen:text-[24px] mb-[31.81px] w-[331.07px] h-[64.62px] rounded-[34px] pl-[32.12px] placeholder:text-[#E1FAFF80] max-md:placeholder:text-black max-md:w-full max-md:h-[52px] text-[16px]  border-[0.67px] bg-[#FFFFFF0D]"
            />
            <button className="w-[331px] widescreen:text-[20px] widescreen:text-[24px] widescreen:w-[500px] widestscreen:w-[600px] max-md:w-full h-[56px] text-white rounded-[31px] bg-[#0F1599] text-base widescreen:text-[20px] widescreen:text-[24px] max-mini:w-full">
              Proceed
            </button>{" "}
            <p className="mt-[24.79px] max-2md:mt-[19.88px] widescreen:text-[20px] widescreen:text-[24px] text-[#FFFFFF66] max-md:text-[#00000066] widescreen:text-[20px] widescreen:text-[24px] text-[13.92px] leading-[15.31px]">
              Your data is safe with us. We promise.
            </p>
          </div>
          <div ref={imagecontainer}>
            <Image ref={image} src={AI1} className="w-full" alt="vacation.ai" />
          </div>{" "}
        </div>
      </main>
      <section className="pt-[99px] max-2md:flex-col flex justify-between gap-[50px]">
        <div className="w-[521.42px] widescreen:w-[760px] widestscreen:w-[950px] max-1lg:w-[400px] max-lg:ml-[0px] max-lg:px-[40px] max-sm:px-[20px] max-2md:w-full mb-[41px] ml-[80px]">
          <div className="w-[521.42px] max-1lg:w-[400px] widescreen:w-full max-2md:w-full mb-[30px] justify-start items-center gap-[13.42px] inline-flex max-lg:w-[100%]">
            <div className="opacity-60 text-black text-sm font-normal widescreen:text-[20px] widescreen:text-[24px] font-['Archivo'] uppercase leading-snug">
              vacation.ai
            </div>
            <div className=" grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
          </div>
          <h1 className="text-[49.2px] widescreen:text-[60px] widestscreen:text-[76px] widescreen:w-full widescreen:leading-[120%] max-md:w-full max-sm:text-[40px] max-sm:leading-[46px] tracking-[-1.47px] w-[471.46px] leading-[59.04px]">
            Get everything tailored to your needs.
          </h1>
          <p className="mt-[22px] widescreen:text-[20px] widescreen:leading-[150%] widescreen:text-[24px] text-base opacity-80">
            Do not ask around for an itinerary that works for you. Have it made
            for your requirements. For free, within a few minutes.
          </p>
          <div className="border-[1px] mt-[46px] border-[black] w-[214.16px] h-[56px] rounded-[31px] flex gap-[8px] items-center justify-center">
            <p className="text-base widescreen:text-[20px] widescreen:text-[24px]">
              Give it a Try
            </p>
            <Image
              src={arrow}
              className="w-[24px] h-[24px] rotate-[-45deg]"
              alt="Give it a Try"
            />
          </div>
        </div>
        <Image
          src={AI2}
          className="max-1xl:w-[500px] widestscreen:w-[40%] max-2md:w-full max-1lg:w-[400px] max-1lg:h-auto"
          alt="Ai exploring"
        />
      </section>
      <Aicomponent />
      {/* <Footer /> */}
    </>
  );
};

export default AboutAistudio;
