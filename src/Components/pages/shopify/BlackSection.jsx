// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const BlackSection = () => {
//   const sectionRef = useRef(null);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-black py-40 px-[80px] max-md:px-4 max-sm:pt-10 relative z-10"
//     >
//       <div className="mx-auto text-left space-y-4 max-w-7xl">
//         <h2 className="reveal-line text-[32px] tracking-[-1px] font-[400] text-[#fff] leading-tight max-md:text-[40px]">
//           Are design leaks costing you sales no matter how much traffic you
//           drive?
//         </h2>

//         <h2 className="reveal-line text-[32px] tracking-[-1px] font-[400] text-[#fff] leading-tight max-md:text-[40px]">
//           Are you invisible on Google and stuck overspending on ads?
//         </h2>

//         <p className="reveal-line text-white text-[32px] font-light max-md:text-[20px]">
//           Is your site speed killing conversions?
//         </p>

//         <p className="reveal-line text-white text-[32px] font-light max-md:text-[20px]">
//           Are you spending $1000s on ads but losing sales?
//         </p>

//         <h3 className="reveal-line text-[#F6C917] text-[72px] font-semibold max-md:text-[32px]">
//           Where are you stuck ?
//         </h3>

//         <p className="reveal-line text-white text-[44px] tracking-tight font-[100] max-md:text-[18px] max-w-7xl">
//           Wherever you're stuck, we fix every leak in your
//           <span className="text[#9DC84E] font-[700]">
//             {" "}
//             Shopify funnel{" "}
//           </span>{" "}
//           from
//           <span className="font-[700]"> Design </span> to{" "}
//           <span className="font-[700]"> CRO </span> to{" "}
//           <span className="font-[700]"> Marketing </span> and take you all the
//           way to consistent, profitable growth.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default BlackSection;

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlackSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-line",
        {
          x: 60,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2, // animate one after another
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 30%", // when section is 80% from top of viewport
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black py-40 px-[80px] max-md:px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10">
        {/* Left Side - Sticky */}
        <div className="col-span-5 max-md:col-span-5">
          <div className="sticky top-32">
            <h2 className="text-white text-[66px] font-light leading-tight max-md:text-[32px]">
              Where are you <br /> stuck ?
            </h2>
          </div>
        </div>

        {/* Right Side - Scrollable */}
        <div className="col-span-7  space-y-12 max-md:col-span-8">
          <p className="text-[#BCBCBC] reveal-line text-[32px] leading-tight tracking-[-1px] font-light flex items-start gap-3 max-md:text-[20px]">
            <span className="text-yellow-500">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7144 12.375L33.3334 19.9979L25.7144 27.6188"
                  stroke="#F9B719"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.57153 20H33.3334"
                  stroke="#F9B719"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>{" "}
            Are design leaks costing you sales no matter how much traffic you
            drive?
          </p>

          <p className="text-[#BCBCBC] reveal-line text-[32px] leading-tight tracking-[-1px] font-light flex items-start gap-3 max-md:text-[20px]">
            <span className="text-yellow-500">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7144 12.375L33.3334 19.9979L25.7144 27.6188"
                  stroke="#F9B719"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.57153 20H33.3334"
                  stroke="#F9B719"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>{" "}
            Are you invisible on Google and stuck overspending on ads?
          </p>

          <p className="text-[#BCBCBC] reveal-line text-[32px]  tracking-[-1px] leading-tight font-light flex items-start gap-3 max-md:text-[20px]">
            <span className="text-yellow-500">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7144 12.375L33.3334 19.9979L25.7144 27.6188"
                  stroke="#F9B719"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.57153 20H33.3334"
                  stroke="#F9B719"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>{" "}
            Is your site speed killing conversions?
          </p>

          <p className="text-[#BCBCBC] text-[32px] reveal-line tracking-[-1px] leading-tight font-light flex items-start gap-3 max-md:text-[20px]">
            <span className="text-yellow-500">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7144 12.375L33.3334 19.9979L25.7144 27.6188"
                  stroke="#F9B719"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.57153 20H33.3334"
                  stroke="#F9B719"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>{" "}
            Are you spending $1000s on ads but losing sales?
          </p>

          <p className="text-[#F9B719] text-[27px] reveal-line pl-12 max-md:pl-0 font-light max-md:text-[18px] max-w-2xl leading-snug">
            Wherever you’re stuck, we fix every leak in your{" "}
            <span className="font-bold">Shopify funnel</span> from{" "}
            <span className="font-bold">Design</span> to{" "}
            <span className="font-bold">CRO</span> to{" "}
            <span className="font-bold">Marketing</span> and take you all the
            way to consistent, profitable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlackSection;
