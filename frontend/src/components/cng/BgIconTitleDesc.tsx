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
        <div className={`flex flex-col items-center text-center border border-[#D8E9FF] pt-[51.7px] pb-[49.31px] pl-[27.03px] pr-[26.26px] rounded-xl`}>
            <img src={image} alt="" className="mb-[58.06px] w-[98.63px] h-[98.63px]" />
            <p className={`text-[${titleFont}] mb-[17px] font-semibold text-[#2563EB]`}>{title}</p>
            <p className="text-[12px] text-[#828282]" style={{ width: descWidth }}>{desc}</p>
        </div>
    </>
  )
}

export default BgIconTitleDesc