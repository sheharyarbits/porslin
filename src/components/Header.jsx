import React, { useState } from "react";
import MainLogo from "../assets/images/main-logo.png";
import Hamburger from "../assets/images/hamburger.png";
import CloseIcon from "../assets/icons/cross.png";
import FooterLogo from "../assets/images/footer-logo.png";

const Header = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <div className="px-12 xs:px-4 py-4 fixed w-full z-50">
      <div className="flex items-center justify-between">
        <div>
          <img className="h-16" src={MainLogo} alt="" />
        </div>
        <div>
          <img
            className="h-9 cursor-pointer"
            src={Hamburger}
            alt=""
            onClick={() => setMenu(true)}
          />
        </div>
      </div>
      {menu && (
        <div className="absolute top-0 right-0 px-12 xs:px-6 py-6 w-96 xs:w-full xs:h-screen z-50 bg-black text-white">
          <div className="flex items-center justify-between mb-8">
            <p className="text-3xl font-semibold">MENY</p>
            <img
              className="w-6 h-6 cursor-pointer"
              src={CloseIcon}
              alt="cross"
              onClick={() => setMenu(false)}
            />
          </div>
          <div>
            <ul>
              <li className="mb-2">Lorem, ipsum dolor.</li>
              <li className="mb-2">Lorem, ipsum dolor.</li>
              <li className="mb-2">Lorem, ipsum dolor.</li>
              <li className="mb-2">Lorem, ipsum dolor.</li>
            </ul>
          </div>
          <div className="hidden xs:block mt-5">
            <hr className="w-20" />
            <div className="text-sm mt-5">
              <div className="mb-5">
                <p className="font-helveticaBold">Maila</p>
                <a href="mailto:hej@porslinsimperiet.se" className="italic">
                  hej@porslinsimperiet.se
                </a>
              </div>
              <div className="mb-5">
                <p className="font-helveticaBold">Ringa</p>
                <a href="tel:073-043 79 21">073-043 79 21</a>
              </div>
            </div>
            <div className="mt-10">
              <img className="w-20 mx-auto" src={FooterLogo} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
