import { useState } from "react";
import Group5 from "../../assets/icons/group5.png";
import type { FAQOptionsBlock } from "../../utils/types/faq";

const Faq = ({options}: FAQOptionsBlock) => {
  console.log("FAQ Options:", options);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<string>("All"); // default active
  
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  const toggleFaq = (faqName: string) => {
    setActiveFaq((prev) => (prev === faqName ? null : faqName));
  };

  return (
    <div className="font-[Manrope] mt-[60px] px-10 lg:px-[104px] mb-[120px]">
      <div className="md:w-[564px] h-[50px] bg-[#F5F9FE] border border-[#D4E1FF] flex items-center justify-center rounded-[10px] mx-auto mt-[68px]">
        {options?.map((opt) => (
          <button
            key={opt.id}
            onClick={() => handleButtonClick(opt.option)}
            className={`px-[20.5px] py-[8px] rounded-[5px] text-[14px] ${
              activeButton === opt.option
                ? "bg-[#2563EB] text-white"
                : "bg-transparent text-[#2563EB]"
            }`}
          >
            {opt.option}
          </button>
        ))}
      </div>

      {/* Flex container with equal height children */}
      <div className="flex flex-col gap-x-[66px] items-stretch mt-10">
        {/* Left Side: FAQs */}
        <div className="flex-1">
          {options.map((opt) => {
            if (activeButton !== opt.option) return null;
            return opt.questions.map((faq) => (
            <div
              key={faq.id}
              className="w-full rounded-[15px] border border-[#E8E8E8] px-[23px] mb-[16px] overflow-hidden transition-all duration-500 ease-in-out"
            >
              {/* Header Row */}
              <div className="flex items-center justify-between min-h-[74px]">
                <p className="text-[20px] font-medium">{faq.title}</p>
                <span
                  className="text-[26px] font-bold cursor-pointer select-none"
                  onClick={() => toggleFaq(String(faq.id))}
                >
                  {activeFaq === String(faq.id) ? "−" : "+"}
                </span>
              </div>
              {/* Animated Answer Section */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeFaq === String(faq.id)
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="w-[664px] font-medium text-[16px] text-[#6C737F] pb-4">
                  {faq.description}
                </p>
              </div>
            </div>
            ));
          })}
            
        </div>

        {/* Right Side: Got More Questions */}
        <div className="border border-[#E8E8E8] rounded-[20px] pt-[51px] pb-[48px] px-[54px] flex flex-col md:flex-row gap-y-10 items-center justify-between">
          <div className="flex flex-col md:flex-row justify-center items-center gap-x-[35px] sm:w-[517px]">
            <img src={Group5} alt="" className="w-[87px] h-[87px]" />
            <div className="flex-1 text-left">
                <p className="font-bold text-[22px] text-[#2563EB]">
                  Got more questions?
                </p>
                <p className="text-[16px]">
                  Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus
                  neque, Lorem ipsum dolor sit amet nibh consectetur.
                </p>
            </div>
          </div>
          <button className="text-white my-auto w-full sm:w-[338px] h-[50px] md:h-[60px] bg-[#2563EB] rounded-[14px]">
            Talk to Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
