import React from "react";
import FooterImage from "../assets/images/footer-image.png";
import FooterLogo from "../assets/images/footer-logo.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#E9F0E6]">
        <img className="w-8/12 m-auto " src={FooterImage} alt="" />
      </div>
      <div className="px-20 md:px-10 xs:px-4 pt-10 bg-[#212549] text-white">
        <p className="font-helveticaBold text-lg mb-2">KONTAKTA OSS</p>
        <div className="flex flex-wrap gap-y-5">
          <div className="w-3/12 md:w-6/12 xs:w-full">
            <p className="font-helveticaBold">Maila</p>
            <a href="mailto:hej@porslinsimperiet.se" className="italic">
              hej@porslinsimperiet.se
            </a>
          </div>
          <div className="w-3/12 md:w-6/12 xs:w-full">
            <p className="font-helveticaBold">Ringa</p>
            <a href="tel:073-043 79 21">073-043 79 21</a>
          </div>
          <div className="w-3/12 md:w-6/12 xs:w-full">
            <p className="font-helveticaBold">Instagram</p>
            <a href="/">porslinsimperiet</a>
          </div>
          <div className="w-3/12 md:w-6/12 xs:w-full">
            <p className="font-helveticaBold">Tradera</p>
            <a href="/">porslinsimperiet</a>
          </div>
        </div>
        <div className="pt-10 pb-8">
          <img className="w-[70px] mx-auto" src={FooterLogo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
