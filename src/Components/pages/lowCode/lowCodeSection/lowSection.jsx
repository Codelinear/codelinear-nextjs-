import img1 from "../assets/Bubble_Logo_no_code 1.svg";
import img2 from "../assets/Webflow_logo_2023 1.svg";
import img3 from "../assets/WordPress_blue_logo 1.svg";
import img4 from "../assets/Wix.com_website_logo 1.svg";
import img5 from "../assets/4373224_hubspot_logo_logos_icon 1.svg";

import Link from "next/link";
import Image from "next/image";

const LowSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <section id="exp-design" className="exp-design">
        <h2>
          Low-code and No-code <span></span>
        </h2>
        <h1 className="whitespace-nowrap max-sm:whitespace-normal">
          Low-code and No-code{" "}
        </h1>
        <p className="exp-p">
          Propel your ideas from concept to reality at unprecedented speed. Our
          Low Code No Code approach reduces development cycles, allowing you to
          innovate and iterate rapidly.
        </p>
        <div className="prod-container w-[924px] widescreen:w-[100%] flex-wrap max-lg:w-full">
          <div className="prod-sub-container">
            <Image
              src={img1}
              alt="Empowers users with no-code development"
              className="w-[57px] h-[57px]"
            />
            <h3>Bubble</h3>
            <p>
              Empowers users with no-code development, enabling the creation of
              custom web applications effortlessly and efficiently.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image
              src={img2}
              alt="Intuitive design tools for building responsive websites"
              className="w-[57px] h-[57px]"
            />
            <h3>Webflow</h3>
            <p>
              Intuitive design tools for building responsive websites visually,
              enabling quick web design without code constraints.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image
              src={img3}
              alt="Robust content management system, facilitating"
              className="w-[57px] h-[57px]"
            />
            <h3>WordPress</h3>
            <p>
              Robust content management system, facilitating website creation
              and customization with extensive plugins and themes.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image
              src={img4}
              alt="User-friendly website builder"
              className="w-[57px] h-[57px]"
            />
            <h3>Wix</h3>
            <p>
              User-friendly website builder offering customizable templates and
              intuitive drag-and-drop tools for effortless website creation.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image
              src={img5}
              alt=" Drag-and-drop design, SEO tools"
              className="w-[57px] h-[57px]"
            />
            <h3>HubSpot</h3>
            <p>
              Drag-and-drop design, SEO tools, and integrated marketing features
              for optimization.
            </p>
          </div>
        </div>
      </section>
      <div className="justify-start items-center gap-[58px] ml-[80px] max-sm:m-0 max-sm:px-[20px] inline-flex max-sm:flex-wrap max-lg:ml-[40px] max-sm:m]">
        <div className="w-[267.25px] widescreen:w-[40%] widescreen:text-[30px] widestscreen:text-[40px] text-black text-xl max-sm:text-[24px] font-normal font-['Graphik'] leading-[120%] letter-spacing-4">
          Need help in making the next big thing?{" "}
        </div>
        <Link
          href={"/contact-us"}
          onClick={scrollToTop}
          className="px-8 py-4 rounded-[50px] border border-black justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-[100%]"
        >
          <div className="text-black rounded-[50px] text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
            Talk to our experts
          </div>
        </Link>
      </div>
    </>
  );
};
export default LowSection;
