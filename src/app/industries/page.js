import React from "react";
// import IndustryHero from "./industrycompo/IndustryHero";
// import Mainindustry from "./industrycompo/Mainindustry";
// import Footer from "../../Footer/Footer";
// import Homeanimate from "../home/homecomponents/homeanimate/Homeanimate";
// import Clients from "../home/homecomponents/Clients";
// import Bloghome from "../home/homecomponents/homeblog/Bloghome";
import Head from "next/head";
import IndustryHero from "@/Components/pages/industrypage/industrycompo/IndustryHero";
import Mainindustry from "@/Components/pages/industrypage/industrycompo/Mainindustry";
import Homeanimate from "@/Components/homepageComp/homeHero/Heroanimate";
import Clients from "@/Components/pages/home/homecomponents/Clients";
import Bloghome from "@/Components/pages/home/homecomponents/homeblog/Bloghome";
import Footer from "@/Components/Footer/Footer";

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
      {/* <Homeanimate /> */}
      <Clients />
      <Bloghome />
      {/* <Footer /> */}
    </>
  );
};

export default Industry;
