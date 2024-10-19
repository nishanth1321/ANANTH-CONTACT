
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import saree1 from "../assets/saree1.jpg";
import saree2 from "../assets/saree2.jpg";
import saree3 from "../assets/saree3.jpg";
import saree4 from "../assets/saree4.jpg";
import saree5 from "../assets/saree5.jpg";
import saree6 from "../assets/saree6.jpg";
import saree7 from "../assets/saree7.jpg";
import styles from "../components/styles.css/container-swipe.css";

const images = [saree1, saree2, saree3 , saree4 ,saree5,saree6,saree7];

const SecondContent = () => {
  return (
    <div
      className={`${styles.container} relative w-full max-w-4xl p-6 bg-transparent rounded-lg shadow-lg backdrop-blur-sm md:p-12`}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Swiper
            modules={[Autoplay, Scrollbar]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            scrollbar={{
              hide: false,
            }}
            loop={true}
            className={`${styles.swiper} w-full max-w-xs h-[400px]`}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className={styles["swiper-slide"]}>
                <img
                  src={image}
                  alt={`Saree ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-justify text-gray-700 md:text-left">
              Offering a vast range of varieties tailored to meet your needs,
              from minimal to luxurious.
            </h2>
            <p className="mb-6 text-lg text-justify text-gray-700 md:text-left">
              With over 36 years of expertise in the textile industry, we take
              pride in our deep knowledge of sarees, fabrics, and designs. Our
              commitment to quality control ensures superior products and
              customer satisfaction, while our fair pricing fosters trust and
              loyalty among our valued customers.
            </p>

            <div className="grid grid-cols-4 gap-1">
              <div className="px-1 py-3 pt-4 text-xs text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg hover:bg-red-600">
                Silk Saree
              </div>
              <div className="px-1 py-3 pt-4 text-xs text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg hover:bg-red-600">
                Ceco Saree
              </div>
              <div className="px-1 py-3 text-xs text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg md: hover:bg-red-600 lg:pt-4 ">
                Cotton Saree
              </div>
              <div className="px-1 py-3 pt-4 text-xs text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg hover:bg-red-600">
                Tana Saree
              </div>
              <div className="px-1 py-2 pt-3 text-xs text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg hover:bg-red-600">
                Kota Saree
              </div>
              <div className="px-1 py-2 pt-3 text-xs text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg hover:bg-red-600">
                kora Saree
              </div>
              <div className="px-1 py-2 pt-3 text-xs text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg hover:bg-red-600">
                Linen Saree
              </div>
              <div className="px-1 py-2 pt-3 text-xs text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg hover:bg-red-600">
                Bed Liner
              </div>
              <div className="px-1 py-2 pt-3 text-xs text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg hover:bg-red-600">
                HandLoom
              </div>
              <div className="px-1 py-2 pt-3 text-xs text-center text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg hover:bg-red-600">
                PowerLoom
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondContent;
