import React from 'react'
import { Link } from 'react-router-dom'

export type SubTitleDescPropsType = {
    text1?: string,
    title?: string,
    desc?: string,
    link: string
}

const SubTitleDescProps: React.FC<SubTitleDescPropsType> = ({text1, title, desc, link}) => {
  return (
    <Link to={link}>
      <div className='mb-5 '>
          <p className="text-[#2563EB] text-[14px] lg:text-[21px] font-semibold">{text1}</p>
          <p className="text-[#111927] text-[18px] lg:text-[30.9px] font-semibold">{title}</p>
          <p className="text-[12px] text-[#6C737F]">{desc}</p>
      </div>
    </Link>
  )
}

export default SubTitleDescProps
