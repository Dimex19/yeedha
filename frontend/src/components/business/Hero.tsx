// import React from 'react'
import { useState } from 'react';
import Rectangle41 from '../../assets/images/Rectangle41.png'
import type { BusinessHeroBlock } from "../../utils/types/drivers";

const Hero = ({heading, description, cta}: BusinessHeroBlock) => {
   const [activeButton, setActiveButton] = useState<string>("e-hailing"); // default active
   
     const handleButtonClick = (buttonName: string) => {
       setActiveButton(buttonName);
     }; 
  return (
    <>
        <div className="relative font-[Manrope] w-full">
            <div className="relative w-full">
                <img src={Rectangle41} alt="Hero Image" className="w-full h-[750px] sm:h-[800px] md:h-[900px] lg:h-[850px] object-cover"/>
                {/* Gradient overlay (full width & height) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70"></div>
                <div className="absolute inset-0 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start  px-6 sm:px-10 md:px-16 lg:px-[56px] top-[20%] lg:top-[28%] gap-10">
                    <div className="max-w-full lg:max-w-[50%] text-center lg:text-left">
                        <div className="">
                            <p className="text-[24px] sm:text-[36px] text-white md:text-[44px] lg:text-[48px] font-bold leading-tight mb-4">{heading}</p>
                            <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-200">{description}</p>
                        </div>
                        <button className="w-[180px] sm:w-[210px] text-white h-[50px] sm:h-[55px] bg-[#2563EB] text-[16px] sm:text-[18px] rounded-[12px] hover:bg-[#1e4fd8] transition">{cta.label}</button>
                    </div>
                    <div className="bg-white text-black rounded-[20px] p-5 sm:p-8 xl:p-10 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[480px] font-semibold text-center border border-[#DEE8FF] shadow-md">
                        <p className="text-[20px] sm:text-[22px] md:text-[25px] mb-4 sm:mb-6">Join our community of drivers</p>
                        <p className="text-[14px] sm:text-[16px] mb-4">Select type of driver are you?</p>
                        <div className={`mt-[22px] gap-x-3 text-[16px] font-medium text-[#2563EB] grid grid-cols-2 gap-y-[18px]`}>
                            <button
                                className={`h-[50px] sm:h-[55px] md:h-[60px] rounded-[10px] transition ${
                                    activeButton === "e-hailing"
                                        ? "bg-[#2563EB] text-white"
                                        : "bg-[#F5F9FE] text-[#2563EB]"
                                }`}
                                onClick={() => handleButtonClick("e-hailing")}
                            >
                                Fleet Business
                            </button>
                            <button className={`h-[50px] sm:h-[55px] md:h-[60px] rounded-[10px] transition ${
                                    activeButton === "car-pool"
                                        ? "bg-[#2563EB] text-white"
                                        : "bg-[#F5F9FE] text-[#2563EB]"
                                }`}
                                onClick={() => handleButtonClick("car-pool")}>Shuttle Business</button>
                            <button className={`w-full h-[50px] sm:h-[55px] md:h-[60px] rounded-[10px] transition col-span-2 ${
                                    activeButton === "shuttle"
                                        ? "bg-[#2563EB] text-white"
                                        : "bg-[#F5F9FE] text-[#2563EB]"
                                }`}
                                onClick={() => handleButtonClick("shuttle")}>Car Rental Business</button>
                        </div>
                        <div className="font-[Manrope]">
                            <p className="text-left font-medium text-[14px] mb-[10px] mt-[20px]">Phone Number</p>
                            <div className="flex text-[#949494] gap-x-[11.5px]">
                                <div className="text-[16.23px] border border-[#E8E8E8] bg-[#F9F9F9] py-[17.39px] px-[17px] rounded-[10.21px]">+234</div>
                                {/* <div className="w-full text-left text-[16px] border border-[#E8E8E8] bg-[#F9F9F9] py-[17.39px] px-[17px] rounded-[10.21px]">9060123456</div> */}
                                <input type="number" className="w-full text-left text-[16px] border border-[#E8E8E8] bg-[#F9F9F9] py-[17.39px] px-[17px] rounded-[10.21px]" placeholder='9060123456'/>
                            </div>
                        </div>
                        <button className="w-full h-[60px] bg-[#2563EB] rounded-[14px] text-white mt-[42px] text-[18px] font-medium">Join Community</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero