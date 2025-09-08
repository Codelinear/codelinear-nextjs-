import { useEffect, useState } from "react";
import Imgbg from "./bgimage.png";
import Imgbg1 from "./bgimage2.png";
import "./Imgsection.css";
import axios from "axios";
import Image from "next/image";

function Imgsection() {
  return (
    <div className="imageSectioncarrer">
      <div className="imgArea">
        <Image src={Imgbg} alt="part of a community of passionate" />
      </div>
      <div className="contentArea">
        <h2>
          Become a part of a community of passionate professionals dedicated to
          making a real impact through technology.
        </h2>
        <div className="sub-container-career">
          <Image
            src={Imgbg1}
            alt="dedicated to making a real impact through technology"
          />
        </div>
      </div>
    </div>
  );
}

export default Imgsection;
