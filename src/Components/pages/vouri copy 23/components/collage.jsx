import Image from "next/image";
import img1 from "../assets/Tablet in Hand Mockup 1.png";
import img2 from "../assets/briwoolnoughxlakehaweastation-354 1.png";
import img3 from "../assets/image 5.png";
const Collage = () => {
  return (
    <>
      <div className="mt-[54.5px] max-lg:px-[16.5px] max-sm:px-0 max-lg:mt-0 max-lg:flex-col mb-[53.5px] gap-[16px] flex flex-col w-[100%]">
        <div className="flex max-lg:flex-col gap-[20px] w-[100%]">
          <Image
            className="w-[40%] max-lg:w-full"
            src={img1}
            alt="Client project details"
          />
          <Image
            className="w-[60%] max-lg:w-full"
            src={img2}
            alt="Client project details"
          />
        </div>
        <Image className="w-[100%]" src={img3} alt="Client project details" />
      </div>
    </>
  );
};
export default Collage;
