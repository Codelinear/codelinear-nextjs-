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
import Footer from "../../Footer/Footer";

const IMAPAC = () => {
  return (
    <>
      <Head>
        <title>Case Studies - IMAPAC</title>
        <meta
          name="description"
          content="Discover how Codelinear collaborated with IMAPAC to drive innovation and streamline their business processes. Learn about the solutions implemented to optimize workflows, enhance efficiency, and achieve business objectives."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/case-studies/imapac"
        />
        <meta
          name="keywords"
          content="iMapac, case study, business processes, workflow optimization, efficiency enhancement, business objectives, collaboration"
        />
      </Head>
      <main className="px-[80px] max-lg:px-[40px] max-sm:px-[20px] ">
        <Hero />
        <Desc />
        <About />
        <Details />
        {/* <Quote /> */}
        <Blursection />
        <CasestudyCarousal />
      </main>
      <Blog />
      {/* <Footer /> */}
    </>
  );
};
export default IMAPAC;
