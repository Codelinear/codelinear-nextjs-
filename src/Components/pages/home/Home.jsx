"use client";
import React from "react";
import Image from "next/image";
import Footer from "../../Footer/Footer";
import Homehero from "../../homepageComp/homeHero/Homehero";
import Head from "next/head";
import { Suspense } from "react";
const Adupt = React.lazy(() => import("./homecomponents/Adupt"));
const Bloghome = React.lazy(() => import("./homecomponents/homeblog/Bloghome"));
const Clients = React.lazy(() => import("./homecomponents/Clients"));
const Homeservice = React.lazy(() =>
  import("./homecomponents/service/Homeservice")
);
const Homeanimate = React.lazy(() =>
  import("./homecomponents/homeanimate/Homeanimate")
);
const Homeabout = React.lazy(() =>
  import("./homecomponents/homeabout/Homeabout")
);
const Productengineer = React.lazy(() =>
  import("./homecomponents/homeproductengineer/Productengineer")
);
const Vision = React.lazy(() => import("./homecomponents/vision/Vision"));

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
      <Homehero />
      <Suspense>
        <Vision />
      </Suspense>
      <Suspense>
        <Productengineer />
      </Suspense>
      <Suspense>
        <Homeabout />
      </Suspense>
      <Suspense>
        <Homeservice />
      </Suspense>
      <Suspense>
        <Homeanimate />
      </Suspense>
      <Suspense>
        <Clients />
      </Suspense>
      <Suspense>
        <Adupt />
      </Suspense>
      <Suspense>
        <Bloghome />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;
