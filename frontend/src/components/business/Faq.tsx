import { useState } from "react";
import Group5 from "../../assets/icons/group5.png";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (faqName: string) => {
    setActiveFaq((prev) => (prev === faqName ? null : faqName));
  };

  const faqs = [
    {
      id: "faq1",
      question: "Lorem ipsum dolor sit amet nibh consectetur?",
      answer:
        "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus.",
    },
    {
      id: "faq2",
      question: "How can I use this component properly?",
      answer:
        "You can toggle each FAQ independently. Clicking the + expands it, clicking again closes it.",
    },
    {
      id: "faq3",
      question: "Is it possible to open multiple FAQs?",
      answer:
        "In this setup, only one FAQ can be opened at a time. You can adjust the logic if you want multiple to stay open.",
    },
    {
      id: "faq4",
      question: "Can I add more FAQs easily?",
      answer:
        "Yes, just extend the array. The component will auto-render them dynamically.",
    },
    {
      id: "faq5",
      question: "Is the height synced dynamically?",
      answer:
        "Yes! The right column will now stretch to match the height of the left column.",
    },
  ];

  return (
    <div className="font-[Manrope] px-4 sm:px-8 md:px-12 xl:px-[104px] mb-20 md:mb-[246px]">
      {/* Section Header */}
      <div className="text-center max-w-[789px] mx-auto mb-[65px]">
        <p className="text-[26px] sm:text-[30px] md:text-[35px] text-[#2563EB] font-bold">
          Frequently Asked Questions
        </p>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#828282] font-medium">
          Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh
          neque et nullam. Ut maecenas consequat habitasse.
        </p>
      </div>

      {/* Flex container with equal height children */}
      <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-[66px] items-stretch">
        {/* Left Side: FAQs */}
        <div className="flex-1 w-full">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="w-full rounded-[15px] border border-[#E8E8E8] px-4 sm:px-6 md:px-[23px] mb-[16px] overflow-hidden transition-all duration-500 ease-in-out"
            >
              {/* Header Row */}
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
              {/* Animated Answer Section */}
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
          ))}
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
              Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus
              neque, Lorem ipsum dolor sit amet nibh consectetur.
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
