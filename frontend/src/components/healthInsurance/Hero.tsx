import Manulife from '../../assets/icons/manulife.png'
import fwd from '../../assets/icons/fwd.png'
import bcalife from '../../assets/icons/bcalife.png'
import blibli from '../../assets/icons/blibli.png'
import allianz from '../../assets/icons/allianz.png'
import Rectangle1008 from '../../assets/images/Rectangle1008.png'
import Group10 from '../../assets/icons/group10.png'

const Hero = () => {
  return (
    <div className="relative mt-20 md:mt-[184px] mb-20 md:mb-[138px]">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between font-[Manrope] px-6 sm:px-10 lg:px-[106px] gap-10">
        
        {/* Left Section */}
        <div className="text-center lg:text-left w-full lg:w-[864px] text-white">
          <div>
            <p className="text-[26px] sm:text-[32px] lg:text-[42px] text-[#2563EB] font-bold leading-tight">
              Stay Healthy, Keep Driving — Yeedha's Got You Covered
            </p>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-black mt-3 mb-6 lg:mt-[10px] lg:mb-[46px] max-w-[504px] mx-auto lg:mx-0">
              Manage your fleets, onboard drivers, choose how you want to be paid for every ride.
            </p>
          </div>

          <button className="w-[180px] sm:w-[200px] lg:w-[210px] h-[50px] sm:h-[55px] bg-[#2563EB] text-[16px] sm:text-[18px] rounded-[12px] hover:bg-blue-700 transition">
            Check if you qualify
          </button>

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
            src={Rectangle1008}
            alt="Hero Illustration"
            className="w-full max-w-[600px] rounded-[10px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute bottom-3 left-3 sm:left-6 flex gap-x-3 items-center bg-[#2563EB] rounded-[11px] p-3 sm:p-4 w-[90%] sm:w-[436px]">
            <img src={Group10} alt="" className="w-[35px] sm:w-[40px]" />
            <p className="text-white text-[12px] sm:text-[14px] font-[Manrope] leading-snug">
              Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
