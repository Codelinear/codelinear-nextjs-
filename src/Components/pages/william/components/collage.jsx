import img3 from "../assets/image 232.jpg";
import img4 from "../assets/image 235.jpg";
import img5 from "../assets/image 234.jpg";
import Image from "next/image";

const Collage = () => {
  return (
    <>
      <div className="mt-[54.5px] max-lg:px-[16.5px] max-sm:px-0 max-lg:mt-0 max-lg:flex-col mb-[53.5px] gap-[16px] flex flex-col w-[100%]">
        <div className="flex max-lg:flex-col gap-[20px] w-[100%]">
          <Image
            src={img3}
            alt="Client project details"
            className="w-[50%] max-lg:w-full"
          />
          <Image
            src={img4}
            alt="Client project details"
            className="w-[50%] max-lg:w-full"
          />
        </div>
        <Image src={img5} alt="Client project details" className="w-[100%]" />
      </div>
    </>
  );
};
export default Collage;
