// src/components/Gallery.js
import React from 'react';

const Gallery = () => {
  const galleryItems = [
    { id: 1, src: 'https://via.placeholder.com/200', alt: 'Beautiful Landscape' },
    { id: 2, src: 'https://via.placeholder.com/200', alt: 'Mountain View' },
    { id: 3, src: 'https://via.placeholder.com/200', alt: 'Ocean Sunset' },
    { id: 4, src: 'https://via.placeholder.com/200', alt: 'Forest Path' },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center font-mono">
      <h1 className="text-3xl font-bold mt-10 mb-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full max-w-screen-lg">
        {galleryItems.map((item) => (
          <div key={item.id} className="bg-gray-700 p-2 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-48 object-cover rounded-md"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;