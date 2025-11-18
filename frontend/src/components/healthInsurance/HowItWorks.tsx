import IconTitleDesc from "./IconTitleDesc"
// import Group1 from '../../assets/icons/group1.png'
// import Group2 from '../../assets/icons/group2.png'
// import Group3 from '../../assets/icons/group3.png'
import type { HowItWorksBlock } from "../../utils/types/healthInsurance";
import { getStrapiMedia } from "../../utils/StrapiImage";
const HowItWorks = ({howItWorks, description, cardWithIcon}: HowItWorksBlock) => {
  return (
    <>
      <div className="font-[Manrope]">
        <div className="md:w-[617px] mx-auto text-center">
          <p className="text-[#2563EB] text-[24px] md:text-[35px] font-semibold">{howItWorks}</p>
          <p className="text-[16px] md:text-[20px] font-medium text-[#828282]">{description}</p>
        </div>
        <div className="flex flex-col flex-wrap gap-y-5 lg:flex-row justify-center xl:justify-between mx-[20px] lg:mx-[64px] xl:mx-[128px] mt-[60px]">
          {cardWithIcon.map((card, index) =>  {
          const imageUrl = (card?.icon as any)?.image?.url ??
            (card?.icon as any)?.url ??
            null;
          const imageSrc = getStrapiMedia(imageUrl);
          return (
            <IconTitleDesc
              key={index}
              image={imageSrc || undefined}
              title={card.title}
              desc={card.description}
              titleFont="26px"
              descWidth="343px"
            />
          )})}
          {/* <IconTitleDesc image={Group1} title='Choose Your Plan' desc='Select a health insurance plan that suits your needs and budget from our range of options.' titleFont='26px' descWidth='343px' />
          <IconTitleDesc image={Group2} title='Easy Application' desc='Fill out a simple application form online. No lengthy paperwork or complicated procedures.' titleFont='26px' descWidth='343px' />
          <IconTitleDesc image={Group3} title='Instant Approval' desc='Get instant approval for your health insurance plan. No waiting, no hassle.' titleFont='26px' descWidth='343px' /> */}
        </div>
      </div>
    </>
  )
}

export default HowItWorks