"use client";
import CasestudyCarousal from "../casestudy carousel/casestudyCarousal";
import About from "./components/about";
import Desc from "./components/desc";
import Hero from "./components/singhvihero";
import Details from "./components/details";
import Blog from "../home/homecomponents/homeblog/Bloghome";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Head from "next/head";
import Quote from "./components/quote";
import Blursection from "./components/blursection";
import Appdelevered from "./components/appdelivered";
import Footer from "../../Footer/Footer";

const Tradejini = () => {
  return (
    <>
      <Head>
        <title>Case Studies - Singhvi Dev & UNI LLP</title>
        <meta
          name="description"
          content="Discover how Codelinear collaborated with Singhvi Dev & Uni LLP Chartered Accountants to enhance their digital presence and streamline their operations. Learn about the strategies and solutions implemented to optimize their website, improve user experience, and drive business growth."
        />
        <meta
          name="keywords"
          content="Singhvi Dev & Uni LLP Chartered Accountants, case study, digital presence enhancement, operations streamlining, website optimization, user experience improvement, business growth, collaboration, strategies and solutions"
        />
        <link
          rel="canonical"
          href="https://codelinear.com/case-studies/singhvi-dev-and-uni-llp-chartered-accountants"
        />
      </Head>
      <main className="px-[80px] max-lg:px-[40px] max-sm:px-[20px] ">
        <Hero />
        <Desc />
        <About />
        <Details />
        <Appdelevered />
        {/* <Quote /> */}
        <Blursection />
        <CasestudyCarousal />
      </main>
      <Blog />
      {/* <Footer /> */}
    </>
  );
};
export default Tradejini;
