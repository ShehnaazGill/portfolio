import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#F8FBFF] flex items-center justify-center px-6">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-10 relative flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h4 className="text-gray-600 text-lg">Hello,</h4>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            I'm <span className="text-black">John Wick</span>
          </h1>
          <h2 className="text-2xl text-[#FF6B6B] font-semibold mt-2">
            Frontend Developer
          </h2>
          <p className="text-gray-500 mt-2">From United Kingdom</p>
          
          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-[#FF6B6B] text-white rounded-lg font-semibold shadow-md hover:bg-[#FF4D4D] transition">
            Hire Me
          </button>
        </div>

        {/* Right Content (Profile Image) */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center relative">
          <img
            src="https://source.unsplash.com/300x300/?portrait"
            alt="Profile"
            className="w-60 h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
