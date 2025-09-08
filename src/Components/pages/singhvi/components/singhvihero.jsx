import Image from "next/image";
import img from "../assets/Frame 1000002800.jpg";
const Singhvihero = () => {
  return (
    <>
      <h1 className="w-[916.1px] max-lg:mb-[80px] max-lg:mt-[122px] max-lg:text-[60px] max-lg:w-full text-[66px] leading-[108%] letter-spacing-1 mt-[143px] mb-[93px] max-sm:mb-[59px] max-sm:mt-[50px] max-sm:text-[50px]">
        Pioneering Financial Excellence in the Digital Frontier{" "}
      </h1>
      <Image
        src={img}
        alt="Pioneering Financial Excellence in the Digital"
        className="max-lg:h-[387px] max-sm:h-[319px] max-lg:object-cover w-full max-lg:mb-[30px] max-sm:mb-[12px] mb-[37px]"
      />
    </>
  );
};
export default Singhvihero;
