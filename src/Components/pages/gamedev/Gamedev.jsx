"use client";
import React from "react";
import Image from "next/image";
import Gamehero from "./gamecomponents/gamehero/Gamehero";
import Gameservices from "./gamecomponents/gameservice/Gameservices";
import Explore from "../production/Explore";
import Footer from "../../Footer/Footer";
import Head from "next/head";

const Gamedev = () => {
  return (
    <>
      <Head>
        <title>Services - Game Development</title>
        <meta
          name="description"
          content="Discover Codelinear's game development services, offering expertise in creating captivating and immersive gaming experiences across various platforms. Learn how we leverage cutting-edge technologies and creative design to bring your game ideas to life."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/services/game-development"
        />
        <meta
          name="keywords"
          content="game development, game design, gaming experiences, gaming platforms, game developers, game technologies, creative design, immersive games"
        />
      </Head>
      <Gamehero />
      <Gameservices />
      <Explore />
      {/* <Footer /> */}
    </>
  );
};

export default Gamedev;
