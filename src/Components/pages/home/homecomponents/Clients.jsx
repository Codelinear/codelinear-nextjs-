"use client";
import React from "react";
import Image from "next/image";
import img from "../../../../assets/homeassets/Frame 1000002632.png";
import img3 from "../../../../assets/homeassets/Frame 1000002679.png";
import img5 from "../../../../assets/homeassets/Frame 1000002681.png";
import img6 from "../../../../assets/homeassets/Frame 1000002682.png";
import img8 from "../../../../assets/homeassets/Frame 1000002683.png";
import img9 from "../../../../assets/homeassets/Frame 1000002684.png";
import img10 from "../../../../assets/homeassets/Frame 1000002685.png";
import img11 from "../../../../assets/homeassets/Frame 1000002686.png";
import img13 from "../../../../assets/homeassets/Frame 1000002677.png";
import cowboy from "../../../../assets/homeassets/Frame 1000002678.png";
import klub from "../../../../assets/homeassets/Frame 1000002680.png";
import singhvi from "../../../../assets/homeassets/Frame 1000002687.png";
import { useState, useEffect } from "react";
import axios from "axios";

const Clients = () => {
  return (
    <>
      <div className="clients relative ">
        <div className="w-full h-[693px] widescreen:h-auto widescreen:pt-[80px] max-xl:h-auto max-xl:py-[60px] px-[0px] pt-[20px] pb-[33.98px] bg-white flex-col justify-center items-center gap-[72px] max-sm:gap-[40px] inline-flex max-lg:h-full max-md:px-0 max-lg:mt-40 max-lg:px-[0px] max-sm:mt-20 max-sm:px-[0px]">
          <div className="w-[358.91px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:w-[400px] widestscreen:w-[500px] max-sm:px-[20px] text-center text-[#000] text-[32px] font-normal font-['Graphik'] leading-[120%] letter-spacing-3 max-lg:w-full">
            People bettering the world with us.{" "}
          </div>
          <div className="client-logos max-sm:justify-between justify-center items-start inline-flex flex-wrap max-md:w-full max-lg:justify-center max-sm:w-[100%]">
            <Image
              src={img}
              alt="Client - Wearwell"
              className="widescreen:w-[15%]"
            />
            <Image
              src={img3}
              alt="Client - Ikea"
              className="widescreen:w-[15%]"
            />
            <Image
              src={cowboy}
              alt="Client - cowboy"
              className="widescreen:w-[15%]"
            />
            <Image
              src={img5}
              alt="Client - Lyra"
              className="widescreen:w-[15%]"
            />
            <Image
              src={img6}
              alt="Client - Soch"
              className="widescreen:w-[15%]"
            />
            <Image
              src={img9}
              alt="Client - Studio Neat"
              className="widescreen:w-[15%]"
            />
            <Image
              src={klub}
              alt="Client - Klub"
              className="widescreen:w-[15%]"
            />
            <Image
              src={img10}
              alt="Client - Moveworkers"
              className="widescreen:w-[15%]"
            />
            <Image
              src={img11}
              alt="Client - Middle"
              className="widescreen:w-[15%]"
            />
            <Image
              src={img13}
              alt="Client - TradeJini"
              className="widescreen:w-[15%]"
            />
            <Image
              src={img8}
              alt="Client - Mango"
              className="widescreen:w-[15%]"
            />
            <Image
              src={singhvi}
              alt="Client - SDU"
              className="widescreen:w-[15%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
