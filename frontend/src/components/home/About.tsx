import Yeedha8 from "../../assets/images/yeedha8.png";
import Yeedha9 from "../../assets/images/yeedha9.png";
import Yeedha10 from "../../assets/images/yeedha10.png";


const Download = () => {

  return (
    <div className="font-[Manrope] bg-[#2563EB] text-white text-center pt-[66px] pb-[85px]">
        <div className="md:w-[755px] mx-auto">
            <p className="text-[16px] md:text-[24px] font-medium mb-[10px]">About Yeedha</p>
            <p className="text-3xl md:text-4xl lg:text-[55px] font-bold">Vision & Drive</p>
            <p className="text-[18px] md:text-2xl lg:text-[36px] font-medium mb-[20px]">Lorem ipsum Lorem ipsum dolor sit amet consectetur. Nisi lectusdolor</p>
            <p className="text-[12px] md:text-[16px] font-medium px-5 md:w-[631px] mx-auto">Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse. Nisi lectus phasellus</p>
            <button className="w-[210px] h-[45px] lg:h-[55px] text-[18px] text-[#2563EB] bg-white font-bold rounded-[8px] lg:rounded-[12px] mt-3">Learn more</button>
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
