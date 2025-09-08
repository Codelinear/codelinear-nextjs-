import Image from "next/image";
import image from "../assets/Frame 1000002800 (6).png";
const Hero = () => {
  return (
    <>
      <h1 className="w-[896.1px] widescreen:w-[70%] widescreen:text-[76px] widestscreen:text-[90px] max-lg:mb-[80px] max-lg:mt-[122px] max-lg:text-[60px] max-lg:w-full text-[66px] leading-[108%] letter-spacing-1 mt-[143px] mb-[93px] max-sm:mb-[59px] max-sm:mt-[50px] max-sm:text-[50px]">
        Helping a thought leader in bettering workplaces{" "}
      </h1>
      <Image
        className="max-lg:h-[387px] max-sm:h-[319px] max-lg:object-cover w-full max-lg:mb-[30px] max-sm:mb-[12px] mb-[37px]"
        src={image}
        alt="Helping a thought leader in bettering workplaces"
      />
    </>
  );
};
export default Hero;
