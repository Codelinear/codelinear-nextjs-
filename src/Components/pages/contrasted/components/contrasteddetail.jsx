const Details = () => {
  return (
    <>
      <div className="flex gap-[216px] max-sm:gap-[32px] max-lg:flex-col max-1xl:gap-[56px] max-lg:py-[45px] max-sm:py-[40px] pb-[93px] pt-[68.5px]">
        <div className="w-[542px] widescreen:w-[900px] max-lg:w-full max-lg:h-auto flex flex-col gap-[30px] max-sm:gap-[20px]">
          <div className=" w-full justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
            <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
              what we did
            </div>
            <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
          </div>
          <h1 className="w-[542px] widescreen:w-[100%] widescreen:text-[40px] widestscreen:text-[50px] max-sm:letter-spacing-6 max-sm:text-[24px] max-lg:w-full text-[36px] leading-[120%] letter-spacing-3">
            We redefined their digital presence. It wasn't just about
            aesthetics; it was about creating a platform that reflected their
            dynamic campaigns, engaged users, and set a new benchmark for
            digital marketing agencies.
          </h1>
        </div>
        <div className="max-xl:w-full mt-[51px] max-lg:mt-0">
          <p className="max-sm:w-full max-lg:w-[82%] text-base opacity-80 w-[458px]">
            Their digital presence now strategically showcased services,
            achievements, and thought leadership. This shift wasn't just
            informative; it was a strategic move that positioned them as
            industry leaders, resonating with both clients and peers.
          </p>
        </div>
      </div>
    </>
  );
};
export default Details;
