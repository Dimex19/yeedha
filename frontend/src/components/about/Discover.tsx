// import React from 'react'
import StartAndNewsletter from '../home/StartAndNewsletter';

const Discover = () => {
    const features = [
        {
            icon: '', // Placeholder for icon
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur.'
        },
        {
            icon: '', // Placeholder for icon
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur.'
        },
        {
            icon: '', // Placeholder for icon
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur.'
        },
    ];
  return (
    <>
        <div className="px-[127px] mt-[59px] mb-[124px] font-[Manrope]">
            <h2 className="text-[#2563EB] font-semibold text-[58px] w-[806px]">Discover our new packed features and benefits</h2>
            <div className="flex justify-between">
                {features.map((feature) => (
                    <div className="w-[381px] flex flex-col justify-center items-center gap-y-[40px] mt-[50px] border border-[#D8E9FF] rounded-[20px] p-[40px]">
                    <div className="w-[105px] h-[105px] rounded-[52.5px] bg-[#E3EBFF]"></div>
                    <p className="text-[20px] text-[#2563EB] font-semibold">{feature.title}</p>
                    <p className="w-[292px] text-[14px] text-center">{feature.description}</p>
                </div>))}
            </div>
        </div>
        <StartAndNewsletter/>
    </>
  )
}

export default Discover