import RideAndEarnSubProps from "./RideAndEarnSubProps";
import type { RideAndEarnBlock } from "../../utils/types/types";
import { getStrapiMedia } from '../../utils/StrapiImage';

const RideAndEarn = ({ title, description, rideAndEarnSubsection }: RideAndEarnBlock) => {
  return (
    <div
      id="rideAndEarn"
      className="px-[30px] md:px-[47px] lg:px-[77px] xl:px-[127px] pt-10 md:pt-[120px]"
    >
      {/* Section Header */}
      <div className="text-center">
        <p className="text-3xl lg:text-[45px] text-[#2563EB] font-bold font-[Manrope]">
          {title}
        </p>
        <p className="md:max-w-[450px] lg:max-w-[617px] xl:max-w-[759px] text-[#828282] font-medium text-[12px] md:text-[16px] lg:text-[20px] text-center mx-auto">
          {description}
        </p>
      </div>

      {/* Subsections */}
      <div className="mt-10 md:mt-[86px] flex flex-col gap-16">
        {rideAndEarnSubsection?.map((subSection, index) => {
          const imageUrl = subSection?.image?.image?.url ||
            subSection?.image?.url ||
            null;
          const imageSrc = getStrapiMedia(imageUrl);
          const cta = subSection?.cta;

          // Prepare info items for RideAndEarnSubProps
          const subItems = subSection?.info?.map((infoItem) => ({
            text1: infoItem.text1,
            title: infoItem.title,
            desc: infoItem.description,
            link: infoItem.cta?.href || "#",
          }));

          return (
            <RideAndEarnSubProps
              key={subSection.id || index}
              image={imageSrc || '/placeholder.png'}
              BtnText={cta?.label || "Learn More"}
              subItems={subItems}
              order={index % 2 !== 0 ? "order-0 md:order-1" : ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RideAndEarn;
