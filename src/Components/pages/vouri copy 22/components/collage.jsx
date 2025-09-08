import Image from "next/image";
import img1 from "../assets/image 7.png";
import img2 from "../assets/lukas-muller-Q4iYWsWbR90-unsplash 1.png";
import img3 from "../assets/Macbook_Air_M2_Mockup_1 1.png";
import img4 from "../assets/Service 1.png";
const Collage = () => {
  return (
    <>
      <div className="mt-[54.5px] max-lg:px-[16.5px] max-sm:px-0 max-lg:mt-0 max-lg:flex-col mb-[53.5px] gap-[16px] flex flex-col w-[100%]">
        <div className="flex max-lg:flex-col items-end gap-[20px] w-[100%]">
          <Image
            className="w-[40%] h-auto object-contain max-lg:w-full"
            src={img1}
            alt="Client project details"
          />
          <Image
            className="w-[60%] max-lg:w-full"
            src={img2}
            alt="Client project details"
          />
        </div>
        <div className="flex max-lg:flex-col items-start gap-[20px] w-[100%]">
          <Image
            className="w-[60%] max-lg:w-full"
            src={img3}
            alt="Client project details"
          />
          <Image
            className="w-[40%] h-auto object-contain max-lg:w-full"
            src={img4}
            alt="Client project details"
          />
        </div>
      </div>
    </>
  );
};
export default Collage;
