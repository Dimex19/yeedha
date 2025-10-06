// import React from "react";
import { Phone,  } from "lucide-react";
import { FaWhatsapp as MessageCircle, } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const mechanics = [
  {
    name: "AutoFix Limited",
    location: "Victoria Island, Lagos",
    category: "Engine & Transmission",
    availability: "Available Now",
  },
  {
    name: "AutoFix Limited",
    location: "Victoria Island, Lagos",
    category: "Engine & Transmission",
    availability: "Available Now",
  },
  {
    name: "AutoFix Limited",
    location: "Victoria Island, Lagos",
    category: "Engine & Transmission",
    availability: "Available Now",
  },
  {
    name: "AutoFix Limited",
    location: "Victoria Island, Lagos",
    category: "Engine & Transmission",
    availability: "Available Now",
  },
];

export default function FindMechanic() {
  return (
    <div className="bg-gray-50 py-[59px] px-4 md:px-[127px] font-[Manrope]">
      <div className="text-center mb-8">
        <h1 className="text-[35px] font-semibold text-blue-600">
          Find a Mechanic You Can Trust
        </h1>
        <p className="text-[#828282] text-[20px] font-medium mt-2">
          Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh neque et nullam. <br />
          Ut maecenas consequat habitasse.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-[#F5F9FE] flex flex-wrap justify-center gap-3 md:gap-4 p-4 mb-8 mx-auto">
        <div className="relative">
            <select className="appearance-none border border-gray-200 rounded-xl w-[283px] h-[57px] bg-white px-4 py-2  focus:outline-none text-[#828282] text-[16.23px]">
              <option className="">Select Location</option>
            </select>
            <p className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-4 text-gray-500 pointer-events-none"><IoIosArrowDown/></p>
        </div>
        <div className="relative">
            <select className="appearance-none border border-gray-200 rounded-xl w-[283px] h-[57px] bg-white px-4 py-2  focus:outline-none text-[#828282] text-[16.23px]">
              <option className="">Specialisation</option>
            </select>
            <p className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-4 text-gray-500 pointer-events-none"><IoIosArrowDown/></p>
        </div>
        <div className="relative">
            <select className="appearance-none border border-gray-200 rounded-xl w-[283px] h-[57px] bg-white px-4 py-2  focus:outline-none text-[#828282] text-[16.23px]">
              <option className="">Availability</option>
            </select>
            <p className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-4 text-gray-500 pointer-events-none"><IoIosArrowDown/></p>
        </div>
        <button className="bg-blue-600 text-white rounded-xl w-[193px] px-6 py-2 font-medium hover:bg-blue-700 transition">
          Search
        </button>
      </div>

      {/* Mechanics List */}
      <div className="space-y-4">
        {mechanics.map((m, i) => (
          <div
            key={i}
            className="bg-white border-[#D8E9FF] rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between border hover:shadow-md transition"
          >
            <div>
              <h2 className="text-gray-800 font-semibold">{m.name}</h2>
              <p className="text-gray-500 text-sm">{m.location}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs bg-[#E2ECFF] text-[#2563EB] px-[15px] py-1 rounded-[40px] border border-blue-100">
                  {m.category}
                </span>
                <span className="text-xs border-[#E2ECFF] text-[#2563EB] px-[15px] py-1 rounded-[40px] border">
                  {m.availability}
                </span>
              </div>
            </div>

            <div className="flex gap-3 mt-4 md:mt-0">
              <button className="flex items-center gap-2 bg-[#2563EB] text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                <Phone className="w-4 h-4" /> Phone Call
              </button>
              <button className="flex items-center gap-2 bg-[#2563EB] text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-600 transition">
                <MessageCircle className="w-6 h-6" /> Whatsapp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
