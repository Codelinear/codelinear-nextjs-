import img2 from "../assets/Frame 1000002335.jpg";
import Image from "next/image";
import img1 from "../assets/Frame 1000002804.jpg";

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
    </>
  );
};
export default Collage;
