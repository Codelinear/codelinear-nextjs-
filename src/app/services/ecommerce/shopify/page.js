import SmoothScroll from "@/app/SmoothScroll";
import BlackSection from "@/Components/pages/shopify/BlackSection";
import CalendlyIframe from "@/Components/pages/shopify/CalendlyIframe";
import CaseStudyShopify from "@/Components/pages/shopify/CaseStudyShopify";
import ClientReviewsSection from "@/Components/pages/shopify/ClientReviewsSection";
import ExpertiseBanner from "@/Components/pages/shopify/ExpertiseBanner";
import FAQSection from "@/Components/pages/shopify/FAQSection";
import IndustriesSection from "@/Components/pages/shopify/IndustriesSection";
import People from "@/Components/pages/shopify/People";
import ScrollReveal from "@/Components/pages/shopify/ScrollReveal";
import ServicesSection from "@/Components/pages/shopify/ServicesSection";
import ShopifyHero from "@/Components/pages/shopify/ShopifyHero";
import ShopifyService from "@/Components/pages/shopify/ShopifyService";
import React from "react";

// import ScrollReveal from "./ScrollReveal";
const page = () => {
  return (
    <>
      <div className="shopify-page">
        {/* <SmoothScroll> */}
        <ShopifyHero />
        <BlackSection />
        {/* <ShopifyService /> */}
        <ServicesSection />
        <ExpertiseBanner />
        <CalendlyIframe />
        <CaseStudyShopify />
        <FAQSection />
        <People />
        <IndustriesSection />
        <ClientReviewsSection />
        {/* </SmoothScroll> */}
      </div>
    </>
  );
};

export default page;
