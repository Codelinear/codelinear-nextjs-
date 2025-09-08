"use client";
import CasestudyCarousal from "../casestudy carousel/casestudyCarousal";
import About from "./components/about";
import Desc from "./components/desc";
import Hero from "./components/hero";
import Details from "./components/details";
import Blog from "../home/homecomponents/homeblog/Bloghome";
import Head from "next/head";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Quote from "./components/quote";
import Blursection from "./components/blursection";
import Collage from "./components/collage";
import Footer from "../../Footer/Footer";

const LAH = () => {
  return (
    <>
      <Head>
        <title>Case Studies - Leaf & Hive</title>
        <meta
          name="description"
          content="Explore how Codelinear collaborated with Leaf & Hive to deliver innovative solutions and drive business success. Learn about the strategies and technologies implemented to meet project goals and exceed client expectations."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/case-studies/leaf-and-hive"
        />
        <meta
          name="keywords"
          content="Leaf & Hive, case study, business success, innovative solutions, project goals, client expectations, collaboration, technology solutions"
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
export default LAH;
