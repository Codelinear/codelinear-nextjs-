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

const Homesrus = () => {
  return (
    <>
      <Head>
        <title>Case Studies - Homes R Us</title>
        <meta
          name="description"
          content="Explore how Codelinear helped Homes R Us enhance their digital presence and streamline their operations. Learn about the solutions implemented to optimize their eCommerce platform, improve user experience, and drive sales growth."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/case-studies/homes-r-us"
        />
        <meta
          name="keywords"
          content="Homes R Us, case study, digital presence, eCommerce optimization, user experience improvement, sales growth, eCommerce platform"
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
export default Homesrus;
