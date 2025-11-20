import { useState } from "react";
import { IoLogoApple } from "react-icons/io5";
import { getStrapiMedia } from "../../utils/StrapiImage";
import type { DownloadSectionBlock } from "../../utils/types/types";
import GooglePlay from "../../assets/icons/playstore.png";
import Huawei from "../../assets/icons/huawei.png";

const Download = ({ title, description, apps }: DownloadSectionBlock) => {
  // Default to the first app
  const [activeApp, setActiveApp] = useState(apps?.[0]?.title || "");

  // Find the active app object
  const selectedApp = apps?.find((app) => app.title === activeApp);

  console.log("Selected App:", selectedApp?.images);
  // Extract image URLs for the selected app
  const appImages =
    selectedApp?.images || [];
  console.log("App Images:", appImages);

  // Extract download links
  const downloadLinks = selectedApp?.downloadLinks || [];

  return (
    <div className="font-[Manrope] px-5 md:px-0 bg-[#2563EB] text-white mb-[131px] text-center pt-[66px] pb-[85px]">
      {/* Title & Description */}
      <p className="text-3xl md:text-[65px] font-bold">{title}</p>
      <p className="text-[12px] md:text-[22px] font-medium">{description}</p>

      {/* Switch Buttons */}
      <div className="md:w-[564px] text-[12px] h-[40px] md:h-[50px] bg-white flex items-center justify-center rounded-[10px] mx-auto mt-10 md:mt-[68px]">
        {apps?.map((app) => (
          <button
            key={app.id}
            onClick={() => setActiveApp(app.title)}
            className={`px-[20px] py-[4px] rounded-[5px] ${
              activeApp === app.title
                ? "bg-[#2563EB] text-white"
                : "bg-transparent text-[#2563EB]"
            }`}
          >
            {app.title}
          </button>
        ))}
      </div>

      {/* Download Links */}
      <div className="flex gap-[10.73px] mt-[35px] mx-auto justify-center flex-wrap">
        {downloadLinks?.map((link) => {
          const alt = link.alt?.toLowerCase() || "";
          if (alt.includes("playstore")) {
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-1 w-[100px] md:w-[140px] px-[15px] py-[8px] md:py-[6px] h-[34px] bg-[#5586F0] rounded-[57px] items-center">
                  <img src={GooglePlay} alt="Google Play" className="w-4" />
                  <div>
                    <p className="text-[6px] md:text-[8px] text-left">GET IT ON</p>
                    <p className="text-[8px] md:text-[14px] font-bold leading-[14px]">
                      Google Play
                    </p>
                  </div>
                </div>
              </a>
            );
          }
          if (alt.includes("appstore")) {
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-1 w-[106px] md:w-[126px] px-[15px] py-[8px] md:py-[6px] h-[34px] bg-[#5586F0] rounded-[57px] items-center justify-center">
                  <IoLogoApple className="text-white text-[16px]" />
                  <div>
                    <p className="text-[6px] md:text-[8px] text-left">
                      Download on the
                    </p>
                    <p className="text-[8px] md:text-[14px] text-left font-bold leading-[14px]">
                      App Store
                    </p>
                  </div>
                </div>
              </a>
            );
          }
          if (alt.includes("huawei")) {
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-1 w-[100px] md:w-[140px] px-[15px] py-[8px] md:py-[6px] h-[34px] bg-[#5586F0] rounded-[57px] items-center justify-center">
                  <img src={Huawei} alt="App Gallery" className="w-4" />
                  <div>
                    <p className="text-[6px] md:text-[8px] text-left">
                      EXPLORE IT ON
                    </p>
                    <p className="text-[8px] md:text-[14px] font-bold leading-[14px]">
                      App Gallery
                    </p>
                  </div>
                </div>
              </a>
            );
          }
          return null;
        })}
      </div>

      {/* App Preview Images */}
      <div className="flex mt-[57px] justify-center md:gap-x-[14.98px] mb-[-85px] flex-wrap">
        {appImages?.length > 0 ? (
          appImages.map((item, index) => {
            const imageUrl =
            item?.image?.url ||
            // item?.image?.url ||
            null;

            const imageSrc = getStrapiMedia(imageUrl);
            return (
            <img
              key={index}
              src={imageSrc || '/placeholder.png'}
              alt={selectedApp?.images?.[index]?.alt || "App Preview"}
              className="w-[110px] md:w-[200px] lg:w-[400px] object-contain"
            />
          )})
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  );
};

export default Download;
