// import { FaArrowRight } from "react-icons/fa6"
import { useState } from "react"

const Hero = () => {
  const [activeButton, setActiveButton] = useState<string>("all"); // default active
  
    const handleButtonClick = (buttonName: string) => {
      setActiveButton(buttonName);
    };

  return (
    <>
        <div className="relative font-['Manrope']">
          <div className="md:w-[648px] mx-auto flex flex-col items-center justify-center mt-25 lg:mt-[188px] px-4 lg:px-0">
            <p className="text-[#676767] text-[12px] lg:text-[16px] font-medium text-center">About Yeedha</p>
            <h1 className="font-semibold text-[22px] sm:text-3xl md:text-[32px] lg:text-[30px] md:leading-[56px] text-center text-[#2563EB]">Get answers to common questions about Yeedha products and services</h1>
            <div className="md:w-[564px] h-[50px] bg-[#F5F9FE] border border-[#D4E1FF] flex items-center justify-center rounded-[10px] mx-auto mt-[68px]">
              <button
                onClick={() => handleButtonClick("all")}
                className={`px-[29.5px] py-[8px] rounded-[5px] text-[14px] ${
                  activeButton === "all"
                    ? "bg-[#2563EB] text-white"
                    : "bg-transparent text-[#2563EB]"
                }`}
              >
                All
              </button>
              <button
                onClick={() => handleButtonClick("about-yeedha")}
                className={`px-[20.5px] py-[8px] rounded-[5px] text-[14px] ${
                  activeButton === "about-yeedha"
                    ? "bg-[#2563EB] text-white"
                    : "bg-transparent text-[#2563EB]"
                }`}
              >
                About Yeedha
              </button>
              <button
                onClick={() => handleButtonClick("rider")}
                className={`px-[20.5px] py-[8px] rounded-[5px] text-[14px] ${
                  activeButton === "rider"
                    ? "bg-[#2563EB] text-white"
                    : "bg-transparent text-[#2563EB]"
                }`}
              >
                Rider App
              </button>

              <button
                onClick={() => handleButtonClick("driver")}
                className={`px-[20.5px] py-[8px] rounded-[5px] text-[14px] ${
                  activeButton === "driver"
                    ? "bg-[#2563EB] text-white"
                    : "bg-transparent text-[#2563EB]"
                }`}
              >
                Driver App
              </button>

              <button
                onClick={() => handleButtonClick("business")}
                className={`px-[20.5px] py-[8px] rounded-[5px] text-[14px] ${
                  activeButton === "business"
                    ? "bg-[#2563EB] text-white"
                    : "bg-transparent text-[#2563EB]"
                }`}
              >
                Business App
              </button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Hero