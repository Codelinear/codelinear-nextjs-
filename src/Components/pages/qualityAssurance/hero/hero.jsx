"use client";
import Link from "next/link";
import image from "../assets/QA.jpg";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <section id="prod-hero">
        <h1 className="prod-hero-h1 letter-spacing">
          We stand as your partners in ensuring seamless, flawless digital
          solutions.{" "}
        </h1>
        <div>
          <Image
            src={image}
            alt="  We stand as your partners in ensuring seamless, flawless digital solutions."
          />
        </div>
        <p>
          No two projects are the same, and neither are our testing approaches.
          We tailor our quality assurance strategies to align with your unique
          requirements, ensuring a bespoke and effective QA process.
        </p>
        <Link href={"/contact-us"} onClick={scrollToTop}>
          <button>Talk to our experts</button>
        </Link>
      </section>
    </>
  );
};
export default Hero;
