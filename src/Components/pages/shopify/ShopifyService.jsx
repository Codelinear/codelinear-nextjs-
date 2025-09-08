"use client";

import { useState, useEffect, useRef } from "react";

const servicesData = [
  {
    category: "build",
    title: "Design & UX",
    subtitle: "Stand out with designs that sell.",
    items: [
      "Custom Shopify themes & redesigns",
      "Mobile-first layouts & navigation",
      "Conversion-focused product pages",
    ],
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M49.4057 15.8944C50.6393 14.6611 51.3325 12.9882 51.3327 11.2437C51.333 9.49931 50.6402 7.82624 49.4069 6.59258C48.1735 5.35893 46.5006 4.66575 44.7562 4.66553C43.0117 4.66531 41.3387 5.35807 40.105 6.59142L8.96435 37.7391C8.4226 38.2792 8.02195 38.9443 7.79768 39.6757L4.71535 49.8304C4.65505 50.0322 4.65049 50.2466 4.70217 50.4507C4.75385 50.6549 4.85983 50.8413 5.00888 50.9901C5.15792 51.1389 5.34447 51.2446 5.54872 51.2959C5.75298 51.3473 5.96732 51.3424 6.16902 51.2818L16.326 48.2018C17.0567 47.9795 17.7218 47.5813 18.2627 47.0421L49.4057 15.8944Z"
          stroke="#F9B719"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    category: "grow",
    title: "Strategy & Growth Planning",
    subtitle: "Plan for profit, not just traffic",
    items: [
      "Store audits & opportunity mapping",
      "KPI-driven growth plans (CAC, AOV, LTV)",
      "Tech stack planning & replatforming",
    ],
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_536_1559)">
          <path
            d="M38.5 26.25C38.5 29.0348 37.3938 31.7055 35.4246 33.6746C33.4555 35.6438 30.7848 36.75 28 36.75"
            stroke="#F9B719"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.125 24.5C28.5747 24.5 29.75 23.3247 29.75 21.875C29.75 20.4253 28.5747 19.25 27.125 19.25C25.6753 19.25 24.5 20.4253 24.5 21.875C24.5 23.3247 25.6753 24.5 27.125 24.5Z"
            fill="#F9B719"
          />
          <path
            d="M14 43.75C17.8128 47.1625 22.8791 49.105 28.4244 49C39.6856 48.7812 48.8403 39.5653 48.9978 28.3041C49.0381 25.521 48.5248 22.7577 47.4876 20.1748C46.4505 17.5919 44.9102 15.241 42.9564 13.2586C41.0025 11.2763 38.6741 9.70219 36.1065 8.62774C33.5389 7.5533 30.7833 7 28 7H26.25V14L3.5 28L6.51656 32.8125C7.09108 33.6093 7.87761 34.2289 8.78673 34.6009C9.69586 34.9729 10.6911 35.0824 11.6594 34.9169C15.4809 34.2606 22.1725 33.2456 28 36.7413L20.1534 47.5388"
            stroke="#F9B719"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_536_1559">
            <rect width="56" height="56" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    category: "build",
    title: "Development & Customization",
    subtitle: "If Shopify doesn't do it, we build it.",
    items: [
      "Custom theme & app development",
      "Headless builds (Hydrogen/Next.js)",
      "API & 3rd-party integrations",
    ],
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42 37.3333L51.3333 28L42 18.6666"
          stroke="#F9B719"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.9998 18.6666L4.6665 28L13.9998 37.3333"
          stroke="#F9B719"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M33.8332 9.33337L22.1665 46.6667"
          stroke="#F9B719"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    category: "grow",
    title: "Conversion Rate Optimization",
    subtitle: "Turn clicks into customers",
    items: [
      "Funnel & checkout optimization",
      "A/B testing & UX experiments",
      "Upsells, bundles & trust elements",
    ],
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.3323 46.6667C23.3321 47.1003 23.4528 47.5254 23.6807 47.8942C23.9086 48.2631 24.2348 48.5612 24.6227 48.755L29.2893 51.0883C29.6452 51.2661 30.0405 51.35 30.4379 51.332C30.8353 51.314 31.2214 51.1947 31.5597 50.9855C31.898 50.7763 32.1772 50.484 32.3708 50.1365C32.5643 49.789 32.6658 49.3978 32.6657 49V32.6667C32.6662 31.5102 33.0961 30.3952 33.872 29.5377L50.7257 10.8967C51.0277 10.562 51.2264 10.1469 51.2976 9.70173C51.3687 9.25653 51.3094 8.80024 51.1268 8.38804C50.9441 7.97584 50.646 7.62539 50.2683 7.37905C49.8907 7.13272 49.4498 7.00106 48.999 7H6.999C6.54775 7.00016 6.10622 7.13117 5.72791 7.37715C5.3496 7.62313 5.05073 7.97354 4.86751 8.38591C4.68428 8.79829 4.62456 9.25495 4.69559 9.70058C4.76661 10.1462 4.96532 10.5617 5.26766 10.8967L22.126 29.5377C22.9019 30.3952 23.3318 31.5102 23.3323 32.6667V46.6667Z"
          stroke="#F9B719"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    category: "grow",
    title: "SEO & Content",
    subtitle: "Rank higher. Sell more.",
    items: [
      "Technical SEO (schema,sitemaps)",
      "On-page optimization (collections, products)",
      "Blog & content strategy",
    ],
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M49.0002 48.9997L38.8735 38.873"
          stroke="#F9B719"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.6667 44.3333C35.976 44.3333 44.3333 35.976 44.3333 25.6667C44.3333 15.3574 35.976 7 25.6667 7C15.3574 7 7 15.3574 7 25.6667C7 35.976 15.3574 44.3333 25.6667 44.3333Z"
          stroke="#F9B719"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    category: "grow",
    title: "Marketing & Retention",
    subtitle: "Acquire, convert, and retain customers.",
    items: [
      "Paid ads (Google, Meta, TikTok, Pinterest)",
      "Email & SMS automation (Klaviyo, Omnisend)",
      "Customer lifecycle marketing",
    ],
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_536_1642)">
          <path
            d="M35 17.5V43.8966C35.0002 44.1844 35.0713 44.4677 35.2072 44.7214C35.343 44.9752 35.5393 45.1915 35.7787 45.3513L38.185 46.9547C38.4184 47.1103 38.6858 47.2075 38.9646 47.2382C39.2435 47.2688 39.5256 47.232 39.7872 47.1307C40.0488 47.0295 40.2823 46.8669 40.4679 46.6566C40.6535 46.4462 40.7859 46.1944 40.8537 45.9222L43.75 35"
            stroke="#F9B719"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.75 43.7501C8.75008 44.0834 8.84532 44.4097 9.02453 44.6907C9.20373 44.9717 9.45945 45.1956 9.7616 45.3363C10.0638 45.4769 10.3998 45.5283 10.7302 45.4845C11.0605 45.4406 11.3715 45.3034 11.6266 45.0888C23.0891 35.4726 35 35.0001 35 35.0001H43.75C46.0706 35.0001 48.2962 34.0782 49.9372 32.4373C51.5781 30.7963 52.5 28.5707 52.5 26.2501C52.5 23.9294 51.5781 21.7038 49.9372 20.0629C48.2962 18.422 46.0706 17.5001 43.75 17.5001H35C35 17.5001 23.0891 17.0276 11.6266 7.41353C11.3717 7.1991 11.0609 7.06187 10.7307 7.01796C10.4005 6.97405 10.0647 7.02528 9.76259 7.16564C9.46052 7.30599 9.20478 7.52964 9.02541 7.81031C8.84604 8.09097 8.75049 8.417 8.75 8.75009V43.7501Z"
            stroke="#F9B719"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_536_1642">
            <rect width="56" height="56" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    category: "support",
    title: "Speed & Performance Optimization",
    subtitle: "Because every second costs you sales",
    items: [
      "Site speed audits & fixes",
      "App bloat reduction & code cleanup",
      "Image & script optimization",
    ],
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 32.6666L37.3333 23.3333"
          stroke="#F9B719"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.79317 44.3333C5.74501 40.7862 4.66666 36.7625 4.6665 32.6665C4.66635 28.5705 5.74439 24.5467 7.79228 20.9995C9.84017 17.4522 12.7857 14.5065 16.3329 12.4585C19.8801 10.4105 23.9039 9.33228 27.9998 9.33228C32.0958 9.33228 36.1196 10.4105 39.6668 12.4585C43.2139 14.5065 46.1595 17.4522 48.2074 20.9995C50.2553 24.5467 51.3333 28.5705 51.3332 32.6665C51.333 36.7625 50.2547 40.7862 48.2065 44.3333"
          stroke="#F9B719"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    category: "support",
    title: "Analytics & Tracking",
    subtitle: "Know your numbers. Scale with confidence.",
    items: [
      "GA4 & server-side tracking setup",
      "Attribution dashboards",
      "UTM & conversion tracking",
    ],
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.9999 27.9998C50.2879 27.9998 51.3449 26.9521 51.2166 25.6711C50.6786 20.3142 48.3047 15.3081 44.4973 11.5016C40.6899 7.69501 35.6833 5.32223 30.3262 4.78548C29.0429 4.65715 27.9976 5.71415 27.9976 7.00215V25.6688C27.9976 26.2877 28.2434 26.8811 28.681 27.3187C29.1186 27.7563 29.7121 28.0021 30.3309 28.0021L48.9999 27.9998Z"
          stroke="#F9B719"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M49.4908 37.0768C48.0064 40.5873 45.6846 43.6807 42.7285 46.0865C39.7724 48.4924 36.2719 50.1375 32.5331 50.878C28.7944 51.6185 24.9311 51.4318 21.2811 50.3344C17.6311 49.2369 14.3056 47.262 11.5952 44.5824C8.88474 41.9027 6.87201 38.5999 5.73293 34.9627C4.59384 31.3255 4.36309 27.4647 5.06084 23.7177C5.75859 19.9707 7.3636 16.4516 9.73555 13.4683C12.1075 10.4849 15.1742 8.12792 18.6674 6.60352"
          stroke="#F9B719"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    category: "support",
    title: "Support & Maintenance",
    subtitle: "We don't just build it. We stay with you.",
    items: [
      "Ongoing monitoring & updates",
      "Security & performance checks",
      "Priority support on-demand",
    ],
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 25.6667H14C15.2377 25.6667 16.4247 26.1584 17.2998 27.0336C18.175 27.9088 18.6667 29.0957 18.6667 30.3334V37.3334C18.6667 38.5711 18.175 39.7581 17.2998 40.6332C16.4247 41.5084 15.2377 42.0001 14 42.0001H11.6667C10.429 42.0001 9.242 41.5084 8.36683 40.6332C7.49167 39.7581 7 38.5711 7 37.3334V25.6667ZM7 25.6667C7 22.909 7.54318 20.1782 8.59853 17.6304C9.65388 15.0826 11.2007 12.7675 13.1508 10.8175C15.1008 8.86747 17.4158 7.32063 19.9636 6.26528C22.5115 5.20993 25.2422 4.66675 28 4.66675C30.7578 4.66675 33.4885 5.20993 36.0364 6.26528C38.5842 7.32063 40.8992 8.86747 42.8492 10.8175C44.7993 12.7675 46.3461 15.0826 47.4015 17.6304C48.4568 20.1782 49 22.909 49 25.6667M49 25.6667V37.3334C49 38.5711 48.5083 39.7581 47.6332 40.6332C46.758 41.5084 45.571 42.0001 44.3333 42.0001H42C40.7623 42.0001 39.5753 41.5084 38.7002 40.6332C37.825 39.7581 37.3333 38.5711 37.3333 37.3334V30.3334C37.3333 29.0957 37.825 27.9088 38.7002 27.0336C39.5753 26.1584 40.7623 25.6667 42 25.6667H49Z"
          stroke="#F9B719"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M49 37.3333V41.9999C49 44.4753 48.0167 46.8492 46.2663 48.5996C44.516 50.3499 42.142 51.3333 39.6667 51.3333H28"
          stroke="#F9B719"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

