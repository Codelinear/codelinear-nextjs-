import Image from "next/image";
import img1 from "../assets/MacBook Front View Mockup 1.png";
import img2 from "../assets/iPhone in Hands Mockup 1.png";
const Collage = () => {
  return (
    <>
      <div className="mt-[54.5px] max-lg:px-[16.5px] max-sm:px-0 max-lg:mt-0 max-lg:flex-col mb-[53.5px] gap-[16px] flex flex-col w-[100%]">
        <div className="flex max-lg:flex-col items-start gap-[40px] max-lg:gap-[20px] w-[100%]">
          <Image
            className="w-[50%] height-auto object-contain max-lg:w-full"
            src={img1}
            alt="Client Project Details"
          />
          <Image
            className="w-[50%] max-lg:w-full pt-[154px] max-lg:pt-0"
            src={img2}
            alt="Client Project Details"
          />
        </div>
      </div>
    </>
  );
};
export default Collage;
