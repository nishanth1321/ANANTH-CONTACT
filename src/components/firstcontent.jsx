import React from "react";
import YearsOfExcellence from "./years-of-excellence";
import logo from "../assets/ananthtextile.png";

const MainContent = () => {
  return (
    <div className="relative w-full max-w-4xl p-6 bg-transparent rounded-lg shadow-lg backdrop-blur-sm md:p-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="absolute top-0 p-4 left-2">
            <img
              src={logo}
              alt="Ananth Textiles Logo"
              className="hidden w-24 h-9 lg:block lg:w-32 lg:h-11"
            />
          </div>

          <div className="flex justify-center mb-4 lg:hidden">
            <img src={logo} alt="Ananth Textiles Logo" className="h-16 w-46" />
          </div>
          <h1 className="hidden mt-8 mb-4 text-3xl font-extrabold text-center text-red-600 md:block">
            ANANTH TEXTILES Agencies
          </h1>

          <div className="p-4 mb-10 text-white bg-red-500 rounded-lg shadow-xl shadow-red-300">
            <p className="text-lg font-semibold text-center md:text-center">
              South india's Leading Textile marketing Agencies.
            </p>
          </div>

          <p className="text-lg text-justify text-gray-700 md:text-left">
            At Ananth Textiles Agencies, we take pride in our deep-rooted tradition of
            sourcing and providing high-quality sarees. Our collection reflects
            the rich heritage of
          </p>
          <p className="pt-3 text-lg font-bold text-center text-red-600"> Tamil Nadu, Kerala, Karnataka, Andhra</p>
        </div>

        <div className="flex items-center justify-center">
          <YearsOfExcellence />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
