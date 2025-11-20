import type { AboutData } from "../../utils/types/about";
// import Cards from "./Cards";
const Hero = ({text1, title, description}: AboutData) => {
    
  return (
    <>
        <div className="relative font-['Manrope']">
          <div className="flex flex-col items-center justify-center mt-25 lg:md-10 lg:mt-[188px] px-4 lg:px-0">
            <p className="text-[#676767] text-[12px] lg:text-[16px] font-medium text-center">{text1}</p>
            <h1 className="font-semibold text-2xl md:text-[32px] lg:text-[48px] leading-[74px] text-center text-[#2563EB]">{title}</h1>
            <p className="md:w-[684px] px-5 md:px-0 font-medium text-[12px] md:text-[14px] md:text-4 lg:text-[20px] text-center md:mt-[27px]">{description}</p>
          </div>
        </div>
    </>
  )
}

export default Hero