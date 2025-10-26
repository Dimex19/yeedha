import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import Logo from "../assets/images/yeedha_logo.png";
import type { ImageWithAltProps, LinkProps } from '../utils/types';


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

  // Handle scroll behavior properly
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic styles on scroll
  const headerBg = isScrolled ? "bg-white shadow-md" : "bg-transparent";
  // const navLinkColor = isScrolled ? "text-black" : `text-[${linkColor}]`;
  const logoFilter = isScrolled || logoColor === "blue" ? "none" : "brightness(0) invert(1)";
  const hamburgerColor = isScrolled ? "#2563EB" : linkColor;

  if (!data) return null;

  const { logo, links, cta } = data;

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
        <nav className={`flex gap-[30px] text-[16px] font-medium`} style={{ color: isScrolled ? "black" : linkColor }}>
          
          {links.map((item)=> (
              <Link to={item.href} className="hover:text-[#2563EB] transition-colors"  key={item.id}>
                {item.label}
              </Link>
            ))}
          
          {/* <Link to="/driver" className="hover:text-[#2563EB] transition-colors">
            Drivers
          </Link>
          <Link to="/rider" className="hover:text-[#2563EB] transition-colors">
            Riders
          </Link>
          <Link to="/business" className="hover:text-[#2563EB] transition-colors">
            Business
          </Link>
          {/* <Link to="/benefits" className="hover:text-[#2563EB] transition-colors">
            Benefits
          </Link> 
          <HashLink to="#rideAndEarn" className="hover:text-[#2563EB] transition-colors">
            Benefits
          </HashLink>
          <Link to="/faq" className="hover:text-[#2563EB] transition-colors">
            FAQ
          </Link>
          <Link to="/about" className="hover:text-[#2563EB] transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-[#2563EB] transition-colors">
            Contact
          </Link> */}
        </nav>

        {/* Button */}
        <button
          className="w-[100px] h-[42px] rounded-[7px] text-[16px] font-medium transition-transform hover:scale-105"
          style={{
            backgroundColor: buttonBg,
            color: buttonText,
          }}
        >
          Join Us
        </button>
      </header>

      {/* Mobile Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-5 lg:hidden transition-all duration-300 ${
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
            {links.map((item)=> (
              <Link to={item.href} key={item.id} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            {/* <Link to="/driver" onClick={() => setMenuOpen(false)}>
              Drivers
            </Link>
            <Link to="/rider" onClick={() => setMenuOpen(false)}>
              Riders
            </Link>
            <Link to="/business" onClick={() => setMenuOpen(false)}>
              Business
            </Link>
            <HashLink to="#rideAndEarn" onClick={() => setMenuOpen(false)}>
              Benefits
            </HashLink>
            <Link to="/faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link> */}
            <button
              className="px-3 py-[6px] text-[15px] font-medium rounded-[7px]"
              style={{
                backgroundColor: buttonBg,
                color: buttonText,
              }}
            >
              Join Us
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
