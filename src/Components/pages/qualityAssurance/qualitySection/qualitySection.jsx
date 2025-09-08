"use client";
import img1 from "../assets/Vector.svg";
import img2 from "../assets/material-symbols-light_touch-app-outline-sharp.svg";
import img3 from "../assets/material-symbols-light_speed-outline.svg";
import img4 from "../assets/material-symbols-light_security.svg";
import img5 from "../assets/material-symbols-light_lock-outline.svg";
import img6 from "../assets/ph_globe-light.svg";
import img7 from "../assets/ph_plug-light.svg";
import img8 from "../assets/material-symbols-light_update.svg";
import img9 from "../assets/ph_clipboard-light.svg";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

import Link from "next/link";

const QualitySection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <section id="exp-design" className="exp-design">
        <h2>
          Quality Assurance <span></span>
        </h2>
        <h1 className="whitespace-nowrap">Quality Assurance </h1>
        <p className="exp-p">
          Your satisfaction is our priority. Our client-centric approach means
          you're involved at every stage. Transparent communication and
          collaboration ensure that your vision is not just met but exceeded.
        </p>
        <div className="prod-container w-[924px] widescreen:w-[100%] flex-wrap max-lg:w-full">
          <div className="prod-sub-container">
            <Image src={img1} alt="Functional Testing" />
            <h3>Functional Testing</h3>
            <p>
              Execute thorough tests to ensure software performs according to
              specifications, and resolve any functional discrepancies.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img2} alt="Usability Testing" />
            <h3>Usability Testing</h3>
            <p>
              Evaluate the software's user interface and overall user experience
              to ensure ease of use.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img3} alt="Performance Testing" />
            <h3>Performance Testing</h3>
            <p>
              Evaluate software performance under varying conditions to identify
              bottlenecks and ensure optimal responsiveness.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img4} alt="Security Testing" />
            <h3>Security Testing</h3>
            <p>
              Implement security testing protocols to identify and address
              vulnerabilities, ensuring robust protection against potential
              threats.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img5} alt="Penetration Testing" />
            <h3>Penetration Testing</h3>
            <p>
              Expose and remedy vulnerabilities, safeguarding systems against
              potential cyber threats and breaches.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img6} alt="Compatibility Testing" />
            <h3>Compatibility Testing</h3>
            <p>
              Verify software compatibility across different browsers, operating
              systems, and devices.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img7} alt="Integration Testing" />
            <h3>Integration Testing</h3>
            <p>
              Validate smooth interactions among components, identifying and
              resolving potential integration issues.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img8} alt="Regression Testing" />
            <h3>Regression Testing</h3>
            <p>
              Conduct regression testing to ensure that new code changes do not
              adversely impact existing functionalities.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img9} alt="Independent Testing" />
            <h3>Independent Testing</h3>
            <p>
              Conduct tests autonomously to ensure unbiased evaluation,
              identifying and rectifying issues for reliable software quality.
            </p>
          </div>
        </div>
      </section>
      <div className="justify-start items-center gap-[58px] ml-[80px] max-sm:ml-0 inline-flex max-sm:flex-wrap max-lg:ml-[40px] max-sm:px-[20px]">
        <div className="w-[267.25px] widescreen:w-[40%] widescreen:text-[30px] widestscreen:text-[40px] text-black text-xl max-sm:text-[24px] font-normal font-['Graphik'] leading-[120%] letter-spacing-4">
          Need help in making the next big thing?{" "}
        </div>
        <Link
          href={"/contact-us"}
          onClick={scrollToTop}
          className="px-8 max-sm:w-full py-4 rounded-[50px] border border-black justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-[90%]"
        >
          <div className="text-black rounded-[50px] text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
            Talk to our experts
          </div>
        </Link>
      </div>
    </>
  );
};
export default QualitySection;
