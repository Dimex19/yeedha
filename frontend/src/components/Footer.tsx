import Logo from '../assets/images/yeedha_logo.png'
import AppStore from '../assets/icons/apple.png'
import GooglePlay from '../assets/icons/playstore.png'
import Huawei from '../assets/icons/huawei.png'
import Facebook from '../assets/icons/bxl-facebook.png'
import Instagram from '../assets/icons/instagram-logo.png'
import Youtube from '../assets/icons/youtube-logo.png'
import Twitter from '../assets/icons/twitter.png'
import Emergency from '../assets/icons/emergency.png'
import type { LinkProps, ImageWithAltProps } from '../utils/types/types'

interface FooterProps {
  data?: {
    contactEmail: string;
    emergency: string;
    yeedhaDescription: string;
    quickLinks: LinkProps[];
    newsLinks: LinkProps[];
    productsLinks: LinkProps[];
    logo: ImageWithAltProps;
    socialIcons: ImageWithAltProps[];
    downloadStore: ImageWithAltProps[];
  }
}

const Footer = ({data}: FooterProps) => {
  if (!data) return null;
  const { contactEmail, emergency, yeedhaDescription, quickLinks, newsLinks, productsLinks } = data;

  return (
    <>
      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-x-[120px] px-6 sm:px-10 lg:px-[104px] py-10">
        {/* LEFT SECTION */}
        <div className="flex-1">
          <img src={Logo} alt="Yeedha logo" className="w-[150px] sm:w-[180px]" />
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#6C737F] mt-[15px] mb-[30px] max-w-[333px]">
            {yeedhaDescription}
          </p>

          <div>
            <p className="text-[18px] sm:text-[20px] font-semibold mb-2">Download Yeedha</p>
            <div className="flex flex-wrap gap-[10px]">
              {/* App Store */}
              <div className="flex gap-1 font-[Manrope] items-center w-[100px] px-[8px] py-[5px] h-[27px] bg-[#E5E5E5] rounded-[57px]">
                <img src={AppStore} alt="App Store" />
                <div>
                  <p className="text-[6px] leading-[6px]">Download on the</p>
                  <p className="text-[10px] font-bold leading-[8px]">App Store</p>
                </div>
              </div>

              {/* Google Play */}
              <div className="flex gap-1 font-[Manrope] items-center w-[110px] px-[8px] py-[5px] h-[27px] bg-[#E5E5E5] rounded-[57px]">
                <img src={GooglePlay} alt="Google Play" />
                <div>
                  <p className="text-[6px] leading-[6px]">GET IT ON</p>
                  <p className="text-[10px] font-bold leading-[8px]">Google Play</p>
                </div>
              </div>

              {/* Huawei App Gallery */}
              <div className="flex gap-1 font-[Manrope] items-center w-[110px] px-[8px] py-[5px] h-[27px] bg-[#E5E5E5] rounded-[57px]">
                <img src={Huawei} alt="Huawei Gallery" />
                <div>
                  <p className="text-[6px] leading-[6px]">EXPLORE IT ON</p>
                  <p className="text-[10px] font-bold leading-[8px]">App Gallery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LINKS SECTION */}
        <div className="flex flex-wrap justify-between gap-y-10 lg:gap-x-[80px] font-[Manrope] font-semibold text-[14px] sm:text-[15px]">
          {/* Quick Links */}
          <div className="flex flex-col gap-y-[12px]">
            <p className="text-[#2563EB] text-[16px]">Quick Links</p>
            {quickLinks.map((link, index) => (
              <a href={link.href} key={index}>{link.label}</a>
            ))}
            {/* <a href="#">Rider</a>
            <a href="#">Driver</a>
            <a href="#">Business</a>
            <a href="#">Benefits</a>
            <a href="#">CNG</a> */}
          </div>

          {/* News & Contact */}
          <div className="flex flex-col gap-y-[12px]">
            <p className="text-[#2563EB] text-[16px]">News</p>
            {newsLinks.map((link, index) => (
              <a href={link.href} key={index}>{link.label}</a>
            ))}
            {/* <a href="#">Blog</a>
            <a href="#">FAQ</a>
            <a href="#">Yeedha Media</a> */}
            <p className="text-[#2563EB] text-[16px] mt-2">Contact</p>
            <a href="#">{contactEmail}</a>
          </div>

          {/* Products & Social */}
          <div className="flex flex-col gap-y-[12px]">
            <p className="text-[#2563EB] text-[16px]">Products</p>
            {productsLinks.map((link, index) => (
              <a href={link.href} key={index}>{link.label}</a>
            ))}
            {/* <a href="#">Drivers App</a>
            <a href="#">Passengers App</a>
            <a href="#">Business Owners App</a> */}
            <p className="text-[#2563EB] text-[16px] mt-2">Social</p>
            <div className="flex gap-x-[20px] mt-2">
              <img src={Facebook} alt="Facebook" className="w-5 h-5" />
              <img src={Instagram} alt="Instagram" className="w-5 h-5" />
              <img src={Youtube} alt="YouTube" className="w-5 h-5" />
              <img src={Twitter} alt="Twitter" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="font-[Manrope] bg-[#F8FAFF] pt-[60px] pb-[60px] px-6 sm:px-10 md:px-[100px] lg:px-[175px] rounded-t-[50%]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-6">
          <p className="text-[#0A142F] text-[13px] sm:text-[14px]">
            © 2025 Yeedha. All rights reserved.
          </p>

          {/* Emergency contact */}
          <div className="text-center md:text-left">
            <p className="text-[12px]">Emergency Contact</p>
            <div className="flex justify-center md:justify-start items-center gap-x-[8px]">
              <img src={Emergency} alt="Emergency icon" className="w-[20px]" />
              <p className="text-[15px] sm:text-[16px]">{emergency}</p>
            </div>
          </div>

          {/* Bottom links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[14px] sm:text-[15px]">
            <a href="#">Home</a>
            <a href="#">FAQ</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
