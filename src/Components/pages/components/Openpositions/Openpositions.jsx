"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Line from "./Line.png";
import Apbutton from "./openingPositions.png";
import "./Openpositions.css";
import axios from "axios";
import Link from "next/link";

function Openpositions() {
  return (
    <div className="openPosition">
      <div className="openPositions">
        <div className="position-container">
          <span>Open positions</span> <Image src={Line} alt="bgimage" />
        </div>
        <h2>
          Together, we'll create technology solutions that transform industries.
        </h2>
      </div>
      <div id="position" className="positionslisting">
        <div className="productDesigner">
          <div className="positionName">
            <h4>Product Designer</h4>
          </div>
          <div className="loc-exp max-lg:hidden">
            <div className="locationdetails">
              <span>Bangalore</span>
            </div>
            <div className="expneed">
              <span>5+ Yrs of Exp</span>
            </div>
          </div>
          <div className="applynowbtn">
            <Link href="mailto:hr@codelinear.com">
              <button className="textBtnsz">Apply Now</button>
            </Link>
          </div>
          <div className="loc-exp-2">
            <div className="locationdetails my-[8px]">
              <span>Bangalore</span>
            </div>
            <div className="expneed my-[8px]">
              <span>5+ Yrs of Exp</span>
            </div>
          </div>
          <p className="req w-[595px] widescreen:w-full">
            UX Design | UI Design | Interaction Design | Experience Design{" "}
          </p>
          <div className="applynowbtn-2">
            <a href="mailto:hr@codelinear.com">
              <button className="textBtnsz-2 mt-[12px]">Apply Now</button>
            </a>
          </div>
        </div>
      </div>
      <div id="position" className="positionslisting">
        <div className="productDesigner">
          <div className="positionName">
            <h4>MERN Stack Developer</h4>
          </div>
          <div className="loc-exp max-lg:hidden">
            <div className="locationdetails">
              <span>Bangalore</span>
            </div>
            <div className="expneed">
              <span>5+ Yrs of Exp</span>
            </div>
          </div>
          <div className="applynowbtn">
            <a href="mailto:hr@codelinear.com">
              <button className="textBtnsz">Apply Now</button>
            </a>
          </div>
          <div className="loc-exp-2">
            <div className="locationdetails my-[8px]">
              <span>Bangalore</span>
            </div>
            <div className="expneed my-[8px]">
              <span>5+ Yrs of Exp</span>
            </div>
          </div>
          <p className="req w-[595px] widescreen:w-full">
            HTML5 | CSS3 | JavaScript | React JS | Redux | D3 Charts | Node JS |
            Express JS | Mongo DB | RESTful API{" "}
          </p>
          <div className="applynowbtn-2">
            <a href="mailto:hr@codelinear.com">
              <button className="textBtnsz-2 mt-[12px]">Apply Now</button>
            </a>
          </div>
        </div>
      </div>
      <div id="position" className="positionslisting">
        <div className="productDesigner">
          <div className="positionName">
            <h4>Android Application Developer</h4>
          </div>
          <div className="loc-exp max-lg:hidden">
            <div className="locationdetails">
              <span>Bangalore</span>
            </div>
            <div className="expneed">
              <span>5+ Yrs of Exp</span>
            </div>
          </div>
          <div className="applynowbtn">
            <a href="mailto:hr@codelinear.com">
              <button className="textBtnsz">Apply Now</button>
            </a>
          </div>
          <div className="loc-exp-2">
            <div className="locationdetails my-[8px]">
              <span>Bangalore</span>
            </div>
            <div className="expneed my-[8px]">
              <span>5+ Yrs of Exp</span>
            </div>
          </div>
          <p className="req w-[595px] widescreen:w-full">
            Java | Kotlin | Android Studio | Android SDK | RESTful API | RX Java
            | MVVM | MVP
          </p>
          <div className="applynowbtn-2">
            <a href="mailto:hr@codelinear.com">
              <button className="textBtnsz-2 mt-[12px]">Apply Now</button>
            </a>
          </div>
        </div>
      </div>
      <div id="position" className="positionslisting">
        <div className="productDesigner">
          <div className="positionName">
            <h4>AR/ VR Game Developer</h4>
          </div>
          <div className="loc-exp max-lg:hidden">
            <div className="locationdetails">
              <span>Bangalore</span>
            </div>
            <div className="expneed">
              <span>5+ Yrs of Exp</span>
            </div>
          </div>
          <div className="applynowbtn">
            <a href="mailto:hr@codelinear.com">
              <button className="textBtnsz">Apply Now</button>
            </a>
          </div>
          <div className="loc-exp-2">
            <div className="locationdetails my-[8px]">
              <span>Bangalore</span>
            </div>
            <div className="expneed my-[8px]">
              <span>5+ Yrs of Exp</span>
            </div>
          </div>
          <p className="req w-[595px] widescreen:w-full">
            Unity | Unreal | ARKit and ARCore | Blender | Maya | Oculus SDK |
            Oculus Rift
          </p>
          <div className="applynowbtn-2">
            <a href="mailto:hr@codelinear.com">
              <button className="textBtnsz-2 mt-[12px]">Apply Now</button>
            </a>
          </div>
        </div>
      </div>
      <div id="position" className="positionslisting">
        <div className="productDesigner">
          <div className="positionName">
            <h4>Cloud Engineer</h4>
          </div>
          <div className="loc-exp max-lg:hidden">
            <div className="locationdetails">
              <span>Bangalore</span>
            </div>
            <div className="expneed">
              <span>5+ Yrs of Exp</span>
            </div>
          </div>
          <div className="applynowbtn">
            <a href="mailto:hr@codelinear.com">
              <button className="textBtnsz">Apply Now</button>
            </a>
          </div>
          <div className="loc-exp-2">
            <div className="locationdetails my-[8px]">
              <span>Bangalore</span>
            </div>
            <div className="expneed my-[8px]">
              <span>5+ Yrs of Exp</span>
            </div>
          </div>
          <p className="req w-[595px] widescreen:w-full">
            AWS | GCP | Azure | Docker | Kubernetes | Jenkins
          </p>
          <div className="applynowbtn-2">
            <a href="mailto:hr@codelinear.com">
              <button className="textBtnsz-2 mt-[12px]">Apply Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Openpositions;
