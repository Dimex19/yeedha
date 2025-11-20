import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SubTitleDesc from "./SubTitleDescProps";
import type { SubTitleDescPropsType } from "./SubTitleDescProps";
import { useNavigate } from "react-router-dom";

interface RideAndEarnSubPropsType {
  image: string;
  BtnText: string;
  subItems: SubTitleDescPropsType[];
  order?: string
}

const RideAndEarnSubProps: React.FC<RideAndEarnSubPropsType> = ({ image, BtnText, subItems, order }) => {
    const navigate = useNavigate();

  const handleNavigation = (link?: string) => {
  if (!link) return;

  const [path, query] = link.split("?");
  const params = new URLSearchParams(query);

  navigate({
    pathname: path,
    search: params.toString(),
  });
};

  
  return (
    <div className="mb-10 md:mb-[86px] grid md:grid-cols-2 gap-8 md:gap-15 lg:gap-[120px]">
      <img src={image} alt="" className={`${order} flex-1 h-[100%] my-auto w-full md:max-w-[600px] lg:max-w-[700px] object-contain`}/>
      <div className="my-auto flex-1">
          {subItems.map((item, index) => (
            <SubTitleDesc
              key={index}
              text1={item.text1}
              title={item.title}
              desc={item.desc}
              // link={item.link}
              onClick={() => handleNavigation(item.link)} 
              />
          ))}
          <button className="flex items-center mt-6 md:mt-[55px] gap-x-2.5 text-white justify-center rounded-[8px] lg:rounded-[12px] bg-[#2563EB] w-50 md:w-[243px] h-[40px] lg:h-[55px]">{BtnText} <span><FaArrowRight/></span></button>
          
          {/* <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            {BtnText}
          </button> */}
      </div>
    </div>
  );
};

export default RideAndEarnSubProps;
