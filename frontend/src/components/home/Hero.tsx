// import React from 'react'
import HeroImg from '../../assets/images/Rectangle26.png'
import PlayBtn from '../../assets/images/video-circle.png'

const Hero = () => {
  return (
    <>
        <div className="relative">
          <div className="flex flex-col items-center justify-center mt-25 lg:mt-[188px] px-4 lg:px-0">
            <p className="text-[#2563EB] text-2xl lg:text-[30px] font-medium text-center font-['Manrope']">Ride your way</p>
            <h1 className="font-semibold text-3xl md:text-[52px] lg:text-[65px] leading-[74px] text-center font-['Manrope']">Discover new ways to ride</h1>
            <p className="font-medium text-[12px] md:text-[14px] md:text-4 lg:text-[18px] text-center md:mt-[27px] text-[#828282]">Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus<br/> nibh neque et nullam. Ut maecenas consequat habitasse.</p>
            <button className="w-[150px] lg:w-[210px] h-[45px] lg:h-[55px] rounded-[7px] bg-[#2563EB] text-[16px] font-medium text-white mt-3">Join Waitlist</button>
          </div>
          <div className="relative text-center">
            <img src={HeroImg} alt="" className="mt-6 w-full" />
            <p className="absolute top-[40px] md:top-[70px] lg:top-[140px] xl:top-[179px] left-[70px] md:left-[140px] lg:left-[200px] xl:left-[396px] font-normal z-10 font-['Manrope'] text-[16px] md:text-[26px] lg:text-[32px] text-white">Watch the video see the difference we make</p>
            <img src={PlayBtn} alt="" className="absolute top-[60px] md:top-[120px] lg:top-[197px] xl:top-[236px] left-[160px] md:left-[330px] lg:left-[440px] xl:left-[663px] scale-[0.5] lg:scale-100"/>
          </div>
        </div>
    </>
  )
}

export default Hero