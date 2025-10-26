import { FaArrowRight } from 'react-icons/fa6'
import Group222 from '../../assets/images/yeedha222.png'
import Group223 from '../../assets/images/yeedha223.png'
import TitleDesc from './TitleDesc'
import type { BusinessHowYeedhaWorksBlock } from "../../utils/types/drivers";

const HowYeedhaWorks = ({title, description, cta, image, titleDesc}: BusinessHowYeedhaWorksBlock) => {
  return (
    <>
        <div className="mt-[40px] md:mt-[146px] font-[Manrope]">
            <div className="md:w-[749px] text-center mx-auto mb-10 md:mb-[83px]">
                <p className="text-[24px] md:text-[35px] text-[#2563EB]">How <b>Yeedha E-Hailing</b> app works</p>
                <p className="font-medium text-[16px] md:text-[20px] text-[#828282]">{description}</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-x-[80px] xl:gap-x-[273px] gap-y-12 lg:gap-y-0 px-10 xl:px-0">
                <div className="relative flex lg:justify-start xl:px-[84px]">
                    <img src={Group222} alt="" className="w-[70%] sm:w-[80%] lg:w-[90%] xl:w-[100%]" />
                    <img src={Group223} alt="" className="absolute top-[21%] left-[40%] sm:top-[28%] md:top-[31%] lg:top-[28.5%] xl:top-[20%] md:left-[40%] xl:left-[57%] w-[60%] lg:w-[70%] xl:w-[60%]" />
                </div>
                <div className="w-full lg:w-[50%] xl:w-[45%] text-center lg:text-left">
                    <div className="flex flex-col gap-y-6 sm:gap-y-8">
                        {titleDesc && titleDesc.map((item, index) => (
                            <TitleDesc key={index} title={item.title} desc={item.description} />
                        ))}
                        {/* <TitleDesc title='Accept Rides' desc='Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus'/>
                        <TitleDesc title='Pickup Rider' desc='Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus'/>
                        <TitleDesc title='Arrive at Destination' desc='Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus'/>
                        <TitleDesc title='Earn Per Trip' desc='Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus'/> */}
                    </div>
                    <button className="flex items-center mt-[55px] gap-x-2.5 text-white justify-center rounded-[12px] bg-[#2563EB] w-full md:w-[243px] h-[55px]">{cta.label} <span><FaArrowRight/></span></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default HowYeedhaWorks