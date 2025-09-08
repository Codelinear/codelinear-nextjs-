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
            Understanding Booking Factory's vision, we assembled a team with
            expertise in product design, PWA development, and CRM integrations.{" "}
          </h1>
          <ul className="max-sm:w-full list-disc ml-[20px] max-lg:w-[82%] text-base opacity-80 max-sm:mt-[4px]">
            <li>
              User-Centered Product Design: Through in-depth user research and
              collaboration with Booking Factory, we designed a user-friendly
              PWA interface that optimized workflows for hotel staff.
            </li>{" "}
            <li>
              Progressive Web App Development: Leveraging PWA technology, we
              ensured the app offered offline functionality, push notifications,
              and a native-like user experience across all devices.
            </li>{" "}
            <li>
              Seamless CRM Integration: We integrated Booking Factory's PWA with
              HubSpot, enabling a centralized platform for managing guest data,
              reservations, and communication.
            </li>
          </ul>
        </div>
        <div className="max-xl:w-full flex flex-col max-sm:gap-[24px] max-lg:mt-0 mt-[51.5px] flex-wrap gap-[40px]">
          <div className="w-[327px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              25% Increase{" "}
            </h1>
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]">in User Adoption </p>
          </div>
          <div className="w-[292px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              15% Boost{" "}
            </h1>
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]"> in Staff Productivity </p>
          </div>
          <div className="w-[422px] widescreen:w-[440px] flex flex-col gap-[6px] max-sm:gap-[4px]">
            <h1 className="text-[48px] max-sm:text-[24px] widescreen:text-[54px] widestscreen:text-[60px] max-lg:text-[36px] leading-[120%] letter-spacing-2">
              40% Improvement{" "}
            </h1>
            <p className="text-base opacity-80 widescreen:text-[20px] widestscreen:text-[24px]"> in Guest Experience </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
