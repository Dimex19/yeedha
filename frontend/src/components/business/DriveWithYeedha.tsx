import HeroImg from '../../assets/images/Rectangle44.png'
import PlayBtn from '../../assets/images/video-circle.png'
import { getStrapiMedia } from "../../utils/StrapiImage";
import Group1 from "../../assets/icons/group1.png";
// import Group4 from '../../assets/icons/group4.png'
import type { BusinessBenefitBlock } from "../../utils/types/drivers";

type DriveWithYeedhaProps = BusinessBenefitBlock & {
  activeButton: string;
  setActiveButton: (label: string) => void;
};

const DriveWithYeedha = ({ title, description, optionPlusImage, activeButton, setActiveButton }: DriveWithYeedhaProps) => {
       
        const handleButtonClick = (label: string) => {
        setActiveButton(label);
        };

        const activeOption = optionPlusImage.find(
            (item) => item.label === activeButton
        );

        console.log('Active option', activeOption)

        const imageTitleDesc = activeOption?.imageTitleDesc || [];

        // Split into two sections
        const topFeatures = imageTitleDesc.slice(0, 4);
        const bottomSteps = imageTitleDesc.slice(4);
  return (
    <>
        <div className="py-10 px-6 mt-[80px] md:mt-20 md:px-12 lg:px-20 xl:px-[97px]">
            <div className="max-w-[797px] font-[Manrope] ">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-semibold leading-snug">{title}</p>
                <p className="text-base sm:text-lg md:text-xl font-medium mt-2">{description}</p>
            </div>
            <div className={`mt-6 flex flex-wrap gap-3 sm:gap-4 text-sm sm:text-base font-medium text-[#2563EB]`}>
                {optionPlusImage.map((item, index) => (
                <button
                    key={index}
                    onClick={() => handleButtonClick(item.label)}
                    className={`w-full sm:w-[180px] md:w-[190px] h-[50px] sm:h-[55px] md:h-[60px] rounded-[10px] transition-all duration-200 ${
                    activeButton === item.label
                        ? "bg-[#2563EB] text-white"
                        : "bg-[#F5F9FE] text-[#2563EB]"
                    }`}
                >
                    {item.label}
                </button>
                ))}
            </div>
            <hr className="border border-[#EDEDED] mt-[23.36px] mb-[35px]" />
            {/* === Top Features (first 4 items) === */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {topFeatures.map((feature) => {
                      const imageUrl =
                        (feature?.image as any)?.image?.url ??
                        (feature?.image as any)?.url ??
                        null;
                      const imageSrc = getStrapiMedia(imageUrl);
                      return (
                        <div key={feature.id} className="flex flex-col  max-w-[263px]">
                          <img
                            src={imageSrc || Group1}
                            alt={feature.title}
                            className="w-[60px] h-[60px] mb-4"
                          />
                          <h3 className="text-[26px] font-semibold mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-[16px] text-[#6C737F] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
            
                  {/* === Bottom Section (remaining items as steps) === */}
                  {bottomSteps.length > 0 && (
                    <div className="mt-20 ">
                      <h3 className="font-bold text-2xl sm:text-3xl md:text-[30px] mb-2">
                        Set up your business in these easy steps:
                      </h3>
                      <p className="font-medium text-[16px] text-[#828282] mb-12">
                        Follow these simple steps to start earning.
                      </p>
            
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 justify-items-between ">
                        {bottomSteps.map((step) => {
                          const imageUrl =
                            (step?.image as any)?.image?.url ??
                            (step?.image as any)?.url ??
                            null;
                          const imageSrc = getStrapiMedia(imageUrl);
                          return (
                            <div
                              key={step.id}
                              className="flex flex-col  max-w-[263px]"
                            >
                              <img
                                src={imageSrc || Group1}
                                alt={step.title}
                                className="w-[60px] h-[60px] mb-4"
                              />
                              <h4 className="font-semibold text-[24px] mb-2">
                                {step.title}
                              </h4>
                              <p className="text-[15px] text-[#6C737F] leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
            <div className="relative text-center mt-[45px]">
    {activeOption?.image ? (
      <>
        <img
          src={getStrapiMedia(
            (activeOption.image.image as any)?.url ||
              (activeOption.image.image as any)?.data?.attributes?.url
          ) ?? undefined}
          alt={activeOption.label}
          className="mt-6 w-full rounded-[10px] object-cover"
        />
        <p className="absolute top-[40px] md:top-[70px] lg:top-[140px] xl:top-[129px] left-[70px] md:left-[140px] lg:left-[200px] xl:left-[306px] font-normal z-10 font-['Manrope'] text-[16px] md:text-[26px] lg:text-[32px] text-white">
          Watch the video to see the difference we make
        </p>
        <img
          src={PlayBtn}
          alt="play button"
          className="absolute top-[60px] md:top-[120px] lg:top-[197px] xl:top-[186px] left-[160px] md:left-[330px] lg:left-[440px] xl:left-[563px] scale-[0.5] lg:scale-100"
        />
      </>
    ) : (
      <>
        {/* fallback to local images if Strapi image missing */}
        <img
          src={HeroImg}
          alt="Default visual"
          className="mt-6 w-full rounded-[10px] object-cover"
        />
        <p className="absolute top-[40px] md:top-[70px] lg:top-[140px] xl:top-[129px] left-[70px] md:left-[140px] lg:left-[200px] xl:left-[306px] font-normal z-10 font-['Manrope'] text-[16px] md:text-[26px] lg:text-[32px] text-white">
          Watch the video to see the difference we make
        </p>
        <img
          src={PlayBtn}
          alt="play button"
          className="absolute top-[60px] md:top-[120px] lg:top-[197px] xl:top-[186px] left-[160px] md:left-[330px] lg:left-[440px] xl:left-[563px] scale-[0.5] lg:scale-100"
        />
      </>
    )}
  </div>
        </div>
    </>
  )
}

export default DriveWithYeedha