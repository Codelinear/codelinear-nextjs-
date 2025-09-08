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
import Collage from "./components/collage";

const Vouri = () => {
  return (
    <>
      <Head>
        <title>Case Studies - LocalSEOguys</title>
        <link
          rel="canonical"
          href="https://codelinear.com/case-studies/localseoguys"
        />
      </Head>
      <main className="px-[80px] max-lg:px-[40px] max-sm:px-[20px] ">
        <Hero />
        <Desc />
        <About />
        <Details />
        <Collage />
        <Blursection />
        <CasestudyCarousal />
      </main>
      <Blog />
      {/* <Footer /> */}
    </>
  );
};
export default Vouri;
