import Image from "next/image";
import img1 from "../assets/Frame 1000002804.jpg";
import img2 from "../assets/Frame 1000002335.jpg";
import img3 from "../assets/Frame 650.jpg";
import img4 from "../assets/Frame 543.jpg";
import img5 from "../assets/Paper Box on Wood Floor Mockup 1.jpg";
import img6 from "../assets/Ceramic Mug on Cube Mockup 1.jpg";

const Collage = () => {
  return (
    <>
      <div className="flex gap-[20px] max-lg:gap-[30px] max-sm:gap-[15.21px] max-sm:pt-[24px] max-sm:pb-[14px] max-lg:py-[51px] max-lg:px-[16.5px] max-sm:p-0 max-lg:flex-col">
        <Image
          src={img1}
          alt="Client project details"
          className="w-[49%] mt-[96.5px] max-lg:m-0 max-lg:w-full"
        />
        <Image
          src={img2}
          alt="Client project details"
          className="w-[49%] mt-[40px] mb-[56.5px] max-lg:m-0 max-lg:w-full"
        />
      </div>
      <div className="flex flex-col">
        <Image
          src={img3}
          alt="Client project details"
          className="w-[100%] mt-[58px] pl-[15.89%] max-lg:px-0 max-sm:mt-[24px] max-lg:mt-[51px]"
        />
        <Image
          src={img4}
          alt="Client project details"
          className="w-[100%] mb-[17px] mt-[47px] max-lg:px-0  max-sm:my-[14.5px] max-lg:my-[30px]  pr-[8.5%]"
        />
        <div className="py-[26px] max-sm:flex-col max-lg:pt-0 max-lg:pb-[51px] max-sm:pb-[12px] max-lg:gap-[20px] max-sm:gap-[10px] gap-[37px] flex w-[100%]">
          <Image
            src={img5}
            alt="Client project details"
            className="w-[60%] max-lg:w-[58%] max-sm:w-full"
          />
          <Image
            src={img6}
            alt="Client project details"
            className="w-[40%] max-lg:w-[38.71%] max-sm:w-full"
          />
        </div>
      </div>
    </>
  );
};
export default Collage;
