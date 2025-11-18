// HowItWorks.tsx
import Group6 from "../../assets/icons/group6.png";
import Group7 from "../../assets/icons/group7.png";
// import Group8 from "../../assets/icons/Group8.png";
import ListIconTitleDesc from "../cng/ListIconTitleDesc";
import type { CarReadyBlock } from '../../utils/types/cng'
import { getStrapiMedia } from "../../utils/StrapiImage";

const CarReady = ({title, description, iconTitleList}: CarReadyBlock) => {
  // const cards = [
  //   {
  //     image: Group6,
  //     title: "Eligible",
  //     desc: {
  //       first: "Petrol Cars",
  //       second: "Cars older than 2010",
  //       third: "Cars in good condition",
  //       fourth: "Cars with no major accidents",
  //     },
  //   },
  //   {
  //     image: Group7,
  //     title: "Non Eligible",
  //     desc: {
  //       first: "Diesel Cars",
  //       second: "Cars older than 2010",
  //       third: "Cars with engine issues",
  //       fourth: "Cars with major accidents",
  //       fifth: "Cars with modified engines",
  //     },
  //   },
  // ];

  return (
    <div className="font-[Manrope] px-6 mt-[91.93px]">
      {/* Heading */}
      <div className="md:w-[647px] sm:px-8 mx-auto text-center">
        <p className="text-[#2563EB] text-[26px] md:text-[35px] font-semibold">
          {title}
        </p>
        <p className="text-[16px] md:text-[20px] font-medium text-[#828282]">
          {description}
        </p>
      </div>

      {/* Cards Section */}
      <div className="md:px-[108px] mt-[60px] gap-y-5 sm:mt-[50px] lg:mt-[60px] flex flex-col sm:flex-row flex-wrap justify-center gap-x-[30px] text-center">
        {iconTitleList.map((card, index) => {
        const imageUrl = (card?.icon as any)?.image?.url ??
          (card?.icon as any)?.url ??
          null;
        const imageSrc = getStrapiMedia(imageUrl);

        return (
          <ListIconTitleDesc
            key={index}
            image={imageSrc || undefined}
            title={card.title}
            desc={card.itemsList}
            titleFont="20px"
            descWidth="292px"
          />
        )})}
      </div>
    </div>
  );
};

export default CarReady;