import quote from "../../tradejini/assets/Vector.jpg";
const Quote = () => {
  return (
    <div className="py-[128px] max-sm:py-[24px] max-lg:py-[44px] flex flex-col relative gap-[32px] max-sm:gap-[24px] justify-center items-center">
      <Image
        src={quote}
        className="absolute max-sm:w-[82.5px] max-lg:left-[0px] z-[-1] left-[199.53px] top-[57.66px]"
        alt=""
      />
      <h1 className="w-[745px] max-md:w-full max-lg:pt-[51px] maxsm:mt-[25.5px] max-sm:text-[24px] text-center text-[36px] leading-[120%] letter-spacing-2">
        “Lectus arcu proin eleifend mauris. Nulla eget eu tincidunt neque nec
        nibh mi placerat. Viverra ac lorem ultrices dolor. Nam euismod
        porttitor.”
      </h1>
      <p className="w-[175px] text-base text-center">
        Lorem Ipsum, Position, Kanbar Digital{" "}
      </p>
    </div>
  );
};
export default Quote;
