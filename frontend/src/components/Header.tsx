import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import Logo from "../assets/images/yeedha_logo.png";
import type { ImageWithAltProps, LinkProps } from '../utils/types/types';
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface HeaderProps {
  logoColor?: string;
  linkColor?: string;
  buttonBg?: string;
  buttonText?: string;
  data?: {
    logo: ImageWithAltProps;
    links: LinkProps[];
    cta: LinkProps;
  };
}

const Header = ({
  logoColor = "blue",
  linkColor = "white",
  buttonBg = "#2563EB",
  buttonText = "white", 
  data
}: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [benefitsOpen, setBenefitsOpen] = useState(false);
  const navigate = useNavigate();
  // Handle scroll behavior properly
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const benefitsLinks = [
  { label: "Health Insurance", href: "/health-insurance" },
  { label: "Auto Services", href: "/auto-services" },
  { label: "CNG Conversion", href: "/cng-conversion" },
];
  // Dynamic styles on scroll
  const headerBg = isScrolled ? "bg-white shadow-md" : "bg-transparent";
  // const navLinkColor = isScrolled ? "text-black" : `text-[${linkColor}]`;
  const logoFilter = isScrolled || logoColor === "blue" ? "none" : "brightness(0) invert(1)";
  const hamburgerColor = isScrolled ? "#2563EB" : linkColor;
  const buttonBgColor = isScrolled ? "#2563EB" : buttonBg;
  const buttonTextColor = isScrolled ? "white" : buttonText;
  if (!data) return null;

  const { 
    // logo, 
    links,
    //  cta 
    } = data;

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className={`fixed top-0 z-50 w-full hidden lg:flex items-center justify-between px-10 xl:px-[99px] py-[25px] font-[Manrope] transition-all duration-300 ${headerBg}`}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src={Logo}
            alt="Yeedha Logo"
            className="w-[130px] transition-all duration-300"
            style={{ filter: logoFilter }}
          />
        </Link>

        {/* Nav Links */}
        <nav
          className="flex gap-[30px] text-[16px] font-medium"
          style={{ color: isScrolled ? "black" : linkColor }}
        >
          {links.map((item) => {

            if (item.label === "Benefits") {
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setBenefitsOpen(true)}
                  onMouseLeave={() => setBenefitsOpen(false)}
                >
                  <span className="flex cursor-pointer hover:text-[#2563EB]">
                    {item.label} <ChevronDown className="ml-1 w-4"/>
                  </span>

                  {benefitsOpen && (
                    <div className="absolute top-[30px] left-0 bg-white shadow-lg rounded-md py-2 w-[200px] text-black">
                      {benefitsLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                to={item.href}
                key={item.id}
                className="hover:text-[#2563EB]"
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderBottom: "3px solid #2563EB",
                        color: "#2563EB",
                        paddingBottom: "2px",
                      }
                    : {}
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Button */}
        <button
          className="w-[120px] h-[42px] rounded-[7px] text-[16px] font-medium transition-transform hover:scale-105"
          style={{
            backgroundColor: buttonBgColor,
            color: buttonTextColor,
          }}
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </header>

      {/* Mobile Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 md:px-5 lg:hidden transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/">
            <img
              src={Logo}
              alt="Yeedha Logo"
              className="w-[110px] transition-all duration-300"
              style={{ filter: logoFilter }}
            />
          </Link>

          <div className="flex items-center gap-3">
            

            {/* Hamburger */}
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-8 h-8 flex flex-col justify-center items-center gap-1 cursor-pointer"
            >
              <span
                className={`w-6 h-[2px] transition-all ${
                  menuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
                style={{ backgroundColor: hamburgerColor }}
              ></span>
              <span
                className={`w-6 h-[2px] transition-all ${
                  menuOpen ? "opacity-0" : ""
                }`}
                style={{ backgroundColor: hamburgerColor }}
              ></span>
              <span
                className={`w-6 h-[2px] transition-all ${
                  menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
                style={{ backgroundColor: hamburgerColor }}
              ></span>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4 py-4 text-[16px] font-medium text-[#2563EB] bg-white">
            {links.map((item) => {
              if (item.label === "Benefits") {
                return (
                  <div key={item.id} className="flex flex-col items-center w-full">
                    <button
                      onClick={() => setBenefitsOpen(!benefitsOpen)}
                      className="font-medium"
                    >
                      Benefits <ChevronDown/>
                    </button>

                    {benefitsOpen && (
                      <div className="flex flex-col gap-2 mt-2">
                        {benefitsLinks.map((link) => (
                          <NavLink
                            key={link.href}
                            to={link.href}
                            onClick={() => {
                              setMenuOpen(false);
                              setBenefitsOpen(false);
                            }}
                            className="text-sm"
                          >
                            {link.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  to={item.href}
                  key={item.id}
                  onClick={() => setMenuOpen(false)}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          borderBottom: "3px solid #2563EB",
                          color: "#2563EB",
                          paddingBottom: "2px",
                        }
                      : {}
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
            <button
              className="px-3 py-[6px] text-[15px] font-medium rounded-[7px]"
              style={{
                backgroundColor: buttonBg,
                color: buttonText,
              }}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
