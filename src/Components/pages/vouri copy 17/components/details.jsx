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
            Codelinear proposes a comprehensive solution using React, Node.js,
            and Cloud Engineering{" "}
          </h1>
          <ul className="max-sm:w-full widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] ml-[20px] list-disc max-lg:w-[82%] text-base opacity-80 max-sm:mt-[4px]">
            <li>
              Unified technology stack: Migrating to React for the frontend and
              Node.js for the backend creates a consistent codebase, reducing
              maintenance costs and simplifying development.
            </li>{" "}
            <li>
              Agile development: Codelinear's experienced React and Node.js
              developers can implement agile methodologies to deliver features
              faster and adapt to changing needs.
            </li>{" "}
            <li>
              Cloud-based infrastructure: Leveraging cloud technologies allows
              Moveworks to scale their applications easily and efficiently to
              handle future growth.
            </li>{" "}
          </ul>
        </div>
        <div className="max-xl:w-full flex flex-col max-sm:gap-[24px] max-lg:mt-0 mt-[51.5px] flex-wrap gap-[40px]">
          <div className="w-[337px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              200% Increase{" "}
            </h1>
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]">in Application Speed </p>
          </div>
          <div className="w-[342px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              50% Reduction{" "}
            </h1>
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]"> in Downtime </p>
          </div>
          <div className="w-[432px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              30% Cost Savings{" "}
            </h1>
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]"> on Maintenance </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
