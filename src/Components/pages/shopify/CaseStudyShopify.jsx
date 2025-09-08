"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";
import "./shopify.scss";
import Link from "next/link";

const CaseStudyShopify = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <section className="overflow-hidden max-lg:h-[800px] h-[800px] max-sm:full max-sm:py-20">
      <div className="flex justify-between mt-[100px] w-full px-[80px] mb-[60px] max-sm:mb-0 max-lg:px-[40px] max-sm:px-[20px] max-sm:flex-wrap max-sm:gap-5">
        <div className="widescreen:w-full">
          <div className="w-[443.95px] max-sm:text-[35px] widescreen:w-[50%] text-black text-[66px] max-md:w-[400px] font-normal font-['Graphik'] leading-[120%] letter-spacing-3 max-sm:w-full">
            Case studies
          </div>
        </div>
      </div>
      <div className="blog-more max-sm:mt-[40px]">
        <Swiper
          freeMode={{ enabled: false, slidesPerGroup: 1 }}
          slidesPerView="auto"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: "true" }}
          loop={true}
          modules={[FreeMode, Autoplay]}
          className="swipe mySwiper max-sm:h-[800px]"
        >
          <SwiperSlide>
            <Link
              href={"/case-studies/cowboy"}
              onClick={scrollToTop}
              className="w-[317px] widescreen:w-full widescreen:w-[500px] max-sm:w-[270px] h-[338px] widescreen:h-[600px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex"
            >
              <div className="flex-col   max-1xl:w-[40%] h-full  max-lg:w-[100%] max-sm:w-full justify-start items-start gap-[42px] inline-flex">
                <div className="pl-[0.14px] w justify-end items-center inline-flex w-full h-full">
                  <Image
                    className="w-full h-full"
                    loading="lazy"
                    width={403}
                    height={340}
                    src="/shopify/Frame 1000002672.png"
                    alt="william abraham"
                  />
                </div>
                <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
                  <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                    <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                      CowBoy
                    </div>
                    <div className="hidden max-sm:flex justify-start items-center gap-[13.42px]  max-md:w-full">
                      <div className="opacity-60 text-black text-base font-normal font[Archivo] uppercase leading-normal">
                        CowBoy
                      </div>
                      <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                    </div>
                    <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                      Helping the world switch to sustainable energy- seamlessly{" "}
                    </div>
                  </div>

                  <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                    <Link
                      href={"/case-studies/william-abraham"}
                      onClick={scrollToTop}
                      className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                    >
                      <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                        View case study
                      </div>
                    </Link>
                    <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                      Automotive
                    </div>
                  </div>
                </div>
              </div>

              {/* </div> */}
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={"/case-studies/william-abraham"}
              onClick={scrollToTop}
              className="w-[317px] widescreen:w-full widescreen:w-[500px] max-sm:w-[270px] h-[338px] widescreen:h-[600px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex"
            >
              <div className="flex-col   max-1xl:w-[40%] h-full  max-lg:w-[100%] max-sm:w-full justify-start items-start gap-[42px] inline-flex">
                <div className="pl-[0.14px] w justify-end items-center inline-flex w-full h-full">
                  <Image
                    className="w-full h-full"
                    loading="lazy"
                    width={403}
                    height={340}
                    src="/shopify/Frame 1000002672 (1).png"
                    alt="william abraham"
                  />
                </div>
                <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
                  <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                    <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                      william abraham{" "}
                    </div>
                    <div className="hidden max-sm:flex justify-start items-center gap-[13.42px]  max-md:w-full">
                      <div className="opacity-60 text-black text-base font-normal font[Archivo] uppercase leading-normal">
                        william abraham{" "}
                      </div>
                      <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                    </div>
                    <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                      Elevating luxurious men’s socks digital platform{" "}
                    </div>
                  </div>
                  <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                    <Link
                      href={"/case-studies/william-abraham"}
                      onClick={scrollToTop}
                      className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                    >
                      <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                        View case study
                      </div>
                    </Link>
                    <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font[Archivo] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                      Clothing{" "}
                    </div>
                  </div>
                </div>
              </div>

              {/* </div> */}
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={"/case-studies/iea-training"}
              onClick={scrollToTop}
              className="w-[317px] widescreen:w-full widescreen:w-[500px] max-sm:w-[270px] h-[548px] widescreen:h-[600px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex"
            >
              <div className="flex-col   max-1xl:w-[40%]  max-lg:w-[100%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
                <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
                  <Image
                    className="w-full "
                    loading="lazy"
                    width={403}
                    height={340}
                    src="/shopify/Frame 1000002672 (2).png"
                    alt="Case Study - IEA Training"
                  />
                </div>
                <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
                  <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                    <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                      IEA Training
                    </div>
                    <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                      <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                        IEA Training
                      </div>
                      <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                    </div>
                    <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                      Empowering professionals for emerging industries.
                    </div>
                  </div>
                  <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                    <Link
                      href={"/case-studies/iea-training"}
                      onClick={scrollToTop}
                      className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                    >
                      <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                        View case study
                      </div>
                    </Link>
                    <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                      Ed-Tech{" "}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={"/insights/design-system"}
              onClick={scrollToTop}
              className="w-[317px] widescreen:w-full widescreen:w-[500px] max-sm:w-[270px] h-[548px] widescreen:h-[600px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex"
            >
              <div className="flex-col   max-1xl:w-[40%]  max-lg:w-[100%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
                <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
                  <Image
                    className="w-full "
                    loading="lazy"
                    width={403}
                    height={340}
                    src="/shopify/Frame 1000002672 (3).png"
                    alt="Case Study - IEA Training"
                  />
                </div>
                <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
                  <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                    <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                      Wray
                    </div>
                    <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                      <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                        Wray
                      </div>
                      <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                    </div>
                    <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                      Helping the world switch to sustainable energy- seamlessly{" "}
                    </div>
                  </div>
                  <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                    <Link
                      href={"/case-studies/iea-training"}
                      onClick={scrollToTop}
                      className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                    >
                      <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                        View case study
                      </div>
                    </Link>
                    <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                      Fashion
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={"/case-studies/iea-training"}
              onClick={scrollToTop}
              className="w-[317px] widescreen:w-full widescreen:w-[500px] max-sm:w-[270px] h-[548px] widescreen:h-[600px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex"
            >
              <div className="flex-col   max-1xl:w-[40%]  max-lg:w-[100%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
                <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
                  <Image
                    className="w-full "
                    loading="lazy"
                    width={403}
                    height={340}
                    src="/shopify/Frame 1000002672 (4).png"
                    alt="Case Study - IEA Training"
                  />
                </div>
                <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
                  <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                    <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                      FYRN
                    </div>
                    <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                      <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                        FYRN
                      </div>
                      <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                    </div>
                    <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                      Helping the world switch to sustainable energy- seamlessly{" "}
                    </div>
                  </div>
                  <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                    <Link
                      href={"/case-studies/iea-training"}
                      onClick={scrollToTop}
                      className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                    >
                      <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                        View case study
                      </div>
                    </Link>
                    <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                      Home Decor
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              href={"/case-studies/iea-training"}
              onClick={scrollToTop}
              className="w-[317px] widescreen:w-full widescreen:w-[500px] max-sm:w-[270px] h-[548px] widescreen:h-[600px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex"
            >
              <div className="flex-col   max-1xl:w-[40%]  max-lg:w-[100%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
                <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
                  <Image
                    className="w-full "
                    width={403}
                    height={340}
                    loading="lazy"
                    src="/shopify/Frame 1000002672 (5).png"
                    alt="Case Study - IEA Training"
                  />
                </div>
                <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
                  <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                    <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                      Maison Miru
                    </div>
                    <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                      <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                        Maison Miru{" "}
                      </div>
                      <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                    </div>
                    <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                      Helping the world switch to sustainable energy- seamlessly{" "}
                    </div>
                  </div>
                  <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                    <Link
                      href={"/case-studies/iea-training"}
                      onClick={scrollToTop}
                      className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                    >
                      <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                        View case study
                      </div>
                    </Link>
                    <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                      Jewelry
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={"/case-studies/iea-training"}
              onClick={scrollToTop}
              className="w-[317px] widescreen:w-full widescreen:w-[500px] max-sm:w-[270px] h-[548px] widescreen:h-[600px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex"
            >
              <div className="flex-col   max-1xl:w-[40%]  max-lg:w-[100%] max-sm:w-full max-lg:h-[510p  justify-start items-start gap-[42px] inline-flex">
                <div className="pl-[0.14px] bg-neutral-100 justify-end items-center inline-flex  w-full max-sm:h-full">
                  <Image
                    className="w-full "
                    loading="lazy"
                    width={403}
                    height={340}
                    src="/shopify/Frame 1000002672 (6).png"
                    alt="Case Study - IEA Training"
                  />
                </div>
                <div className="flex-col justify-between w-full h-[176px] max-lg:h-[241px] max-sm:h-auto items-start flex widescreen:h-[200px] widestscreen:h-[250px]">
                  <div className="flex-col max-md:w-full justify-start items-start gap-[12px] flex">
                    <div className=" opacity-60 max-sm:hidden text-black text-xl font-normal font-['Graphik'] capitalize widescreen:text-[24px] widescreen:text-[24px]">
                      BKIND
                    </div>
                    <div className="w-[521.42px] hidden max-sm:flex justify-start items-center gap-[13.42px] max-md:w-full">
                      <div className="opacity-60 text-black text-base font-normal font-['Archivo'] uppercase leading-normal">
                        BKIND{" "}
                      </div>
                      <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
                    </div>
                    <div className="w-full letter-spacing-4 text-black text-[24px] leading-[120%] font-normal font-['Graphik'] capitalize widescreen:text-[30px] widestscreen:text-[40px]">
                      Helping the world switch to sustainable energy- seamlessly{" "}
                    </div>
                  </div>

                  <div className="flex max-sm:mt-[12px] justify-between w-[100%] items-center max-lg:flex-col-reverse max-sm:gap-[24px] max-lg:h-[130px] max-sm:h-auto max-lg:items-start">
                    <Link
                      href={"/case-studies/iea-training"}
                      onClick={scrollToTop}
                      className="px-4 py-2 max-sm:w-full rounded-[31px] widescreen:px-[16px] widescreen:rounded-[50px] widestscreen:rounded-[80px] hover:bg-yellow-400 transition-all  hover:border-yellow-400 border border-black justify-center items-center gap-2 inline-flex"
                    >
                      <div className="text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                        View case study
                      </div>
                    </Link>
                    <div className="bg-[#F2F2F2] capitalize text-[#000000] p-[8px] rounded-[8px] text-base font-normal font-['Archivo'] leading-normal widescreen:text-[20px] widescreen:text-[24px]">
                      Beauty
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CaseStudyShopify;
