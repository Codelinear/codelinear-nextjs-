import Image from "next/image";
import img1 from "../assets/Frame 1000002804.jpg";
import img2 from "../assets/Frame 1000002335.jpg";
import img3 from "../assets/Frame 1.jpg";
import img4 from "../assets/Profile page.jpg";
import img5 from "../assets/Support.jpg";
import img6 from "../assets/Frame 1 small.jpg";
import img8 from "../assets/Profile page small.jpg";
import img7 from "../assets/Support small.jpg";

const Collage = () => {
  return (
    <>
      <div className="flex gap-[20px] max-lg:gap-[30px] max-sm:gap-[15.21px] max-sm:pt-[24px] max-sm:pb-[14px] max-lg:py-[51px] max-lg:pb-[21px] max-s:pb-[12px] max-lg:px-[16.5px] max-sm:p-0 max-lg:flex-col">
        <Image
          src={img1}
          alt=""
          className="w-[49%] mt-[96.5px] max-lg:m-0 max-lg:w-full"
        />
        <Image
          src={img2}
          alt=""
          className="w-[49%] mt-[40px] mb-[56.5px]  max-lg:m-0 max-lg:w-full"
        />
      </div>
      <div className="flex max-1sm:hidden h-auto items-end gap-[57px] max-lg:gap-[27px] max-sm:mt-[24px] max-lg:mt-[21px] max-sm:pl-4 max-lg:mb-[21px] max-sm:mb-[12px] justify-between mt-[38.5px] max-lg:pl-[28.53px] mb-[30.5px] bg-[#F9F9F9] pl-[50px]">
        <div className="flex gap-[37px] h-full flex-col w-[58.54%]">
          <Image src={img3} alt="" className="w-full bg-[#F9F9F9]" />
          <Image src={img4} alt="" className="w-full bg-[#F9F9F9]" />
        </div>
        <Image src={img5} alt="" className="w-[38%] h-auto bg-[#F9F9F9]" />
      </div>
      <div className="flex-col max-1sm:flex hidden justify-center px-[47.2px] h-auto items-center gap-[15.7px] mt-[24px] mb-[12px] bg-[#F9F9F9]">
        <Image src={img6} alt="" className="w-full bg-[#F9F9F9]" />
        <Image src={img7} alt="" className="w-full bg-[#F9F9F9]" />
        <Image src={img8} alt="" className="w-full bg-[#F9F9F9]" />
      </div>
    </>
  );
};
export default Collage;
