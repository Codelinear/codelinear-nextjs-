"use client";
import React from "react";
import Image from "next/image";
import CaseHero from "./casecompo/caseHero/CaseHero";
import Cases from "./casecompo/case/Casesss";
import Casecards from "./casecompo/Casecards";
import Bloghome from "../home/homecomponents/homeblog/Bloghome";
import Head from "next/head";
import Footer from "../../Footer/Footer";

const Casestudy = () => {
  return (
    <>
      <Head>
        <title>Codelinear - Case Studies Page</title>
        <meta
          name="description"
          content="Explore Codelinear's case studies showcasing our expertise in digital transformation, software development, UX/UI design, and more. Learn how we've helped businesses achieve their goals through innovative solutions and strategic partnerships."
        />
        <link rel="canonical" href="https://codelinear.com/case-studies" />
        <meta
          name="keywords"
          content="case studies, digital transformation, software development, UX/UI design, strategic partnerships, business solutions"
        />
      </Head>
      <CaseHero />
      <Cases />
      <Casecards />
      <Bloghome />
      <Footer />
    </>
  );
};

export default Casestudy;
