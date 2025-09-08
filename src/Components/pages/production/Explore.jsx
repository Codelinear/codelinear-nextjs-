

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

// Import images
import img11 from "./Explore-assets/services carousel01.jpg";
import img12 from "./Explore-assets/services carousel02.jpg";
import img13 from "./Explore-assets/services carousel03.jpg";
import img14 from "./Explore-assets/services carousel04.jpg";
import img16 from "./Explore-assets/services carousel05.jpg";
import img17 from "./Explore-assets/services carousel06.jpg";
import img18 from "./Explore-assets/services carousel07.jpg";
import img19 from "./Explore-assets/services carousel08.jpg";
import img20 from "./Explore-assets/services carousel09.jpg";
import img21 from "../AI/assets/simon-lee-zA66MV4EyXc-unsplash 1.jpg";
import img22 from "../sharepoint/assets/Frame 1000002801 (1).jpg";
import img23 from "../salesforce/assets/Frame 1000002801.jpg";

const Explore = () => {
  const live = usePathname();

  const slides = useRef([]);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };

  const routesToHide = {
    "/services/product-design-and-innovation": 0,
    "/services/app-development-and-modernization": 1,
    "/services/technology-consulting": 2,
    "/services/artificial-intelligence-services": 3,
    "/services/ecommerce-marketplace-development": 4,
    "/services/cloud-engineering": 5,
    "/services/game-development": 6,
    "/services/ar-vr-services": 7,
    "/services/low-code-and-no-code": 8,
    "/services/salesforce-services": 9,
    "/services/microsoft-sharepoint-services": 10,
    "/services/quality-assurance": 11,
  };

  useEffect(() => {
    const indexToHide = routesToHide[live];

    if (indexToHide !== undefined && slides.current[indexToHide]) {
      gsap.to(slides.current[indexToHide], { display: "none", duration: 0 });

      // Specific adjustments for QA slide
      if (live === "/services/quality-assurance") {
        const sharepointSlide = slides.current[10];
        if (sharepointSlide && typeof window !== "undefined") {
          const w = window.innerWidth;
          const h = window.innerHeight;
          if (w > 1024) gsap.to(sharepointSlide, { width: "378px" });
          else if (w <= 1024 && h > 840)
            gsap.to(sharepointSlide, { width: "311px" });
          else if (w <= 840 && h > 640)
            gsap.to(sharepointSlide, { width: "262px" });
          if (w <= 640) {
            gsap.to(sharepointSlide, { width: "220px", marginRight: "20px" });
          }
        }
      }
    }
  }, [live]);

  const serviceData = [
    {
      href: "/services/product-design-and-innovation",
      label: "Product Design and Innovation",
      img: img11,
    },
    {
      href: "/services/app-development-and-modernization",
      label: "App Development and Modernization",
      img: img12,
    },
    {
      href: "/services/technology-consulting",
      label: "Technology Consulting",
      img: img13,
    },
    {
      href: "/services/artificial-intelligence-services",
      label: "Artificial Intelligence (AI) Services",
      img: img21,
    },
    {
      href: "/services/ecommerce-marketplace-development",
      label: "Ecommerce Marketplace Development",
      img: img14,
    },
    {
      href: "/services/cloud-engineering",
      label: "Cloud Engineering",
      img: img16,
    },
    {
      href: "/services/game-development",
      label: "Game Development",
      img: img17,
    },
    { href: "/services/ar-vr-services", label: "AR/VR Services", img: img18 },
    {
      href: "/services/low-code-and-no-code",
      label: "Low-code and No-code",
      img: img20,
    },
    {
      href: "/services/salesforce-services",
      label: "Salesforce Services",
      img: img23,
    },
    {
      href: "/services/microsoft-sharepoint-services",
      label: "Microsoft Sharepoint Services",
      img: img22,
    },
    {
      href: "/services/quality-assurance",
      label: "Quality Assurance",
      img: img19,
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="explore-more">
        <h1>Explore our other services</h1>
        <div className="exp-slide">
          <Swiper
            freeMode={{ enabled: false, slidesPerGroup: 1 }}
            slidesPerView="auto"
            modules={[FreeMode, Pagination]}
            pagination={{ clickable: true }}
            className="swipe mySwiper"
          >
            {serviceData.map((service, i) => (
              <SwiperSlide
                key={service.href}
                ref={(el) => (slides.current[i] = el)}
              >
                <div className="exp-slides">
                  <Link onClick={scrollToTop} href={service.href}>
                    <Image src={service.img} alt={service.label} />
                  </Link>
                  <Link onClick={scrollToTop} href={service.href}>
                    <h6>{service.label}</h6>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Explore;
