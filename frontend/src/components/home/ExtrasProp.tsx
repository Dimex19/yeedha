import React from 'react'

export type ExtrasPropType = {
    text1?: string,
    title?: string,
    desc?: string,
    bgColor?: string,
    image?: string
}

const ExtrasProp: React.FC<ExtrasPropType> = ({text1, title, desc, bgColor, image}) => {
  return (
    <>
        <div className={`text-center text-white pt-[66px] pb-[85px] font-[Manrope] ${bgColor}`}>
            <p className="text-[16px] md:text-[20px] lg:text-[26px] font-semibold">{text1}</p>
            <p className="text-4xl md:text-[48px] lg:text-[65px] font-bold">{title}</p>
            <p className="text-[12px] md:text-[16px] px-5 md:px-0 lg:text-[20px] font-medium md:w-[687px] mx-auto ">{desc}</p>
        </div>
        <img src={image} alt="" className='w-full' />
    </>
  )
}

export default ExtrasProp
