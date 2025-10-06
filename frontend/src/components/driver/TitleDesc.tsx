interface TitleDesProps {
    title?: string,
    desc?: string
}
const TitleDesc = ({title, desc}: TitleDesProps) => {
  return (
    <>
        <div className="xl:w-[507px]">
            <p className="text-[24px] font-semibold">{title}</p>
            <p className="text-[14.4px] text-[#6C737F]">{desc}</p>
        </div>
    </>
  )
}

export default TitleDesc