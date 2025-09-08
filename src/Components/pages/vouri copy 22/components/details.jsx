const Details = () => {
  return (
    <>
      <div className="flex gap-[216px] max-sm:gap-[32px] max-lg:flex-col max-1xl:gap-[56px] max-lg:py-[45px] max-sm:py-[40px] pb-[68px] pt-[92px]">
        <div className="w-[542px] widescreen:w-[900px] max-lg:w-full max-lg:h-auto flex flex-col gap-[30px] max-sm:gap-[20px]">
          <div className=" w-full justify-start items-center gap-[13.42px] inline-flex max-sm:w-[100%]">
            <div className="opacity-60 text-black widescreen:text-[16px] widestscreen:text-[20px] text-sm font-normal font-['Archivo'] uppercase leading-snug">
              what we did
            </div>
            <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
          </div>
          <h1 className="w-[542px] widescreen:w-[100%] widescreen:text-[40px] widestscreen:text-[50px] max-sm:letter-spacing-6 max-sm:text-[24px] max-lg:w-full text-[36px] leading-[120%] letter-spacing-3">
            We revitalized and transformed their internal page design to reduce
            user drop-offs, while integrating innovative features to elevate
            service delivery and streamline operations.
          </h1>
          <ul className="max-sm:w-full widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] ml-[20px] list-disc max-lg:w-[82%] text-base opacity-80 max-sm:mt-[4px]">
            <li>
              We built a custom website and mobile app, packed with powerful yet
              simple tools like calculators that take the guesswork out of their
              processes.
            </li>
            <li>
              Our AI-driven FAQ generator gave them instant answers for their
              customers, and our local search checker boosted their visibility
              in all the right places.
            </li>
            <li>
              From strategy to execution, our expert team ensured everything
              worked seamlessly, elevating their business to new heights with a
              flawless, future-proof digital experience.
            </li>
          </ul>
        </div>
        <div className="max-xl:w-full flex flex-col max-sm:gap-[24px] max-lg:mt-0 mt-[51.5px] flex-wrap gap-[40px]">
          <div className="w-[327px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]">Consultations Booked Monthly</p>
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              + 5000
            </h1>
          </div>
          <div className="w-[322px] widescreen:w-[440px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]">Better User Onboarding With</p>
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              20% Efficiency
            </h1>
          </div>
          <div className="w-[322px] widescreen:w-[440px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]">Visit Duration Increased by</p>
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              + 02:10 min
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
