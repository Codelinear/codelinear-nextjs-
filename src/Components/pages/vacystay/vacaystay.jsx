"use client";
import CasestudyCarousal from "../casestudy carousel/casestudyCarousal";
import About from "./components/about";
import Desc from "./components/desc";
import Hero from "./components/hero";
import Details from "./components/details";
import Blog from "../home/homecomponents/homeblog/Bloghome";
import Head from "next/head";
import Quote from "./components/quote";
import Blursection from "./components/blursection";
import Collage from "./components/collage";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Footer from "../../Footer/Footer";

const Vacaystay = () => {
  return (
    <>
      <Head>
        <title>Case Studies - VacayStay 406</title>
        <meta
          name="description"
          content="Explore how Codelinear collaborated with Vacaystay 406 to enhance their digital presence and streamline their operations. Learn about the strategies and solutions implemented to optimize their website, improve user experience, and drive business growth."
        />
        <meta
          name="keywords"
          content="Vacaystay 406, case study, digital presence enhancement, operations streamlining, website optimization, user experience improvement, business growth, collaboration, strategies and solutions"
        />
        <link
          rel="canonical"
          href="https://codelinear.com/case-studies/vacaystay-406"
        />
      </Head>
      <main className="px-[80px] max-lg:px-[40px] max-sm:px-[20px] ">
        <Hero />
        <Desc />
        <About />
        <Details />
        {/* <Quote /> */}
        <Collage />
        <Blursection />
        <CasestudyCarousal />
      </main>
      <Blog />
      {/* <Footer /> */}
    </>
  );
};
export default Vacaystay;
