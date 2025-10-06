import { useRef, useState } from "react";
import Yeedha44 from "../../assets/images/yeedha44.png";
import Yeedha45 from "../../assets/images/yeedha45.png";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const YeedhaAdvantage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 350 + 16; // dynamic for smaller screens
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const [activeButton, setActiveButton] = useState<string>("left");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    scroll(buttonName === "left" ? "left" : "right");
  };

  return (
    <div className="font-[Manrope] mt-16 md:mt-24 lg:mt-[138px] px-4 sm:px-8 md:px-12 lg:px-[88px] relative">
      {/* Title */}
      <p className="text-center text-2xl sm:text-3xl md:text-[35px] text-[#2563EB] font-bold">
        Yeedha Advantage
      </p>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="mt-10 md:mt-[45.03px] flex overflow-x-auto scroll-smooth gap-4 md:gap-[17.02px] no-scrollbar"
      >
        {[1, 2, 3, 4].map((_, idx) => (
          <div className="relative flex-none" key={idx}>
            <img
              src={Yeedha44}
              alt=""
              className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[415.66px] h-auto rounded-[10px]"
            />
            <img
              src={Yeedha45}
              alt=""
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] sm:w-[65%] md:w-[70%]"
            />
          </div>
        ))}
      </div>

      {/* Scroll Buttons */}
      <div className="flex justify-center sm:justify-end mt-6 md:mt-8 mb-16 md:mb-[97px] gap-6 md:gap-[42px]">
        <button
          onClick={() => handleButtonClick("left")}
          className={`w-12 h-12 sm:w-[50px] sm:h-[50px] md:w-[58px] md:h-[58px] rounded-full bg-[#D8E9FF] shadow-lg flex items-center justify-center transition-colors duration-300 ${
            activeButton === "left" ? "text-[#2563EB]" : "text-[#CBDBFA]"
          }`}
        >
          <FaChevronLeft className="text-lg md:text-xl" />
        </button>
        <button
          onClick={() => handleButtonClick("right")}
          className={`w-12 h-12 sm:w-[50px] sm:h-[50px] md:w-[58px] md:h-[58px] rounded-full bg-[#D8E9FF] shadow-lg flex items-center justify-center transition-colors duration-300 ${
            activeButton === "right" ? "text-[#2563EB]" : "text-[#CBDBFA]"
          }`}
        >
          <FaChevronRight className="text-lg md:text-xl" />
        </button>
      </div>
    </div>
  );
};

export default YeedhaAdvantage;
