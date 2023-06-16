import React from "react";
import MainSection from "../assets/images/main-section.png";
import ThinkingEmoji from "../assets/images/thinking-emoji.png";

const Main = () => {
  return (
    <div>
      <div
        className={`bg-[url${MainSection}] h-screen pt-44 md:pt-32`}
        style={{
          background: `url(${MainSection})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
        }}
      >
        <div className="text-center">
          <h1 className="font-helveticaBoldOblique text-3xl md:text-2xl mb-4 xs:text-xl">
            KÖPER, SÄLJER & VÄRDERAR!
          </h1>
          <p className="font-helveticaBold text-lg md:text-base">
            PORSLIN • RETRO • MODELLBILAR
          </p>
        </div>
        <div className="px-20 md:px-0 absolute z-10 bottom-0 md:-bottom-16 xs:-bottom-32 w-full ">
          <div className="flex flex-wrap gap-y-2 xs:gap-y-4 bg-[#212549] text-white px-7 md:px-4 py-3">
            <div className="w-3/12 md:w-6/12 xs:w-full flex items-center gap-3">
              <img className="w-7" src={ThinkingEmoji} alt="" />
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="w-3/12 md:w-6/12 xs:w-full flex items-center gap-3">
              <img className="w-7" src={ThinkingEmoji} alt="" />
              <p>Lorem ipsum dolor.</p>
            </div>
            <div className="w-3/12 md:w-6/12 xs:w-full flex items-center gap-3">
              <img className="w-7" src={ThinkingEmoji} alt="" />
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="w-3/12 md:w-6/12 xs:w-full flex items-center gap-3">
              <img className="w-7" src={ThinkingEmoji} alt="" />
              <p>Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
