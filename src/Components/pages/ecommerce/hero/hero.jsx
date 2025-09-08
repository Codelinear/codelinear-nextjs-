import image from "../assets/Ecommerce.jpg";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <section id="prod-hero">
        <h1 className="text-[66px] pl-[80px] leading-[108%] max-2xl:w-full mt-[142px] pb-[25px] letter-spacing-1 w-[1103px] max-xl:px-[80px] max-sm:text-[50px] max-lg:w-full max-sm:pl-[20px] max-sm:pr-0 max-sm:w-[99%] max-lg:px-[40px] max-lg:ml-0">
          Elevate your brand with our bespoke E-commerce Marketplace Development
          solutions.{" "}
        </h1>
        <div>
          <Image src={image} alt="brand with our bespoke" />
        </div>
        <p>
          Unleash the full potential of your business with our expertly crafted
          E-commerce Marketplace Development solutions.
        </p>
        <Link href={"/contact-us"}>
          <button onClick={scrollToTop}>Talk to our experts</button>
        </Link>
      </section>
    </>
  );
};
export default Hero;
