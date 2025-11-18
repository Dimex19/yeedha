import { useState } from "react";
import Group5 from "../../assets/icons/group5.png";
import type { FAQBlock } from "../../utils/types/cng";
import { getStrapiMedia } from "../../utils/StrapiImage";

const Faq = ({title, description, questions, CallToAction}: FAQBlock) => {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (faqName: string) => {
    setActiveFaq((prev) => (prev === faqName ? null : faqName));
  };

  // const faqs = [
  //   {
  //     id: "faq1",
  //     question: "Lorem ipsum dolor sit amet nibh consectetur?",
  //     answer:
  //       "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus.",
  //   },
  //   {
  //     id: "faq2",
  //     question: "How can I use this component properly?",
  //     answer:
  //       "You can toggle each FAQ independently. Clicking the + expands it, clicking again closes it.",
  //   },
  //   {
  //     id: "faq3",
  //     question: "Is it possible to open multiple FAQs?",
  //     answer:
  //       "In this setup, only one FAQ can be opened at a time. You can adjust the logic if you want multiple to stay open.",
  //   },
  //   {
  //     id: "faq4",
  //     question: "Can I add more FAQs easily?",
  //     answer:
  //       "Yes, just extend the array. The component will auto-render them dynamically.",
  //   },
  //   {
  //     id: "faq5",
  //     question: "Is the height synced dynamically?",
  //     answer:
  //       "Yes! The right column will now stretch to match the height of the left column.",
  //   },
  // ];

  return (
    <div className="font-[Manrope] lg:px-[64px] mt-[100px] mb-[92px]">
      <div className="text-center p-5 md:w-[789px] mx-auto mb-[65px]">
        <p className="text-[24px] md:text-[35px] text-[#2563EB] font-bold">
          {title}
        </p>
        <p className="text-[16px] md:text-[20px] text-[#828282] font-medium">
          {description}
        </p>
      </div>

      {/* Flex container with equal height children */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[66px] items-stretch px-4 sm:px-8 lg:px-0">
  {/* Left Side: FAQs */}
  <div className="flex-1">
    {questions.map((faq) => (
      <div
        key={faq.id}
        className="w-full rounded-[15px] border border-[#E8E8E8] px-4 sm:px-6 md:px-[23px] mb-4 overflow-hidden transition-all duration-500 ease-in-out"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between min-h-[60px] sm:min-h-[70px]">
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-snug">
            {faq.title}
          </p>
          <span
            className="text-[22px] sm:text-[26px] font-bold cursor-pointer select-none"
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
          <p className="font-medium text-[14px] sm:text-[15px] md:text-[16px] text-[#6C737F] pb-4 leading-relaxed">
            {faq.description}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Right Side: Got More Questions */}
  <div className="flex-1 border border-[#E8E8E8] rounded-[20px] pt-[40px] sm:pt-[50px] lg:pt-[61px] px-6 sm:px-8 lg:px-[41px] flex flex-col justify-between">
    <div className="max-w-[350px] text-center mx-auto">
      <img src={getStrapiMedia(
        (CallToAction.image?.image as any)?.url ||
          (CallToAction.image?.image as any)?.data?.attributes?.url
      ) ?? Group5} alt="" className="mx-auto mb-[35px] w-[90px] sm:w-[100px]" />
      <p className="font-bold text-[20px] sm:text-[22px] text-[#2563EB] mb-2">
        {CallToAction?.title}
      </p>
      <p className="text-[14px] sm:text-[16px] mb-4 text-[#6C737F] leading-relaxed">
        {CallToAction?.description}
      </p>
    </div>

    <button className="text-white w-full sm:w-[300px] lg:w-[338px] h-[50px] sm:h-[55px] lg:h-[60px] bg-[#2563EB] rounded-[12px] sm:rounded-[14px] mb-[30px] sm:mb-[40.93px] mx-auto text-[16px] sm:text-[17px]">
      {CallToAction?.cta.label}
    </button>
  </div>
</div>

    </div>
  );
};

export default Faq;
