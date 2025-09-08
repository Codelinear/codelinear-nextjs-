const About = () => {
  return (
    <>
      <div className="max-md:w-full pt-[170px] pb-[207px] max-lg:py-[45px] max-sm:py-[40px] flex flex-col gap-[30px] max-sm:gap-[20px]">
        <div className="w-[609px] widescreen:w-[900px] justify-start items-center gap-[13.42px] inline-flex max-lg:w-[100%]">
          <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
            problem statement{" "}
          </div>
          <div className=" grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
        </div>
        <h1 className="w-[1052px] widescreen:w-[65%] max-3lg:w-full max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] text-[48px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
          Wilderness Travel, a company renowned for its adrenaline-pumping
          expeditions, was losing ground online. Their current web platform
          failed to capture the essence of their thrilling adventures and posed
          a significant barrier for potential customers seeking an unforgettable
          escape.{" "}
        </h1>
      </div>
    </>
  );
};
export default About;
