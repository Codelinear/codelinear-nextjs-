import Image from "next/image";
import img1 from "../assets/Macbook_Air_Mockup_1 1.png";
import img2 from "../assets/macbook-16-pro-mockup-on-concrete-background-front-view 1.png";
const Collage = () => {
  return (
    <>
      <div className="mt-[54.5px] max-lg:px-[16.5px] max-sm:px-0 max-lg:mt-0 max-lg:flex-col mb-[53.5px] flex flex-col w-[100%]">
        <div className="flex max-lg:flex-col gap-[0px] w-[100%]">
          <Image
            className="w-[40%] max-lg:w-full"
            src={""}
            alt="Client project details"
          />
          <Image
            className="w-[60%] max-lg:w-full"
            src={img1}
            alt="Client project details"
          />
        </div>
        <div className="flex max-lg:flex-col gap-[0px] w-[100%]">
          <Image
            className="w-[40%] max-lg:w-full"
            src={img2}
            alt="Client project details"
          />
          <Image
            className="w-[60%] max-lg:w-full"
            src={""}
            alt="Client project details"
          />
        </div>
      </div>
    </>
  );
};
export default Collage;
