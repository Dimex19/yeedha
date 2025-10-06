// import React from 'react'
import Frame5 from '../../assets/images/Rectangle5.png'
import Frame29 from '../../assets/images/Rectangle29.png'
import Frame31 from '../../assets/images/Rectangle31.png'
import Frame33 from '../../assets/images/Rectangle33.png'
import DoMoreCardProps from './DoMoreCardProps'

const DoMore = () => {
  return (
    <>
        <div className="px-[30px] md:px-[47px] lg:px-[77px] xl:px-[97px] pt-10 md:pt-[120px]">
            <div className="">
                <p className="text-3xl lg:text-[45px] text-[#2563EB] font-bold font-[Manrope] text-center md:text-left">Do more with Yeedha</p>
                <p className="md:max-w-[450px] lg:max-w-[617px] text-[#828282] font-medium text-[12px] md:text-[16px] lg:text-[20px] text-center md:text-left">Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse.</p>
            </div>
            <div className="mt-10 md:mt-[86px] grid grid-cols-1 md:grid-cols-2 ">
                <DoMoreCardProps image={Frame5} title="Hail Rides" description="Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse." BtnText="Find Ride"/>
                <DoMoreCardProps image={Frame29} title="Share Rides" description="Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse." BtnText="Join Rides"/>
                <DoMoreCardProps image={Frame31} title="Rent Cars" description="Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse." BtnText="Find Ride"/>
                <DoMoreCardProps image={Frame33} title="Hire Driver" description="Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse." BtnText="Find Ride"/>
            </div>
        </div>
    </>
  )
}

export default DoMore