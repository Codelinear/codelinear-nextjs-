"use client";

import { useEffect, useRef, useState } from "react";

const industries = [
  { id: 1, name: "BEAUTY", image: "/shopify/Frame 1000002575.png" },
  { id: 2, name: "FASHION", image: "/shopify/Frame 1000002575 (1).png" },
  { id: 3, name: "FMCG", image: "/shopify/Frame 1000002576 (1).png" },
  { id: 4, name: "JEWELRY", image: "/shopify/Frame 1000002575 (2).png" },
  { id: 5, name: "HOME DECOR", image: "/shopify/Frame 1000002575 (3).png" },
  { id: 6, name: "TOYS & GAMES ", image: "/shopify/Frame 1000002575 (4).png" },
  { id: 7, name: "OTHERS", image: "/shopify/Frame 1000002575 (5).png" },
];

export default function IndustriesSection() {
  const [itemsPerView, setItemsPerView] = useState(3); // default desktop

  // Update itemsPerView on resize
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 1024) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Duplicate the industries array for seamless looping
  const industriesLoop = [...industries, ...industries];

  // Animation duration (adjust as needed: longer arrays = loger duration)
  const duration = industries.length * 4; // seconds

  return (
    <section className="bg-white py-20 px-4">
      <div className="maxw-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-16 px-[80px] max-md:p-4">
          <h2 className="text-[66px] max-w-2xl font-[400] text-black mb-6 leading-tight max-sm:text-[35px]">
            Our expertise across various Industries
          </h2>
          <p className="text-[#00000099] tracking-[-2px] text-left text-[32px] max-w-4xl mxauto leading-tight">
            We work across different industries, creating custom e-commerce
            solutions designed to fit the specific needs of your business.
          </p>
        </div>

        {/* Continuous Slider */}
        <div className="overflow-hidden mx12 relative">
          <div
            className="flex whitespace-nowrap animate-slide"
            style={{
              animationDuration: `${duration}s`,
            }}
          >
            {industriesLoop.map((industry, idx) => (
              <div
                key={industry.id + "-" + idx}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-white overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-[24px] font-[400] text-black tracking-tight max-sm:text-[16px]">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inline CSS for animation, place in global CSS if needed */}
        <style jsx>{`
          .animate-slide {
            animation-name: slide;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-200%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
