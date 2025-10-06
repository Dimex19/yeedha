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
        <div className={`w-[${descWidth}]`}>
            <img src={image} alt="" className="mb-5" />
            <p className={`text-[${titleFont}] mb-2.5 font-semibold`}>{title}</p>
            <p className="text-[16px] text-[#828282]" style={{ width: descWidth }}>{desc}</p>
        </div>
    </>
  )
}

export default IconTitleDesc