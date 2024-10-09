import React, { useState, useEffect } from "react";
import saree1 from "../assets/sareee.png";
import saree2 from "../assets/shirt.jpg";
import saree3 from "../assets/kids.jpg";

const images = [saree1, saree2, saree3];

const SecondContent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlip(true);
      setTimeout(() => {
        setFlip(false);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl p-6 bg-transparent rounded-lg shadow-lg backdrop-blur-sm md:p-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <div
            className={`relative w-full max-w-xs h-[400px] transition-transform duration-1000 ${
              flip ? "transform rotate-y-180" : ""
            }`}
          >
            <img
              src={images[currentImageIndex]}
              alt={`Saree ${currentImageIndex + 1}`}
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-center text-gray-700 md:text-left">
              Offering a vast range of varieties tailored to meet your needs,
              from minimal to luxurious.
            </h2>
            <p className="mb-6 text-lg text-center text-gray-700 md:text-left">
              With over 36 years of expertise in the textile industry, we take
              pride in our deep knowledge of sarees, fabrics, and designs. Our
              commitment to quality control ensures superior products and
              customer satisfaction, while our fair pricing fosters trust and
              loyalty among our valued customers.
            </p>

            <div className="grid grid-cols-4 gap-1">
              <div className="px-2 py-2 text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg text-xm hover:bg-red-600">
                Mens
              </div>
              <div className="px-2 py-2 text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg text-xm hover:bg-red-600">
                Womens
              </div>
              <div className="px-2 py-2 text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg text-xm hover:bg-red-600">
                Kids
              </div>
              <div className="px-2 py-2 text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg text-xm hover:bg-red-600">
                Others
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondContent;