const categories = [
  { id: "build", label: "Build", icon: "icon" },
  { id: "grow", label: "Grow", icon: "icon" },
  { id: "support", label: "Support", icon: "icon" },
];

const sectionIntro = {
  build:
    "We help you set a strong foundation by building beautiful, high-converting Shopify stores.",
  grow: "Once you’re up and running, we focus on scaling your store with proven growth strategies.",
  support:
    "After growth, we keep your store fast, secure, and optimized with ongoing support.",
};

export default function ShopifyService() {
  const [activeCategory, setActiveCategory] = useState("build");
  const [isSticky, setIsSticky] = useState(false);

  const wrapperRef = useRef(null);
  const headerRef = useRef(null);
  const sectionRefs = useRef({}); // { build: HTMLElement, grow: HTMLElement, support: HTMLElement }

  // Group services by category once
  const grouped = servicesData.reduce((acc, s) => {
    (acc[s.category] ||= []).push(s);
    return acc;
  }, {});

  //   const [activeCategory, setActiveCategory] = useState("build");
  //   const [isSticky, setIsSticky] = useState(false);
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (isManualScrolling) return; // 👈 ignore while manual scroll in progress
  //     if (!wrapperRef.current || !headerRef.current) return;

  //     const headerH = headerRef.current.offsetHeight || 0;
  //     const wrapRect = wrapperRef.current.getBoundingClientRect();

  //     // sticky state
  //     const shouldStick = wrapRect.top <= 0 && wrapRect.bottom > headerH;
  //     setIsSticky(shouldStick);

  //     // figure out which section is visible
  //     let current = activeCategory;
  //     for (const { id } of categories) {
  //       const el = sectionRefs.current[id];
  //       if (!el) continue;
  //       const rect = el.getBoundingClientRect();
  //       const topHits = rect.top - headerH <= 60; // buffer
  //       const stillVisible = rect.bottom - headerH > 60;
  //       if (topHits && stillVisible) {
  //         current = id;
  //         break;
  //       }
  //       if (rect.top - headerH <= 60) current = id;
  //     }
  //     if (current !== activeCategory) setActiveCategory(current);
  //   };

  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   onScroll();
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [activeCategory, isManualScrolling]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (isManualScrolling) return;
      if (!wrapperRef.current || !headerRef.current) return;
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        const headerH = headerRef.current.offsetHeight || 0;
        const wrapRect = wrapperRef.current.getBoundingClientRect();

        // Sticky logic (stable)
        const shouldStick = wrapRect.top <= 0 && wrapRect.bottom - headerH > 30;
        if (shouldStick !== isSticky) setIsSticky(shouldStick);

        // Active section logic (use midpoint of each section)
        const reference = headerH + 20; // top of viewport + small buffer
        let current = activeCategory;

        for (const { id } of categories) {
          const el = sectionRefs.current[id];
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          const mid = rect.top + rect.height / 2; // midpoint of section

          if (mid >= reference) {
            current = id;
            break; // first section whose midpoint is below header reference
          }
        }

        if (current !== activeCategory) setActiveCategory(current);

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeCategory, isManualScrolling, isSticky]);

  const scrollToCategory = (categoryId) => {
    const el = sectionRefs.current[categoryId];
    if (!el) return;
    const headerH = headerRef.current?.offsetHeight || 0;
    const y = window.scrollY + el.getBoundingClientRect().top - headerH - 40;

    setIsManualScrolling(true); // 👈 lock scroll spy
    setActiveCategory(categoryId); // instant highlight

    window.scrollTo({ top: y, behavior: "smooth" });

    // after scroll settles, release lock
    setTimeout(() => setIsManualScrolling(false), 600); // adjust if scroll is slower
  };

  return (
    <>
      <div className="text-left max-w-5xl py-20 px-[80px] max-md:px-4 ">
        <h2 className="text-[66px] leading-tight tracking-[-2px] font-[400] text-black mb-4 max-md:text-[35px]">
          Every Shopify problem has a solution, we cover them all
        </h2>
        <p className="text-[#00000099] leading-tight max-w-xl text-[32px] tracking-[-2px]">
          From strategy to scaling, we're your end-to-end Shopify partner.
        </p>
      </div>

      <div ref={wrapperRef} className="relative bg-white pb-16 pt-4">
        {/* Sticky Header */}
        <div
          ref={headerRef}
          className={`${
            isSticky
              ? "sticky top-0 left-0 right-0 z-[999999909999990] shadowmd "
              : "relative"
          } bg-white transition-all duration-300`}
        >
          <div className="max-w-6xl mx-auto px-6 pt-5 pb-5">
            <div className="flex justify-center">
              <div className="flex space-x-16 border-b border-gray-200 w-full justify-between">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToCategory(category.id)}
                    className={`relative py-4 px-2 w-[426px] text-[32px] font-medium transition-colors duration-200 ${
                      activeCategory === category.id
                        ? "text-[#F9B719]"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {category.label}
                    {activeCategory === category.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F9B719] transition-all duration-300" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sections: Intro FIRST, then Cards */}
        <div className="max-w-6xl mx-auto px-6 mt-16 space-y-16">
          {categories.map(({ id, label }) => (
            <section
              key={id}
              ref={(el) => (sectionRefs.current[id] = el)}
              className="scroll-mt-24"
            >
              {/* Intro / Content (full-width, before cards) */}
              <div className="mb-8">
                {/* <h2 className="text-3xl font-semibold mb-3">{label}</h2> */}
                <p className="text-lg text-gray-800">{sectionIntro[id]}</p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {(grouped[id] || []).map((service, idx) => (
                  <ServiceCard key={`${id}-${idx}`} service={service} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

function ServiceCard({ service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="border flex flex-col justify-between border-[#FFD87A] p-6 h-[415px] max-lg:h-full">
        <div className="flex items-start flex-col gap-3 mb-3">
          <div className="  rounded-lg flex items-center justify-center">
            <span className="text-yellow-600">{service.icon}</span>
          </div>
          <h4 className="text-[28px] font-[400] text-black">
            {/* Analytics & Tracking */}
            {service.title}
          </h4>
          <p className="text-[#8C8C8C] text-[24px] mb-4 italic">
            {/* Know your numbers. Scale with confidence. */}
            {service.subtitle}
          </p>
        </div>

        <div>
          <ul className="space-y-2">
            {service.items.map((item, index) => (
              <li className="flex items-center gap-2 text-[20px] text-[#000]">
                <span className=" rounded-full">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 6.99695L17.5 10.9989L13.5 14.9999"
                      stroke="#F9B719"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.5 11H17.5"
                      stroke="#F9B719"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                {/* GA4 & server-side tracking setup */}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
