import Noise from "./assets/Noise & Texture.svg";
import arrow from "../../Navbar/Frame 1000002996.svg";
import circle from "./assets/Ellipse 15.svg";
import semicircle from "./assets/Ellipse 18.svg";
import ai from "./assets/ai.svg";
import supportai from "./assets/support.svg";
import Footer from "../../Footer/Footer";
import AI from "./assets/curve1.png";
import AI2 from "./assets/curve2.png";
import ai1 from "./assets/material-symbols-light_security (2).svg";
import ai2 from "./assets/ph_gear-light.svg";
import ai3 from "./assets/Picture-Stack-Landscape--Streamline-Ultimate.svg.svg";
import Link from "next/link";
import Aicomponent from "./aicomponent";
import Image from "next/image";
import Head from "next/head";
const Aistudio = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://codelinear.com/ai-studio" />
        <title>Codelinear - AI Studio</title>
      </Head>
      <main className="px-[80px] max-lg:px-[40px] max-sm:px-[20px]">
        <div className="absolute w-full h-[808px] widescreen:h-[1064px] widestscreen:h-[1260px] max-[785px]:h-[1000px] max-mini:h-[1210px] absolute top-0 left-0 gradient-color-yellow"></div>
        <section className="w-full overflow-hidden widescreen:h-[1064px] widestscreen:h-[1260px] absolute top-0 left-0 max-[785px]:h-[1000px] h-[808px]">
          <Image
            src={Noise}
            className="h-[808px] widescreen:h-[1064px] widestscreen:h-[1260px] w-full z-20 object-cover absolute soft-light left-0 "
            alt="Disrupt the AI game by making your own GPT"
          />
          <Image
            src={circle}
            alt="making your own GPT"
            className="w-[434.63px] z-10 absolute widescreen:h-[1064px] widestscreen:h-[1260px] top-[225px] left-[490.05px] h-[434.63px]"
          />
          <Image
            src={semicircle}
            alt="Codelinear - AI Studio"
            className="w-[434.63px] z-10 absolute widescreen:h-[1064px] widestscreen:h-[1260px] top-[225px] left-[815.37px] h-[434.63px]"
          />
          <Image
            src={semicircle}
            alt="Planning made easy."
            className="w-[434.63px] z-10 absolute widescreen:h-[1064px] widestscreen:h-[1260px] top-[225px] left-[1033.37px] h-[434.63px]"
          />
        </section>
        <div className="z-30 relative">
          <h1 className="mt-[120px] max-sm:text-[50px] max-sm:leading-[54px] max-[800px]:w-full text-[66.23px] widescreen:text-[88px] widestscreen:text-[110px] widescreen:leading-[120%] widescreen:w-[55%] leading-[71.66px] tracking-[-1.9px] mb-[56px] w-[737.69px]">
            Disrupt the AI game by making your own GPT.
          </h1>
          <a
            href="#aitools"
            className="border-[1px] border-[black] widescreen:w-[264px] widescreen:h-[64px] w-[214.16px] h-[56px] rounded-[31px] flex gap-[8px] items-center justify-center"
          >
            <p className="text-base widescreen:text-[24px]">See our models</p>
            <Image
              src={arrow}
              className="w-[24px] h-[24px] rotate-[45deg]"
              alt=" Vacation.AI, Planning made easy."
            />
          </a>
          <div className="flex justify-end mb-[62px] mt-[18px]">
            <div className="bg-[#202941e5] max-sm:w-full widestscreen:w-[900px] max-mini:h-auto widescreen:h-auto w-[522px] widescreen:w-[615px] h-[261px] rounded-[7px]">
              <div className="w-[522px] widescreen:w-[615px] widestscreen:w-[900px] widescreen:h-auto max-mini:flex-col flex gap-[35.32px] max-sm:w-full max-mini:h-auto widescreen:pb-[40px] pt-[28px] max-mini:px-[20px] pl-[21px] gradient-color-black h-[261px] rounded-[7px]">
                <div className="widescreen:w-[50%]">
                  <div className="bg-[#FFFFFF1A] widescreen:text-base widescreen:text-[24px] widescreen:w-[71px] widescreen:justify-center text-[14px] rounded-[32px] flex items-center gap-[4px] w-[52.18px] text-white py-[2px] leading-[21px]">
                    <div className="bg-[#FF0000] rounded-[100%] w-[13.18px] h-[13.18px]"></div>
                    Live
                  </div>
                  <Image
                    src={ai}
                    className="w-[165px] widescreen:w-[100%] widescreen:h-auto max-mini:w-full max-mini:h-auto h-[166px] mt-[14px]"
                    alt=""
                  />
                </div>
                <div className="mt-[39px] max-mini:mt-0">
                  <h1 className="text-[32px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] text-white leading-[38.4px] mb-[10px]">
                    Vacation.AI
                  </h1>
                  <p className="text-base widescreen:text-[20px] widescreen:text-[24px] text-[#FFFFFFB2]">
                    Planning made easy.
                  </p>
                  <Link href={"/ai-studio/about-vacation-ai"}>
                    <button className="mt-[38px] max-mini:w-full w-[170px] widescreen:w-[190px] widescreen:h-[65x] widestscreen:h-[74x] widestscreen:w-[220px] h-[56px] text-white rounded-[31px] bg-[#0F1599] text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%] widescreen:text-[20px] widescreen:text-[24px]">
                      Start Planning
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="py-[91.5px] bg-[#EDF4F6] overflow-hidden widescreen:h-[1000px] widestscreen:h-[1100px] h-[865px] max-md:h-[1600px] relative max-lg:pl-[40px] max-sm:px-[20px] pl-[80px]">
        <Image
          src={AI}
          className="absolute h-[1015.04px] widescreen:h-[1200px] w-[2078.73px] object-cover top-[0px] left-0 w-full"
          alt="Accelerate your pipelines with AI"
        />
        <Image
          src={AI2}
          className="absolute h-[865px] widescreen:h-[1200px] w-[2078.73px] object-cover bottom-0 left-0 w-full"
          alt="Accelerate your pipelines with AI"
        />
        <div className="w-[521.42px] widestscreen:w-[900px] widescreen:w-[700px] max-sm:w-full relative z-10 mb-[41px] max-xl:ml-0 ml-[108px]">
          <div className="w-[521.42px] widescreen:w-full mb-[30px] justify-start items-center gap-[13.42px] inline-flex max-lg:w-[100%]">
            <div className="opacity-60 text-black text-sm widestscreen:text-[16px] widescreen:text-[24px] font-normal font-['Archivo'] uppercase leading-snug">
              Ai studios{" "}
            </div>
            <div className=" grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
          </div>
          <h1 className="text-[49.2px] widestscreen:text-[80px] widescreen:text-[64px] widescreen:leading-[120%] widescreen:w-full max-sm:w-full tracking-[-1.47px] text-black w-[471.46px] leading-[59.04px]">
            Accelerate your pipelines with AI
          </h1>
          <p className="text-black opacity-80 widescreen:text-[24px] widescreen:text-[20px] widescreen:leading-[150%] mt-[22px] text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%]">
            Transform your operations with NLP expertise, leveraging language
            understanding for improved communication, insights, and
            decision-making within your organization.
          </p>
        </div>
        <div className="relative flex gap-[52px] max-xl:ml-0 max-md:flex-col max-hamburger:flex-wrap z-10 mb-[41px] ml-[108px]">
          <div className="w-[273.16px] widescreen:w-[25%]">
            <Image
              src={ai1}
              className="w-[57px] h-[57px] invert mb-[20px]"
              alt="Chatbot Development"
            />
            <h1 className="text-[20px] widestscreen:text-[32px] widescreen:text-[24px] widescreen:leading-[150%] leading-[24px] tracking-[-0.2px] mb-[20px] text-black">
              Chatbot Development
            </h1>
            <p className="text-black widescreen:text-[24px] widescreen:text-[20px] widescreen:leading-[130%] opacity-80 text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%] mb-[20px]">
              Build interactive chatbots, enhancing customer support and user
              engagement with natural language conversations.
            </p>
            <ul className="list-disc ml-[13px]">
              <li className="text-black opacity-80 text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%]">
                Consulting and Strategy
              </li>
              <li className="text-black opacity-80 text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%]">
                Chatbot Training
              </li>
              <li className="text-black opacity-80 text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%]">
                Fine-tuning
              </li>
              <li className="text-black opacity-80 text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%]">
                Chatbot Deployment
              </li>
            </ul>
          </div>
          <div className="w-[273.16px] widescreen:w-[25%]">
            <Image
              src={ai2}
              className="w-[57px] h-[57px] invert mb-[20px]"
              alt="Data Console"
            />
            <h1 className="text-[20px] widestscreen:text-[32px] widescreen:text-[24px] widescreen:leading-[150%] leading-[24px] tracking-[-0.2px] mb-[20px] text-black">
              Data Console
            </h1>
            <p className="text-black opacity-80 text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%] mb-[20px]">
              Implement NLP into your ecosystem, making it easier for people in
              your organization to make informed decisions.
            </p>
            <ul className="list-disc ml-[13px]">
              <li className="text-black opacity-80 text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%]">
                Data preparation
              </li>
              <li className="text-black opacity-80 text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%]">
                Train the model on custom data
              </li>
              <li className="text-black opacity-80 text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%]">
                Implement conversational <br /> feature
              </li>
              <li className="text-black opacity-80 text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%]">
                Deployment on cloud
              </li>
            </ul>
          </div>
          <div className="w-[273.16px] widescreen:w-[25%]">
            <Image
              src={ai3}
              className="w-[57px] h-[57px] invert mb-[20px]"
              alt="Generative AI"
            />
            <h1 className="text-[20px] widestscreen:text-[32px] widescreen:text-[24px] widescreen:leading-[150%] leading-[24px] tracking-[-0.2px] mb-[20px] text-black">
              Generative AI
            </h1>
            <p className="text-black opacity-80 text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%] mb-[20px]">
              Train and implement AI to generate content, visuals tailored to
              your brand guidelines. Shorten your creative process with
              innovation.
            </p>
            <ul className="list-disc ml-[13px]">
              <li className="text-black opacity-80 text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%]">
                Model consulting
              </li>
              <li className="text-black opacity-80 text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%]">
                Data preparation
              </li>
              <li className="text-black opacity-80 text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%]">
                Model training
              </li>
              <li className="text-black opacity-80 text-base widescreen:text-[24px] widescreen:text-[20px] leading-[150%]">
                Deployment and maintenance
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div id="aitools">
        <Aicomponent />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Aistudio;
