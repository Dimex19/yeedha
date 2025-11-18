import { useLocation } from 'react-router-dom'
import image7 from '../../assets/images/image7.png'
import image5 from '../../assets/images/image5.png'
import image8 from '../../assets/images/image8.png'
import image9 from '../../assets/images/image9.png'
import type { StartAndNewsletterBlock } from '../../utils/types/types'

interface StartAndNewsletterProps {
  data: {
    startSubsection: StartAndNewsletterBlock["startSubsection"];
    newsletterSubsection: StartAndNewsletterBlock["newsletterSubsection"];
  }
}

const StartAndNewsletter = ({data}: StartAndNewsletterProps) => {
  const location = useLocation()

  // Logic: choose images based on route
  const isAlternateRoute =
    location.pathname === '/cng-conversion' || location.pathname === '/auto-services'

  const leftImage = isAlternateRoute ? image8 : image7
  const rightImage = isAlternateRoute ? image9 : image5

  if (!data) return null;
  const { startSubsection, newsletterSubsection} = data

  return (
    <>
      {/* === START YOUR JOURNEY SECTION === */}
      <div
        className={`relative text-center font-[Manrope] bg-[#E7EEFE] overflow-hidden 
        mx-4 sm:mx-10 md:mx-10 lg:mx-[70px] xl:mx-[131px] 
        ${isAlternateRoute ? 'h-auto md:h-[395px]' : 'h-auto md:h-[331.97px]'} 
        py-10 md:py-0`}
      >
        {/* Left Background Image */}
        <img
          src={leftImage}
          alt=""
          className="hidden md:block absolute top-0 left-0 h-full w-[120px] lg:w-[165px] xl:w-auto object-cover"
        />

        {/* Text Content */}
        {isAlternateRoute ? (
          <div className="relative z-10 mt-10 lg:mt-[131px] px-4 md:w-[500px] lg:w-[680px] mx-auto">
            <p className="font-semibold text-[16px] sm:text-[24px] lg:text-[28px] text-[#2563EB] mb-3 leading-snug">
              {startSubsection.getStarted?.text}
            </p>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#333] mx-auto max-2-[80%] md:max-w-[60%] lg:w-[584px]">
              {startSubsection.getStarted?.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 md:mt-[55px]">
              <button className="bg-[#2563EB] w-full sm:w-[180px] h-[45px] md:h-[50px] rounded-[12px] font-[Manrope] text-white">
                Request Car Rescue
              </button>
              <button className="bg-[#2563EB] w-full sm:w-[180px] h-[45px] md:h-[50px] rounded-[12px] font-[Manrope] text-white">
                Find a Mechanic
              </button>
            </div>
          </div>
        ) : (
          <div className="relative z-10 mt-10 md:mt-[131px] px-4">
            <p className="font-semibold text-[24px] sm:text-[28px] md:text-[32px] text-[#2563EB]">
              {startSubsection.getStarted?.text}
            </p>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#333] mx-auto max-w-[60%] lg:w-[584px] mt-2">
              {startSubsection.getStarted?.description}
            </p>
            <button className="bg-[#2563EB] w-[160px] sm:w-[180px] h-[45px] md:h-[50px] rounded-[12px] font-[Manrope] text-white mt-5">
              {startSubsection.getStarted?.cta.label}
            </button>
          </div>
        )}

        {/* Right Background Image */}
        <img
          src={rightImage}
          alt=""
          className="hidden md:block absolute top-0 right-0 h-full w-[160px] xl:w-auto object-cover"
        />
      </div>

      {/* === NEWSLETTER SECTION === */}
      <div className="px-4 sm:px-6 md:px-[47px] lg:px-[77px] xl:px-[127px] pt-10 md:pt-[104.03px] pb-10 md:pb-[120px] text-center">
        <p className="text-[20px] sm:text-[24px] text-[#2563EB] font-bold font-[Manrope]">
          {newsletterSubsection.title}
        </p>
        <p className="text-[#252B42] font-bold text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] max-w-[90%] md:max-w-[617px] mx-auto">
          {newsletterSubsection.shortDescription}
        </p>
        <p className="text-[#737373] font-medium text-[12px] sm:text-[14px] md:text-[16px] max-w-[90%] md:max-w-[452px] mx-auto mt-2.5">
          {newsletterSubsection.description}
        </p>

        <div className="mt-6 md:mt-[30px] flex flex-col md:flex-row items-center justify-center w-full">
          <input
            type="text"
            placeholder="Your Email"
            className="w-full md:w-[400px] lg:w-[500px] xl:w-[600px] h-[45px] md:h-[50px] bg-[#F9F9F9] border border-[#E8E8E8] rounded-t-[10px] md:rounded-l-[10px] md:rounded-t-none pl-4 text-[#949494] font-normal text-[14px] md:text-[16px] focus:outline-none"
          />
          <button className="w-full md:w-[100px] lg:w-[117px] h-[45px] md:h-[50px] bg-[#2563EB] text-white font-normal text-[14px] rounded-b-[10px] md:rounded-r-[10px] md:rounded-b-none mt-3 md:mt-0">
            Subscribe
          </button>
        </div>
      </div>
    </>
  )
}

export default StartAndNewsletter
