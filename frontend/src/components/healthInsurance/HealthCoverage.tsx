import BgIconTitleDesc from "./BgIconTitleDesc"
import Group6 from '../../assets/icons/group6.png'
import Group7 from '../../assets/icons/group7.png'
import Group8 from '../../assets/icons/group8.png'
import type { YeedhaHealthCoverageBlock } from "../../utils/types/healthInsurance";
import { getStrapiMedia } from "../../utils/StrapiImage";

const HowItWorks = ({title, description, cardWithIcon}: YeedhaHealthCoverageBlock) => {
  return (
    <>
      <div className="font-[Manrope] mt-[60px] sm:mt-[80px] lg:mt-[107px] mb-[60px] sm:mb-[80px] lg:mb-[96px] px-6 sm:px-10 md:px-[80px] lg:px-[128px]">
        <div className="md:w-[617px] mx-auto text-center">
          <p className="text-[#2563EB] text-[24px] sm:text-[30px] lg:text-[35px] font-semibold leading-snug">{title}</p>
          <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-medium text-[#828282] mt-2">{description}</p>
        </div>
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
          {/* <BgIconTitleDesc image={Group6} title='Doctor Consultations' desc='Select a health insurance plan that suits your needs and budget from our range of options.' titleFont='20px' descWidth='292px' />
          <BgIconTitleDesc image={Group7} title='Prescription Support' desc='Fill out a simple application form online. No lengthy paperwork or complicated procedures.' titleFont='20px' descWidth='292px' />
          <BgIconTitleDesc image={Group8} title='Emergency Care' desc='Get instant approval for your health insurance plan. No waiting, no hassle.' titleFont='20px' descWidth='292px' /> */}
        </div>
      </div>
    </>
  )
}

export default HowItWorks