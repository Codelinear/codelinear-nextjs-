"use client";
import img1 from "../assets/material-symbols-light_diversity-2-outline-rounded.svg";
import img2 from "../assets/WooCommerce_logo 1.svg";
import img3 from "../assets/netsuite 1.svg";
import img4 from "../assets/shopify-logo-svgrepo-com 1.svg";
import img5 from "../assets/magento-seeklogo 1.svg";
import img6 from "../assets/bigcommerce-1 1.svg";
import img7 from "../assets/4373224_hubspot_logo_logos_icon 1 (1).svg";
import img8 from "../assets/Wix.com_website_logo 1 (1).svg";
import img9 from "../assets/Font_Awesome_5_brands_squarespace 1.svg";
import img10 from "../assets/shift4shop-logos-idK2bziH1E 1.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const ESection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <>
      <section id="exp-design" className="exp-design">
        <h2 className="capitilize whitespace-nowrap max-sm:whitespace-normal">
          Ecommerce Marketplace Development <span></span>
        </h2>
        <h1 className="whitespace-nowrap max-sm:whitespace-normal">
          Ecommerce Marketplace Development{" "}
        </h1>
        <p className="exp-p">
          We understand the dynamic landscape of e-commerce. Our E-commerce
          Marketplace Development services are designed to transform your vision
          into a thriving digital marketplace.
        </p>
        <div className="prod-container w-[924px] widescreen:w-full flex-wrap max-sm:w-[90%] max-lg:w-full">
          <div className="prod-sub-container">
            <Image
              src={img1}
              alt="Custom e-commerce Development"
              className="w-[57px] h-[57px]"
            />
            <h3>Custom e-commerce Development</h3>
            <p>
              Tailored solutions crafting unique online marketplaces, blending
              design, scalability, and cutting-edge technologies seamlessly.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img2} alt="WooCommerce" className="w-[57px] h-[57px]" />
            <h3>WooCommerce</h3>
            <p>
              WordPress-integrated e-commerce solution offering customizable
              online stores, and secure payment options for businesses.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img3} alt="NetSuite" className="w-[57px] h-[57px]" />
            <h3>NetSuite</h3>
            <p>
              Comprehensive cloud ERP solution, integrating financials, CRM, and
              e-commerce for streamlined business operations and growth.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img4} alt="Shopify" className="w-[57px] h-[57px]" />
            <h3>Shopify</h3>
            <p>
              E-commerce solution empowering businesses with user-friendly
              tools, customizable themes, and secure payment gateways for
              success.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img5} alt="Magento" className="w-[57px] h-[57px]" />
            <h3>Magento</h3>
            <p>
              Powerful open-source e-commerce solution enabling scalable and
              customizable online stores with robust features and flexibility.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img6} alt="BigCommerce" className="w-[57px] h-[57px]" />
            <h3>BigCommerce</h3>
            <p>
              All-in-one e-commerce solution, offering customizable online
              stores, responsive themes, and advanced features for business
              growth.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image
              src={img7}
              alt="HubSpot Commerce Hub"
              className="w-[57px] h-[57px]"
            />
            <h3>HubSpot Commerce Hub</h3>
            <p>
              Unified e-commerce platform seamlessly integrating sales,
              marketing, and customer service for holistic online business
              success.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img8} alt="WixCommerce" className="w-[57px] h-[57px]" />
            <h3>WixCommerce</h3>
            <p>
              {" "}
              Intuitive e-commerce platform empowering businesses with
              user-friendly design tools, and easy online store management.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img9} alt="Squarespace" className="w-[57px] h-[57px]" />
            <h3>Squarespace</h3>
            <p>
              Elegant and user-friendly website builder, offering creative tools
              and templates for building distinctive and polished online
              presence.
            </p>
          </div>
          <div className="prod-sub-container">
            <Image src={img10} alt="Shift4Shop" className="w-[57px] h-[57px]" />
            <h3>Shift4Shop</h3>
            <p>
              Comprehensive e-commerce solution with customizable online stores,
              marketing tools, and secure payment options
            </p>
          </div>
        </div>
      </section>
      <div className="justify-start items-center gap-[58px] ml-[80px] max-lg:ml-[40px] inline-flex max-sm:flex-wrap max-sm:px-[20px] max-sm:ml-[0px]">
        <div className="w-[267.25px] widescreen:w-[40%] widescreen:text-[30px] widestscreen:text-[40px] text-black text-xl max-sm:text-[24px] font-normal font-['Graphik']  leading-[120%] letter-spacing-4 max-sm:w-[100%]">
          Need help in making the next big thing?{" "}
        </div>
        <Link
          href={"/contact-us"}
          onClick={scrollToTop}
          className="px-8 py-4 max-sm:w-full max-lg:text[24px] rounded-[50px] border border-black justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-[90%]"
        >
          <div className="text-black rounded-[50px] text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
            Talk to our experts
          </div>
        </Link>
      </div>
    </>
  );
};
export default ESection;
