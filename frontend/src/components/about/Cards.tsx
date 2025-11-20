// import React from 'react'
import type { SharedQuoteBlock } from "../../utils/types/about";
import { FaArrowRight } from "react-icons/fa6"

const Cards = ({card}: SharedQuoteBlock) => {
  return (
    <>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 px-5 md:px-8 lg:px-15 xl:px-[135px]  gap-y-5 lg:gap-y-0 justify-between mt-[94px]">
            {card.map((card, index) => (
                <div key={index} className="relative pl-[35px] pr-[25px] xl:w-[360px] justify-between h-[412px] rounded-[20px] border border-[#D8E9FF]">
                    <div className="absolute -z-10 top-[62px] left-12 md:left-[56px] w-10 md:w-[62px] h-10 md:h-[62px] rounded-[31px] bg-[#E9EFFD]"></div>
                    <h2 className="text-[#071440] text-[20px] md:text-3xl lg:text-[40px] mt-[70px] font-bold">{card.subTitle}</h2>
                    <p className="text-2xl text-[#2563EB] font-semibold mt-[42px] mb-[5px]">{card.title}</p>
                    <p className="text-[15px] text-[#676767]">{card.description}</p>
                    <button className="flex items-center gap-x-[18px] font-medium text-[#2563EB] mt-[42px]">Learn More <span className=""><FaArrowRight/></span></button>
                </div>
            ))}
        </div>
    </>
  )
}

export default Cards