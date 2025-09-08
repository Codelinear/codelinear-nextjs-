"use client";
import CasestudyCarousal from "../casestudy carousel/casestudyCarousal";
import About from "./components/about";
import Desc from "./components/desc";
import Hero from "./components/hero";
import Details from "./components/details";
import Blog from "../home/homecomponents/homeblog/Bloghome";
import Head from "next/head";
import Quote from "./components/quote";
import Collage from "./components/collage";
import Blursection from "./components/blursection";
import Footer from "../../Footer/Footer";

const Kanbar = () => {
  return (
    <>
      <Head>
        <title>Case Studies - Kanbar Digital</title>
        <meta
          name="description"
          content="Explore how Codelinear collaborated with Kanbar Digital to develop innovative solutions and drive business growth. Learn about the strategies and technologies implemented to achieve project objectives and exceed client expectations."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/case-studies/kanbar-digital"
        />
        <meta
          name="keywords"
          content="Kanbar Digital, case study, business growth, innovative solutions, project objectives, client expectations, collaboration, technology solutions"
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
export default Kanbar;
