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

const Vouri = () => {
  return (
    <>
      <Head>
        <title>Case Studies - Klub</title>
        <meta
          name="description"
          content="Explore how Codelinear collaborated with Klub to enhance their digital platform and drive business success. Learn about the strategies and solutions implemented to optimize their platform, improve user experience, and increase customer engagement."
        />
        <meta
          name="keywords"
          content="Klub, case study, digital platform enhancement, business success, platform optimization, user experience improvement, customer engagement, collaboration, strategies and solutions"
        />
        <link rel="canonical" href="https://codelinear.com/case-studies/klub" />
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
export default Vouri;
