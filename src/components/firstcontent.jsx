import React from "react";
import YearsOfExcellence from "./years-of-excellence"; // Import the YearsOfExcellence component
import logo from "../assets/ananthtextile.png"; // Adjust the path if necessary

const MainContent = () => {
  return (
    <div className="relative w-full max-w-4xl p-6 bg-transparent rounded-lg shadow-lg backdrop-blur-sm md:p-12">
      {/* Grid Layout: Two Columns */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Side Content */}
        <div className="flex flex-col justify-center">
          {/* Top-left Logo */}
          <div className="absolute top-0 p-4 left-2">
            <img
              src={logo}
              alt="Ananth Textiles Logo"
              className="hidden w-24 h-9 lg:block lg:w-32 lg:h-11" // Visible only on lg screens and above
            />
          </div>

          {/* Mobile Logo */}
          <div className="flex justify-center mb-4 lg:hidden">
            <img
              src={logo}
              alt="Ananth Textiles Logo"
              className="h-12 w-36" // Visible only on mobile screens
            />
          </div>

          {/* Heading - Hidden on Mobile */}
          <h1 className="hidden mt-8 mb-4 text-3xl font-extrabold text-center text-red-600 md:block">
            ANANTH TEXTILES AGENCY
          </h1>

          <div className="p-4 mb-10 text-white bg-red-500 rounded-lg shadow-xl shadow-red-300">
            <p className="text-lg font-semibold text-center md:text-left">
              Premium sarees directly sourced from the finest Tamil Nadu
              manufacturers.
            </p>
          </div>

          {/* Tradition and Experience Description */}
          <p className="text-lg text-center text-gray-700 md:text-left">
            At Ananth Textiles, we take pride in our deep-rooted tradition of
            sourcing and providing high-quality sarees. Our collection reflects
            the rich heritage of Tamil Nadu.
          </p>
        </div>

        {/* Right Side: Years of Excellence */}
        <div className="flex items-center justify-center">
          <YearsOfExcellence />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
