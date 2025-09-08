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
import Footer from "../../Footer/Footer";

const SEA = () => {
  return (
    <>
      <Head>
        <title>Case Studies - Search Engine Amplify</title>
        <meta
          name="description"
          content="Explore how Codelinear partnered with Search Engine Amplify to enhance their online presence and drive business growth. Learn about the strategies and solutions implemented to optimize their website, increase search engine visibility, and attract more customers."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/case-studies/search-engine-amplify"
        />
        <meta
          name="keywords"
          content="Search Engine Amplify, case study, online presence enhancement, business growth, website optimization, search engine visibility, customer attraction, partnership, strategies and solutions"
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
export default SEA;
