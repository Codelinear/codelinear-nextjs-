import { useEffect, useState } from "react";
import axios from "axios";
import image1 from "../assets/spacejoy-IH7wPsjwomc-unsplash 1.png";
import image2 from "../assets/Frame 1000002801 (1).png";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <h1 className="w-[896.1px] widescreen:w-[70%] widescreen:text-[76px] widestscreen:text-[90px] max-lg:mb-[80px] max-lg:mt-[122px] max-lg:text-[60px] max-lg:w-full text-[66px] leading-[108%] letter-spacing-1 mt-[143px] mb-[93px] max-sm:mb-[59px] max-sm:mt-[50px] max-sm:text-[50px]">
        Changing the way people shop.{" "}
      </h1>
      <div className="flex gap-[20px] max-2md:flex-col">
        <Image
          className="max-lg:h-[387px] max-sm:h-[319px] max-lg:object-cover w-[50%] max-lg:w-full max-lg:mb-[30px] max-sm:mb-[12px] mb-[37px]"
          src={image1}
          alt="Changing the way people shop"
        />
        <Image
          className="max-lg:h-[387px] max-sm:h-[319px] max-lg:object-cover w-[50%] max-lg:w-full max-lg:mb-[30px] max-sm:mb-[12px] mb-[37px]"
          src={image2}
          alt="Changing the way people shop"
        />
      </div>
    </>
  );
};
export default Hero;
