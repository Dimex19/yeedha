import BgIconTitleDesc from "./BgIconTitleDesc"
// import Group6 from '../../assets/icons/group11.png'
// import Group7 from '../../assets/icons/group12.png'
// import Group8 from '../../assets/icons/group13.png'
import type { YeedhaHealthCoverageBlock } from "../../utils/types/autoService";
import { getStrapiMedia } from "../../utils/StrapiImage";

const HowItWorks = ({title, description, cardWithIcon}: YeedhaHealthCoverageBlock) => {
  return (
    <>
      <div className="font-[Manrope] mt-[60px] sm:mt-[80px] lg:mt-[107px] mb-[60px] sm:mb-[80px] lg:mb-[96px] px-6 sm:px-10 md:px-[80px] lg:px-[128px]">
        {/* Header Section */}
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-[#2563EB] text-[24px] sm:text-[30px] lg:text-[35px] font-semibold leading-snug">
            {title}
          </p>
          <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-medium text-[#828282] mt-2">
            {description}
          </p>
        </div>

        {/* Cards Section */}
        <div className="mt-[40px] sm:mt-[50px] lg:mt-[60px] flex flex-col sm:flex-row flex-wrap justify-center lg:justify-between gap-y-8 sm:gap-x-8 lg:gap-x-[40px] xl:gap-x-[50px] text-center">
          {cardWithIcon.map((card, index) => {
            const imageUrl = (card?.icon as any)?.image?.url ??
              (card?.icon as any)?.url ??
              null;
            const imageSrc = getStrapiMedia(imageUrl);

            return (
            <BgIconTitleDesc
              key={index}
              image={imageSrc || undefined}
              title={card.title}
              desc={card.description}
              titleFont="18px"
              descWidth="280px"
            />
            )})}
          {/* <BgIconTitleDesc
            image={Group6}
            title="24/7 Coverage"
            desc="Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur."
            titleFont="18px"
            descWidth="280px"
          />
          <BgIconTitleDesc
            image={Group7}
            title="Verified Partners"
            desc="Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur."
            titleFont="18px"
            descWidth="280px"
          />
          <BgIconTitleDesc
            image={Group8}
            title="Broad Road Coverage"
            desc="Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur."
            titleFont="18px"
            descWidth="280px"
          /> */}
        </div>
      </div>
    </>
  )
}

export default HowItWorks
