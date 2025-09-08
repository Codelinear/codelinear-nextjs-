import img1 from "../assets/Copy of OhPhoto_LAH_Product_092121_4256-62-72dpi 1.jpg";
import img2 from "../assets/Copy of OhPhoto_LAH_Product_092121_4001-10-72dpi 1.jpg";
import img3 from "../assets/Copy of OhPhoto_LAH_Product_092121_4253-60 1.jpg";
import img4 from "../assets/Copy of OhPhoto_LAH_Product_092121_4141-Edit-34-72dpi 1.jpg";
import Image from "next/image";

const Collage = () => {
  return (
    <>
      <div className="flex mt-[34.5px] max-sm:mt-[24px] max-lg:mt-[51px] gap-[20px] max-lg:flex-col">
        <Image
          src={img1}
          alt="Office Team Images "
          className="w-[58%] max-lg:w-full"
        />
        <Image
          src={img2}
          alt="Office Team Images "
          className="w-[42%] max-lg:w-full"
        />
      </div>
      <div className="flex mt-[21px] mb-[34.5px] max-sm:mb-[21px] max-lg:mb-[51px] gap-[20px] max-lg:flex-col">
        <Image
          src={img3}
          alt="Office Team Images "
          className="w-[50%] max-lg:w-full"
        />
        <Image
          src={img4}
          alt="Office Team Images "
          className="w-[50%] max-lg:w-full"
        />
      </div>
    </>
  );
};
export default Collage;
