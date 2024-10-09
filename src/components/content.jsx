import React from "react";
import ParticlesComponent from "./particles";
import MainContent from "./firstcontent";
import Contact from "./contact";
import SecondContent from "./secondcontent";
import Founder from "./founder";

const AnanthTextilesComponent = () => {
  return (
    <div className="relative min-h-screen mx-4 my-10 bg-white ">
      <ParticlesComponent />
      <div className="flex flex-col items-center justify-center py-8 space-y-6">
        <MainContent />
        <Founder />
        <SecondContent />
        <Contact />
      </div>
    </div>
  );
};

export default AnanthTextilesComponent;
