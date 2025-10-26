import type { AboutEmpowerBlock, AboutMissionVisionBlock } from "../../utils/types/about";
import { getStrapiMedia } from "../../utils/StrapiImage";

interface EmpowerProps {
  empower?: AboutEmpowerBlock;
  missionXVision?: AboutMissionVisionBlock;
}

const Empower = ({ empower, missionXVision }: EmpowerProps) => {
  if (!empower && !missionXVision) {
    return null;
  }

  const { title = "", description = "", image } = empower || {};
  const imageUrl = image?.image?.url;
  const imageSrc = imageUrl ? getStrapiMedia(imageUrl) : undefined;

  const missionTitle = missionXVision?.title || "Our Mission and Vision";
  const missionDescription = missionXVision?.description || "";
  const missionImages = missionXVision?.images || [];

  return (
    <div className="px-4 md:px-8 lg:px-15 xl:px-[127px] mt-20 font-[Manrope]">
      {/* Empower Section */}
      {empower && (
        <div>
          <div className="xl:w-[1140px]">
            <h2 className="mt-[160px] font-semibold text-2xl md:text-[38px] text-[#2563EB]">
              {title}
            </h2>
            <p className="font-medium text-[20px] text-[#828282]">{description}</p>
          </div>
          {imageSrc && <img src={imageSrc} alt="Empower" className="mt-[27px] w-full" />}
        </div>
      )}

      {/* Mission x Vision Section */}
      {missionXVision && (
        <div className="mt-[80px]">
          <div className="xl:w-[1140px]">
            <h2 className="mt-[37px] font-semibold text-2xl md:text-[38px] text-[#2563EB]">
              {missionTitle}
            </h2>
            <p className="font-medium text-[20px] text-[#828282]">{missionDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[35px] mt-[27px]">
            {missionImages.map((item) => {
              const imgUrl = item?.image?.url ? getStrapiMedia(item.image.url) : "";
              return (
                <img
                  key={item.id}
                  src={imgUrl ?? undefined}
                  alt={item?.alt || "Mission and Vision"}
                  className="w-full object-cover rounded-lg"
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Empower;
