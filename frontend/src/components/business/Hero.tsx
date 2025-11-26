import { useState } from 'react';
import Rectangle41 from '../../assets/images/Rectangle41.png';
import type { BusinessHeroBlock } from "../../utils/types/drivers";
import { joinBusinessCommunity } from "../../utils/loaders";

const Hero = ({heading, description, cta}: BusinessHeroBlock) => {
  const [activeButton, setActiveButton] = useState<string>("fleet");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (phone.trim().length < 10) {
      setMessage("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await joinBusinessCommunity(activeButton, phone);

      if (!res) throw new Error();

      setMessage("🎉 You have successfully joined the community!");
      setPhone("");
    } catch (err) {
      setMessage("❌ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="relative font-[Manrope] w-full">
        <div className="relative w-full">
          <img
            src={Rectangle41}
            alt="Hero"
            className="w-full h-[750px] sm:h-[800px] md:h-[900px] lg:h-[850px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70"></div>

          <div className="absolute inset-0 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start px-6 sm:px-10 md:px-16 lg:px-[56px] top-[20%] lg:top-[28%] gap-10">
            
            {/* LEFT TEXT */}
            <div className="max-w-full lg:max-w-[50%] text-center lg:text-left">
              <p className="text-[24px] sm:text-[36px] text-white md:text-[44px] lg:text-[48px] font-bold leading-tight mb-4">
                {heading}
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-200">
                {description}
              </p>
              <button className="w-[180px] sm:w-[210px] text-white h-[50px] sm:h-[55px] bg-[#2563EB] rounded-[12px]">
                {cta.label}
              </button>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white text-black rounded-[20px] p-5 sm:p-8 xl:p-10 w-full max-w-[480px] font-semibold text-center border border-[#DEE8FF] shadow-md">
              <p className="text-[20px] sm:text-[22px] md:text-[25px] mb-4">Join our business community</p>
              <p className="text-[14px] sm:text-[16px] mb-4">Select your business type</p>

              {/* BUTTON GRID */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                <button
                  onClick={() => handleButtonClick("fleet")}
                  className={`h-[55px] rounded-[10px] ${
                    activeButton === "fleet" ? "bg-[#2563EB] text-white" : "bg-[#F5F9FE] text-[#2563EB]"
                  }`}
                >
                  Fleet Business
                </button>

                <button
                  onClick={() => handleButtonClick("shuttle")}
                  className={`h-[55px] rounded-[10px] ${
                    activeButton === "shuttle" ? "bg-[#2563EB] text-white" : "bg-[#F5F9FE] text-[#2563EB]"
                  }`}
                >
                  Shuttle Business
                </button>

                <button
                  onClick={() => handleButtonClick("rental")}
                  className={`h-[55px] col-span-2 rounded-[10px] ${
                    activeButton === "rental" ? "bg-[#2563EB] text-white" : "bg-[#F5F9FE] text-[#2563EB]"
                  }`}
                >
                  Car Rental Business
                </button>
              </div>

              {/* PHONE INPUT */}
              <p className="text-left font-medium text-[14px] mb-2">Phone Number</p>
              <div className="flex items-center gap-3 mb-6">
                <div className="px-4 py-3 bg-[#F9F9F9] border border-[#E8E8E8] rounded-[10px]">+234</div>
                <input
                  type="number"
                  placeholder="9060123456"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#E8E8E8] rounded-[10px]"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full h-[60px] bg-[#2563EB] text-white text-[18px] rounded-[14px]"
              >
                {loading ? "..." : "Join Community"}
              </button>

              {message && <p className="mt-3 text-sm">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
