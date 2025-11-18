import Manulife from '../../assets/icons/manulife.png'
import fwd from '../../assets/icons/fwd.png'
import bcalife from '../../assets/icons/bcalife.png'
import blibli from '../../assets/icons/blibli.png'
import allianz from '../../assets/icons/allianz.png'
import Rectangle1008 from '../../assets/images/Rectangle1008.png'
import Group10 from '../../assets/icons/group10.png'
import type { HeroBlock } from '../../utils/types/cng'
import { getStrapiMedia } from "../../utils/StrapiImage";

const Hero = ({title, description, cta, image, imageText}: HeroBlock) => {
  return (
    <div className="relative mt-20 sm:mt-28 md:mt-36 lg:mt-44 mb-16 md:mb-24 lg:mb-36 font-[Manrope]">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 xl:gap-0 px-5 sm:px-10 md:px-16 xl:px-[106px]">
        
        {/* Left Section */}
        <div className="text-center lg:text-left w-full lg:w-[864px] text-white">
          <div>
            <p className="text-[26px] sm:text-[32px] lg:text-[42px] text-[#2563EB] font-bold leading-tight">
              {title}
            </p>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-black mt-3 mb-6 lg:mt-[10px] lg:mb-[46px] max-w-[504px] mx-auto lg:mx-0">
              {description}
            </p>
          </div>

          {/* <button className="w-[180px] sm:w-[200px] lg:w-[210px] h-[50px] sm:h-[55px] bg-[#2563EB] text-[16px] sm:text-[18px] rounded-[12px] hover:bg-blue-700 transition">
            Check if you qualify
          </button> */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
              {cta?.map((button) => (
                <button
                  key={button.id}
                  className="w-full sm:w-[210px] h-[50px] sm:h-[55px] bg-[#2563EB] text-white text-[16px] sm:text-[18px] rounded-[12px] hover:bg-blue-700 transition"
                >
                  {button.label}
                </button>
              ))}
          </div>

          {/* Logos */}
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 mt-10 lg:mt-[53.79px]">
            <img src={Manulife} alt="Manulife" className="w-20 sm:w-24" />
            <img src={fwd} alt="FWD" className="w-20 sm:w-24" />
            <img src={bcalife} alt="BCA Life" className="w-20 sm:w-24" />
            <img src={blibli} alt="Blibli" className="w-20 sm:w-24" />
            <img src={allianz} alt="Allianz" className="w-20 sm:w-24" />
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-auto flex justify-center">
          <img
            src={getStrapiMedia(
                        (image?.image as any)?.url ||
                          (image?.image as any)?.data?.attributes?.url
                      ) ?? Rectangle1008}
            alt="Hero Illustration"
            className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-auto max-w-[550px] rounded-xl"
          />

          {/* Overlay */}
          <div className="absolute bottom-3 left-3 sm:left-6 flex gap-x-3 items-center bg-[#2563EB] rounded-[11px] p-3 sm:p-4 w-[90%] sm:w-[436px]">
            <img src={Group10} alt="" className="w-[35px] sm:w-[40px]" />
            <p className="text-white text-[12px] sm:text-[14px] font-[Manrope] leading-snug">
              {imageText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
