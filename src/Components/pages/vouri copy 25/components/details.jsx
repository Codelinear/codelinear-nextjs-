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
            Empathising their vision, our team reimagined their identity and
            design system. Seamlessly integrated CRM and CMS to keep their
            audience hooked to the platform.
          </h1>
          <ul className="max-sm:w-full widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[120%] max-lg:w-[82%] text-base opacity-80 max-sm:mt-[4px]">
            <li>
              We partnered together and dived deep into understanding their
              brand and audience, we crafted content that was both engaging and
              SEO-friendly. <br /> <br /> Content was crafted to capture
              readers' attention and boost their online presence. With some
              dynamic video content brought their expertise to life, offering
              visually stunning showcases that not only inform but also inspire
              and engage viewers in an unforgettable way.
            </li>
          </ul>
        </div>
        <div className="max-xl:w-full flex flex-col max-sm:gap-[24px] max-lg:mt-0 mt-[51.5px] flex-wrap gap-[40px]">
          <div className="w-[327px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]">Local Lead Generation with</p>
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              35% Rise
            </h1>
          </div>
          <div className="w-[327px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]">New Client Acquisition has</p>
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              75% Spiked
            </h1>
          </div>
          <div className="w-[327px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]">Website Performance with</p>
            <h1 className="text-[48px] whitespace-nowrap max-sm:text-[24px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              40% Success Rate
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
