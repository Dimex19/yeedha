interface IconTitleDescProps {
    image?: string,
    title?: string,
    desc?: string,
    titleFont?: string,
    descWidth?: string
}

const BgIconTitleDesc = ({image, title, desc, titleFont, descWidth}: IconTitleDescProps) => {
  return (
    <>
        <div className={`w-[${descWidth}] flex flex-col items-center text-center border border-[#D8E9FF] pt-[65px] pb-[62px] pl-[33.98px] pr-[33.02px] rounded-lg`}>
            <img src={image} alt="" className="w-[120px] h-[120px] mb-[73px]" />
            <p className={`text-[${titleFont}] mb-[17px] font-semibold text-[#2563EB]`}>{title}</p>
            <p className="text-[14px] text-[#828282]" style={{ width: descWidth }}>{desc}</p>
        </div>
    </>
  )
}

export default BgIconTitleDesc