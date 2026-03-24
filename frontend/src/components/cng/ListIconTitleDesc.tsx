import type { IconTitleListItem } from '../../utils/types/cng'

interface DescObject {
    first: string;
    second: string;
    third: string;
    fourth: string;
    fifth?: string;
}

interface IconTitleDescProps {
    image?: string,
    title?: string,
    desc?: string | DescObject | IconTitleListItem[],
    titleFont?: string,
    descWidth?: string
}

const ListIconTitleDesc = ({image, title, desc, titleFont, descWidth}: IconTitleDescProps) => {
  return (
    <>
        <div className={`flex flex-col items-center text-center border border-[#D8E9FF] pt-[51.7px] pb-[49.31px] pl-[20px] md:pl-[33.98px] pr-[20px] md:pr-[33.02px] rounded-xl`}>
            <div className="w-[124px] h-[124px] mb-[58.06px] border border-[#D8E9FF] rounded-full flex justify-center items-center">
                <img src={image} alt="" className=" " />
            </div>
            <p className={`text-[${titleFont}] mb-[17px] font-semibold text-black`}>{title}</p>
            <ul className="text-[15.82px] text-[#828282]  text-left list-disc list-inside" style={{ width: descWidth }}>
                {typeof desc === 'string' && <li>{desc}</li>}
                {typeof desc === 'object' && desc !== null && (
                    <>
                        {desc instanceof Array ? (
                            desc.map((item, index) => (
                                <li key={index}>
                                    {item.item}
                                </li>
                            ))
                        ) : (
                            <>
                        {desc.first && <li>{desc.first}</li>}
                        {desc.second && <li>{desc.second}</li>}
                        {desc.third && <li>{desc.third}</li>}
                        {desc.fourth && <li>{desc.fourth}</li>}
                        {desc.fifth && <li>{desc.fifth}</li>}
                        </>)}
                    </>
                )}
            </ul>
        </div>
    </>
  )
}

export default ListIconTitleDesc