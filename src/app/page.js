"use client";
import React from "react";
import Image from "next/image";

import dynamic from "next/dynamic";
import Head from "next/head"; // keep static if always needed
import Homehero from "@/Components/homepageComp/homeHero/Homehero";
import Homeanimate from "@/Components/pages/home/homecomponents/homeanimate/Homeanimate";
import Bloghome from "@/Components/pages/home/homecomponents/homeblog/Bloghome";
import SandAnimation from "@/Components/SandAnimation";

const Vision = dynamic(() =>
  import("@/Components/pages/home/homecomponents/vision/Vision")
);
const Productengineer = dynamic(() =>
  import(
    "@/Components/pages/home/homecomponents/homeproductengineer/Productengineer"
  )
);
const Homeabout = dynamic(() =>
  import("@/Components/pages/home/homecomponents/homeabout/Homeabout")
);
const Homeservice = dynamic(() =>
  import("@/Components/pages/home/homecomponents/service/Homeservice")
);
// const Homeanimate = dynamic(() =>
//   import("@/Components/homepageComp/homeHero/Heroanimate")
// );
const Clients = dynamic(() =>
  import("@/Components/pages/home/homecomponents/Clients")
);
const Adupt = dynamic(() =>
  import("@/Components/pages/home/homecomponents/Adupt")
);
// const Bloghome = dynamic(() =>
// import("@/Components/pages/home/homecomponents/homeblog/Bloghome");
// );

const Home = () => {
  return (
    <div>
      <Head>
        <title>Codelinear - Home Page</title>
        <meta
          name="keywords"
          content="software solutions, application development solutions, mobile apps development, software consulting agency, cloud computing service, Codelinear, codelinear, codelinea, code, software service, game developers, game development service, software solutions in bangalore, sharepoint service, sharepoint services, app development services, product design, UI design, UI design services, UI designer, web developer"
        />
        <link rel="canonical" href="https://codelinear.com/" />
        <meta
          name="description"
          content="Welcome to Codelinear - your go-to destination for cutting-edge software solutions. Explore our expertise in app development and modernization, game development, software consulting, AR/VR development, and more."
        />
      </Head>
      {/* <SandAnimation /> */}

      <Homehero />

      <Vision />

      <Productengineer />

      <Homeabout />

      <Homeservice />

      <Homeanimate />

      <Clients />

      <Adupt />

      <Bloghome />

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
