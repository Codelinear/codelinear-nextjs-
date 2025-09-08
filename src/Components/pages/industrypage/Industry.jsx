"use client";
import React from "react";
import Image from "next/image";
import IndustryHero from "./industrycompo/IndustryHero";
import Mainindustry from "./industrycompo/Mainindustry";
import Footer from "../../Footer/Footer";
import Homeanimate from "../home/homecomponents/homeanimate/Homeanimate";
import Clients from "../home/homecomponents/Clients";
import Bloghome from "../home/homecomponents/homeblog/Bloghome";
import Head from "next/head";

const Industry = () => {
  return (
    <>
      <Head>
        <title>Codelinear - Industries Page</title>
        <meta
          name="description"
          content="Explore the Industries served by Codelinear, a leading digital agency offering software development, UX/UI design, cloud engineering, and more. Learn how we provide tailored solutions to meet the unique needs of various Industries."
        />
        <link rel="canonical" href="https://codelinear.com/industries" />
        <meta
          name="keywords"
          content="industries, software development, UX/UI design, cloud engineering, digital agency, tailored solutions, industry-specific solutions"
        />
      </Head>
      <IndustryHero />
      <Mainindustry />
      <Homeanimate />
      <Clients />
      <Bloghome />
      <Footer />
    </>
  );
};

export default Industry;
