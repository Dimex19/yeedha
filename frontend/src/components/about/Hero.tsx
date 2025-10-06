import { FaArrowRight } from "react-icons/fa6"

const Hero = () => {
    const cards = [
        {
            title: 'Riders',
            subtitle: 'Ride your way',
            description: 'Lorem ipsum dolor sit amet consectetur. Tortor fusce tristique neque id urna aliquet consequat. Eget adipiscing ultrices urna ut ipsum pellentesque id ultrices.',
        },
        {
            title: 'Drivers',
            subtitle: 'Drive with Yeedha',
            description: 'Lorem ipsum dolor sit amet consectetur. Tortor fusce tristique neque id urna aliquet consequat. Eget adipiscing ultrices urna ut ipsum pellentesque id ultrices.',
        },
        {
            title: 'Business',
            subtitle: 'Manage your fleet',
            description: 'Lorem ipsum dolor sit amet consectetur. Tortor fusce tristique neque id urna aliquet consequat. Eget adipiscing ultrices urna ut ipsum pellentesque id ultrices.',
        },
    ];
  return (
    <>
        <div className="relative font-['Manrope']">
          <div className="flex flex-col items-center justify-center mt-10 lg:mt-[188px] px-4 lg:px-0">
            <p className="text-[#676767] text-[12px] lg:text-[16px] font-medium text-center">About Yeedha</p>
            <h1 className="font-semibold text-3xl md:text-[32px] lg:text-[48px] leading-[74px] text-center text-[#2563EB]">Why are we different?</h1>
            <p className="w-[684px] font-medium text-[12px] md:text-[14px] md:text-4 lg:text-[20px] text-center md:mt-[27px]">Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse.</p>
          </div>
          <div className="flex px-[135px] justify-between mt-[94px]">
            {cards.map((card) => (
                <div className="relative pl-[35px] pr-[25px] w-[360px] h-[412px] rounded-[20px] border border-[#D8E9FF]">
                    <div className="absolute -z-10 top-[62px] left-[56px] w-[62px] h-[62px] rounded-[31px] bg-[#E9EFFD]"></div>
                    <h2 className="text-[#071440] text-[40px] mt-[70px] font-bold">{card.title}</h2>
                    <p className="text-2xl text-[#2563EB] font-semibold mt-[42px] mb-[5px]">{card.subtitle}</p>
                    <p className="text-[15px] text-[#676767]">{card.description}</p>
                    <button className="flex items-center gap-x-[18px] font-medium text-[#2563EB] mt-[42px]">Learn More <span className=""><FaArrowRight/></span></button>
                </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default Hero