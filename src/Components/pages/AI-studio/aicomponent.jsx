import ai from "./assets/ai.svg";
import supportai from "./assets/support.svg";
import Leeds from "./assets/leeds.png";
import Link from "next/link";
import x from "../../../assets/homeassets/akar-icons_x-fill.svg";
import Image from "next/image";
const Aicomponent = () => {
  return (
    <>
      <section className="py-[90px] relative max-sm:px-[20px]">
        <div className="w-[521.42px] widescreen:w-[700px] max-sm:w-full mb-[41px] max-xl:ml-[80px] max-lg:ml-[40px] max-sm:pl-[0px] max-sm:ml-0 max-sm:w-full ml-[108px]">
          <div className="w-[521.42px] widescreen:w-full max-sm:w-full mb-[30px] justify-start items-center gap-[13.42px] inline-flex max-lg:w-[100%]">
            <div className="opacity-60 widescreen:text-[20px] widescreen:text-[24px] text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
              Ai studios{" "}
            </div>
            <div className=" grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
          </div>
          <h1 className="text-[49.2px] widescreen:w-full  widescreen:text-[64px] widestscreen:text-[80px] max-sm:text-[40px] max-sm:leading-[46px] widescreen:leading-[120%] max-sm:w-full tracking-[-1.47px] w-[471.46px] leading-[59.04px]">
            All the models we have to offer.
          </h1>
        </div>
        <div className="flex gap-x-[20px] justify-center flex-wrap gap-y-[26px] max-sm:px-0 max-lg:px-[40px]">
          <div className="w-[522px] bigscreen:w-[40%] bg-[#0909090D] h-[273px] widescreen:h-auto  widescreen:pb-[20px] max-mini:h-auto max-mini:pb-[20px] max rounded-[7px] max-xl:w-[450px] max-xl:h-[250px] max-lg:w-[430px] max-[960px]:w-full">
            <div className="w-[522px] bigscreen:w-full max-mini:flex-col max-mini:h-auto flex gap-[35.32px] max-mini:px-[20px] pt-[28px] pl-[21px] h-[273px] widescreen:h-auto  widescreen:pb-[20px] rounded-[7px] max-xl:w-[450px] max-lg:w-[430px] max-[960px]:w-full max-xl:h-[250px] max-xl:pt-[20px]">
              <div className="widescreen:w-[40%]">
                <div className="bg-[#0000000D] text-[14px] rounded-[32px] flex items-center gap-[4px] w-[52.18px] text-black py-[2px] leading-[21px]">
                  <div className="bg-[#FF0000] rounded-[100%] w-[13.18px] h-[13.18px]"></div>
                  Live
                </div>
                <Image
                  src={ai}
                  className="w-[165px] h-[166px] mt-[14px] max-mini:w-full max-mini:h-auto widescreen:w-[100%] widescreen:h-auto"
                  alt="Ai studios"
                />
              </div>
              <div className="mt-[39px] max-mini:mt-0">
                <h1 className="text-[32px] text-black leading-[38.4px] mb-[10px] widescreen:leading-[120%] widestscreen:text-[50px] widescreen:text-[40px]">
                  Vacation.AI
                </h1>
                <p className="text-base widescreen:text-[20px] widescreen:text-[24px] widescreen:mt-[20px] text-[#00000B2]">
                  Planning made easy.
                </p>
                <Link href={"/ai-studio/about-vacation-ai"}>
                  <button className="mt-[38px] max-lg:mt-[24px] max-lg:w-[200px] widescreen:mt-[80px] widestscreen:mt-[235px] w-[210px] h-[56px] text-white rounded-[31px] bg-[#0F1599] text-base max-mini:w-full">
                    Start Planning
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[522px] bigscreen:w-[40%] bg-[#0909090D] h-[273px] widescreen:h-auto  widescreen:pb-[20px] max-mini:h-auto max-mini:pb-[20px] max rounded-[7px] max-xl:w-[450px] max-xl:h-[250px] max-lg:w-[430px] max-[960px]:w-full">
            <div className="w-[522px] bigscreen:w-full max-mini:flex-col max-mini:h-auto flex gap-[35.32px] max-mini:px-[20px] pt-[28px] pl-[21px] h-[273px] widescreen:h-auto  widescreen:pb-[20px] rounded-[7px] max-xl:w-[450px] max-lg:w-[430px] max-[960px]:w-full max-xl:h-[250px] max-xl:pt-[20px]">
              <div className="widescreen:w-[40%]">
                <div className="bg-[#0000000D] text-[14px] rounded-[32px] flex items-center gap-[4px] w-[52.18px] text-black py-[2px] leading-[21px]">
                  <div className="bg-[#FF0000] rounded-[100%] w-[13.18px] h-[13.18px]"></div>
                  Live
                </div>
                <Image
                  src={supportai}
                  className="w-[165px] h-[166px] mt-[14px] max-mini:w-full max-mini:h-auto widescreen:w-[100%] widescreen:h-auto"
                  alt="supportai"
                />
              </div>
              <div className="mt-[39px] max-mini:mt-0">
                <h1 className="text-[32px] text-black leading-[38.4px] mb-[10px] widescreen:leading-[120%] widestscreen:text-[50px] widescreen:text-[40px]">
                  Support.AI
                </h1>
                <p className="text-base widescreen:text-[20px] widescreen:text-[24px] widescreen:mt-[20px] text-[#00000B2]">
                  Customer support made easy.
                </p>
                <Link href={"/ai-studio/about-support-ai"}>
                  <button className="mt-[38px] max-lg:mt-[24px] max-lg:w-[200px] widestscreen:mt-[235px] widescreen:mt-[80px] w-[210px] h-[56px] text-white rounded-[31px] bg-[#F67B36] text-base max-mini:w-full">
                    Streamline Support
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[522px] bigscreen:w-[40%] bg-[#0909090D] h-[273px] widescreen:h-auto  widescreen:pb-[20px] max-mini:h-auto max-mini:pb-[20px] max rounded-[7px] max-xl:w-[450px] max-xl:h-[250px] max-lg:w-[430px] max-[960px]:w-full">
            <div className="w-[522px] bigscreen:w-full max-mini:flex-col max-mini:h-auto flex gap-[35.32px] max-mini:px-[20px] pt-[28px] pl-[21px] h-[273px] widescreen:h-auto  widescreen:pb-[20px] rounded-[7px] max-xl:w-[450px] max-lg:w-[430px] max-[960px]:w-full max-xl:h-[250px] max-xl:pt-[20px]">
              <div className="widescreen:w-[40%]">
                <div className="bg-[#0000000D] text-[14px] px-[4px] rounded-[32px] flex items-center gap-[4px] w-[149.18px] text-black py-[2px] leading-[21px]">
                  <div className="bg-[#7F7F7F] rounded-[100%] w-[13.18px] h-[13.18px]"></div>
                  Under Deployment
                </div>
                <Image
                  src={Leeds}
                  className="w-[165px] h-[166px] mt-[14px] max-mini:w-full max-mini:h-auto widescreen:w-[100%] widescreen:h-auto"
                  alt="Planning made easy."
                />
              </div>
              <div className="mt-[39px] max-mini:mt-0">
                <h1 className="text-[32px] text-black leading-[38.4px] mb-[10px] widescreen:leading-[120%] widestscreen:text-[50px] widescreen:text-[40px]">
                  Leedspark
                </h1>
                <p className="text-base widescreen:text-[20px] widescreen:text-[24px] widescreen:mt-[20px] text-[#00000B2]">
                  Planning made easy.
                </p>
                <button className="mt-[38px] max-lg:mt-[24px] max-lg:w-[200px] widestscreen:mt-[235px] widescreen:mt-[80px] w-[170px] h-[56px] text-white rounded-[31px] bg-[#0F1599] text-base max-mini:w-full">
                  Start Planning
                </button>
              </div>
            </div>
          </div>
          <div className="w-[522px] bigscreen:w-[40%] max-[961px]:hidden bg-[#0909090D] h-[273px] widescreen:h-auto  widescreen:pb-[20px] max-mini:h-auto max-mini:pb-[20px] max rounded-[7px] max-xl:w-[450px] max-xl:h-[250px] max-lg:w-[430px] max-[960px]:w-full">
            <div className="w-[522px] bigscreen:w-full max-mini:flex-col max-mini:h-auto flex gap-[35.32px] max-mini:px-[20px] pt-[28px] pl-[21px] h-[273px] widescreen:h-auto  widescreen:pb-[20px] rounded-[7px] max-xl:w-[450px] max-lg:w-[430px] max-[960px]:w-full max-xl:h-[250px] max-xl:pt-[20px]">
              <div className="widescreen:w-[40%]">
                <div className="bg-[#0000000D] text-[14px] px-[4px] rounded-[32px] flex items-center gap-[4px] w-[149.18px] text-black py-[2px] leading-[21px]">
                  <div className="bg-[#7F7F7F] rounded-[100%] w-[13.18px] h-[13.18px]"></div>
                  Under Deployment
                </div>
                <Image
                  src={ai}
                  className="w-[165px] h-[166px] mt-[14px] max-mini:w-full max-mini:h-auto widescreen:w-[100%] widescreen:h-auto"
                  alt=" Insights.AI"
                />
              </div>
              <div className="mt-[39px] max-mini:mt-0">
                <h1 className="text-[32px] text-black leading-[38.4px] mb-[10px] widescreen:leading-[120%] widestscreen:text-[50px] widescreen:text-[40px]">
                  Insights.AI
                </h1>
                <p className="text-base widescreen:text-[20px] widescreen:text-[24px] widescreen:mt-[20px] text-[#00000B2]">
                  Planning made easy.
                </p>
                <button className="mt-[38px] max-lg:mt-[24px] max-lg:w-[200px] widestscreen:mt-[235px] widescreen:mt-[80px] w-[170px] h-[56px] text-white rounded-[31px] bg-[#0F1599] text-base max-mini:w-full">
                  Start Planning
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col h-[400px] widescreen:h-[400px] max-xl:w-full rounded-tl-[50%] max-md:rounded-tr-[30%] max-sm:rounded-tr-[10%] max-sm:rounded-tl-[10%] max-md:rounded-tl-[30%] rounded-tr-[50%] relative bottom-[155px] bg-white items-center justify-center shadow-custom">
            <h1 className="text-[49.2px] max-sm:text-[40px] z-[2] mb-[41.21px] max-sm:leading-[46px] max-sm:w-full tracking-[-1.47px] text-center w-[573.46px] leading-[59.04px]">
              More models on the way. Will be here anytime soon.
            </h1>
            <p className="text-[16px] text-[#101415] mb-[17px] z-[2] leading-[17.6px] text-center">
              Follow us on our socials to stay updated.
            </p>
            <div className="justify-center items-center w-[243.22px] z-[2] flex-wrap max-sm:w-full gap-[19.84px] inline-flex">
              <div className="w-6 h-6 relative">
                <a
                  target="_blank"
                  href="https://in.linkedin.com/company/codelinear"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M18.9992 3.33838C19.5296 3.33838 20.0383 3.54908 20.4134 3.92414C20.7884 4.29919 20.9991 4.80788 20.9991 5.33828V19.3376C20.9991 19.868 20.7884 20.3767 20.4134 20.7518C20.0383 21.1268 19.5296 21.3375 18.9992 21.3375H4.9999C4.4695 21.3375 3.96081 21.1268 3.58576 20.7518C3.2107 20.3767 3 19.868 3 19.3376V5.33828C3 4.80788 3.2107 4.29919 3.58576 3.92414C3.96081 3.54908 4.4695 3.33838 4.9999 3.33838H18.9992ZM18.4993 18.8376V13.5379C18.4993 12.6733 18.1558 11.8442 17.5445 11.2328C16.9331 10.6215 16.104 10.278 15.2394 10.278C14.3895 10.278 13.3995 10.798 12.9195 11.578V10.468H10.1297V18.8376H12.9195V13.9079C12.9195 13.1379 13.5395 12.5079 14.3095 12.5079C14.6807 12.5079 15.0368 12.6554 15.2994 12.918C15.5619 13.1805 15.7094 13.5366 15.7094 13.9079V18.8376H18.4993ZM6.87981 8.89811C7.32536 8.89811 7.75265 8.72112 8.0677 8.40608C8.38274 8.09103 8.55973 7.66374 8.55973 7.21819C8.55973 6.28824 7.80977 5.52827 6.87981 5.52827C6.43162 5.52827 6.00178 5.70632 5.68486 6.02324C5.36794 6.34016 5.18989 6.77 5.18989 7.21819C5.18989 8.14815 5.94986 8.89811 6.87981 8.89811ZM8.26975 18.8376V10.468H5.49988V18.8376H8.26975Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
              <div className="w-6 h-6 relative">
                <a target="_blank" href="https://www.facebook.com/Codelinear/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M22.8438 12.3384C22.8438 6.81838 18.3638 2.33838 12.8438 2.33838C7.32375 2.33838 2.84375 6.81838 2.84375 12.3384C2.84375 17.1784 6.28375 21.2084 10.8438 22.1384V15.3384H8.84375V12.3384H10.8438V9.83838C10.8438 7.90838 12.4137 6.33838 14.3438 6.33838H16.8438V9.33838H14.8438C14.2937 9.33838 13.8438 9.78838 13.8438 10.3384V12.3384H16.8438V15.3384H13.8438V22.2884C18.8937 21.7884 22.8438 17.5284 22.8438 12.3384Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
              <div className="w-6 h-6 relative">
                <a
                  target="_blank"
                  href="https://www.instagram.com/codelinear_/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M8.48848 2.33838H16.8885C20.0885 2.33838 22.6885 4.93838 22.6885 8.13838V16.5384C22.6885 18.0766 22.0774 19.5519 20.9897 20.6396C19.902 21.7273 18.4267 22.3384 16.8885 22.3384H8.48848C5.28848 22.3384 2.68848 19.7384 2.68848 16.5384V8.13838C2.68848 6.60012 3.29955 5.12487 4.38726 4.03716C5.47497 2.94945 6.95022 2.33838 8.48848 2.33838ZM8.28848 4.33838C7.3337 4.33838 6.41802 4.71766 5.74289 5.39279C5.06776 6.06793 4.68848 6.9836 4.68848 7.93838V16.7384C4.68848 18.7284 6.29848 20.3384 8.28848 20.3384H17.0885C18.0433 20.3384 18.9589 19.9591 19.6341 19.284C20.3092 18.6088 20.6885 17.6932 20.6885 16.7384V7.93838C20.6885 5.94838 19.0785 4.33838 17.0885 4.33838H8.28848ZM17.9385 5.83838C18.27 5.83838 18.5879 5.97007 18.8224 6.20449C19.0568 6.43892 19.1885 6.75686 19.1885 7.08838C19.1885 7.4199 19.0568 7.73784 18.8224 7.97226C18.5879 8.20668 18.27 8.33838 17.9385 8.33838C17.607 8.33838 17.289 8.20668 17.0546 7.97226C16.8202 7.73784 16.6885 7.4199 16.6885 7.08838C16.6885 6.75686 16.8202 6.43892 17.0546 6.20449C17.289 5.97007 17.607 5.83838 17.9385 5.83838ZM12.6885 7.33838C14.0146 7.33838 15.2863 7.86516 16.224 8.80284C17.1617 9.74053 17.6885 11.0123 17.6885 12.3384C17.6885 13.6645 17.1617 14.9362 16.224 15.8739C15.2863 16.8116 14.0146 17.3384 12.6885 17.3384C11.3624 17.3384 10.0906 16.8116 9.15294 15.8739C8.21526 14.9362 7.68848 13.6645 7.68848 12.3384C7.68848 11.0123 8.21526 9.74053 9.15294 8.80284C10.0906 7.86516 11.3624 7.33838 12.6885 7.33838ZM12.6885 9.33838C11.8928 9.33838 11.1298 9.65445 10.5672 10.2171C10.0045 10.7797 9.68848 11.5427 9.68848 12.3384C9.68848 13.134 10.0045 13.8971 10.5672 14.4597C11.1298 15.0223 11.8928 15.3384 12.6885 15.3384C13.4841 15.3384 14.2472 15.0223 14.8098 14.4597C15.3724 13.8971 15.6885 13.134 15.6885 12.3384C15.6885 11.5427 15.3724 10.7797 14.8098 10.2171C14.2472 9.65445 13.4841 9.33838 12.6885 9.33838Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
              <div className="w-6 h-6 relative">
                <a target="_blank" href="https://medium.com/@codelinear_">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1581_609)">
                      <path
                        d="M14.0706 12.3378C14.0706 16.0653 11.0406 19.0878 7.30114 19.0878C6.41355 19.089 5.53441 18.9153 4.71392 18.5767C3.89344 18.2382 3.14768 17.7413 2.51921 17.1145C1.89075 16.4877 1.3919 15.7433 1.05114 14.9237C0.710379 14.1041 0.534384 13.2254 0.533203 12.3378C0.533203 8.60887 3.56318 5.5879 7.30114 5.5879C8.18887 5.58652 9.06817 5.76003 9.88883 6.09852C10.7095 6.437 11.4554 6.93384 12.084 7.56065C12.7127 8.18746 13.2117 8.93196 13.5525 9.75164C13.8934 10.5713 14.0694 11.4501 14.0706 12.3378ZM21.4955 12.3378C21.4955 15.8478 19.9805 18.6918 18.1116 18.6918C16.2426 18.6918 14.7276 15.8463 14.7276 12.3378C14.7276 8.82787 16.2426 5.9839 18.1116 5.9839C19.9805 5.9839 21.4955 8.82937 21.4955 12.3378ZM24.533 12.3378C24.533 15.4818 24.0005 18.0303 23.342 18.0303C22.685 18.0303 22.1525 15.4803 22.1525 12.3378C22.1525 9.19387 22.685 6.64539 23.3435 6.64539C24.0005 6.64539 24.533 9.19387 24.533 12.3378Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1581_609">
                        <rect
                          width="23.9998"
                          height="23.9998"
                          fill="white"
                          transform="translate(0.533203 0.337891)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>

              <div className="w-6 h-6 relative">
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCFsBmCBzxSX8fS8HxCHOYtA"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M10.3777 15.3379L15.5677 12.3379L10.3777 9.33789V15.3379ZM21.9377 7.50789C22.0677 7.97789 22.1577 8.60789 22.2177 9.40789C22.2877 10.2079 22.3177 10.8979 22.3177 11.4979L22.3777 12.3379C22.3777 14.5279 22.2177 16.1379 21.9377 17.1679C21.6877 18.0679 21.1077 18.6479 20.2077 18.8979C19.7377 19.0279 18.8777 19.1179 17.5577 19.1779C16.2577 19.2479 15.0677 19.2779 13.9677 19.2779L12.3777 19.3379C8.18769 19.3379 5.57769 19.1779 4.54769 18.8979C3.64769 18.6479 3.06769 18.0679 2.81769 17.1679C2.68769 16.6979 2.59769 16.0679 2.53769 15.2679C2.46769 14.4679 2.43769 13.7779 2.43769 13.1779L2.37769 12.3379C2.37769 10.1479 2.53769 8.53789 2.81769 7.50789C3.06769 6.60789 3.64769 6.02789 4.54769 5.77789C5.01769 5.64789 5.87769 5.55789 7.19769 5.49789C8.49769 5.42789 9.68769 5.39789 10.7877 5.39789L12.3777 5.33789C16.5677 5.33789 19.1777 5.49789 20.2077 5.77789C21.1077 6.02789 21.6877 6.60789 21.9377 7.50789Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
              <div className="w-5 h-5 relative">
                <a target="_blank" href="https://twitter.com/Codelinear_">
                  <Image src={x} alt="Twitter Logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aicomponent;
