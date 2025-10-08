const TalkToUs = () => {
  return (
    <>
        <div className="font-[Manrope] mt-12 px-4 mb-12 md:px-8 lg:mt-[124.21px] lg:px-12 xl:px-[125px] lg:mb-[124.21px] flex flex-col items-center">
            <div className="flex flex-col lg:flex-row justify-between w-full lg:gap-20">
                
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                  <p className="font-medium text-lg md:text-[20px]">Talk To Us</p>
                  {/* Reduced text size on mobile (text-3xl) and let it wrap naturally (removed w-[431.25px]). */}
                  <h2 className="font-bold text-3xl md:text-4xl xl:text-[42px] text-[#2563EB] mt-2 leading-tight">We are always happy to assist you</h2>
                  {/* Allowed paragraph to take full width on mobile/tablet (removed w-[535px]). */}
                  <p className="text-base md:text-[18px] mt-4 max-w-lg">Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. Ut maecenas consequat habitasse.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-0 md:gap-x-8 xl:gap-x-[76.5px] lg:w-1/2">
                  {/* Email Block */}
                  <div className="p-6 ">
                    <p className="font-semibold text-base md:text-[18px] text-[#2563EB]">Email Address</p>
                    <div className="w-5 h-0.5 mt-4 mb-5 bg-black"></div>
                    <p className="font-medium text-base md:text-[16.5px]">info@yeedha.com</p>
                    <p className="font-medium text-base md:text-[16.5px] mb-4">help@yeedha.com</p>
                    <p className="text-sm md:text-[15px] text-[#2563EB] font-medium">Assistance hours: </p>
                    <p className="text-sm md:text-[15px] max-w-xs">Monday - Sunday 6 AM to 12 PM</p>
                  </div>

                  {/* Phone Block */}
                  <div className="p-6">
                    <p className="font-semibold text-base md:text-[18px] text-[#2563EB]">Phone Number</p>
                    <div className="w-5 h-0.5 mt-4 mb-5 bg-black"></div>
                    <p className="font-medium text-base md:text-[16.5px]">0900 123- 4567</p>
                    <p className="font-medium text-base md:text-[16.5px] mb-4">0900 123- 4567</p>
                    <p className="text-sm md:text-[15px] text-[#2563EB] font-medium">Assistance hours: </p>
                    <p className="text-sm md:text-[15px] max-w-xs">Monday - Sunday 6 AM to 12 PM</p>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TalkToUs