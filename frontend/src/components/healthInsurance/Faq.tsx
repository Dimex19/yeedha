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
    <div className="font-[Manrope] p-1.5 md:px-[104px]">
      <div className="text-center lg:w-[789px] mx-auto mb-[65px]">
        <p className="text-[24px] md:text-[35px] text-[#2563EB] font-bold">
          Frequently Asked Questions
        </p>
        <p className="text-[16px] md:text-[20px] text-[#828282] font-medium">
          Get answers to common questions about Yeedha Health Coverage
        </p>
      </div>

      {/* Flex container with equal height children */}
      <div className="lg:flex gap-x-[66px] items-stretch">
        {/* Left Side: FAQs */}
        <div className="flex-1">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="md:w-[751px] rounded-[15px] border border-[#E8E8E8] px-[23px] mb-[16px] overflow-hidden transition-all duration-500 ease-in-out"
            >
              {/* Header Row */}
              <div className="flex items-center justify-between min-h-[74px]">
                <p className="text-[20px] font-medium">{faq.question}</p>
                <span
                  className="text-[26px] font-bold cursor-pointer select-none"
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
                <p className="w-[664px] font-medium text-[16px] text-[#6C737F] pb-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Got More Questions */}
        <div className="flex-1 border border-[#E8E8E8] rounded-[20px] pt-[61px] px-[41px] flex flex-col justify-between">
          <div className="w-[333px] text-center mx-auto">
            <img src={Group5} alt="" className="mx-auto mb-[35px]" />
            <p className="font-bold text-[22px] text-[#2563EB]">
              Got more questions?
            </p>
            <p className="text-[16px] mb-2.5">
              Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus
              neque, Lorem ipsum dolor sit amet nibh consectetur.
            </p>
          </div>
          <button className="text-white w-[338px] h-[60px] bg-[#2563EB] rounded-[14px] mb-[40.93px] mx-auto">
            Talk to Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
