import React, { useState } from "react";
import img1 from "../Images/brand/1.jpg";
import img2 from "../Images/brand/2.jpg";
import img3 from "../Images/brand/3.jpg";
import img4 from "../Images/brand/4.jpg";
import img5 from "../Images/brand/5.jpg";
import img6 from "../Images/brand/6.jpg";
import img7 from "../Images/brand/7.jpg";
import img8 from "../Images/brand/8.jpg";
import img9 from "../Images/brand/9.jpg";

import {motion} from 'framer-motion'
export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative rounded-md lg:mx-[20%] mx-4 my-10 shadow-orange-500/100 border-dashed border-orange-200 border-2 shadow-md py-10">
       <div className="lg:mx-[15%] mx-[5%] mb-12 max-w-full text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Gallery
              </span>
              <motion.h2
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }} className="mb-3  text-4xl font-bold leading-[1.2] text-orange-500 sm:text-4xl md:text-[40px]">
                Our visual gallery 
              </motion.h2>

            </div>
      {/* Image Container */}
      <div className="relative h-[300px] md:h-96 overflow-hidden  mx-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        ❯
      </button>
    </div>
  );
}
