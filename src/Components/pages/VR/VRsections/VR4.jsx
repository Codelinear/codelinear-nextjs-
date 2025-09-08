import img1 from "../assets/material-symbols-light_navigation-outline.svg";
import img2 from "../assets/ph_map-pin-light.svg";
import img3 from "../assets/Triangle Flag.svg";

import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";

const VR4 = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <div className="mb-[121px] max-sm:mb-0">
      <section id="exp-design" className="exp-design">
        <h2 className="capitilize whitespace-nowrap">
          AR/VR Services <span></span>
        </h2>
        <h1 className="whitespace-nowrap  max-sm:whitespace-normal">
          AR Navigation Solutions{" "}
        </h1>
        <p className="exp-p">
          Revolutionize navigation with AR Navigation Solution, integrating
          augmented reality to provide intuitive, interactive, and efficient
          guidance for users.
        </p>
        <div className="prod-container w-[924px] widescreen:w-full flex-wrap flex-wrap max-lg:w-full">
          <div className="prod-sub-container">
            <Image
              src={img1}
              alt="Interactive Wayfinding"
              className="w-[50px] h-[50px]"
            />
            <h3>Interactive Wayfinding</h3>
            <p>
              Provide users with interactive and dynamic wayfinding, enhancing
              navigation through augmented reality overlays.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image
              src={img2}
              alt="Location-Based Information"
              className="w-[50px] h-[50px]"
            />
            <h3>Location-Based Information</h3>
            <p>
              Deliver real-time, location-based information to users, offering
              relevant details about their surroundings through AR.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image
              src={img3}
              alt="Seamless Navigation Experience"
              className="w-[50px] h-[50px]"
            />
            <h3 className="whitespace-nowrap max-sm:whitespace-normal">
              Seamless Navigation Experience{" "}
            </h3>
            <p>
              Utilize AR navigation to create a seamless and intuitive
              navigation experience, improving user convenience and reducing
              reliance on traditional maps.
            </p>
          </div>
        </div>
      </section>
      <div className="justify-start items-center gap-[58px] max-sm:w-full ml-[80px] inline-flex max-sm:flex-wrap max-lg:ml-[40px] max-sm:px-[20px] max-sm:ml-[0px]">
        <div className="w-[267.25px] widescreen:w-[40%] widestscreen:text-[30px] widestscreen:text-[40px] max-sm:text-[24px] text-black text-xl font-normal font-['Graphik'] leading-[120%] letter-spacing-4">
          Need help in making the next big thing?{" "}
        </div>
        <Link
          href={"/contact-us"}
          onClick={scrollToTop}
          className="px-8  max-sm:w-full py-4 rounded-[50px] border border-black justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-[100%]"
        >
          <div className="text-black rounded-[50px] text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
            Talk to our experts
          </div>
        </Link>
      </div>
    </div>
  );
};
export default VR4;
