import React, { useState } from "react";

const Carousel = () => {
  const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
    "https://via.placeholder.com/600x400?text=Image+4",
    "https://via.placeholder.com/600x400?text=Image+5",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="flex justify-center items-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto object-cover"
        />
      </div>

      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full focus:outline-none"
      >
        &#8592;
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full focus:outline-none"
      >
        &#8594;
      </button>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <label key={index} className="inline-flex items-center mx-2">
            <input
              type="radio"
              name="carousel-radio"
              className="hidden"
              checked={currentIndex === index}
              onChange={() => goToImage(index)}
            />
            <span
              className={`block w-4 h-4 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
