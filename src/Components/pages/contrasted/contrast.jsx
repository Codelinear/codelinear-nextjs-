"use client";
import CasestudyCarousal from "../casestudy carousel/casestudyCarousal";
import About from "./components/contrastedabout";
import ContrastedDesc from "./components/contrasteddesc";
import Contrastedhero from "./components/contrastedhero";
import Details from "./components/contrasteddetail";
import Blog from "../home/homecomponents/homeblog/Bloghome";
import Head from "next/head";
import Quote from "./components/contrastedquote";
import Collage from "./components/collage";
import Blursection from "./components/blursection";
import Footer from "../../Footer/Footer";

const Contrasted = () => {
  return (
    <>
      <Head>
        <title>Case Studies - Contrasted Marketing</title>
        <meta
          name="description"
          content="Explore how Contrasted Marketing partnered with Codelinear to transform their digital presence and achieve business success. Learn about the strategies and solutions implemented to drive growth and increase brand visibility."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/case-studies/contrasted-marketing"
        />
        <meta
          name="keywords"
          content="Contrasted Marketing, case study, digital transformation, brand visibility, business success, growth strategies, digital presence"
        />
      </Head>
      <main className="px-[80px] max-lg:px-[40px] max-sm:px-[20px] ">
        <Contrastedhero />
        <ContrastedDesc />
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
export default Contrasted;
