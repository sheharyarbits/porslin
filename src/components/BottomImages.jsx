import React from "react";
import Image1 from "../assets/images/IMG_0783.png";
import Image2 from "../assets/images/IMG_0791.png";
import Image3 from "../assets/images/IMG_0519.png";
import Image4 from "../assets/images/IMG_0534.png";
import Image5 from "../assets/images/IMG_0787.png";
import Image6 from "../assets/images/IMG_0838.png";

const BottomImages = () => {
  return (
    <div className="bg-[#E9F0E6] py-12">
      <div className="flex flex-wrap">
        <div className="w-2/12 md:w-4/12 xs:w-6/12">
          <img className="w-full" src={Image1} alt="decoration" />
        </div>
        <div className="w-2/12 md:w-4/12 xs:w-6/12">
          <img className="w-full" src={Image2} alt="decoration" />
        </div>
        <div className="w-2/12 md:w-4/12 xs:w-6/12">
          <img className="w-full" src={Image3} alt="decoration" />
        </div>
        <div className="w-2/12 md:w-4/12 xs:w-6/12">
          <img className="w-full" src={Image4} alt="decoration" />
        </div>
        <div className="w-2/12 md:w-4/12 xs:w-6/12">
          <img className="w-full" src={Image5} alt="decoration" />
        </div>
        <div className="w-2/12 md:w-4/12 xs:w-6/12">
          <img className="w-full" src={Image6} alt="decoration" />
        </div>
      </div>
    </div>
  );
};

export default BottomImages;
