import { useEffect, useState } from "react";
import axios from "axios";
import image1 from "../assets/image 251 (1).jpg";
import image2 from "../assets/Frame 1000003236 (1) (1).jpg";
import image3 from "../assets/image 250 (1).png";
import Image from "next/image";

const Collage = () => {
  return (
    <>
      <div className="mt-[54.5px] max-lg:px-[16.5px] max-sm:px-0 max-lg:mt-0 max-lg:flex-col mb-[53.5px] gap-[16px] flex flex-col w-[100%]">
        <div className="flex max-lg:flex-col gap-[20px] w-[100%]">
          <Image
            className="w-[50%] max-lg:w-full"
            src={image1}
            alt="Client project details"
          />
          <Image
            className="w-[50%] max-lg:w-full"
            src={image2}
            alt="Client project details"
          />
        </div>
        <Image className="w-[100%]" src={image3} alt="Client project details" />
      </div>
    </>
  );
};
export default Collage;
