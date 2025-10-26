import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroImg from "../../assets/images/Rectangle44.png";
import HeroImg2 from "../../assets/images/Rectangle45.png";
import HeroImg3 from "../../assets/images/Rectangle46.png";
import HeroImg4 from "../../assets/images/Rectangle47.png";
import PlayBtn from "../../assets/images/video-circle.png";
import IconTitleDesc from "./IconTitleDesc";
import Group1 from "../../assets/icons/group1.png";
import Group2 from "../../assets/icons/group2.png";
import Group3 from "../../assets/icons/group3.png";
import Group4 from "../../assets/icons/group4.png";
import type { BusinessBenefitBlock } from "../../utils/types/drivers";


const DriveWithYeedha = ({title, description, imageTitleDesc }: BusinessBenefitBlock) => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState<string>("e-hailing");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    if (location.state?.tab) {
      setActiveButton(location.state.tab);
      console.log(location.state.tab);
      
    }
  }, [location.state]);

  return (
    <div className="py-10 px-6 mt-[80px] md:mt-20 md:px-12 lg:px-20 xl:px-[97px]">
      {/* HEADER TEXT */}
      <div className="max-w-[617px] font-[Manrope]">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-semibold leading-snug">
          {title}
        </p>
        <p className="text-base sm:text-lg md:text-xl font-medium mt-2">
          {description}
        </p>
      </div>

      {/* BUTTONS SECTION */}
      <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 text-sm sm:text-base font-medium text-[#2563EB]">
        {["e-hailing", "car-pool", "shuttle", "freelance"].map((type) => (
          <button
            key={type}
            className={`w-full sm:w-[180px] md:w-[190px] h-[50px] sm:h-[55px] md:h-[60.64px] rounded-[10px] transition-all duration-200 ${
              activeButton === type
                ? "bg-[#2563EB] text-white"
                : "bg-[#F5F9FE] text-[#2563EB]"
            }`}
            onClick={() => handleButtonClick(type)}
          >
            {type === "e-hailing"
              ? "E-Hailing Driver"
              : type === "car-pool"
              ? "Car Pool Driver"
              : type === "shuttle"
              ? "Shuttle Driver"
              : "Freelance Driver"}
          </button>
        ))}
      </div>

      <hr className="border border-[#EDEDED] mt-6 mb-8" />

      {/* FEATURES SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        <IconTitleDesc
          image={Group1}
          title="Drive and Earn"
          desc="Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse."
          titleFont="26px"
          descWidth="345px"
        />
        <IconTitleDesc
          image={Group2}
          title="Subscription Option"
          desc="Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse."
          titleFont="26px"
          descWidth="345px"
        />
        <IconTitleDesc
          image={Group3}
          title="Health Insurance"
          desc="Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse."
          titleFont="26px"
          descWidth="345px"
        />
      </div>

      {/* HERO IMAGE SECTION */}
      <div className="mt-10 relative text-center">
        <img
          src={HeroImg}
          alt=""
          className={`w-full ${
            activeButton === "e-hailing" ? "block" : "hidden"
          }`}
        />
        <img
          src={HeroImg2}
          alt=""
          className={`w-full ${
            activeButton === "car-pool" ? "block" : "hidden"
          }`}
        />
        <img
          src={HeroImg3}
          alt=""
          className={`w-full ${
            activeButton === "shuttle" ? "block" : "hidden"
          }`}
        />
        <img
          src={HeroImg4}
          alt=""
          className={`w-full ${
            activeButton === "freelance" ? "block" : "hidden"
          }`}
        />

        {/* TEXT OVERLAY */}
        <p className="absolute top-[15%] left-[8%] sm:left-[15%] md:left-[20%] lg:left-[25%] xl:left-[30%] text-white text-sm sm:text-lg md:text-2xl lg:text-[32px] font-['Manrope'] font-normal z-10 max-w-[500px]">
          Watch the video to see the difference we make
        </p>

        {/* PLAY BUTTON */}
        <img
          src={PlayBtn}
          alt="play"
          className="absolute top-[25%] left-[35%] sm:left-[42%] md:left-[45%] lg:left-[47%] xl:left-[48%] w-[60px] sm:w-[80px] md:w-[100px]"
        />
      </div>

      {/* START DRIVING SECTION */}
      <div className="mt-16">
        <p className="font-bold text-2xl sm:text-3xl md:text-[35px] mb-2.5">
          Start driving
        </p>
        <p className="font-medium text-base sm:text-lg md:text-[20px]">
          Here are your requirements to become a driver
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((_, i) => (
            <IconTitleDesc
              key={i}
              image={Group4}
              title="Lorem ipsum dolor"
              desc="Lorem ipsum dolor sit amet consecte Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat."
              titleFont="24px"
              descWidth="263px"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DriveWithYeedha;
