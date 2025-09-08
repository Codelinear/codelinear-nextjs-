"use client";
import "./production.scss";
import bulb from "./images/Product design01.jpg";
import img1 from "./images/ph_eye.svg";
import img2 from "./images/ph_eye (1).svg";
import img3 from "./images/ph_eye (2).svg";
import img4 from "./images/Product design02.jpg";
import img5 from "./images/Brain.svg";
import img6 from "./images/Phone Mobile Phone.svg";
import img7 from "./images/User Sync Online In Person.svg";
import img8 from "./images/ph_eye (3).svg";
import img9 from "./images/ph_eye (4).svg";
import img10 from "./images/ph_eye (5).svg";
import arrcurve from "./images/Frame 1000002754 --_ Frame 1000002785.svg";
import arrright from "./images/Frame 1000002750 --_ Frame 1000002752.svg";
import arrdown from "./images/Frame 1000002750 --_ Frame 1000002751.svg";
import "swiper/css";
import "swiper/css/free-mode";

import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import gsap from "gsap";
import Explore from "./Explore";
import Footer from "../../Footer/Footer";
import Head from "next/head";
import Image from "next/image";

const Production = () => {
  const containerRef = useRef(null);
  const sidebar = useRef(null);
  const produc = useRef(null);
  const prod = useRef(null);
  const imglap = useRef(null);
  const bulbimg = useRef(null);
  const appdeve = useRef(null);
  const consult = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  const scrollToMobileGameu = () => {
    if (produc.current) {
      produc.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTodesktopgame = () => {
    if (appdeve.current) {
      appdeve.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTounreal = () => {
    if (consult.current) {
      consult.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (
        scrollPosition + 200 >= sectionTop &&
        scrollPosition < sectionBottom
      ) {
        setActiveSection(index);
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Services - Product Design & Innovation</title>
        <meta
          name="description"
          content="Explore Codelinear's product design and innovation services, tailored to help businesses create innovative and user-centric digital products. Learn how we combine design thinking, user research, and prototyping to bring your product ideas to life."
        />
        <link
          rel="canonical"
          href="https://codelinear.com/services/product-design-and-innovation"
        />
        <meta
          name="keywords"
          content="product design, innovation, digital products, user-centric design, design thinking, user research, prototyping, product development"
        />
      </Head>
      <div className="flex bg-[white]" ref={prod}>
        <div className="left">
          <section id="prod-hero">
            <h1 className="prod-hero-h1 letter-spacing section">
              Tailored to turn your ideas into exceptional products{" "}
            </h1>
            <div className="section">
              <Image
                src={bulb}
                alt="Tailored to turn your ideas into exceptional products"
                ref={bulbimg}
              />
            </div>
            <p>
              We believe in the power of visionary design and cutting-edge
              technology to drive meaningful innovation. Unleash the potential
              of your concepts with our strategic blend of design thinking and
              technological expertise.
            </p>
            <Link scroll={false} href={"/contact-us"} onClick={scrollToTop}>
              <button>Talk to our experts</button>
            </Link>
          </section>
          <section id="exp-design" className="exp-design section" ref={produc}>
            <h2>
              Product Design and Innovation <span></span>
            </h2>
            <h1>Experience Design</h1>
            <p className="exp-p">
              Our Experience Services are designed to seamlessly blend design
              finesse with technological innovation, creating interactions that
              captivate and engage users.
            </p>
            <div className="prod-container">
              <div className="prod-sub-container">
                <Image src={img1} alt="User Experience Design" />
                <h3>User Experience Design</h3>
                <p>
                  Digital interactions that delight and resonate, our user
                  experience design effortlessly combines aesthetics,
                  functionality, and innovation.
                </p>
              </div>
              <div className="prod-sub-container">
                <Image src={img2} alt="User Interface Design" />
                <h3>User Interface Design</h3>
                <p>
                  Shaping digital dialogues, our user interaction design fuses
                  creativity and functionality, enhancing engagement through
                  intuitive and captivating experiences.
                </p>
              </div>
              <div className="prod-sub-container">
                <Image src={img3} alt="Customer Experience" />
                <h3>Customer Experience</h3>
                <p>
                  Elevate brand loyalty through strategic touchpoints and
                  personalized interactions, fostering unforgettable journeys
                  with our customer experience design.
                </p>
              </div>
            </div>
            <div className="prod-container-2">
              <Image src={img4} alt=" Your users, our expertise" ref={imglap} />
              <div className="prod-sub-container-2">
                <h4>
                  Your users, our expertise – let's create digital delight
                  together.
                </h4>
                <Link scroll={false} href={"/contact-us"} onClick={scrollToTop}>
                  <button>Talk to our design experts</button>
                </Link>
              </div>
            </div>
          </section>
          <section id="prod-engg" className="section" ref={appdeve}>
            <h2>
              Product Design and Innovation <span></span>
            </h2>
            <h1>Product Engineering</h1>
            <p className="exp-p">
              We blend design-led creativity with robust engineering to propel
              your digital products to new heights. Our Digital Product
              Engineering Services are meticulously crafted to transform your
              visions into innovative, functional, and scalable digital
              solutions.
            </p>
            <h3>What we do differently</h3>
            <div className="engg-container">
              <div className="engg-sub-contaner">
                <Image
                  src={img5}
                  alt="Infuse innovation into every line of code"
                />
                <h4>Design thinking</h4>
                <p className="w-[239px]">
                  Infuse innovation into every line of code, ensure
                  functionality seamlessly aligns with captivating design
                  elements.{" "}
                </p>
              </div>
              <div className="engg-sub-contaner">
                <Image src={img6} alt="Scalability and Performance" />
                Scalability and Performance{" "}
                <p className="w-[235px]">
                  Prioritize scalability and performance, ensuring your digital
                  solutions evolve effortlessly with increasing user demands.{" "}
                </p>
              </div>
              <div className="engg-sub-contaner">
                <Image src={img7} alt="Cross-functional team" />
                <h4>Cross-functional team</h4>
                <p className="w-[254.6px]">
                  Our approach encourages cross-functional collaboration,
                  ensuring that design, engineering, and innovation contribute
                  to your product's success.{" "}
                </p>
              </div>
            </div>
            <section className="animation-tree" ref={containerRef}>
              <div className="hover"></div>
              <h5 className="at-h1">
                Deploying Product Engineering is necessary to keep up with
                digital hypergrowth.
              </h5>
              <div className="ia">
                <p>Ideation</p>
                <Image src={arrdown} alt="Ideation" />
                <p>Architecture</p>
                <Image src={arrdown} alt="Architecture" />
              </div>
              <div className="ddt">
                <p>Design</p>
                <Image src={arrright} alt="" />
                <p>Develop</p>
                <Image src={arrright} alt="" />
                <p>Test</p>
              </div>
              <div className="dsm">
                <Image src={arrdown} alt="" />
                <p>Deploy</p>
                <Image src={arrdown} alt="" />
                <p>Support and Maintenance</p>
              </div>
              <Image src={arrcurve} alt="" className="arrcurve" />
              <div className="outter-circle">
                <div className="middle-circle">
                  <div className="inner-circle">Reengineer</div>
                </div>
              </div>
              <div className="talk">
                <div className="talk-text">
                  Ready to transition into the future?{" "}
                </div>
                <Link scroll={false} href={"/contact-us"} onClick={scrollToTop}>
                  <button>Talk to our design experts</button>
                </Link>
              </div>
            </section>
          </section>
          <section className="section"></section>
          <section id="inn-strat" className="exp-design section" ref={consult}>
            <h2>
              Product Design and Innovation <span></span>
            </h2>
            <h1>Innovation and Strategy</h1>
            <p className="exp-p">
              Empower your organization with strategic innovation and guide it
              through transformative journeys, ensuring sustained growth in the
              ever-changing digital landscape.
            </p>
            <div className="prod-container">
              <div className="prod-sub-container">
                <Image src={img8} alt="New product innovation" />
                <h3>New product innovation</h3>
                <p>
                  Revolutionize industries with our new product innovation,
                  blending cutting-edge technology and visionary design for
                  unparalleled market disruption.
                </p>
              </div>
              <div className="prod-sub-container">
                <Image src={img9} alt="Incremental innovation" />
                <h3>Incremental innovation</h3>
                <p>
                  Evolve with our incremental innovation, introducing iterative
                  improvements that cumulatively elevate product efficiency,
                  value, and performance.
                </p>
              </div>
              <div className="prod-sub-container">
                <Image src={img10} alt="New Feature Introduction" />
                <h3>New Feature Introduction</h3>
                <p>
                  Strategically implement innovative features to an existing
                  product, propelling organizational growth and success.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div
          className="right bgtransparent sticky max-xl:hidden h-[600px] top-[76px] mt-0  max-xl:w-full bg-white max-xl:h-[300px] max-xl:top-10  max-md:h-[400px] widescreen:w-[380px] pr-[80px]"
          ref={sidebar}
        >
          <div className="self-stretch flex-col justify-start items-start gap-3 inline-flex max-xl:w-full  max-xl:h-[300px]">
            <div className=" overview bgneutral-100 p-2 rounded-[7px]  justify-center items-center gap-2 inline-flex">
              <div
                className={
                  activeSection === 0
                    ? "active text-black text-base  widescreen:text-[20px] widestscreen:text-[24px] p-2 font-normal font-['Graphik'] leading-tight"
                    : " text-black text-base  widescreen:text-[20px] widestscreen:text-[24px] font-normal font-['Graphik'] leading-tight p-2"
                }
              >
                Overview
              </div>
            </div>
            <div className=" w-[190px] h-[463px] widescreen:w-[300px] relative left-[0px] max-xl:h-[200px] max-xl:w-full">
              <div className="w-[190px] overview widescreen:w-full h-[35px] p-2 top-0 absolute rounded-lg justify-center items-center gap-[11px] inline-flex max-xl:flex-wrap ">
                <div
                  className={
                    activeSection >= 1
                      ? "active  -2 text-black text-base  widescreen:text-[20px] widestscreen:text-[24px] font-normal font-['Graphik'] leading-tight"
                      : "text-black  -2 text-base  widescreen:text-[20px] widestscreen:text-[24px] font-normal font-['Graphik'] leading-tight p-2"
                  }
                >
                  Product Design and Innovation{" "}
                </div>
              </div>
              <div className="mt-[11px] stick_list w-[190px] h-[412px] left-[25px] top-[51px] absolute flex-col justify-start items-start gap-[4px] inline-flex max-xl:flex-row max-xl:flex-wrap  max-xl:w-full  max-xl:h-[200px]  max-lg:relative max-lg:left-[0]">
                <Link
                  scroll={false}
                  href="#mobildeve"
                  onClick={scrollToMobileGameu}
                  // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  className={
                    activeSection === 2
                      ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      : "acive1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  }
                >
                  <div className="w-[137.52px] opacity-80 widescreen:w-full widescreen:leading-[120%] text-black text-[14px] widescreen:text-[20px] widestscreen:text-[24px] font-normal font-['Graphik'] leading-[16.80px]">
                    Experience Design{" "}
                  </div>
                </Link>
                <Link
                  scroll={false}
                  href="#progressive"
                  onClick={scrollTodesktopgame}
                  // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  className={
                    activeSection === 3
                      ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  }
                >
                  <div className="w-[137.52px] opacity-80 widescreen:w-full widescreen:leading-[120%] text-black widescreen:text-[20px] widestscreen:text-[24px] text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                    Product Engineering{" "}
                  </div>
                </Link>
                <Link
                  scroll={false}
                  href="#sass"
                  onClick={scrollTounreal}
                  // className="p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  className={
                    activeSection === 5
                      ? "active p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                      : "active1 p-2 rounded-lg  justify-center items-center gap-2 inline-flex"
                  }
                >
                  <div className="w-[137.52px] opacity-80 widescreen:w-full widescreen:leading-[120%] text-black widescreen:text-[20px] widestscreen:text-[24px] text-[14px] font-normal font-['Graphik'] leading-[16.80px]">
                    Innovation and Strategy{" "}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Explore />
      {/* <Footer /> */}
    </>
  );
};
export default Production;
