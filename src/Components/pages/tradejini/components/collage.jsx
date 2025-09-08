import img1 from "../assets/laptop.jpg";
import img2 from "../assets/Frame 1000002335.jpg";
import img3 from "../assets/App Logo - Builder Template.jpg";
import img4 from "../assets/App Logo - Builder Template (1).jpg";
import img5 from "../assets/Frame 1000003199.jpg";
import img6 from "../assets/tradejini video.mp4";

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
      <div className="flex gap-[20px] max-lg:px-[16.5px] max-sm:p-0 max-lg:flex-wrap-reverse">
        <div className="my-[60px] gap-[61.5px] max-sm:gap-[30px] max-sm:mb-[24px] max-lg:mt-0 flex flex-col w-[49%] max-lg:w-full">
          <div className="flex justify-between w-[100%]">
            <Image src={img3} alt="" className="w-[45%]" />
            <Image src={img4} alt="" className="w-[45%]" />
          </div>
          <Image src={img5} alt="" className="w-[100%]" />
        </div>
        <video autoPlay>
          <source src={img6} type="video/mp4" />
        </video>
        {/* <Image src={img6} alt="" className="w-[49%] max-lg:w-full mb-[165px] max-lg:mb-[0px]" /> */}
      </div>
    </>
  );
};
export default Collage;
