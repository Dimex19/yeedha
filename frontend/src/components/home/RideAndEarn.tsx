import RideAndEarnSubProps from "./RideAndEarnSubProps";
import Frame38 from "../../assets/images/Frame38.png";
import Frame39 from "../../assets/images/Frame39.png";
import Frame40 from "../../assets/images/Frame40.png";

const RideAndEarn = () => {
  return (
    <div id="rideAndEarn" className="px-[30px] md:px-[47px] lg:px-[77px] xl:px-[127px] pt-10 md:pt-[120px]">
      <div className="text-center">
        <p className="text-3xl lg:text-[45px] text-[#2563EB] font-bold font-[Manrope]">
          Ride, Earn and Be Insured
        </p>
        <p className="md:max-w-[450px] lg:max-w-[617px] xl:max-w-[759px] text-[#828282] font-medium text-[12px] md:text-[16px] lg:text-[20px] text-center mx-auto">
          Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh
          neque et nullam. Ut maecenas consequat habitasse.
        </p>
      </div>

      <div className="mt-10 md:mt-[86px]">
        <RideAndEarnSubProps
          image={Frame38}
          BtnText="Become a Driver"
          subItems={[
            {
              text1: "Health Insurance",
              title: "Lorem ipsum dolor sit amet nibh.",
              desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque, Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque  phasellus  neque, Lorem.",
              link: "/health-insurance"
            },
            {
              text1: "Auto Services",
              title: "Lorem ipsum dolor sit amet nibh.",
              desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque, Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque  phasellus  neque, Lorem.",
              link: "/auto-services"
            },
            {
              text1: "CNG Conversion",
              title: "Lorem ipsum dolor sit amet nibh.",
              desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque, Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque  phasellus  neque, Lorem.",
              link: "/cng-conversion"
            },
            {
              text1: "Driver without a car",
              title: "Lorem ipsum dolor sit amet nibh.",
              desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque, Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque  phasellus  neque, Lorem.",
              link: "/driver-without-car"
            },
          ]}
        />
        <RideAndEarnSubProps
            order="order-0 md:order-1"
          image={Frame39}
          BtnText="Become a Driver"
          subItems={[
            {
              text1: "Decide you want to ride",
              title: "Lorem ipsum dolor sit amet nibh.",
              desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque, Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque  phasellus  neque, Lorem.",
              link: "/decide-to-ride"
            },
            {
              text1: "Drive now Pay Later",
              title: "Lorem ipsum dolor sit amet nibh.",
              desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque, Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque  phasellus  neque, Lorem.",
              link: "/drive-now-pay-later"
            },
          ]}
        />
        <RideAndEarnSubProps
          image={Frame40}
          BtnText="Become a Driver"
          subItems={[
            {
              text1: "Manage Fleets",
              title: "Lorem ipsum dolor sit amet nibh.",
              desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque, Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque  phasellus  neque, Lorem.",
              link: "/manage-fleets"
            },
            {
              text1: "Track Vehicle Activities",
              title: "Lorem ipsum dolor sit amet nibh.",
              desc: "Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque, Lorem ipsum dolor sit amet nibh consectetur. Nisi lectus phasellus  neque  phasellus  neque, Lorem.",
              link: "/track-vehicle-activities"
            },
          ]}
        />
      </div>
    </div>
  );
};

export default RideAndEarn;
