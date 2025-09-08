"use client";
"use client";
import CasestudyCarousal from "../casestudy carousel/casestudyCarousal";
import TradejiniAbout from "./components/tradejiniAbout";
import TradejiniDesc from "./components/tradejiniDesc";
import Tradejinihero from "./components/tradejinihero";
import TradejiniDetails from "./components/tradejniDetails";
import Blog from "../home/homecomponents/homeblog/Bloghome";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Tradejiniquote from "./components/tradejiniquote";
import Collage from "./components/collage";
import Blursection from "./components/blursection";
import Footer from "../../Footer/Footer";
import Head from "next/head";

const Tradejini = () => {
  return (
    <>
      <Head>
        <title>Case Studies - Tradejini</title>
        <meta
          name="description"
          content="Explore how Codelinear collaborated with Tradejini to enhance their digital platform and drive business success. Learn about the strategies and solutions implemented to optimize their trading platform, improve user experience, and increase customer engagement."
        />
        <meta
          name="keywords"
          content="Tradejini, case study, digital platform enhancement, business success, trading platform optimization, user experience improvement, customer engagement, collaboration, strategies and solutions"
        />
        <link
          rel="canonical"
          href="https://codelinear.com/case-studies/tradejini"
        />
      </Head>
      <main className="px-[80px] max-lg:px-[40px] max-sm:px-[20px] ">
        <Tradejinihero />
        <TradejiniDesc />
        <TradejiniAbout />
        <TradejiniDetails />
        {/* <Tradejiniquote /> */}
        <Collage />
        <Blursection />
        <CasestudyCarousal />
      </main>
      <Blog />
      {/* <Footer /> */}
    </>
  );
};
export default Tradejini;
