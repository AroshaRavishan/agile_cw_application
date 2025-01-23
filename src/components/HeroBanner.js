import React from "react";
import { FaSearch } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[80vh]"
      style={{
        backgroundImage: `url('https://godare.net/wp-content/uploads/2024/11/bg-banner.png')`,
      }}
    >
      <div className="absolute inset-0 bg-black-900 bg-opacity-70"></div>
      <div className="relative z-10 flex justify-between h-full container text-white">
        <div className="w-1/2 text-left mt-25">
          <p>As a wise man once said,</p>
          <h1 className="text-[24px] lg:text-[36px] font-bold mb-4">
            One discovers opportunity, trust, and the wheels that drive life's
            adventures.
          </h1>
          <div className="flex items-center justify-start w-full mt-8 rounded-full relative w-4/5">
            <input
              type="text"
              className="p-5 rounded-full focus:outline-none w-full"
              placeholder="Search now"
            />
            <button className="absolute right-2 bg-[#474243] hover:bg-[#5f5e5f] text-white font-medium px-4 py-2 rounded-full transition-colors flex gap-3 items-center">
              Search now
              <button className="">
                <FaSearch className="w-5 h-5" />
              </button>
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          {/* Empty for now, could add an image or other content */}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
