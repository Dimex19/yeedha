import Rectangle1017 from '../../assets/images/Rectangle1017.png';
import Rectangle1018 from '../../assets/images/Rectangle1018.png';
import Rectangle1019 from '../../assets/images/Rectangle1019.png';

const Empower = () => {
  return (
    <>
        <div className="">
            <div className="px-[127px]">
                <div className="w-[1140px] font-[Manrope]">
                    <h2 className="mt-[160px] font-semibold text-[38px] text-[#2563EB]">Empowering people who Lorem ipsum dolor sit amet consectetur.</h2>
                    <p className="font-medium text-[20px] text-[#828282]">Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse.</p>
                </div>
                <img src={Rectangle1017} alt="" className="mt-[27px] w-full" />
            </div>
            <div className="px-[127px]">
                <div className="w-[1140px] font-[Manrope]">
                    <h2 className="mt-[37px] font-semibold text-[38px] text-[#2563EB]">Our mission and vision</h2>
                    <p className="font-medium text-[20px] text-[#828282]">Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus.</p>
                </div>
                <div className="flex gap-x-[35px]">
                    <img src={Rectangle1018} alt="" className="mt-[27px] w-full" />
                    <img src={Rectangle1019} alt="" className="mt-[27px] w-full" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Empower