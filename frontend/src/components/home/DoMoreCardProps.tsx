// import React from 'react'

interface DoMoreCardProp {
    image: string,
    title: string,
    description: string,
    BtnText: string

}

const DoMoreCardProps = ({ image, title, description, BtnText }: DoMoreCardProp) => {
  return (
    <div className="relative mb-4 mx-2">
      {/* Background image */}
      <img src={image} alt="" className="w-full h-full object-cover" />

      {/* Gradient overlay (full width & height) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-white/20 md:to-white/30 rounded-[16px]"></div>

      {/* Content on top */}
      <div className="absolute top-1/3 md:top-1/2 pl-[30px] z-10">
        <p className="font-[Manrope] text-[20px] lg:text-3xl xl:text-[42px] font-semibold text-white">{title}</p>
        <p className="font-[Manrope] text-[9px] lg:text-[12px] xl:text-[16px] font-medium text-white max-w-[240px] md:max-w-[350px] xl:max-w-[492px] mb-2.5 lg:mb-[20px] xl:mb-[30px]">{description}</p>
        <button className="w-[90px] lg:w-[140px] xl:w-[172px] h-[30px] lg:h-[40px] xl:h-[50px] bg-[#FFFFFF] text-[#2563EB] font-bold text-[12px] xl:text-[18px] rounded-[5px] lg:rounded-[10px]">{BtnText}</button>
      </div>
    </div>
  );
};


export default DoMoreCardProps