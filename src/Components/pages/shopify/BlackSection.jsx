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
      className="bg-[#151515] py-40 px-[80px] max-md:px-6 relative z-10"
    >
      {/* <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
           `,
          backgroundSize: "100px 100px",
        }}
      /> */}
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

// "use client";
// import { useEffect, useRef, useState } from "react";
// import React from "react";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const BlackSection = () => {
//   const sectionRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".reveal-line",
//         {
//           x: 60,
//           opacity: 0,
//         },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//           stagger: 0.2, // animate one after another
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 30%", // when section is 80% from top of viewport
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert(); // cleanup on unmount
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-[#151515] py-40 px-[80px] max-md:px-6 relative z-10 overflow-hidden"
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* <div
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `
//             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
//             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
//           `,
//           backgroundSize: "100px 100px",
//         }}
//       /> */}

//       {/* Circular hover reveal mask */}
//       {/* {isHovering && (
//         <div
//           className="absolute pointer-events-none transition-all duration-300 ease-out"
//           style={{
//             left: mousePosition.x - 0,
//             top: mousePosition.y - 0,
//             width: "300px",
//             height: "300px",
//             background: `
//               radial-gradient(circle,
//                 rgba(249, 183, 25, 0.3) 0%,
//                 rgba(249, 183, 25, 0.2) 30%,
//                 rgba(249, 183, 25, 0.1) 60%,
//                 transparent 80%
//               )
//             `,
//             borderRadius: "50%",
//             filter: "blur(8px)",
//             zIndex: 1,
//           }}
//         />
//       )} */}

//       {/* Enhanced squares pattern visible in hover area */}
//       {/* {isHovering && (
//         <div
//           className="absolute pointer-events-none"
//           style={{
//             left: mousePosition.x - 200,
//             top: mousePosition.y - 200,
//             width: "400px",
//             height: "400px",
//             backgroundImage: `
//               linear-gradient(90deg, rgba(249, 183, 25, 0.0) 2px, transparent 1px),
//               linear-gradient(rgba(249, 183, 25, 0.0) 2px, transparent 1px)
//             `,
//             backgroundSize: "80px 80px",
//             maskImage: `radial-gradient(circle, white 40%, transparent 70%)`,
//             WebkitMaskImage: `radial-gradient(circle, white 40%, transparent 70%)`,
//             filter: "blur(0px)",
//             zIndex: 2,
//           }}
//         />
//       )} */}

//       <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 relative z-10">
//         {/* Left Side - Sticky */}
//         <div className="col-span-5 max-md:col-span-5">
//           <div className="sticky top-32">
//             <h2 className="text-white text-[66px] font-light leading-tight max-md:text-[32px]">
//               Where are you <br /> stuck ?
//             </h2>
//           </div>
//         </div>

//         {/* Right Side - Scrollable */}
//         <div className="col-span-7  space-y-12 max-md:col-span-8">
//           <p className="text-[#BCBCBC] reveal-line text-[32px] leading-tight tracking-[-1px] font-light flex items-start gap-3 max-md:text-[20px]">
//             <span className="text-yellow-500">
//               <svg
//                 width="40"
//                 height="40"
//                 viewBox="0 0 40 40"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M25.7144 12.375L33.3334 19.9979L25.7144 27.6188"
//                   stroke="#F9B719"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M8.57153 20H33.3334"
//                   stroke="#F9B719"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </span>{" "}
//             Are design leaks costing you sales no matter how much traffic you
//             drive?
//           </p>

//           <p className="text-[#BCBCBC] reveal-line text-[32px] leading-tight tracking-[-1px] font-light flex items-start gap-3 max-md:text-[20px]">
//             <span className="text-yellow-500">
//               <svg
//                 width="40"
//                 height="40"
//                 viewBox="0 0 40 40"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M25.7144 12.375L33.3334 19.9979L25.7144 27.6188"
//                   stroke="#F9B719"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M8.57153 20H33.3334"
//                   stroke="#F9B719"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </span>{" "}
//             Are you invisible on Google and stuck overspending on ads?
//           </p>

//           <p className="text-[#BCBCBC] reveal-line text-[32px]  tracking-[-1px] leading-tight font-light flex items-start gap-3 max-md:text-[20px]">
//             <span className="text-yellow-500">
//               <svg
//                 width="40"
//                 height="40"
//                 viewBox="0 0 40 40"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M25.7144 12.375L33.3334 19.9979L25.7144 27.6188"
//                   stroke="#F9B719"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M8.57153 20H33.3334"
//                   stroke="#F9B719"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </span>{" "}
//             Is your site speed killing conversions?
//           </p>

//           <p className="text-[#BCBCBC] text-[32px] reveal-line tracking-[-1px] leading-tight font-light flex items-start gap-3 max-md:text-[20px]">
//             <span className="text-yellow-500">
//               <svg
//                 width="40"
//                 height="40"
//                 viewBox="0 0 40 40"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M25.7144 12.375L33.3334 19.9979L25.7144 27.6188"
//                   stroke="#F9B719"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M8.57153 20H33.3334"
//                   stroke="#F9B719"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </span>{" "}
//             Are you spending $1000s on ads but losing sales?
//           </p>

//           <p className="text-[#F9B719] text-[27px] reveal-line pl-12 max-md:pl-0 font-light max-md:text-[18px] max-w-2xl leading-snug">
//             Wherever you're stuck, we fix every leak in your{" "}
//             <span className="font-bold">Shopify funnel</span> from{" "}
//             <span className="font-bold">Design</span> to{" "}
//             <span className="font-bold">CRO</span> to{" "}
//             <span className="font-bold">Marketing</span> and take you all the
//             way to consistent, profitable growth.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlackSection;
