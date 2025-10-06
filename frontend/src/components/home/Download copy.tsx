import { useState } from "react";
import Yeedha11 from "../assets/images/yeedha11.png";
import Yeedha12 from "../assets/images/yeedha12.png";
import Yeedha13 from "../assets/images/yeedha13.png";
import AppStore from '../assets/icons/apple.png'
import GooglePlay from '../assets/icons/playstore.png'
import Huawei from '../assets/icons/huawei.png'

const Download = () => {
  const [activeButton, setActiveButton] = useState<string>("rider"); // default active

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="font-[Manrope] bg-[#2563EB] text-white text-center pt-[66px] pb-[85px]">
      <p className="text-[65px] font-bold">Download Yeedha</p>
      <p className="text-[22px] font-medium">
        Lorem ipsum Lorem ipsum dolor sit amet consectetur.
      </p>

      <div className="w-[564px] h-[50px] bg-white flex items-center justify-center rounded-[10px] mx-auto mt-[68px]">
        <button
          onClick={() => handleButtonClick("rider")}
          className={`px-[51.5px] py-[8px] rounded-[5px] ${
            activeButton === "rider"
              ? "bg-[#2563EB] text-white"
              : "bg-transparent text-[#2563EB]"
          }`}
        >
          Rider App
        </button>

        <button
          onClick={() => handleButtonClick("driver")}
          className={`px-[51.5px] py-[8px] rounded-[5px] ${
            activeButton === "driver"
              ? "bg-[#2563EB] text-white"
              : "bg-transparent text-[#2563EB]"
          }`}
        >
          Driver App
        </button>

        <button
          onClick={() => handleButtonClick("business")}
          className={`px-[51.5px] py-[8px] rounded-[5px] ${
            activeButton === "business"
              ? "bg-[#2563EB] text-white"
              : "bg-transparent text-[#2563EB]"
          }`}
        >
          Business App
        </button>
      </div>
      <div className="flex gap-[10.73px] mt-[35px] mx-auto justify-center">
              <div className="flex gap-1 font-[Manrope] w-[126px] px-[15.02px] py-[6.01px] h-[38px] bg-[#5586F0] rounded-[57.25px]">
                <img src={AppStore} alt="" className="z-10" />
                <div className="">
                  <p className="text-[8px] text-left">Download on the</p>
                  <p className="text-[14px] font-bold leading-[14px]">App Store</p>
                </div>
              </div>
              <div className="flex gap-1 font-[Manrope] w-[140px] px-[15.02px] py-[6.01px] h-[38px] bg-[#5586F0] rounded-[57.25px]">
                <img src={GooglePlay} alt="" className="z-10" />
                <div className="">
                  <p className="text-[8px] text-left">GET IT ON</p>
                  <p className="text-[14px] font-bold leading-[14px]">Google Play</p>
                </div>
              </div>
              <div className="flex gap-1 font-[Manrope] w-[140px] px-[15.02px] py-[6.01px] h-[38px] bg-[#5586F0] rounded-[57.25px]">
                <img src={Huawei} alt="" className="z-10" />
                <div className="">
                  <p className="text-[8px] text-left">EXPLORE IT ON</p>
                  <p className="text-[14px] font-bold leading-[14px]">App Gallery</p>
                </div>
              </div>
              {/* <img src={GooglePlay} alt="" className="" />
              <img src={Huawei} alt="" className="" /> */}
            </div>
      <div className="flex mt-[57px] justify-center gap-x-[14.98px] mb-[-85px]">
        <img src={Yeedha11} alt="" className="" />
        <img src={Yeedha12} alt="" className="" />
        <img src={Yeedha13} alt="" className="" />
      </div>
    </div>
  );
};

export default Download;
