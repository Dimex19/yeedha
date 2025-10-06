import Rectangle1010 from '../../assets/images/Rectangle1010.png'
import Group10 from '../../assets/icons/group10.png'

const Hero = () => {
  return (
    <>
      <div className="relative mt-20 sm:mt-28 md:mt-36 lg:mt-44 mb-16 md:mb-24 lg:mb-36 font-[Manrope]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 xl:gap-0 px-5 sm:px-10 md:px-16 xl:px-[106px]">

          {/* Left section */}
          <div className="text-center lg:text-left max-w-full lg:max-w-[615px] mt-5 xl:mt-[50px]">
            <p className="text-[26px] sm:text-[28px] md:text-[32px] lg:text-[42px] text-[#2563EB] font-bold leading-snug">
              Switch to CNG with Yeedha and Cut Your Fuel Costs.
            </p>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-black mt-3 mb-8 max-w-full sm:max-w-[615px] mx-auto lg:mx-0">
              Exclusive program for Yeedha drivers to convert eligible vehicles to Compressed Natural Gas (CNG) with our vetted partners — save money, drive greener, and keep earning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
              <button className="w-full sm:w-[210px] h-[50px] sm:h-[55px] bg-[#2563EB] text-white text-[16px] sm:text-[18px] rounded-[12px]">
                Check if You Qualify
              </button>
              {/* <button className="w-full sm:w-[210px] h-[50px] sm:h-[55px] bg-[#2563EB] text-white text-[16px] sm:text-[18px] rounded-[12px]">
                Find a Mechanic
              </button> */}
            </div>
          </div>

          {/* Right section */}
          <div className="relative flex justify-center">
            <img
              src={Rectangle1010}
              alt="Hero Illustration"
              className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-auto max-w-[550px] rounded-xl"
            />

            {/* Floating card */}
            <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[30px] flex gap-x-3 items-center bg-[#2563EB] rounded-[11px] w-[90%] sm:w-[400px] md:w-[420px] lg:w-[436px] px-4 py-3 shadow-lg">
              <img src={Group10} alt="icon" className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px]" />
              <p className="text-white text-[12px] sm:text-[13px] md:text-[14px] leading-snug">
                Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
