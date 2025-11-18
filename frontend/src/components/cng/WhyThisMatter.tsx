// import Group6 from "../../assets/icons/group6.png";
// import Group7 from "../../assets/icons/group7.png";
// import Group8 from "../../assets/icons/group8.png";
import BgIconTitleDesc from "./BgIconTitleDesc";
import type { YeedhaHealthCoverageBlock } from '../../utils/types/cng'
import { getStrapiMedia } from "../../utils/StrapiImage";

const HowItWorks = ({title, description, cardWithIcon}: YeedhaHealthCoverageBlock) => {
  // const cards = [
  //   {
  //     image: Group6,
  //     title: "24/7 Coverage",
  //     desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur.",
  //   },
  //   {
  //     image: Group7,
  //     title: "Verified Partners",
  //     desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur.",
  //   },
  //   {
  //     image: Group8,
  //     title: "Broad Road Coverage",
  //     desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur.",
  //   },
  //   {
  //     image: Group8,
  //     title: "Nationwide Support",
  //     desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur.",
  //   },
  // ];

  return (
    <div className="font-[Manrope]">
      {/* Heading */}
      <div className="md:w-[647px] px-6 sm:px-8 mx-auto text-center">
        <p className="text-[#2563EB] text-[26px] md:text-[35px] font-semibold">
          {title}
        </p>
        <p className="text-[16px] md:text-[20px] font-medium text-[#828282]">
          {description}
        </p>
      </div>

      {/* Cards Section */}
      <div className="px-[20px] gap-y-4 md:px-[108px] mt-[40px] sm:mt-[50px] lg:mt-[60px] flex flex-col sm:flex-row flex-wrap justify-between text-center md:grid md:grid-cols-2 md:gap-x-5 xl:gap-x-0 xl:flex">
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
            titleFont="16px"
            descWidth="245.55px"
          />
        )})}
      </div>
    </div>
  );
};

export default HowItWorks;
