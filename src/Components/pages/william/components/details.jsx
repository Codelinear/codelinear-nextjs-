const Details = () => {
  return (
    <>
      <div className="flex gap-[216px] max-sm:gap-[32px] max-lg:flex-col max-1xl:gap-[56px] max-lg:py-[45px] max-sm:py-[40px] pb-[67.5px] pt-[67.5px]">
        <div className="w-[542px] widescreen:w-[900px] max-lg:w-full max-lg:h-auto flex flex-col gap-[30px] max-sm:gap-[20px]">
          <div className=" w-full justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
            <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
              what we did
            </div>
            <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
          </div>
          <h1 className="w-[542px] widescreen:w-[100%] widescreen:text-[40px] widestscreen:text-[50px] max-sm:letter-spacing-6 max-sm:text-[24px] max-lg:w-full text-[36px] leading-[120%] letter-spacing-3">
            We collaborated closely to understand their brand essence and align
            our solutions with their vision.
          </h1>
          <p className="mt-[2px] max-sm:w-full max-lg:w-[82%] text-base widescreen:text-[24px] widescreen:leading-[150%] widestscreen:text-[30px] opacity-80 max-sm:mt-[4px]">
            We revolutionized William Abraham's digital footprint with a
            cutting-edge ecommerce platform, seamlessly aligned with the brand's
            ethos. The streamlined user interface, enriched by personalized
            recommendations, delivered a frictionless shopping experience. Our
            bespoke community application, featuring interactive forums and
            exclusive content, fostered a sense of brand loyalty.
          </p>
        </div>
        <div className="max-xl:w-full flex flex-col max-sm:gap-[24px] max-lg:mt-0 mt-[51.5px] flex-wrap gap-[40px]">
          <div className="w-[294px] widescreen:w-full max-sm:w-full widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              50% Increase
            </h1>
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]">
              {" "}
              in active members within six months.
            </p>
          </div>
          <div className="w-[292px] widescreen:w-[400px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              35% Increase
            </h1>
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]">
              in online sales.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
