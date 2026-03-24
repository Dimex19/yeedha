import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import image7 from '../../assets/images/image7.png';
import image5 from '../../assets/images/image5.png';
import image8 from '../../assets/images/image8.png';
import image9 from '../../assets/images/image9.png';
import type { StartAndNewsletterBlock } from '../../utils/types/types';
import { createNewsletterSubscriber } from "../../utils/loaders";

interface StartAndNewsletterProps {
  data: {
    startSubsection: StartAndNewsletterBlock["startSubsection"];
    newsletterSubsection: StartAndNewsletterBlock["newsletterSubsection"];
  };
}

const StartAndNewsletter = ({ data }: StartAndNewsletterProps) => {
  const location = useLocation();

  // Form States
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Determine background images by route
  const isAlternateRoute =
    location.pathname === "/cng-conversion" ||
    location.pathname === "/auto-services";

  const leftImage = isAlternateRoute ? image8 : image7;
  const rightImage = isAlternateRoute ? image9 : image5;

  if (!data) return null;

  const { startSubsection, newsletterSubsection } = data;

  // 📌 Submit newsletter form to Strapi
  const handleSubmit = async () => {
    if (!email.trim()) {
      setMessage("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await createNewsletterSubscriber({ email });

      if (!res) throw new Error("Failed to subscribe");

      setMessage("🎉 Subscription successful!");
      setEmail("");
    } catch (err) {
      setMessage("❌ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* === START YOUR JOURNEY SECTION === */}
      <div
        className={`relative text-center font-[Manrope] bg-[#E7EEFE] overflow-hidden 
        mx-4 sm:mx-10 md:mx-10 lg:mx-[70px] xl:mx-[131px] 
        ${isAlternateRoute ? "h-auto md:h-[395px]" : "h-auto md:h-[331.97px]"} 
        py-10 md:py-0`}
      >
        <img
          src={leftImage}
          alt=""
          className="hidden md:block absolute top-0 left-0 h-full w-[120px] lg:w-[165px] xl:w-auto object-cover"
        />

        {/* Content */}
        {isAlternateRoute ? (
          <div className="relative z-10 mt-10 lg:mt-[131px] px-4 md:w-[500px] lg:w-[680px] mx-auto">
            {location.pathname === "/cng-conversion" ? <div className="">
              <p className="font-semibold text-[16px] sm:text-[24px] lg:text-[28px] text-[#2563EB] mb-3 leading-snug">
                Switch to CNG and Save Big on Fuel
              </p>
              <p className="text-[14px] text-[#333] mx-auto max-w-full md:max-w-[60%] lg:max-w-full">
                A smarter fuel choice that helps your car and your wallet.
              </p>
            </div> : 
            <div className="">
              <p className="font-semibold text-[16px] sm:text-[24px] lg:text-[28px] text-[#2563EB] mb-1 leading-snug">
                Stuck or Need a Fix? Yeedha Can Help
              </p>
              <p className="text-[14px] text-[#333] mx-auto md:max-w-[60%] lg:max-w-full max-w-full">
                Get back on the road quickly with Yeedha’s fast and trustworthy car support.
              </p>
            </div>}

            {location.pathname === "/cng-conversion" ? <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 md:mt-[55px]">
              <button className="bg-[#2563EB] w-full sm:w-[180px] h-[45px] rounded-[12px] text-white">
                Apply for CNG
              </button>
              <button className="bg-[#2563EB] w-full sm:w-[180px] h-[45px] rounded-[12px] text-white">
                Check if you qualify
              </button>
            </div> : 
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 md:mt-[55px]">
              <button className="bg-[#2563EB] w-full sm:w-[180px] h-[45px] rounded-[12px] text-white">
                Get a Tow Truck
              </button>
              <button 
                onClick={() =>
                    document.getElementById("findMechanic")?.scrollIntoView({ behavior: "smooth" })
                  } className="bg-[#2563EB] w-full sm:w-[180px] h-[45px] rounded-[12px] text-white">
                Find a Mechanic
              </button>
            </div>}
          </div>
        ) : (
          <div className="relative z-10 font-[Manrope] mt-10 md:mt-[81px] px-4">
            <p className="font-semibold text-[20px] sm:text-[28px] md:text-[32px] text-[#2563EB]">
              {startSubsection.getStarted?.text}
            </p>
            <p className="text-base text-black mx-auto md:max-w-[424px] mt-2">
              {startSubsection.getStarted?.description}
            </p>
            <button
              onClick={() =>
                document.getElementById("downloads")?.scrollIntoView({ behavior: "smooth" })
              }
            className="bg-[#2563EB] w-[180px] h-[50px] rounded-[12px] text-white mt-5">
              {startSubsection.getStarted?.cta.label}
            </button>
          </div>
        )}

        <img
          src={rightImage}
          alt=""
          className="hidden md:block absolute top-0 right-0 h-full w-[160px] xl:w-auto object-cover"
        />
      </div>

      {/* === NEWSLETTER SECTION === */}
      <div className="px-4 sm:px-6 md:px-[47px] font-[Manrope] lg:px-[77px] xl:px-[127px] pt-10 md:pt-[104px] pb-10 md:pb-[120px] text-center">
        <p className="text-[24px] text-[#2563EB] font-bold">
          {newsletterSubsection.title}
        </p>
        <p className="text-[#252B42] font-bold text-[18px] md:text-[24px] max-w-[617px] mx-auto">
          {newsletterSubsection.shortDescription}
        </p>
        <p className="text-[#737373] text-[14px] md:text-base max-w-[402px] mx-auto mt-2.5">
          {newsletterSubsection.description}
        </p>

        {/* Form */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full md:w-[500px] h-[50px] bg-[#F9F9F9] border border-[#E8E8E8] rounded-[10px] rounded-r-[0px] pl-4 text-[#949494] focus:outline-none"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full md:w-[117px] h-[50px] bg-[#2563EB] text-white rounded-[10px] rounded-l-[0px] mt-3 md:mt-0"
          >
            {loading ? "..." : "Subscribe"}
          </button>
        </div>

        {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
      </div>
    </>
  );
};

export default StartAndNewsletter;
