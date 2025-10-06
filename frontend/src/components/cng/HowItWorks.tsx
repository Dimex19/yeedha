import IconTitleDesc from "../healthInsurance/IconTitleDesc"
import Group1 from '../../assets/icons/group1.png'
import Group2 from '../../assets/icons/group2.png'
import Group3 from '../../assets/icons/group3.png'

const HowItWorks = () => {
  return (
    <>
      <div className="font-[Manrope] mt-[88px]">
        <div className="md:w-[617px] mx-auto text-center">
          <p className="text-[#2563EB] text-[24px] md:text-[35px] font-semibold">How it Works</p>
          <p className="text-[16px] md:text-[20px] font-medium text-[#828282]">Getting your health cover is simple. We'll guide you through every step without extra paperwork.</p>
        </div>
        <div className="flex flex-col flex-wrap gap-y-5 lg:flex-row justify-center xl:justify-between mx-[20px] lg:mx-[64px] xl:mx-[128px] mt-[60px]">
          <IconTitleDesc image={Group1} title='Apply Online' desc='Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse.' titleFont='26px' descWidth='343px' />
          <IconTitleDesc image={Group2} title='Yeedha Verification' desc='Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse.' titleFont='26px' descWidth='343px' />
          <IconTitleDesc image={Group3} title='Partner Contact' desc='Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse.' titleFont='26px' descWidth='343px' />
        </div>

      </div>
    </>
  )
}

export default HowItWorks