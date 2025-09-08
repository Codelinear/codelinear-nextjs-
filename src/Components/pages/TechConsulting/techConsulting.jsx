"use client";
import React from "react";
import Image from "next/image";
import Techservice from "./techComponent/technologyservice";
import Explore from "../production/Explore";
import TechHero from "./techComponent/techHero";
import Footer from "../../Footer/Footer";
import Head from "next/head";

const Techconsulting = () => {
  return (
    <>
      <Head>
        <title>Services - Technology Consulting</title>
        <meta
          name="description"
          content="Explore Codelinear's technology consulting services, offering expertise in helping businesses leverage technology to achieve their strategic objectives. Learn how we provide tailored consulting solutions to address your unique challenges and drive innovation."
        />
        <meta
          name="keywords"
          content="technology consulting, strategic objectives, tailored solutions, innovation, business challenges, consulting services, technology expertise"
        />
        <link
          rel="canonical"
          href="https://codelinear.com/services/technology-consulting"
        />
      </Head>
      <TechHero />
      <Techservice />
      <Explore />
    </>
  );
};

export default Techconsulting;
