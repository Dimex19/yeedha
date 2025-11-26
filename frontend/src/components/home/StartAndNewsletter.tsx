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
            <p className="font-semibold text-[16px] sm:text-[24px] lg:text-[28px] text-[#2563EB] mb-3 leading-snug">
              {startSubsection.getStarted?.text}
            </p>
            <p className="text-[14px] text-[#333] mx-auto max-w-[80%] md:max-w-[60%] lg:w-[584px]">
              {startSubsection.getStarted?.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 md:mt-[55px]">
              <button className="bg-[#2563EB] w-full sm:w-[180px] h-[45px] rounded-[12px] text-white">
                Request Car Rescue
              </button>
              <button className="bg-[#2563EB] w-full sm:w-[180px] h-[45px] rounded-[12px] text-white">
                Find a Mechanic
              </button>
            </div>
          </div>
        ) : (
          <div className="relative z-10 mt-10 md:mt-[131px] px-4">
            <p className="font-semibold text-[20px] sm:text-[28px] md:text-[32px] text-[#2563EB]">
              {startSubsection.getStarted?.text}
            </p>
            <p className="text-[14px] text-[#333] mx-auto md:max-w-[60%] lg:w-[584px] mt-2">
              {startSubsection.getStarted?.description}
            </p>
            <button className="bg-[#2563EB] w-[180px] h-[50px] rounded-[12px] text-white mt-5">
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
      <div className="px-4 sm:px-6 md:px-[47px] lg:px-[77px] xl:px-[127px] pt-10 md:pt-[104px] pb-10 md:pb-[120px] text-center">
        <p className="text-[24px] text-[#2563EB] font-bold">
          {newsletterSubsection.title}
        </p>
        <p className="text-[#252B42] font-bold text-[18px] max-w-[617px] mx-auto">
          {newsletterSubsection.shortDescription}
        </p>
        <p className="text-[#737373] text-[14px] max-w-[452px] mx-auto mt-2.5">
          {newsletterSubsection.description}
        </p>

        {/* Form */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full md:w-[500px] h-[50px] bg-[#F9F9F9] border border-[#E8E8E8] rounded-t-[10px] md:rounded-l-[10px] pl-4 text-[#949494] focus:outline-none"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full md:w-[117px] h-[50px] bg-[#2563EB] text-white rounded-b-[10px] md:rounded-r-[10px] mt-3 md:mt-0"
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
