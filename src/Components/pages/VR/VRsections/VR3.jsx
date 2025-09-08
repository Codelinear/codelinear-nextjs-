import img1 from "../assets/Browser Check.svg";
import img2 from "../assets/ph_globe-light.svg";
import img3 from "../assets/One Finger Tap.svg";

import Link from "next/link";

import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";

const VR3 = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <div className=" mb-[121px] max-sm:mb-20">
      <section id="exp-design" className="exp-design">
        <h2 className="capitilize whitespace-nowrap">
          AR/VR Services <span></span>
        </h2>
        <h1 className="whitespace-nowrap  max-sm:whitespace-normal">
          Web AR/VR Integration{" "}
        </h1>
        <p className="exp-p">
          Merge virtual and real-world experiences with our Web AR/VR
          integration, enhancing web platforms with immersive technologies for
          unparalleled engagement.
        </p>
        <div className="prod-container w-[924px] widescreen:w-full flex-wrap flex-wrap max-lg:w-full">
          <div className="prod-sub-container">
            <Image
              src={img1}
              alt="Accessible User Experience"
              className="w-[50px] h-[50px]"
            />
            <h3>Accessible User Experience</h3>
            <p>
              Enable AR/VR experiences directly within web browsers for a
              seamless and accessible user interaction.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image
              src={img2}
              alt="Platform Agnostic"
              className="w-[50px] h-[50px]"
            />
            <h3>Platform Agnostic</h3>
            <p>
              Ensure compatibility across various devices and platforms,
              allowing users to experience AR/VR without the need for specific
              applications.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image
              src={img3}
              alt="Enhanced Engagement"
              className="w-[50px] h-[50px]"
            />
            <h3>Enhanced Engagement</h3>
            <p>
              Integrate Web AR/VR to provide immersive and engaging content,
              enhancing user interactions and overall website experience.
            </p>
          </div>
        </div>
      </section>
      <div className="justify-start max-sm:w-full max-sm:px-[20px] items-center gap-[58px] ml-[80px] inline-flex max-sm:flex-wrap max-lg:ml-[40px] max-sm:ml-[0px] max-sm:mb-[0px]">
        <div className="w-[267.25px] widescreen:w-[40%] widescreen:text-[30px] widestscreen:text-[40px] max-sm:text-[24px] text-black text-xl font-normal font-['Graphik'] leading-[120%] letter-spacing-4">
          Need help in making the next big thing?{" "}
        </div>
        <Link
          href={"/contact-us"}
          onClick={scrollToTop}
          className="px-8 max-sm:w-full py-4 rounded-[50px] border border-black justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-[100%]"
        >
          <div className="text-black rounded-[50px] text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
            Talk to our experts
          </div>
        </Link>
      </div>
    </div>
  );
};
export default VR3;
