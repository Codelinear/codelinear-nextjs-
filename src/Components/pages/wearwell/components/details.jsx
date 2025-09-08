const Details = () => {
  return (
    <>
      <div className="flex gap-[216px] max-sm:gap-[32px] max-xl:gap-0 max-lg:flex-col max-1xl:justify-between max-lg:py-[45px] max-sm:py-[40px] pb-[69px] pt-[69px]">
        <div className="w-[542px] widescreen:w-[900px] max-lg:w-full max-lg:h-auto flex flex-col gap-[30px] max-sm:gap-[20px]">
          <div className=" w-full justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
            <div className="opacity-60 widescreen:text-[16px] widestscreen:text-[20px] text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
              what we did
            </div>
            <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
          </div>
          <h1 className="w-[542px] widescreen:w-[100%] widescreen:text-[40px] widestscreen:text-[50px] max-sm:letter-spacing-6 max-sm:text-[24px] max-lg:w-full text-[36px] leading-[120%] letter-spacing-3">
            We set out to enable Wear Well with technology, and redefine their
            brand identity.
          </h1>
          <p className="mt-[2px] max-sm:w-full max-lg:w-[82%] text-base widescreen:text-[24px] widescreen:leading-[150%] widestscreen:text-[30px] opacity-80 max-sm:mt-[4px]">
            The rebranding positioned Wear Well as a sustainability champion in
            the fashion industry. Their commitment to ethical practices became
            synonymous with the brand, garnering accolades from environmentally
            conscious consumers worldwide.
          </p>
        </div>
        <div className="max-lg:w-full flex flex-col max-sm:gap-[24px] max-lg:mt-0 max-sm:mt-0 max-lg:mt-[56px] mt-[51.5px] flex-wrap max-sm:gap-[24px] gap-[40px]">
          <div className="w-[294px] widescreen:w-full max-sm:w-full widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              200,000+
            </h1>
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]">annual users</p>
          </div>
          <div className="w-[345px] widescreen:w-full max-sm:w-full widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] widescreen:text-[54px] widestscreen:text-[60px] max-sm:text-[24px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              87.62% Increase
            </h1>
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]">in positive brand perception</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
