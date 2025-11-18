import Group2 from "../../assets/icons/group2.png"
import type { HowItWorksBlock } from "../../utils/types/autoService";

const HowItWorks = ({title, description, cards}: HowItWorksBlock) => {
  // const services = [
  //   {
  //     title: "Auto Rescue (Towing)",
  //     features: [
  //       {
  //         heading: "Browse vetted mechanics in your area",
  //         desc: "Lorem ipsum amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet.",
  //       },
  //       {
  //         heading: "Contact directly from our directory",
  //         desc: "Lorem ipsum amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet.",
  //       },
  //       {
  //         heading: "Get transparent service and fair pricing",
  //         desc: "Lorem ipsum amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet.",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Vettered Mechanics",
  //     features: [
  //       {
  //         heading: "Browse vetted mechanics in your area",
  //         desc: "Lorem ipsum amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet.",
  //       },
  //       {
  //         heading: "Contact directly from our directory",
  //         desc: "Lorem ipsum amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet.",
  //       },
  //       {
  //         heading: "Get transparent service and fair pricing",
  //         desc: "Lorem ipsum amet nibh consectetur. Nisi lectus phasellus neque, Lorem ipsum dolor sit amet.",
  //       },
  //     ],
  //   },
  // ];
  return (
    <>
      <div className="font-[Manrope]">
        <div className="md:w-[617px] px-8 mx-auto text-center">
          <p className="text-[#2563EB] text-[26px] md:text-[35px] font-semibold">{title}</p>
          <p className="text-[16px] md:text-[20px] font-medium text-[#828282]">{description}</p>
        </div>
        <section className="py-8 md-py-16 bg-white">
          <div className="mx-auto px-3 md:px-[108px] xl:px-[278px] grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            {cards.map((service, index) => (
              <div key={index} className="mx-auto w-[350px] md:w-[392px] text-center">
                <img src={Group2} alt="" className="mx-auto mb-[15px] md:w-[97px] md:h-[97px]" />
                <h2 className="text-[#2563EB] text-[20px] md:text-[26px] font-medium mb-7">{service.title}</h2>
                <div className="space-y-8">
                  {service.titleDesc.map((feature, idx) => (
                    <div key={idx}>
                      <h3 className="font-medium text-[19px]">
                        {feature.title}
                      </h3>
                      <p className="text-[#6C737F] font-normal text-[14.4px] max-w-md mx-auto mt-[10px] font-[Inter]">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
    </section>
      </div>
    </>
  )
}

export default HowItWorks