import { FaArrowRight } from "react-icons/fa6";
import TitleDesc from "./TitleDesc";
import { getStrapiMedia } from "../../utils/StrapiImage";
import type { BusinessHowYeedhaWorksBlock } from "../../utils/types/drivers";

const HowYeedhaWorks = ({
  title,
  description,
  cta,
//   image,
//   titleDesc,
  optionData = [],
  activeButton
}: BusinessHowYeedhaWorksBlock & {
  optionData: {
    label: string;
    description: string;
    cta: { label: string; href?: string };
    image?: { image?: { url: string } };
    overlayImage?: { image?: { url: string } };
    titleDesc: { title: string; description: string }[];
  }[];
  activeButton: string
}) => {

  // Get active driver’s data from Strapi
  const activeData = optionData.find((item) => item.label === activeButton);
  console.log("Active Data:", activeData);
  console.log("Active Button:", activeButton);
  // Construct dynamic title
  const dynamicTitle = activeButton
    ? `How Yeedha ${activeButton} works`
    : title;

  // Resolve images from Strapi
  const mainImageUrl =
    (activeData?.image as any)?.image?.url ??
    (activeData?.image as any)?.url ??
    null;
  const overlayImageUrl =
    (activeData?.overlayImage as any)?.image?.url ??
    (activeData?.overlayImage as any)?.url ??
    null;

  const mainImageSrc = getStrapiMedia(mainImageUrl);
  const overlayImageSrc = getStrapiMedia(overlayImageUrl);

  return (
    <div className="mt-[40px] md:mt-[56px] font-[Manrope]">
      {/* Header */}
      <div className="md:w-[749px] text-center mx-auto mb-10 md:mb-[83px]">
        <p className="text-[20px] md:text-[35px] text-[#2563EB]">
          {dynamicTitle && (
            <>
              How <b>{dynamicTitle.replace("How ", "").replace(" works", "")}</b> app works
            </>
          )}
        </p>
        <p className="font-medium text-[16px] md:text-[20px] text-[#828282]">
          {activeData?.description || description}
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-x-[80px] xl:gap-x-[273px] gap-y-12 lg:gap-y-0 px-10 xl:px-0">
        {/* IMAGES */}
        <div className="relative flex lg:justify-start xl:px-[84px]">
          {mainImageSrc && (
            <img
              src={mainImageSrc}
              alt="Main visual"
              className="w-[70%] sm:w-[80%] lg:w-[90%] xl:w-[100%]"
            />
          )}
          {overlayImageSrc && (
            <img
              src={overlayImageSrc}
              alt="Overlay visual"
              className="absolute top-[21%] left-[40%] sm:top-[28%] md:top-[31%] lg:top-[28.5%] xl:top-[20%] md:left-[40%] xl:left-[57%] w-[60%] lg:w-[70%] xl:w-[60%]"
            />
          )}
        </div>

        {/* TEXT + CTA */}
        <div className="w-full lg:w-[50%] xl:w-[45%] text-center lg:text-left">
          <div className="flex flex-col px-10 lg:px-0 gap-y-6 sm:gap-y-8">
            {activeData?.titleDesc?.map((item, index) => (
              <TitleDesc
                key={index}
                title={item.title}
                desc={item.description}
              />
            ))}
          </div>

          <button
            className="flex items-center mx-auto lg:mx-0 mt-[55px] gap-x-2.5 text-white justify-center rounded-[12px] bg-[#2563EB] w-full md:w-[243px] h-[55px]"
            onClick={() => {
              if (activeData?.cta?.href)
                window.open(activeData.cta.href, "_blank");
            }}
          >
            {activeData?.cta?.label || cta?.label || "Get Started"}{" "}
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowYeedhaWorks;
