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
import Head from "next/head";
import Script from "next/script";
import React from "react";

// import ScrollReveal from "./ScrollReveal";
const page = () => {
  return (
    <>
      <Head>
        <title>
          Shopify Design, Development & Growth Services | Codelinear
        </title>
        <meta
          name="description"
          content="Codelinear offers end-to-end Shopify services — design, development, SEO, paid ads, maintenance & growth strategies to scale your online store."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.codelinear.com/services/ecommerce-marketplace-development/shopify"
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Shopify Design, Development & Growth Services | Codelinear"
        />
        <meta
          property="og:description"
          content="End-to-end Shopify services — from design & development to SEO, paid ads, and growth strategies. Scale your store with Codelinear."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.codelinear.com/services/ecommerce-marketplace-development/shopify"
        />
        <meta
          property="og:image"
          content="https://www.codelinear.com/images/shopify-services.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shopify Design, Development & Growth Services | Codelinear"
        />
        <meta
          name="twitter:description"
          content="All-in-one Shopify solutions — design, development, SEO, paid campaigns, maintenance & growth. Scale your store with Codelinear."
        />
        <meta
          name="twitter:image"
          content="https://www.codelinear.com/images/shopify-services.jpg"
        />
      </Head>

      {/* Structured Data (JSON-LD) */}
      <Script id="shopify-ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Shopify Design, Development & Growth Services",
          provider: {
            "@type": "Organization",
            name: "Codelinear",
            url: "https://www.codelinear.com",
            logo: "https://www.codelinear.com/images/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/codelinear",
              "https://twitter.com/codelinear",
              "https://www.facebook.com/codelinear",
            ],
          },
          url: "https://www.codelinear.com/services/ecommerce-marketplace-development/shopify",
          description:
            "Codelinear provides end-to-end Shopify solutions including store design, custom development, SEO, paid advertising, maintenance, and growth strategies.",
          areaServed: {
            "@type": "Place",
            name: "Global",
          },
          offers: {
            "@type": "Offer",
            url: "https://www.codelinear.com/services/ecommerce-marketplace-development/shopify",
            priceCurrency: "USD",
            price: "1000",
            unitCode: "HUR",
            eligibleRegion: {
              "@type": "Place",
              name: "Worldwide",
            },
            availability: "https://schema.org/InStock",
          },
        })}
      </Script>
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
