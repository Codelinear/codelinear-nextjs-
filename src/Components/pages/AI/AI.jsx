"use client";
import React from "react";
import Image from "next/image";
import AIservice from "./AIcomponents/aiService";
import Explore from "../production/Explore";
import AIHero from "./AIcomponents/aiHero";

import Footer from "../../Footer/Footer";
import Head from "next/head";

const AI = () => {
  return (
    <>
      <Head>
        <title>Services - AI Services</title>
        <meta
          name="keywords"
          content="artificial intellegence, ai services, Codelinear"
        />
        <link
          rel="canonical"
          href="https://codelinear.com/services/artificial-intelligence-services"
        />
        <meta
          name="description"
          content="Explore our Artificial Intelligence (AI) services to leverage cutting-edge technologies and algorithms for your business. From machine learning to natural language processing, we offer tailored AI solutions to drive innovation and efficiency. Contact us today to learn more."
        />
      </Head>
      <AIHero />
      <AIservice />
      <Explore />
      {/* <Footer /> */}
    </>
  );
};

export default AI;
