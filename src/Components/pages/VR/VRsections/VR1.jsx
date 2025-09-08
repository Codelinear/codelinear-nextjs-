import img1 from "../assets/ph_gear-light.svg";
import img2 from "../assets/ph_eye-light.svg";
import img3 from "../assets/ph_hand-light.svg";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const VR1 = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <section id="exp-design" className="exp-design">
        <h2 className="capitilize whitespace-nowrap widescreen:w-[700px] widestscreen:w-[900px]">
          AR/VR Services <span></span>
        </h2>
        <h1 className="whitespace-nowrap max-sm:whitespace-normal">
          Immersive Experiences{" "}
        </h1>
        <p className="exp-p">
          Dive into unparalleled sensory delight with our immersive experiences,
          where cutting-edge technology converges with design for captivating,
          memorable interactions.
        </p>
        <div className="prod-container w-[924px] widescreen:w-full flex-wrap flex-wrap max-lg:w-full">
          <div className="prod-sub-container">
            <Image
              src={img1}
              alt="Engaging Storytelling"
              className="w-[50px] h-[50px]"
            />
            <h3>Engaging Storytelling</h3>
            <p>
              Craft narratives that captivate users, leveraging immersive
              technologies to create compelling and memorable experiences.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image
              src={img2}
              alt="Interactive Visuals"
              className="w-[50px] h-[50px]"
            />
            <h3>Interactive Visuals</h3>
            <p>
              Incorporate interactive elements within the experience, allowing
              users to engage with the virtual or augmented environment.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image
              src={img3}
              alt="Multi-Sensory Engagement"
              className="w-[50px] h-[50px]"
            />
            <h3>Multi-Sensory Engagement</h3>
            <p>
              Enhance immersion by appealing to multiple senses, incorporating
              audio, visuals, and, where applicable, haptic feedback to create
              an engaging user experience.
            </p>
          </div>
        </div>
      </section>
      <div className="justify-start mb-[147px] items-center gap-[58px] max-sm:w-full max-sm:gap-10 ml-[80px] inline-flex max-sm:flex-wrap max-lg:ml-[40px] max-sm:mx-0 max-sm:px-[20px] max-sm:mb-[80px]">
        <div className="w-[267.25px] widescreen:text-[30px] widescreen:w-[40%] widestscreen:text-[40px] text-black text-xl max-sm:text-[24px] font-normal font-['Graphik'] leading-[120%] letter-spacing-4">
          Need help in making the next big thing?{" "}
        </div>
        <Link
          href={"/contact-us"}
          onClick={scrollToTop}
          className="px-8 max-sm:w-full py-4 rounded-[50px] border border-black justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
        >
          <div className="text-black rounded-[50px] text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
            Talk to our experts
          </div>
        </Link>
      </div>
    </>
  );
};
export default VR1;
