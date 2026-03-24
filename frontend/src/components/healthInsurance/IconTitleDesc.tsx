interface IconTitleDescProps {
    image?: string,
    title?: string,
    desc?: string,
    titleFont?: string,
    descWidth?: string
}

const IconTitleDesc = ({image, title, desc, titleFont, descWidth}: IconTitleDescProps) => {
  return (
    <>
        <div className={`w-[${descWidth}] flex flex-col items-center text-center`}>
            <div className="border border-[#D8E9FF] w-[61px] h-[61px] rounded-full flex justify-center items-center bg-[#F5F9FE] mb-5">
              <img src={image} alt="" className="" /></div>
            <p className={`text-[${titleFont}] mb-2.5 font-semibold`}>{title}</p>
            <p className="text-[14px] md:text-[16px] text-[#828282]" style={{ width: descWidth }}>{desc}</p>
        </div>
    </>
  )
}

export default IconTitleDesc