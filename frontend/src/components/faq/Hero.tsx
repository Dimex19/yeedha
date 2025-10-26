// import { FaArrowRight } from "react-icons/fa6"
// import { useState } from "react"
import type { FAQPage } from "../../utils/types/faq"

const Hero = ({title, subtitle}: FAQPage) => {
  // const [activeButton, setActiveButton] = useState<string>("all"); // default active
  
  // const handleButtonClick = (buttonName: string) => {
  //   setActiveButton(buttonName);
  // };

  return (
    <>
        <div className="relative font-['Manrope']">
          <div className="md:w-[648px] mx-auto flex flex-col items-center justify-center mt-25 lg:mt-[188px] px-4 lg:px-0">
            <p className="text-[#676767] text-[12px] lg:text-[16px] font-medium text-center">{subtitle}</p>
            <h1 className="font-semibold text-[22px] sm:text-3xl md:text-[32px] lg:text-[30px] md:leading-[56px] text-center text-[#2563EB]">{title}</h1>
          </div>
        </div>
    </>
  )
}

export default Hero