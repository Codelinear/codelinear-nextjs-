"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import "./homeblog.scss";
import img5 from "../../../../../assets/homeassets/BLogs01.jpg";
import img3 from "../../../../../assets/homeassets/BLogs03.jpg";
import img4 from "../../../../../assets/homeassets/BLogs06.jpg";
import img2 from "../../../../../assets/homeassets/BLogs02.jpg";
import img6 from "../../../../../assets/homeassets/BLogs07.jpg";
import img7 from "../../../../../assets/homeassets/BLogs04.jpg";
import img1 from "../../../../../assets/homeassets/BLogs05.jpg";
import Link from "next/link";

const Bloghome = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <section className="overflow-hidden">
      <div className="flex justify-between mt-[100px] w-full px-[80px] mb-[60px] max-sm:mb-0 max-lg:px-[40px] max-sm:px-[20px] max-sm:flex-wrap max-sm:gap-5">
        <div className="widescreen:w-full">
          <div className="w-[443.95px] widescreen:w-[50%] text-black text-[32px] max-md:w-[400px] font-normal font-['Graphik'] leading-[120%] letter-spacing-3 max-sm:w-full">
            Stay in the know. Check our insights into big things happening now.{" "}
          </div>
        </div>
        <div className="max-sm:w-full">
          <Link
            onClick={scrollToTop}
            href={"/insights"}
            className="w-[174px] h-14 px-8 py-4 rounded-[31px] widescreen:rounded-[80px] widescreen:px-[32px] widescreen:w-[230px] widescreen:rounded-[50px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-[100%]"
          >
            <div className="text-black widescreen:text-[24px] text-base widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal max-sm:w-[100%] max-sm:text-center">
              View Insights
            </div>
          </Link>
        </div>
      </div>
      <div className="blog-more max-sm:mt-[40px]">
        <Swiper
          freeMode={{ enabled: false, slidesPerGroup: 1 }}
          slidesPerView="auto"
          pagination={{ clickable: "true" }}
          modules={[FreeMode, Pagination]}
          className="swipe mySwiper"
        >
          <SwiperSlide>
            <Link
              href={"/insights/the-changing-nature-of-seo"}
              onClick={scrollToTop}
              className="w-[317px] widescreen:w-full widescreen:w-[500px] max-sm:w-[270px] h-[548px] widescreen:h-[600px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex"
            >
              <div className="w-[317px] widescreen:w-full max-sm:w-[270px] h-[548px] widescreen:h-[600px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex">
                <div className="flex-col justify-start widescreen:w-full items-start gap-9 flex">
                  <div className="w-[317px] widescreen:w-full max-sm:w-full h-[175px] widescreen:h-auto bg-white justify-center items-center inline-flex">
                    <Image
                      className="w-[318px] widescreen:w-full max-sm:w-full object-cover relative flex-col justify-start items-start flex"
                      src={img5}
                      alt="the changing nature of sEO"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex-col justify-center items-start gap-[24px] flex">
                  <div className="flex-col justify-start widescreen:w-full items-start gap-4 flex">
                    <div className="w-[317px] widescreen:h-[40px] widescreen:w-full max-sm:h-[30px] max-sm:w-full text-black text-[24px] leading-[120%] widescreen:text-[30px] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                      the changing nature of sEO{" "}
                    </div>
                    <div className="w-[317px] widescreen:w-full max-sm:w-full mt-[17px] opacity-80 text-black text-base widescreen:text-[24px] font-normal font-['Graphik'] leading-normal">
                      Search engine optimization (SEO) has been around for over
                      two decades, and it has undergone significant changes....{" "}
                    </div>
                  </div>
                  <div className="px-4 py-2 widescreen:px-[24px] max-sm:w-full hover:bg-yellow-400 transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                    <div className="text-black text-base widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                      Read more
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={"/insights/design-system"}
              onClick={scrollToTop}
              className="w-[317px] widescreen:w-full widescreen:w-[500px] max-sm:w-[270px] h-[548px] widescreen:h-[600px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex"
            >
              <div className="flex-col justify-start widescreen:w-full items-start gap-9 flex">
                <div className="w-[317px] widescreen:w-full max-sm:w-full h-[175px] widescreen:h-auto bg-white justify-center items-center inline-flex">
                  <Image
                    className="w-[318px] widescreen:w-full ax-sm:w-full object-cover relative flex-col justify-start items-start flex"
                    src={img2}
                    alt="design system"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-[24px] flex">
                <div className="flex-col justify-start widescreen:w-full items-start gap-4 flex">
                  <div className="w-[317px] widescreen:h-[40px] widescreen:w-full max-sm:w-full text-black text-[24px] leading-[120%] widescreen:text-[30px] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                    design system{" "}
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:w-full mt-[17px] opacity-80 text-black text-base widescreen:text-[24px] font-normal font-['Graphik'] leading-normal">
                    A design system is a guide or a standard structure with
                    parameters for design and code along with design
                    components....{" "}
                  </div>
                </div>
                <div className="hover:bg-yellow-400 transition-all  hover:border-yellow-400 px-4 py-2 widescreen:px-[24px] max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={"/insights/minimum-viable-product"}
              onClick={scrollToTop}
              className="w-[317px] widescreen:w-full widescreen:w-[500px] max-sm:w-[270px] h-[548px] widescreen:h-[600px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex"
            >
              <div className="flex-col justify-start widescreen:w-full items-start gap-9 flex">
                <div className="w-[317px] widescreen:w-full max-sm:w-full h-[175px] widescreen:h-auto bg-white justify-center items-center inline-flex">
                  <Image
                    className="w-[318px] widescreen:w-full ax-sm:w-full object-cover relative flex-col justify-start items-start flex"
                    src={img3}
                    alt=" Minimum viable product"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-[24px] flex">
                <div className="flex-col justify-start widescreen:w-full items-start gap-4 flex">
                  <div className="w-[317px] widescreen:h-[40px] widescreen:w-full h-[30px] max-sm:w-full text-black text-[24px] leading-[120%] widescreen:text-[30px] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                    Minimum viable product{" "}
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:w-full mt-[17px] opacity-80 text-black text-base widescreen:text-[24px] font-normal font-['Graphik'] leading-normal">
                    The bigger idea behind building an MVP is to test your
                    assumptions. That takes us to the next important segment....{" "}
                  </div>
                </div>
                <div className="hover:bg-yellow-400 transition-all  hover:border-yellow-400 px-4 py-2 widescreen:px-[24px] max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={"/insights/the-art-of-disruptive-branding"}
              onClick={scrollToTop}
              className="w-[317px] widescreen:w-full widescreen:w-[500px] max-sm:w-[270px] h-[548px] widescreen:h-[600px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex"
            >
              <div className="flex-col justify-start widescreen:w-full items-start gap-9 flex">
                <div className="w-[317px] widescreen:w-full max-sm:w-full h-[175px] widescreen:h-auto bg-white justify-center items-center inline-flex">
                  <Image
                    className="w-[318px] widescreen:w-full ax-sm:w-full object-cover relative flex-col justify-start items-start flex"
                    src={img6}
                    alt="The art of disruptive branding"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-[24px] flex">
                <div className="flex-col justify-start widescreen:w-full items-start gap-4 flex">
                  <div className="w-[317px] widescreen:h-[40px] widescreen:w-full max-sm:w-full h-[30px] text-black text-[24px] leading-[120%] widescreen:text-[30px] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                    The art of disruptive branding{" "}
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:w-full mt-[17px] opacity-80 text-black text-base widescreen:text-[24px] font-normal font-['Graphik'] leading-normal">
                    Branded environments are not just for large corporations
                    with huge budgets. Any business can create a branded....{" "}
                  </div>
                </div>
                <div className="hover:bg-yellow-400 transition-all  hover:border-yellow-400 px-4 py-2 widescreen:px-[24px] max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={"/insights/gestalt-psychology"}
              onClick={scrollToTop}
              className="w-[317px] widescreen:w-full widescreen:w-[500px] max-sm:w-[270px] h-[548px] widescreen:h-[600px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex"
            >
              <div className="flex-col justify-start widescreen:w-full items-start gap-9 flex">
                <div className="w-[317px] widescreen:w-full max-sm:w-full h-[175px] widescreen:h-auto bg-white justify-center items-center inline-flex">
                  <Image
                    className="w-[318px] widescreen:w-full ax-sm:w-full object-cover relative flex-col justify-start items-start flex"
                    src={img4}
                    alt="Gestalt psychology"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-[24px] flex">
                <div className="flex-col justify-start widescreen:w-full items-start gap-4 flex">
                  <div className="w-[317px] widescreen:h-[40px] widescreen:w-full max-sm:w-full max-sm:w-full text-black text-[24px] leading-[120%] widescreen:text-[30px] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                    Gestalt psychology{" "}
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:w-full mt-[17px] opacity-80 text-black text-base widescreen:text-[24px] font-normal font-['Graphik'] leading-normal">
                    The website redesign of the restaurant chain, Chili's, is a
                    great case study in UX design using Gestalt Psychology....{" "}
                  </div>
                </div>
                <div className="hover:bg-yellow-400 transition-all  hover:border-yellow-400 px-4 py-2 widescreen:px-[24px] max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={"/insights/no-code-revolution"}
              onClick={scrollToTop}
              className="w-[317px] widescreen:w-full widescreen:w-[500px] max-sm:w-[270px] h-[548px] widescreen:h-[600px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex"
            >
              <div className="flex-col justify-start widescreen:w-full items-start gap-9 flex">
                <div className="w-[317px] widescreen:w-full max-sm:w-full h-[175px] widescreen:h-auto bg-white justify-center items-center inline-flex">
                  <Image
                    className="w-[318px] widescreen:w-full ax-sm:w-full object-cover relative flex-col justify-start items-start flex"
                    src={img7}
                    alt="No-Code Revolution: 5 Platforms To Keep An"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-[24px] flex">
                <div className="flex-col justify-start widescreen:w-full items-start gap-4 flex">
                  <div className="w-[317px] widescreen:h-[40px] widescreen:w-full max-sm:w-full max-sm:w-full text-black text-[24px] leading-[120%] widescreen:text-[30px] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                    No-Code Revolution: 5 Platforms To Keep An....{" "}
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:w-full mt-[17px] opacity-80 text-black text-base widescreen:text-[24px] font-normal font-['Graphik'] leading-normal">
                    The No-code revolution is indicative that modern businessmen
                    and women want to keep creative control....{" "}
                  </div>
                </div>
                <div className="hover:bg-yellow-400 transition-all  hover:border-yellow-400 px-4 py-2 widescreen:px-[24px] max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={"/insights/shopify-vs-magento"}
              onClick={scrollToTop}
              className="w-[317px] widescreen:w-full widescreen:w-[500px] max-sm:w-[270px] h-[548px] widescreen:h-[600px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex"
            >
              <div className="flex-col justify-start widescreen:w-full items-start gap-9 flex">
                <div className="w-[317px] widescreen:w-full max-sm:w-full h-[175px] widescreen:h-auto bg-white justify-center items-center inline-flex">
                  <Image
                    className="w-[318px] widescreen:w-full ax-sm:w-full object-cover relative flex-col justify-start items-start flex"
                    src={img1}
                    alt="Shopify vs magento"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-[24px] flex">
                <div className="flex-col justify-start widescreen:w-full items-start gap-4 flex">
                  <div className="w-[317px] widescreen:h-[40px] widescreen:w-full max-sm:w-full text-black text-[24px] leading-[120%] widescreen:text-[30px] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                    Shopify vs magento{" "}
                  </div>
                  <div className="w-[317px] widescreen:w-full max-sm:w-full mt-[17px] opacity-80 text-black text-base widescreen:text-[24px] font-normal font-['Graphik'] leading-normal">
                    If you're a business owner of any kind, you've probably
                    heard of Shopify and Magento.Today, Shopify and....{" "}
                  </div>
                </div>
                <div className="hover:bg-yellow-400 transition-all  hover:border-yellow-400 px-4 py-2 widescreen:px-[24px] max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base widescreen:text-[24px] font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
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

export default Bloghome;
