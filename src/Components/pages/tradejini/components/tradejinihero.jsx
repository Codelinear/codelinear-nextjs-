import Image from "next/image";
import img from "../assets/Frame 1000002800.jpg";
const Tradejinihero = () => {
  return (
    <>
      <h1 className="w-[896.1px] max-lg:mb-[67.35px] max-lg:mt-[122px] max-lg:text-[60px] max-lg:w-full text-[66px] leading-[108%] letter-spacing-1 mt-[140px] mb-[93px] max-sm:mb-[57.58px] max-sm:mt-[50px] max-sm:text-[50px]">
        Transforming the digital presence of a trading giant.
      </h1>
      <Image
        src={img}
        alt="Transforming the digital presence of a trading giant."
        className="max-lg:h-[387px] max-sm:h-[319px] max-lg:object-cover w-full max-sm:mt-[24px] max-sm:mb-[12px] mb-[37px]"
      />{" "}
    </>
  );
};
export default Tradejinihero;
