import type { SharedCardsWithIconBlock } from "../../utils/types/about";
// import StartAndNewsletter from '../home/StartAndNewsletter';
import { getStrapiMedia } from '../../utils/StrapiImage';

const Discover = ({title, cardWithIcon}:SharedCardsWithIconBlock) => {
  return (
    <>
        <div className="px-4 md:px-8 lg:px-15 xl:px-[127px] mt-10 lg:mt-[59px] mb-16 lg:mb-[124px] font-[Manrope]">
            <h2 className="text-[#2563EB] font-semibold text-2xl lg:text-5xl xl:text-[58px] max-w-full lg:w-[806px]">{title}</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-between items-center lg:items-start space-y-8 lg:space-y-0">
                {cardWithIcon.map((feature, index) => {
                    const imgUrl = feature?.icon?.image?.url ? getStrapiMedia(feature.icon.image.url) : "";
                    return (
                    <div key={index} className="w-full md:w-3/4 lg:w-[381px] flex flex-col justify-center items-center gap-y-6 lg:gap-y-[40px] mt-8 lg:mt-[50px] border border-[#D8E9FF] rounded-[20px] p-6 lg:p-[40px] mx-auto">
                    <div className="w-[80px] h-[80px] lg:w-[105px] lg:h-[105px] rounded-full bg-[#E3EBFF] flex items-center justify-center"><img
                  key={feature?.icon?.image?.id}
                  src={imgUrl ?? undefined}
                  alt={feature?.icon?.image?.alternativeText || "Mission and Vision"}
                  className="w-5 object-cover rounded-lg"
                /></div>
                    <p className="text-lg lg:text-[20px] text-[#2563EB] font-semibold text-center">{feature.title}</p>
                    <p className="w-full max-w-xs lg:w-[292px] text-sm lg:text-[14px] text-center">{feature.description}</p>
                </div>)})}
            </div>
        </div>
        {/* <StartAndNewsletter/> */}
    </>
  )
}

export default Discover