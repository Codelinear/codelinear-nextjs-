"use client";
import CasestudyCarousal from "../casestudy carousel/casestudyCarousal";
import About from "./components/about";
import Desc from "./components/desc";
import Hero from "./components/hero";
import Details from "./components/details";
import Blog from "../home/homecomponents/homeblog/Bloghome";
// import Head from "next/head";
import Quote from "./components/quote";
import Blursection from "./components/blursection";
import Footer from "../../Footer/Footer";
import Head from "next/head";

const Klassen = () => {
  return (
    <>
      <Head>
        <title>Case Studies - Klassen & Smith</title>
        <meta
          name="description"
          content="Explore how Codelinear collaborated with Klassen & Smith to deliver innovative solutions and drive business success. Learn about the strategies and technologies implemented to meet project goals and exceed client expectations."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/case-studies/klassen-and-smith"
        />
        <meta
          name="keywords"
          content="Klassen & Smith, case study, business success, innovative solutions, project goals, client expectations, collaboration, technology solutions"
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
export default Klassen;
