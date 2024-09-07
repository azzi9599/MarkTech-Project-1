// Slideshow.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

import home from '../assets/home.png';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';

const images = [home, home2, home3];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const slideInterval = 3000;

  const goToPrevious = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setIsSliding(false);
    }, 500); // Duration of the slide effect
  };

  const goToNext = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      const isLastSlide = currentIndex === images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setIsSliding(false);
    }, 500); // Duration of the slide effect
  };

  useEffect(() => {
    const interval = setInterval(goToNext, slideInterval);
    return () => clearInterval(interval);
  }, [currentIndex]); // Restart interval when currentIndex changes

  return (
    <div className="relative w-full h-screen mx-auto overflow-hidden">
      <Navbar />
      <div
        className={`flex transition-transform duration-500 ease-in-out ${isSliding ? 'transform' : ''}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full h-screen flex-shrink-0 object-cover"
          />
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute bottom-16 left-5 md:left-14 transform -translate-y-1/2 text-white  bg-opacity-50 py-2 px-4 md:px-8 border hover:bg-white hover:text-black focus:outline-none"
      >
        Previous
      </button>
      <button
        onClick={goToNext}
        className="absolute bottom-16 right-5 md:right-14 transform -translate-y-1/2 text-white  bg-opacity-50 py-2 px-4 md:px-8 border hover:bg-white hover:text-black focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default Slideshow;
