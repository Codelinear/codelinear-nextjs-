import React, { useRef, useEffect } from "react";
import AboutHero from "./aboutcompo/Abouthero/AboutHero";
import Office from "./aboutcompo/office/Office";
import Aboutvision from "./aboutcompo/aboutvision/Aboutvision";
import Animatecircle from "./aboutcompo/circle/Animatecircle";
import Guide from "./aboutcompo/guiding/Guide";
import Commitment from "./aboutcompo/commitment/Commitment";
import Head from "next/head";
import Footer from "../../Footer/Footer";
const About = () => {
  return (
    <>
      <Head>
        <title>Codelinear - About us Page</title>
        <meta
          name="keywords"
          content="about us, web development, mobile app development and modernization, software consulting, Codelinear"
        />
        <link rel="canonical" href="https://codelinear.com/about-us" />
        <meta
          name="description"
          content="Learn more about Codelinear - a team of passionate developers dedicated to delivering high-quality software solutions. Discover our mission, values, and expertise in application development and modernization, game development, software consulting, and AR/VR development."
        />
      </Head>
      <AboutHero />
      <Aboutvision />
      <Office />
      <Animatecircle />
      <Guide />
      <Commitment />
      <Footer />
    </>
  );
};

export default About;
