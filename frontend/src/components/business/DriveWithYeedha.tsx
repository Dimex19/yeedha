import {useState} from 'react'
import HeroImg from '../../assets/images/Rectangle44.png'
import HeroImg2 from '../../assets/images/Rectangle45.png'
import HeroImg3 from '../../assets/images/Rectangle46.png'
import HeroImg4  from '../../assets/images/Rectangle47.png'
import PlayBtn from '../../assets/images/video-circle.png'
import IconTitleDesc from './IconTitleDesc'
import Group3 from '../../assets/icons/group3.png'
import Group4 from '../../assets/icons/group4.png'

const DriveWithYeedha = () => {
    const [activeButton, setActiveButton] = useState<string>("e-hailing"); // default active
       
         const handleButtonClick = (buttonName: string) => {
           setActiveButton(buttonName);
         };
  return (
    <>
        <div className="py-10 px-6 mt-[80px] md:mt-20 md:px-12 lg:px-20 xl:px-[97px]">
            <div className="max-w-[697px] font-[Manrope] ">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-semibold leading-snug">Benefits of partnering with Yeedha?</p>
                <p className="text-base sm:text-lg md:text-xl font-medium mt-2">Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse.</p>
            </div>
            <div className={`mt-6 flex flex-wrap gap-3 sm:gap-4 text-sm sm:text-base font-medium text-[#2563EB]`}>
                <button
                    className={`w-full sm:w-[180px] md:w-[190px] h-[50px] sm:h-[55px] md:h-[60.64px] rounded-[10px] transition-all duration-200 ${
                        activeButton === "e-hailing"
                            ? "bg-[#2563EB] text-white"
                            : "bg-[#F5F9FE] text-[#2563EB]"
                    }`}
                    onClick={() => handleButtonClick("e-hailing")}
                >
                    Fleet Business
                </button>
                <button className={`w-full sm:w-[180px] md:w-[190px] h-[50px] sm:h-[55px] md:h-[60.64px] rounded-[10px] transition-all duration-200 ${
                        activeButton === "car-pool"
                            ? "bg-[#2563EB] text-white"
                            : "bg-[#F5F9FE] text-[#2563EB]"
                    }`} 
                    onClick={() => handleButtonClick("car-pool")}>Shuttle Business</button>
                <button className={`w-full sm:w-[180px] md:w-[190px] h-[50px] sm:h-[55px] md:h-[60.64px] rounded-[10px] transition-all duration-200 ${
                        activeButton === "shuttle"
                            ? "bg-[#2563EB] text-white"
                            : "bg-[#F5F9FE] text-[#2563EB]"
                    }`} 
                    onClick={() => handleButtonClick("shuttle")}>Car Rental</button>
            </div>
            <hr className="border border-[#EDEDED] mt-[23.36px] mb-[35px]" />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                <IconTitleDesc image={Group3} title='Increased Demand' desc='Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse.' titleFont='22px' descWidth='263px' />
                <IconTitleDesc image={Group3} title='Realtime Tracking' desc='Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse.' titleFont='22px' descWidth='263px' />
                <IconTitleDesc image={Group3} title='Personalised Tools' desc='Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse.' titleFont='22px' descWidth='263px' />
                <IconTitleDesc image={Group3} title='Track Earnings' desc='Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse.' titleFont='22px' descWidth='263px' />
            </div>
            <div className="mt-[60px]">
                <p className="font-bold text-[35px] mb-2.5">Start driving</p>
                <p className="font-medium text-[20px]">Here are your require to become a driver</p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                    <IconTitleDesc image={Group4} title='Sign up' desc='Lorem ipsum dolor sit amet consecte Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat.' titleFont='24px' descWidth='263px' />
                    <IconTitleDesc image={Group4} title='Register Vehicles' desc='Lorem ipsum dolor sit amet consecte Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat.' titleFont='24px' descWidth='263px'/>
                    <IconTitleDesc image={Group4} title='Get Demands' desc='Lorem ipsum dolor sit amet consecte Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat.' titleFont='24px' descWidth='263px' />
                    <IconTitleDesc image={Group4} title='Start Earning' desc='Lorem ipsum dolor sit amet consecte Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat.' titleFont='24px' descWidth='263px' />
                </div>
            </div>
            <div className="mt-[45px]">
                <div className="relative text-center">
                    <img src={HeroImg} alt="" className={`mt-6 w-full ${activeButton === "e-hailing" ? "block" : "hidden"}`} />
                    <img src={HeroImg2} alt="" className={`mt-6 w-full ${activeButton === "car-pool" ? "block" : "hidden"}`} />
                    <img src={HeroImg3} alt="" className={`mt-6 w-full ${activeButton === "shuttle" ? "block" : "hidden"}`} />
                    <img src={HeroImg4} alt="" className={`mt-6 w-full ${activeButton === "freelance" ? "block" : "hidden"}`} />
                    <p className="absolute top-[40px] md:top-[70px] lg:top-[140px] xl:top-[129px] left-[70px] md:left-[140px] lg:left-[200px] xl:left-[306px] font-normal z-10 font-['Manrope'] text-[16px] md:text-[26px] lg:text-[32px] text-white">Watch the video see the difference we make</p>
                    <img src={PlayBtn} alt="" className="absolute top-[60px] md:top-[120px] lg:top-[197px] xl:top-[186px] left-[160px] md:left-[330px] lg:left-[440px] xl:left-[563px] scale-[0.5] lg:scale-100"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default DriveWithYeedha