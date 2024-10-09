
import React, { useEffect, useState } from "react";
import star from "../assets/star.png";

const YearsOfExcellence = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startCount = 0;
    const endCount = 36;
    const duration = 2000; // 2 seconds duration for the animation
    const increment = (endCount / duration) * 50; // Increment for each interval

    const countInterval = setInterval(() => {
      startCount += increment;
      if (startCount >= endCount) {
        startCount = endCount;
        clearInterval(countInterval); // Stop interval when reaching 36
      }
      setCount(Math.floor(startCount)); // Update state with the new value
    }, 50); // Run the interval every 50ms

    return () => clearInterval(countInterval); // Cleanup function
  }, []);

  return (
    <div className="bg-white/70 backdrop-blur-3xl p-8 rounded-lg h-[40vh] w-[65%] shadow-xl shadow-black/10 sm:h-[45vh]">
      <p className="text-4xl font-bold text-center text-red-600">
        Over <span className="text-5xl font-extrabold">{count}</span>
      </p>
      <div className="flex items-center justify-center my-1">
        <img
          src={star}
          alt="Ananth Textiles Logo"
          className="w-16 h-16 md:w-24 md:h-24" // Adjust the size of the logo as needed
        />
      </div>
      <p className="-mt-2 text-2xl font-bold text-center text-red-600">
        Years of excellence in the saree industry.
      </p>
    </div>
  );
};

export default YearsOfExcellence;
