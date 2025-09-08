import Image from "next/image";
import img1 from "../assets/Frame 1000002804.jpg";
import img2 from "../assets/Frame 1000002335.jpg";
import img3 from "../assets/image 231.jpg";
import img4 from "../assets/image 230.jpg";
import img5 from "../assets/image 229.jpg";

const Collage = () => {
  return (
    <>
      <div className="flex gap-[20px] max-lg:gap-[30px] max-sm:gap-[15.21px] max-sm:pt-[24px] max-sm:pb-[14px] max-lg:py-[51px] max-lg:px-[16.5px] max-sm:p-0 max-lg:flex-col">
        <Image
          src={img1}
          alt=""
          className="w-[49%] mt-[96.5px] max-lg:m-0 max-lg:w-full"
        />
        <Image
          src={img2}
          alt=""
          className="w-[49%] mt-[40px] mb-[56.5px] max-lg:m-0 max-lg:w-full"
        />
      </div>
      <div className="mt-[67px] max-lg:px-[16.5px] max-sm:px-0 max-lg:mt-0 max-lg:flex-col mb-[26px] gap-[16px] flex flex-col w-[100%]">
        <div className="flex max-lg:flex-col gap-[20px] w-[100%]">
          <Image src={img3} alt="" className="w-[50%] max-lg:w-full" />
          <Image src={img4} alt="" className="w-[50%] max-lg:w-full" />
        </div>
        <Image src={img5} alt="" className="w-[100%]" />
      </div>
    </>
  );
};
export default Collage;
