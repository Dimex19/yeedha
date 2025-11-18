import Yeedha8 from "../../assets/images/yeedha8.png";
import Yeedha9 from "../../assets/images/yeedha9.png";
import Yeedha10 from "../../assets/images/yeedha10.png";
import type { AboutBlock } from "../../utils/types/types";

// const Download = ({text1, text2, title, images, description, cta}: AboutBlock) => {
const Download = ({text1, text2, title, description, cta}: AboutBlock) => {

  return (
    <div className="font-[Manrope] bg-[#2563EB] text-white text-center pt-[66px] pb-[85px]">
        <div className="md:w-[755px] mx-auto">
            <p className="text-[16px] md:text-[24px] font-medium mb-[10px]">{text1}</p>
            <p className="text-3xl md:text-4xl lg:text-[55px] font-bold">{title}</p>
            <p className="text-[18px] md:text-2xl lg:text-[36px] font-medium mb-[20px]">{description}</p>
            <p className="text-[12px] md:text-[16px] font-medium px-5 md:w-[631px] mx-auto">{text2}</p>
            {cta?.[0] && (
          <a
            href={cta[0].href}
            target={cta[0].isExternal ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            <button className="w-[210px] h-[45px] lg:h-[55px] text-[18px] text-[#2563EB] bg-white font-bold rounded-[8px] lg:rounded-[12px] mt-3">
              {cta[0].label}
            </button>
          </a>
        )}
        </div>
        
        <div className="flex mt-[57px] justify-center gap-x-[14.98px] mb-[-85px]">
            <img src={Yeedha8} alt="" className="h-max mt-[28px] md:mt-[55px] lg:mt-[70px] xl:mt-[112px] w-[120px] md:w-[230px] lg:w-[290px] xl:w-full" />
            <img src={Yeedha9} alt="" className="h-max w-[120px] md:w-[230px] lg:w-[290px] xl:w-full" />
            <img src={Yeedha10} alt="" className="h-max mt-[28px] md:mt-[55px] lg:mt-[70px] xl:mt-[112px] w-[120px] md:w-[230px] lg:w-[290px] xl:w-full" />
        </div>
    </div>
  );
};

export default Download;
