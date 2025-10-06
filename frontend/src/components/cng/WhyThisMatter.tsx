// HowItWorks.tsx
import Group6 from "../../assets/icons/Group6.png";
import Group7 from "../../assets/icons/Group7.png";
import Group8 from "../../assets/icons/Group8.png";
import BgIconTitleDesc from "./BgIconTitleDesc";

const HowItWorks = () => {
  const cards = [
    {
      image: Group6,
      title: "24/7 Coverage",
      desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur.",
    },
    {
      image: Group7,
      title: "Verified Partners",
      desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur.",
    },
    {
      image: Group8,
      title: "Broad Road Coverage",
      desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur.",
    },
    {
      image: Group8,
      title: "Nationwide Support",
      desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet nibh consectetur.",
    },
  ];

  return (
    <div className="font-[Manrope]">
      {/* Heading */}
      <div className="md:w-[647px] px-6 sm:px-8 mx-auto text-center">
        <p className="text-[#2563EB] text-[26px] md:text-[35px] font-semibold">
          Why This Matters for Your Earnings
        </p>
        <p className="text-[16px] md:text-[20px] font-medium text-[#828282]">
          CNG conversion isn't just about being eco-friendly, it's about putting
          more money in your pocket every day.
        </p>
      </div>

      {/* Cards Section */}
      <div className="px-[20px] gap-y-4 md:px-[108px] mt-[40px] sm:mt-[50px] lg:mt-[60px] flex flex-col sm:flex-row flex-wrap justify-between text-center md:grid md:grid-cols-2 md:gap-x-5 xl:gap-x-0 xl:flex">
        {cards.map((card, index) => (
          <BgIconTitleDesc
            key={index}
            image={card.image}
            title={card.title}
            desc={card.desc}
            titleFont="16px"
            descWidth="245.55px"
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
