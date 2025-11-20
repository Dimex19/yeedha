import React from 'react'
// import { Link } from 'react-router-dom'

export type SubTitleDescPropsType = {
    text1?: string,
    title?: string,
    desc?: string,
    link?: string,
    onClick?: () => void;
}

const SubTitleDescProps: React.FC<SubTitleDescPropsType> = ({text1, title, desc, onClick}) => {
  return (
    <div onClick={onClick} className="cursor-pointer hover:bg-gray-50 transition p-3 rounded-lg">
      <div className=' md:mb-5 '>
          <p className="text-[#2563EB] text-[14px] lg:text-[21px] font-semibold">{text1}</p>
          <p className="text-[#111927] text-[18px] lg:text-[30.9px] font-semibold">{title}</p>
          <p className="text-[12px] text-[#6C737F]">{desc}</p>
      </div>
    </div>
  )
}

export default SubTitleDescProps
