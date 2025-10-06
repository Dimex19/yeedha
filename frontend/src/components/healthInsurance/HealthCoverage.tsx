import BgIconTitleDesc from "./BgIconTitleDesc"
import Group6 from '../../assets/icons/group6.png'
import Group7 from '../../assets/icons/group7.png'
import Group8 from '../../assets/icons/group8.png'

const HowItWorks = () => {
  return (
    <>
      <div className="font-[Manrope] px-2.5 mt-[121px] mb-[96px]">
        <div className="md:w-[617px] mx-auto text-center">
          <p className="text-[#2563EB] text-[24px] md:text-[35px] font-semibold">Yeedha Health Coverage</p>
          <p className="text-[16px] md:text-[20px] font-medium text-[#828282]">Comprehensive health benefits designed specifically for the unique needs of Yeedha drivers.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-y-5 md:justify-between md:mx-[128px] mt-[60px]">
          <BgIconTitleDesc image={Group6} title='Doctor Consultations' desc='Select a health insurance plan that suits your needs and budget from our range of options.' titleFont='20px' descWidth='292px' />
          <BgIconTitleDesc image={Group7} title='Prescription Support' desc='Fill out a simple application form online. No lengthy paperwork or complicated procedures.' titleFont='20px' descWidth='292px' />
          <BgIconTitleDesc image={Group8} title='Emergency Care' desc='Get instant approval for your health insurance plan. No waiting, no hassle.' titleFont='20px' descWidth='292px' />
        </div>
      </div>
    </>
  )
}

export default HowItWorks