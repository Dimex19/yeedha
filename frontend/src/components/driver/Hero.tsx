import { useState } from "react";
import Rectangle41 from "../../assets/images/Rectangle41.png";
import type { BusinessHeroBlock } from "../../utils/types/drivers";
import { joinDriverCommunity } from "../../utils/loaders";

const Hero = ({ heading, description, cta }: BusinessHeroBlock) => {
  const [activeButton, setActiveButton] = useState<string>("e-hailing");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (phoneNumber.trim().length < 10) {
      setMessage("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await joinDriverCommunity(activeButton, phoneNumber);

      if (!res) throw new Error();

      setMessage("🎉 You have successfully joined the community!");
      setPhoneNumber("");
    } catch (err) {
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="relative font-[Manrope] w-full">
      <div className="relative w-full">
        <img
          src={Rectangle41}
          alt="Hero Image"
          className="w-full h-[750px] sm:h-[800px] md:h-[900px] lg:h-[850px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />

        <div className="absolute inset-0 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start text-white px-6 sm:px-10 md:px-16 lg:px-[106px] top-[15%] lg:top-[28%] gap-10">
          
          {/* LEFT TEXT */}
          <div className="max-w-full lg:max-w-[50%] text-center lg:text-left">
            <h1 className="text-[24px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-bold leading-tight mb-4">
              {heading}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-200">
              {description}
            </p>
            <button className="w-[180px] sm:w-[210px] h-[50px] sm:h-[55px] bg-[#2563EB] text-[16px] sm:text-[18px] rounded-[12px] hover:bg-[#1e4fd8] transition">
              {cta.label}
            </button>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white text-black rounded-[20px] p-5 sm:p-8 md:p-10 w-full max-w-[480px] font-semibold text-center border border-[#DEE8FF] shadow-md">
            <p className="text-[20px] sm:text-[22px] md:text-[25px] mb-4 sm:mb-6">
              Join our community of drivers
            </p>
            <p className="text-[14px] sm:text-[16px] mb-4">
              Select type of driver you are
            </p>

            {/* Driver Type Buttons */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 text-[14px] sm:text-[16px] font-medium text-[#2563EB]">
              {["e-hailing", "car-pool", "shuttle", "freelance"].map((type) => (
                <button
                  key={type}
                  onClick={() => handleButtonClick(type)}
                  className={`h-[55px] md:h-[60px] rounded-[10px] transition ${
                    activeButton === type
                      ? "bg-[#2563EB] text-white"
                      : "bg-[#F5F9FE] text-[#2563EB]"
                  }`}
                >
                  {type === "e-hailing"
                    ? "E-Hailing Driver"
                    : type === "car-pool"
                    ? "Car Pool Driver"
                    : type === "shuttle"
                    ? "Shuttle Driver"
                    : "Freelance Driver"}
                </button>
              ))}
            </div>

            {/* Phone Input */}
            <div className="text-left font-medium text-[14px] mb-2">
              Phone Number
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-[15px] border border-[#E8E8E8] bg-[#F9F9F9] py-[14px] px-[15px] rounded-[10px] text-[#555]">
                +234
              </div>
              <input
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full text-[15px] border border-[#E8E8E8] bg-[#F9F9F9] py-[14px] px-[15px] rounded-[10px] placeholder:text-[#949494]"
                placeholder="9060123456"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full h-[55px] bg-[#2563EB] rounded-[14px] text-white text-[18px] hover:bg-[#1e4fd8] transition"
            >
              {loading ? "..." : "Join Community"}
            </button>

            {message && (
              <p className="mt-3 text-sm text-gray-700">{message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
