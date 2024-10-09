import React from "react";
import ParticlesComponent from "./particles"; // Import the ParticlesComponent for background
import MainContent from "./firstcontent";
import Contact from "./contact";
import SecondContent from "./secondcontent";
import Founder from "./founder";

const AnanthTextilesComponent = () => {
  return (
    <div className="relative min-h-screen mx-4 my-10 bg-white ">
      {/* Particles Background */}
      <ParticlesComponent />

      {/* Container for MainContent, SecondContent, and Contact stacked vertically */}
      <div className="flex flex-col items-center justify-center py-8 space-y-6">
        {/* Main Content */}
        <MainContent />

        {/* Founder */}
        <Founder />
        {/* Second Content */}
        <SecondContent />

        {/* Contact Component Below */}
        <Contact />
      </div>
    </div>
  );
};

export default AnanthTextilesComponent;
