import { useState } from "react";
import Group5 from "../../assets/icons/group5.png";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqOption = {
  label: string; // e.g., "E-Hailing"
  faqs: FaqItem[];
};

type FaqProps = {
  activeButton: string;
  faqOptionData: FaqOption[];
};

const Faq = ({ activeButton, faqOptionData }: FaqProps) => {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (faqName: string) => {
    setActiveFaq((prev) => (prev === faqName ? null : faqName));
  };

  console.log("FAQ Option Data:", faqOptionData);
  // 🔹 Find FAQs for the currently active driver
  const activeFaqSet = faqOptionData.find(
    (faq) => faq.label === activeButton
  );
  console.log("Active FAQ Set:", activeFaqSet);
  const faqs = activeFaqSet?.faqs || [];

  return (
    <div className="font-[Manrope] px-4 sm:px-8 md:px-12 xl:px-[104px] mb-20 md:mb-[246px]">
      {/* Section Header */}
      <div className="text-center px-3 max-w-[789px] mx-auto mb-[65px]">
        <p className="text-[22px] sm:text-[30px] md:text-[35px] text-[#2563EB] font-bold">
          Frequently Asked Questions — {activeButton}
        </p>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#828282] font-medium">
          Here are the most common questions {activeButton.toLowerCase()} owners ask.
        </p>
      </div>

      {/* Flex container with equal height children */}
      <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-[66px] items-stretch">
        {/* Left Side: FAQs */}
        <div className="flex-1 w-full">
          {faqs.length > 0 ? (
            faqs.map((faq) => (
              <div
                key={faq.id}
                className="w-full rounded-[15px] border border-[#E8E8E8] px-4 sm:px-6 md:px-[23px] mb-[16px] overflow-hidden transition-all duration-500 ease-in-out"
              >
                <div className="flex items-center justify-between min-h-[74px]">
                  <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium">
                    {faq.question}
                  </p>
                  <span
                    className="text-[22px] sm:text-[24px] md:text-[26px] font-bold cursor-pointer select-none"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    {activeFaq === faq.id ? "−" : "+"}
                  </span>
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    activeFaq === faq.id
                      ? "max-h-[300px] opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="font-medium text-[14px] sm:text-[15px] md:text-[16px] text-[#6C737F] pb-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No FAQs available for this business type.
            </p>
          )}
        </div>

        {/* Right Side: Got More Questions */}
        <div className="flex-1 border border-[#E8E8E8] rounded-[20px] pt-[40px] sm:pt-[50px] lg:pt-[61px] px-6 sm:px-8 lg:px-[41px] flex flex-col justify-between">
          <div className="text-center mx-auto max-w-[333px]">
            <img
              src={Group5}
              alt="Got more questions"
              className="mx-auto mb-[25px] sm:mb-[35px] w-[70px] sm:w-[90px]"
            />
            <p className="font-bold text-[20px] sm:text-[22px] text-[#2563EB] mb-2">
              Got more questions?
            </p>
            <p className="text-[14px] sm:text-[16px] mb-2.5 text-[#6C737F]">
              Contact our support team and we’ll help you get started as a {activeButton.toLowerCase()} owner.
            </p>
          </div>
          <button className="text-white text-[14px] sm:text-[16px] w-full sm:w-[250px] lg:w-[338px] h-[50px] sm:h-[55px] lg:h-[60px] bg-[#2563EB] rounded-[12px] sm:rounded-[14px] mb-[30px] sm:mb-[40.93px] mx-auto">
            Talk to Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
