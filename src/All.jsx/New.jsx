import React, { useState } from 'react';

import home from '../assets/home.png'
import home2 from '../assets/home2.png'
import home3 from '../assets/home3.png'

const images = [
  home,
  home2,
  home3
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

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
    }, 300); // Duration of the slide effect
  };

  return (
    <div className="h-screen mx-auto overflow-hidden">
      <div
        className={`flex transition-transform duration-500 ease-in-out ${
          isSliding ? 'transform' : ''
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full  flex-shrink-0 object-cover"
          />
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r"
      >
        Previous
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l"
      >
        Next
      </button>
    </div>
  );
};

export default Slideshow;
