import { useState } from "react";
import Rectangle41 from "../../assets/images/Rectangle41.png";
import type { BusinessHeroBlock } from "../../utils/types/drivers";

const Hero = ({heading, description, cta}: BusinessHeroBlock) => {
  const [activeButton, setActiveButton] = useState<string>("e-hailing");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="relative font-[Manrope] w-full">
      {/* Image Wrapper */}
      <div className="relative w-full">
        {/* Background Image */}
        <img
          src={Rectangle41}
          alt="Hero Image"
          className="w-full h-[750px] sm:h-[800px] md:h-[900px] lg:h-[850px] object-cover"
        />

        {/* Gradient Overlay (matches image height) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />

        {/* Content Section */}
        <div className="absolute inset-0 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start text-white px-6 sm:px-10 md:px-16 lg:px-[106px] top-[15%] lg:top-[28%] gap-10">
          {/* Left Text Section */}
          <div className="max-w-full lg:max-w-[50%] text-center lg:text-left">
            <h1 className="text-[24px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-bold leading-tight mb-4">
              {heading}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-200">
              {description}
            </p>
            <button className="w-[180px] sm:w-[210px] h-[50px] sm:h-[55px] bg-[#2563EB] text-[16px] sm:text-[18px] rounded-[12px] hover:bg-[#1e4fd8] transition">
              {cta.label}
            </button>
          </div>

          {/* Right Form Section */}
          <div className="bg-white text-black rounded-[20px] p-5 sm:p-8 md:p-10 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[480px] font-semibold text-center border border-[#DEE8FF] shadow-md">
            <p className="text-[20px] sm:text-[22px] md:text-[25px] mb-4 sm:mb-6">
              Join our community of drivers
            </p>
            <p className="text-[14px] sm:text-[16px] mb-4">
              Select type of driver are you?
            </p>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 text-[14px] sm:text-[16px] font-medium text-[#2563EB]">
              {["e-hailing", "car-pool", "shuttle", "freelance"].map((type) => (
                <button
                  key={type}
                  onClick={() => handleButtonClick(type)}
                  className={`h-[50px] sm:h-[55px] md:h-[60px] rounded-[10px] transition ${
                    activeButton === type
                      ? "bg-[#2563EB] text-white"
                      : "bg-[#F5F9FE] text-[#2563EB]"
                  }`}
                >
                  {type === "e-hailing"
                    ? "E-Hailing Driver"
                    : type === "car-pool"
                    ? "Car Pool Driver"
                    : type === "shuttle"
                    ? "Shuttle Driver"
                    : "Freelance Driver"}
                </button>
              ))}
            </div>

            {/* Phone Input */}
            <div className="text-left font-medium text-[14px] mb-2">
              Phone Number
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-[15px] sm:text-[16px] border border-[#E8E8E8] bg-[#F9F9F9] py-[14px] px-[15px] rounded-[10px] text-[#555]">
                +234
              </div>
              <input
                type="number"
                className="w-full text-[15px] sm:text-[16px] border border-[#E8E8E8] bg-[#F9F9F9] py-[14px] px-[15px] rounded-[10px] placeholder:text-[#949494]"
                placeholder="9060123456"
              />
            </div>

            <button className="w-full h-[55px] sm:h-[60px] bg-[#2563EB] rounded-[14px] text-white text-[16px] sm:text-[18px] font-medium hover:bg-[#1e4fd8] transition">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
