import React, { useState, useEffect } from "react";
const Scrolltop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-to-top-button" onClick={scrollToTop}>
      <div className="bottonn w-[189.13px] max-sm:w-[168px] max-sm:h-full h-[29.13px] opacity-80 justify-start items-center gap-3 inline-flex">
        <div className="w-[29.13px] widescreen:w-[40px] widescreen:h-[40px] h-[29.13px] relative overflow-hidden">
          <div className="w-[29.13px] h-[29.13px] left-0 top-0 absolute rounded-full border border-black"></div>
          <div className="goup flex gap-4 flex-col">
            <div className="onearrow rotate[135deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M7.97119 12.729L7.97119 2.19873"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.71722 6.45291L7.97091 2.19922L12.2246 6.45291"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className=" twoarrow rotate[135deg] left-[5.95px] top-[25.40px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M7.97119 12.729L7.97119 2.19873"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.71722 6.45291L7.97091 2.19922L12.2246 6.45291"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <button className="topto text-black text-base font-normal widescreen:text-[20px] widestscreen:text-[24px] font-['Graphik'] capitalize leading-normal">
          Scroll to the top
        </button>
      </div>
    </div>
  );
};

export default Scrolltop;
