import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp as MessageCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { getMechanicDataSettings } from "../../utils/loaders";
import { getStrapiMedia } from "../../utils/StrapiImage";

interface Mechanic {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  whatsappNumber: string;
  availability: string;
  tag?: string;
  location?: {
    name: string;
    state: string;
    country: string;
  };
  image?: {
    url: string;
  };
  specializations?: {
    name: string;
    description: string;
  }[];
}

export default function FindMechanic() {
  const [mechanics, setMechanics] = useState<Mechanic[]>([]);
  const [filteredMechanics, setFilteredMechanics] = useState<Mechanic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Filters
  const [locationFilter, setLocationFilter] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  const [locations, setLocations] = useState<string[]>([]);
  const [specializations, setSpecializations] = useState<string[]>([]);
  const [availabilities, setAvailabilities] = useState<string[]>([]);

  useEffect(() => {
    const fetchMechanics = async () => {
      try {
        const res = await getMechanicDataSettings();
        const mechanicData: Mechanic[] = res?.data || [];

        // Extract unique filter values
        const locs = [
          ...new Set(
            mechanicData
              .map((m) => m.location?.state)
              .filter((loc): loc is string => Boolean(loc))
          ),
        ];
        const specs = [
          ...new Set(
            mechanicData
              .flatMap((m) => m.specializations?.map((s) => s.description))
              .filter((s): s is string => Boolean(s))
          ),
        ];
        const avails = [
          ...new Set(
            mechanicData
              .map((m) => m.availability)
              .filter((a): a is string => Boolean(a))
          ),
        ];

        setLocations(locs);
        setSpecializations(specs);
        setAvailabilities(avails);
        setMechanics(mechanicData);
        setFilteredMechanics(mechanicData);
      } catch (error) {
        console.error("Error fetching mechanics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMechanics();
  }, []);

  // Handle Search Button
  const handleSearch = () => {
    const filtered = mechanics.filter((m) => {
      const matchesLocation = locationFilter
        ? m.location?.state === locationFilter
        : true;
      const matchesSpecialization = specializationFilter
        ? m.specializations?.some((s) => s.description === specializationFilter)
        : true;
      const matchesAvailability = availabilityFilter
        ? m.availability === availabilityFilter
        : true;

      return matchesLocation && matchesSpecialization && matchesAvailability;
    });

    setFilteredMechanics(filtered);
  };

  // ✅ Handle Clear Filters Button
  const handleClearFilters = () => {
    setLocationFilter("");
    setSpecializationFilter("");
    setAvailabilityFilter("");
    setFilteredMechanics(mechanics);
  };

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
        {/* Location Filter */}
        <div className="relative">
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="appearance-none border border-gray-200 rounded-xl w-[283px] h-[57px] bg-white px-4 py-2 focus:outline-none text-[#828282] text-[16.23px]"
          >
            <option value="">Select Location</option>
            {locations.map((loc, i) => (
              <option key={i} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          <p className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-4 text-gray-500 pointer-events-none">
            <IoIosArrowDown />
          </p>
        </div>

        {/* Specialization Filter */}
        <div className="relative">
          <select
            value={specializationFilter}
            onChange={(e) => setSpecializationFilter(e.target.value)}
            className="appearance-none border border-gray-200 rounded-xl w-[283px] h-[57px] bg-white px-4 py-2 focus:outline-none text-[#828282] text-[16.23px]"
          >
            <option value="">Specialisation</option>
            {specializations.map((spec, i) => (
              <option key={i} value={spec}>
                {spec}
              </option>
            ))}
          </select>
          <p className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-4 text-gray-500 pointer-events-none">
            <IoIosArrowDown />
          </p>
        </div>

        {/* Availability Filter */}
        <div className="relative">
          <select
            value={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.value)}
            className="appearance-none border border-gray-200 rounded-xl w-[283px] h-[57px] bg-white px-4 py-2 focus:outline-none text-[#828282] text-[16.23px]"
          >
            <option value="">Availability</option>
            {availabilities.map((a, i) => (
              <option key={i} value={a}>
                {a}
              </option>
            ))}
          </select>
          <p className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-4 text-gray-500 pointer-events-none">
            <IoIosArrowDown />
          </p>
        </div>

        {/* Search and Clear Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white rounded-xl w-[150px] px-6 py-2 font-medium hover:bg-blue-700 transition"
          >
            Search
          </button>

          {/* ✅ Clear Filter Button */}
          <button
            onClick={handleClearFilters}
            className="bg-white text-[#2563EB] rounded-xl w-[150px] px-6 py-2 font-medium border transition"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Mechanics List */}
      {loading ? (
        <p className="text-center text-gray-500">Loading mechanics...</p>
      ) : filteredMechanics.length > 0 ? (
        <div className="space-y-4">
          {filteredMechanics.map((m) => (
            <div
              key={m.id}
              className="bg-white border-[#D8E9FF] rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between border hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                {/* {m.image && (
                  <img
                    src={getStrapiMedia(m.image.url) ?? undefined}
                    alt={m.name}
                    className="w-16 h-16 object-cover rounded-full border border-blue-100"
                  />
                )} */}
                <div>
                  <h2 className="text-gray-800 font-semibold">{m.name}</h2>
                  <p className="text-gray-500 text-sm">{m.address}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {m.specializations?.map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#E2ECFF] text-[#2563EB] px-[15px] py-1 rounded-[40px] border border-blue-100"
                      >
                        {spec.name}
                      </span>
                    ))}
                    {m.availability && (
                      <span className="text-xs border-[#E2ECFF] text-[#2563EB] px-[15px] py-1 rounded-[40px] border">
                        {m.availability}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-4 md:mt-0">
                {m.phoneNumber && (
                  <a
                    href={`tel:${m.phoneNumber}`}
                    className="flex items-center gap-2 bg-[#2563EB] text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition"
                  >
                    <Phone className="w-4 h-4" /> Phone Call
                  </a>
                )}
                {m.whatsappNumber && (
                  <a
                    href={`https://wa.me/${m.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#2563EB] text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-600 transition"
                  >
                    <MessageCircle className="w-6 h-6" /> Whatsapp
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No mechanics found.</p>
      )}
    </div>
  );
}
