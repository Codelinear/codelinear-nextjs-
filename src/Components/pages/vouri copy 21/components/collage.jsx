import img1 from "../assets/Screenshot 2024-10-14 151642.png";
import img2 from "../assets/christina-wocintechchat-com-faEfWCdOKIg-unsplash 1.png";
import img3 from "../assets/Samsung Tablet Mockup 1.png";
import img4 from "../assets/Screenshot 2024-10-14 152443.png";
import Image from "next/image";
const Collage = () => {
  return (
    <>
      <div className="mt-[54.5px] max-lg:px-[16.5px] max-sm:px-0 max-lg:mt-0 max-lg:flex-col mb-[53.5px] gap-[16px] flex flex-col w-[100%]">
        <div className="flex max-lg:flex-col gap-[20px] w-[100%]">
          <Image
            className="w-[50%] max-lg:w-full"
            src={img4}
            alt="Client project details"
          />
          <Image
            className="w-[50%] max-lg:w-full"
            src={img2}
            alt="Client project details"
          />
        </div>
        <div className="flex max-lg:flex-col gap-[20px] w-[100%]">
          <Image
            className="w-[50%] max-lg:w-full"
            src={img3}
            alt="Client project details"
          />
          <Image
            className="w-[50%] max-lg:w-full"
            src={img1}
            alt="Client project details"
          />
        </div>
      </div>
    </>
  );
};
export default Collage;
